import { ServiceItem, ReviewItem, FAQItem } from '../types';
import vintagePosterImg from '../assets/images/joes_vintage_poster_1785784585634.jpg';
import yardBrushImg from '../assets/images/yard_brush_before_after_1785784597080.jpg';
import lotCleanoutImg from '../assets/images/lot_cleanout_before_after_1785784611020.jpg';
import bobcatDemoImg from '../assets/images/bobcat_demolition_1785784572132.jpg';
import garageCleanoutImg from '../assets/images/garage_cleanout_1785782758041.jpg';
import furnitureHaulingImg from '../assets/images/furniture_hauling_1785782747287.jpg';

export const COMPANY_INFO = {
  name: "Joe's Junk Removal LLC",
  shortName: "Joe's Junk Removal",
  slogan: "Big or Small — We Haul It All, Burque!",
  subtitle: "Albuquerque's Heavy Hitter for Junk & Demo",
  tagline: "Cheap for the quick jobs. Ready to hustle for the big ones.",
  phone: "(505) 527-6573",
  phoneRaw: "5055276573",
  email: "info@joesjunkremovalabq.com",
  address: "Albuquerque, NM 87109",
  hours: "Mon - Sat: 7:00 AM - 7:00 PM | Sun: 8:00 AM - 5:00 PM",
  sameDayCutoff: "Book before 2:00 PM for Same-Day Service",
  guarantee: "100% Satisfaction Guaranteed & Upfront Pricing",
  rating: 4.9,
  reviewCount: 384,
  license: "Fully Insured & Bonded | Licensed NM LLC",
  motto: "Don't call a franchise. Call a neighbor.",
  flyerImage: vintagePosterImg
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-junk',
    title: 'Residential Junk Removal',
    category: 'residential',
    iconName: 'Home',
    shortDescription: 'Full-service home decluttering, garage cleanouts, attic clearouts, and basement junk hauling.',
    fullDescription: 'We make clearing clutter from your house effortless. From single heavy items to entire household cleanouts, our professional crew handles all the heavy lifting, loading, hauling, and eco-friendly disposal.',
    typicalItems: ['Old Furniture', 'Mattresses', 'Boxes & Knick-Knacks', 'Clothing', 'Carpet & Rugs', 'Household Debris'],
    startingPrice: '$85'
  },
  {
    id: 'commercial-junk',
    title: 'Commercial Junk Removal',
    category: 'commercial',
    iconName: 'Building2',
    shortDescription: 'Office furniture removal, retail cleanouts, warehouse debris, property management turnovers.',
    fullDescription: 'Reliable junk removal solutions for local businesses, office spaces, property managers, and retail stores in Albuquerque. We work around your business hours with minimal disruption.',
    typicalItems: ['Office Desks & Cubicles', 'Electronics & E-Waste', 'Filing Cabinets', 'Retail Fixtures', 'Pallets & Packaging'],
    startingPrice: '$120'
  },
  {
    id: 'furniture-removal',
    title: 'Furniture Removal',
    category: 'residential',
    iconName: 'Sofa',
    shortDescription: 'Sofas, recliners, dining sets, mattresses, sectionals, dressers, and armoires hauled away.',
    fullDescription: 'Don\'t break your back hauling heavy couches or mattresses. Joe\'s team safely removes heavy, bulky furniture through tricky hallways and tight doorways without scratching your walls.',
    typicalItems: ['Sectionals & Sofas', 'Love Seats', 'Mattresses & Box Springs', 'Dining Tables & Chairs', 'Dressers & Cabinets'],
    startingPrice: '$75'
  },
  {
    id: 'appliance-removal',
    title: 'Appliance Removal',
    category: 'residential',
    iconName: 'Refrigerator',
    shortDescription: 'Refrigerators, washers, dryers, stoves, dishwashers, and water heaters recycled properly.',
    fullDescription: 'Safe removal and proper recycling of old household appliances. We handle coolant evacuation compliant with environmental standards and deliver working units to local donation centers.',
    typicalItems: ['Refrigerators & Freezers', 'Washers & Dryers', 'Stoves & Ovens', 'Dishwashers', 'Water Heaters'],
    startingPrice: '$80'
  },
  {
    id: 'yard-waste',
    title: 'Yard Waste Removal',
    category: 'residential',
    iconName: 'Trees',
    shortDescription: 'Branch trimmings, palm fronds, grass clippings, soil, gravel, stumps, and landscape clutter.',
    fullDescription: 'Clean up after landscaping projects or storm debris. We load up organic waste, tree branches, dirt, sod, fencing materials, and overgrown vegetation quickly.',
    typicalItems: ['Tree Branches & Stumps', 'Grass & Leaf Bags', 'Fencing & Wood Posts', 'Lawn Equipment', 'Soil & Gravel Debris'],
    startingPrice: '$90'
  },
  {
    id: 'construction-debris',
    title: 'Construction Debris Cleanup',
    category: 'commercial',
    iconName: 'HardHat',
    shortDescription: 'Drywall, lumber, tile, concrete, roofing materials, remodels, and contractor job-site scrap.',
    fullDescription: 'Keep your job site clean and compliant. We clear contractor debris, drywall scrap, framing lumber, tiles, bath tear-outs, and masonry waste fast.',
    typicalItems: ['Drywall & Sheetrock', 'Lumber & Plywood', 'Tile & Flooring Scrap', 'Roofing Shingles', 'Concrete & Masonry'],
    startingPrice: '$125'
  },
  {
    id: 'garage-cleanouts',
    title: 'Garage Cleanouts',
    category: 'residential',
    iconName: 'Warehouse',
    shortDescription: 'Reclaim your garage parking space. We sweep and remove years of accumulated storage clutter.',
    fullDescription: 'Turn your chaotic garage back into a functional space or car parking spot. We organize, lift, and haul away everything you no longer need, sweeping clean when done.',
    typicalItems: ['Old Tools & Equipment', 'Sports Gear & Bikes', 'Storage Boxes', 'Unused Lawn Care Tools', 'Scrap Metal & Wood'],
    startingPrice: '$110'
  },
  {
    id: 'estate-cleanouts',
    title: 'Estate Cleanouts',
    category: 'specialty',
    iconName: 'KeyRound',
    shortDescription: 'Compassionate, thorough property cleanouts for estates, foreclosures, and moving transitions.',
    fullDescription: 'Respectful and efficient full-property cleanouts for families, realtors, and executors. We sort usable items for donation, salvage valuables, and dispose of remaining junk.',
    typicalItems: ['Entire Home Furnishings', 'Household Effects', 'Personal Items Sorting', 'Attic & Shed Contents', 'Garage Overflow'],
    startingPrice: '$195'
  },
  {
    id: 'hot-tub-removal',
    title: 'Hot Tub Removal',
    category: 'specialty',
    iconName: 'Flame',
    shortDescription: 'Safe electrical disconnects, dismantling, cutting, and hauling away old spa units and decking.',
    fullDescription: 'Removing an old spa or hot tub requires skill and muscle. We safely disconnect electrical connections, disassemble or saw down the tub, and haul away all heavy pieces.',
    typicalItems: ['Above-Ground Hot Tubs', 'Spas & Jacuzzis', 'Surrounding Decking', 'Covers & Accessories'],
    startingPrice: '$250'
  },
  {
    id: 'shed-demolition',
    title: 'Interior & Exterior Demolition',
    category: 'specialty',
    iconName: 'Hammer',
    shortDescription: 'Complete demolition and removal of old sheds, decks, interior drywall, walls, and outbuildings.',
    fullDescription: 'Tear down decaying or unwanted structures safely using our Bobcat equipment and heavy tools. Our crew breaks down wooden framing, drywall, metal siding, roof panels, and concrete bases.',
    typicalItems: ['Wooden Sheds & Outbuildings', 'Interior Walls & Drywall Tear-outs', 'Decks & Pergolas', 'Playhouses & Gazebos'],
    startingPrice: '$295'
  },
  {
    id: 'root-stump-extraction',
    title: 'Root & Stump Extraction',
    category: 'specialty',
    iconName: 'Trees',
    shortDescription: 'Complete removal and extraction of deep tree roots, overgrown bushes, and stubborn tree stumps.',
    fullDescription: 'We extract stubborn tree stumps and deep root systems that ruin lawns or concrete pathways. Equipped with heavy machinery to pull out overgrown vegetation completely.',
    typicalItems: ['Tree Stumps & Root Balls', 'Overgrown Bushes & Shrubs', 'Desert Landscape Roots', 'Palm Fronds & Trunks'],
    startingPrice: '$110'
  },
  {
    id: 'concrete-breaking',
    title: 'Concrete Breaking & Removal',
    category: 'commercial',
    iconName: 'HardHat',
    shortDescription: 'Heavy jackhammering, breaking, and Bobcat loading of old concrete walkways, patios, and slabs.',
    fullDescription: 'Busting up old cracked concrete driveways, sidewalk slabs, and patio foundations. We haul away tons of heavy concrete and masonry waste effortlessly.',
    typicalItems: ['Concrete Slabs & Walkways', 'Patio Pavers', 'Retaining Wall Blocks', 'Asphalt & Masonry Scrap'],
    startingPrice: '$150'
  }
];

