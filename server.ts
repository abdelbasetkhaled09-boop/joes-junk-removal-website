import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // API Route: Quote Submission Simulation / Storage
  app.post("/api/quote", (req, res) => {
    const { name, phone, email, address, serviceType, description } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and Phone Number are required." });
    }

    const quoteId = "JOE-" + Math.floor(100000 + Math.random() * 900000);
    console.log(`[Quote Received] ID: ${quoteId}, Name: ${name}, Phone: ${phone}, Address: ${address}`);

    return res.json({
      success: true,
      quoteId,
      message: "Thank you! Joe's team has received your quote request and will call you shortly at " + phone + " to confirm pricing and schedule your pickup.",
      timestamp: new Date().toISOString()
    });
  });

  // API Route: AI Junk Photo Analysis (using Gemini API)
  app.post("/api/ai-analyze-junk", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(503).json({
          error: "Gemini API Key is not configured. Please enter your GEMINI_API_KEY in secrets.",
          fallbackEstimate: {
            itemsDetected: ["Sofa / Couch", "Wooden Chairs", "Cardboard Storage Boxes"],
            estimatedVolume: "1/4 to 1/2 Truck Load",
            estimatedPriceRange: "$125 - $225",
            advice: "Based on standard residential junk volume. Call (505) 527-6573 for instant exact quote!"
          }
        });
      }

      const { imageBase64, description } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      let promptText = `You are an expert junk removal estimator for Joe's Junk Removal LLC in Albuquerque, NM.
Analyze the following description or image of junk items that a customer wants removed.
Provide a friendly, accurate response in JSON format with:
1. "itemsDetected": array of string item names identified.
2. "estimatedVolume": string (e.g. "Single Item", "1/4 Truck Load", "1/2 Truck Load", "3/4 Truck Load", "Full Truck Load").
3. "estimatedPriceRange": string estimated dollar range (e.g. "$95 - $150", "$195 - $275", etc.).
4. "advice": a short 1-2 sentence tip or note on how Joe's team will handle it (e.g. donation, recycling, disassembly).

User Description: ${description || "Junk removal estimate requested."}`;

      let contents: any[] = [];
      if (imageBase64) {
        // Strip data URL header if present
        const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
        contents = [
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: cleanBase64
            }
          },
          { text: promptText }
        ];
      } else {
        contents = [{ text: promptText }];
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
        config: {
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text || "";
      let parsedJSON;
      try {
        parsedJSON = JSON.parse(responseText);
      } catch (err) {
        parsedJSON = {
          itemsDetected: ["Household Items & Miscellaneous Junk"],
          estimatedVolume: "1/4 Truck Load",
          estimatedPriceRange: "$125 - $195",
          advice: responseText || "Call Joe's at (505) 527-6573 for exact upfront pricing."
        };
      }

      return res.json({ success: true, analysis: parsedJSON });
    } catch (error: any) {
      console.error("AI Junk Analysis error:", error);
      return res.status(500).json({
        error: "Failed to analyze junk with AI.",
        fallbackEstimate: {
          itemsDetected: ["Furniture / Miscellaneous Items"],
          estimatedVolume: "1/4 to 1/2 Truck Load",
          estimatedPriceRange: "$150 - $250",
          advice: "Please call (505) 527-6573 directly for immediate phone estimate."
        }
      });
    }
  });

  // Vite middleware for development vs static in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