export const SERVICE_AREAS = [
  { name: 'Albuquerque', zipCodes: ['87102', '87104', '87106', '87107', '87108', '87109', '87110', '87111', '87112', '87113', '87114', '87120', '87121', '87122', '87123'], highlight: 'Core Service Hub (Same-Day Available)' },
  { name: 'Rio Rancho', zipCodes: ['87124', '87144'], highlight: 'Fast Daily Service Crews' },
  { name: 'Los Lunas', zipCodes: ['87031'], highlight: 'South Metro Coverage' },
  { name: 'Bernalillo', zipCodes: ['87004'], highlight: 'North Metro Coverage' },
  { name: 'South Valley', zipCodes: ['87105'], highlight: 'Full Residential Hauling' },
  { name: 'Corrales', zipCodes: ['87048'], highlight: 'Property & Estate Cleanouts' },
  { name: 'Tijeras & East Mountain', zipCodes: ['87059', '87047'], highlight: 'Mountain Community Hauling' },
  { name: 'Peralta & Bosque Farms', zipCodes: ['87042', '87068'], highlight: 'Prompt Service' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Locally Owned & Operated',
    description: 'We live and work right here in Albuquerque. Unlike big national franchises, we care about our neighbors and local community.',
    iconName: 'MapPin'
  },
  {
    title: 'Same-Day Service Available',
    description: 'Got junk that needs to disappear right now? Call before 2:00 PM for prompt same-day haul away across ABQ and Rio Rancho.',
    iconName: 'Zap'
  },
  {
    title: 'Upfront & Fair Pricing',
    description: 'No hidden fees or surprise surcharges. You get a clear, guaranteed quote before we lift a single item.',
    iconName: 'DollarSign'
  },
  {
    title: 'Friendly, Professional Team',
    description: 'Uniformed, background-checked, and polite crew members who respect your home and property from start to finish.',
    iconName: 'Users'
  },
  {
    title: 'Fully Insured & Licensed',
    description: 'Complete peace of mind with full liability and workers\' comp coverage while we are on your property.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Fast Response Times',
    description: 'We answer calls immediately or return quotes within 15 minutes during business hours.',
    iconName: 'Clock'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Marcus Vance',
    location: 'Albuquerque (NE Heights)',
    rating: 5,
    date: '2 days ago',
    service: 'Garage Cleanout & Old Sofa Hauling',
    comment: 'Joe and his team arrived right on schedule! They cleared out 10 years of accumulated garage clutter in under an hour and swept the floor clean. Pricing was super fair and upfront. Highly recommend Joe’s Junk Removal to anyone in ABQ!',
    verified: true
  },
  {
    id: 'r2',
    author: 'Elena Sandoval',
    location: 'Rio Rancho',
    rating: 5,
    date: '1 week ago',
    service: 'Hot Tub Removal',
    comment: 'We had an old broken hot tub taking up space on our back patio for years. Joe’s crew disconnected it, cut it into manageable pieces, and hauled every bit away without leaving a scratch. Fantastic service and super polite guys!',
    verified: true
  },
  {
    id: 'r3',
    author: 'Robert Garcia',
    location: 'Los Lunas',
    rating: 5,
    date: '2 weeks ago',
    service: 'Estate Cleanout',
    comment: 'Handled my late uncle’s home cleanout with so much respect and efficiency. They even set aside family photos and items they thought might be sentimental. Fair pricing, punctual, and genuine good people.',
    verified: true
  },
  {
    id: 'r4',
    author: 'Jennifer & Todd Miller',
    location: 'Corrales',
    rating: 5,
    date: '3 weeks ago',
    service: 'Shed Demolition & Yard Waste',
    comment: 'Called in the morning for a quote on an old rotted wooden shed and yard debris. They gave us a solid price over the phone and came out the same afternoon! The lawn looks brand new. Best junk haulers in NM.',
    verified: true
  },
  {
    id: 'r5',
    author: 'David Trujillo',
    location: 'South Valley',
    rating: 5,
    date: '1 month ago',
    service: 'Appliance & Mattress Removal',
    comment: 'Super fast response. They took an old refrigerator, washer, dryer, and two king mattresses out of my house in 30 minutes. Unbeatable local customer service!',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What items do you remove?',
    answer: 'We remove almost everything! Furniture, appliances, mattresses, electronics, yard debris, construction waste, hot tubs, sheds, carpeting, boxes, and general clutter. The only things we CANNOT take are hazardous chemicals, asbestos, gasoline, and toxic liquids due to local NM environmental safety regulations.',
    category: 'General'
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes! We offer same-day and next-day junk removal services across Albuquerque, Rio Rancho, and nearby areas. Call us at (505) 527-6573 before 2:00 PM for same-day dispatch.',
    category: 'Scheduling'
  },
  {
    question: 'How much does junk removal cost?',
    answer: 'Our pricing is based on how much space your items take up in our large haul trucks, starting with single item pickups up to full truck loads. We provide free, no-obligation upfront estimates with zero hidden fees before we start.',
    category: 'Pricing'
  },
  {
    question: 'Do you clean up afterward?',
    answer: 'Absolutely! We don\'t just haul your items away; we thoroughly sweep and tidy the area (garage floor, driveway, lawn, or room) so your property is left looking clean and refreshed.',
    category: 'Service'
  },
  {
    question: 'Do you remove heavy items?',
    answer: 'Yes! Our strong, trained crew is equipped with dollies, straps, and protective gear to safely handle heavy sectionals, cast iron tubs, gun safes, large appliances, hot tubs, and heavy demolition scrap.',
    category: 'Service'
  },
  {
    question: 'What do you do with items that are still usable?',
    answer: 'We are committed to eco-friendly disposal! We donate gently used furniture, appliances, and household goods to local Albuquerque charities and non-profits whenever possible, and recycle scrap metal and electronics.',
    category: 'Eco'
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: 'ba1',
    title: 'Garage Declutter in NE Heights',
    category: 'Garage Cleanout',
    beforeDesc: 'Packed full of old furniture, broken boxes, and discarded yard equipment blocking car parking.',
    afterDesc: 'Completely cleared and swept clean, turning the garage back into a clean 2-car parking bay.',
    imageBefore: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    imageAfter: garageCleanoutImg
  },
  {
    id: 'ba_bush',
    title: 'Overgrown Shrub & Front Yard Cleanout',
    category: 'Tree & Brush Removal',
    beforeDesc: 'Massive overgrown bush blocking the Southwestern stucco archway entrance and chainlink fence.',
    afterDesc: 'Bush extracted down to roots, ground raked clean, blower swept, opening up the beautiful home facade.',
    imageBefore: 'https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&q=80&w=800',
    imageAfter: yardBrushImg
  },
  {
    id: 'ba_furniture',
    title: 'Furniture & Appliance Haul Away',
    category: 'Furniture Hauling',
    beforeDesc: 'Heavy pile of unwanted mattresses, sectionals, and appliances cluttering driveway.',
    afterDesc: 'Loaded onto Joe’s truck within 45 minutes, driveway fully cleared and swept.',
    imageBefore: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    imageAfter: furnitureHaulingImg
  },
  {
    id: 'ba_lot',
    title: 'Heavy Lot & Structure Demolition Site',
    category: 'Interior/Exterior Demolition',
    beforeDesc: 'Sprawling pile of old wood framing, tin roofing, concrete slabs, discarded tires, and debris.',
    afterDesc: 'Entire land cleared, leveled desert sand with heavy machinery tracks, ready for new building.',
    imageBefore: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    imageAfter: lotCleanoutImg
  },
  {
    id: 'ba_bobcat',
    title: 'Bobcat Heavy Machinery Structure Tear-down',
    category: 'Heavy Demolition',
    beforeDesc: 'Decaying outdoor wooden shed and framing requiring heavy equipment destruction and removal.',
    afterDesc: 'Bobcat track loader crushed, loaded, and hauled away the entire structure in 2 hours.',
    imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    imageAfter: bobcatDemoImg
  }
];
