import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { MapPin, Phone, MessageSquare, Navigation, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ServiceLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  zip: string;
  description: string;
  tag: string;
}

const SERVICE_LOCATIONS: ServiceLocation[] = [
  {
    id: 'dispatch-hq',
    name: "Joe's Junk Removal Dispatch HQ",
    lat: 35.0844,
    lng: -106.6504,
    zip: '87102',
    description: 'Central Dispatch Hub & Recycling Facility in Downtown Albuquerque.',
    tag: 'Main Hub',
  },
  {
    id: 'ne-heights',
    name: 'NE Heights & Foothills',
    lat: 35.1200,
    lng: -106.5300,
    zip: '87111 / 87122',
    description: 'Daily hauling crews stationed near Tramway & Eubank.',
    tag: 'Active Crew',
  },
  {
    id: 'rio-rancho',
    name: 'Rio Rancho & Northern Metro',
    lat: 35.2328,
    lng: -106.6630,
    zip: '87124 / 87144',
    description: 'Full residential and commercial cleanouts across Sandoval County.',
    tag: 'Active Crew',
  },
  {
    id: 'westside',
    name: 'ABQ Westside & Taylor Ranch',
    lat: 35.1500,
    lng: -106.7200,
    zip: '87120 / 87114',
    description: 'Coors corridor trucks servicing Westside homes & businesses.',
    tag: 'Active Crew',
  },
  {
    id: 'corrales',
    name: 'Corrales & North Valley',
    lat: 35.2369,
    lng: -106.6072,
    zip: '87048 / 87107',
    description: 'Specialized property clearouts & heavy yard debris removal.',
    tag: 'Active Crew',
  },
  {
    id: 'los-lunas',
    name: 'Los Lunas & Valencia County',
    lat: 34.8062,
    lng: -106.7334,
    zip: '87031 / 87002',
    description: 'Serving southern Albuquerque metro & surrounding acreage.',
    tag: 'Active Crew',
  },
];

export const GoogleMapSection: React.FC = () => {
  const [selectedLoc, setSelectedLoc] = useState<ServiceLocation>(SERVICE_LOCATIONS[0]);
  const [activeInfoWindow, setActiveInfoWindow] = useState<string | null>('dispatch-hq');

  const apiKey =
    process.env.GOOGLE_MAPS_PLATFORM_KEY ||
    (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
    '';

  const hasApiKey = Boolean(apiKey) && apiKey !== 'YOUR_API_KEY';

  const smsUrl = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent("Hi Joe! Here are photos of my junk in Albuquerque for a quote:")}`;

  return (
    <section className="py-12 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-black uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-red-700" />
            Albuquerque Dispatch & Service Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Where We're Located & Operating
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Based in Central Albuquerque, our trucks cover the entire metro area daily with fast same-day dispatch.
          </p>
        </div>

        {/* Map + Interactive Location Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* MAP CANVAS CONTAINER */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-lg bg-slate-900 min-h-[400px] sm:min-h-[480px] flex flex-col relative">
            
            {hasApiKey ? (
              <APIProvider apiKey={apiKey} version="weekly">
                <Map
                  defaultCenter={{ lat: 35.1200, lng: -106.6200 }}
                  defaultZoom={10}
                  mapId="JOES_JUNK_REMOVAL_MAP"
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                  style={{ width: '100%', height: '100%', minHeight: '440px' }}
                >
                  {SERVICE_LOCATIONS.map((loc) => (
                    <React.Fragment key={loc.id}>
                      <AdvancedMarker
                        position={{ lat: loc.lat, lng: loc.lng }}
                        onClick={() => {
                          setSelectedLoc(loc);
                          setActiveInfoWindow(loc.id);
                        }}
                      >
                        <Pin
                          background={loc.id === 'dispatch-hq' ? '#dc2626' : '#059669'}
                          glyphColor="#ffffff"
                          borderColor="#ffffff"
                        />
                      </AdvancedMarker>

                      {activeInfoWindow === loc.id && (
                        <InfoWindow
                          position={{ lat: loc.lat, lng: loc.lng }}
                          onCloseClick={() => setActiveInfoWindow(null)}
                        >
                          <div className="p-2 space-y-1.5 text-slate-900 max-w-xs">
                            <div className="font-extrabold text-sm text-red-700">{loc.name}</div>
                            <p className="text-xs font-medium text-slate-600">{loc.description}</p>
                            <div className="text-[11px] font-bold text-emerald-800">Zip: {loc.zip}</div>
                            <a
                              href={`tel:${COMPANY_INFO.phoneRaw}`}
                              className="block bg-red-700 text-white font-bold text-center py-1 px-2 rounded text-xs mt-2 uppercase"
                            >
                              Call Dispatch
                            </a>
                          </div>
                        </InfoWindow>
                      )}
                    </React.Fragment>
                  ))}
                </Map>
              </APIProvider>
            ) : (
              /* Embed Google Map centered on Albuquerque, NM */
              <div className="w-full h-full min-h-[440px] relative">
                <iframe
                  title="Joe's Junk Removal Albuquerque Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208940.38072223847!2d-106.77258359273574!3d35.08443372222146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220addd381333b%3A0x23d1b71d6f414e05!2sAlbuquerque%2C%20NM!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '440px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[440px]"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-2xl border border-slate-700 shadow-xl max-w-xs text-xs space-y-1">
                  <div className="font-black text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Joe's ABQ Dispatch Center</span>
                  </div>
                  <p className="font-medium text-slate-300">
                    Serving Albuquerque, Rio Rancho, Los Lunas, Corrales & Metro NM
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Bar Info on Map */}
            <div className="bg-slate-900 text-white p-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-extrabold text-slate-200">Selected Zone:</span>
                <span className="font-black text-white">{selectedLoc.name} ({selectedLoc.zip})</span>
              </div>
              <a
                href={smsUrl}
                className="bg-emerald-800 hover:bg-emerald-700 text-white font-extrabold px-3.5 py-1.5 rounded-lg uppercase tracking-wider flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
                <span>Text Photos for {selectedLoc.name}</span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDEBAR: CLICKABLE LOCATIONS LIST */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-5 space-y-3 flex flex-col justify-between">
            <div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider px-1 mb-2">
                Select Service Zone to Highlight
              </div>
              
              <div className="space-y-2">
                {SERVICE_LOCATIONS.map((loc) => {
                  const isSelected = selectedLoc.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => {
                        setSelectedLoc(loc);
                        setActiveInfoWindow(loc.id);
                      }}
                      className={`w-full text-left p-3 rounded-2xl transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-red-700 text-white border-red-800 shadow-md'
                          : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-extrabold text-sm flex items-center gap-2">
                          <MapPin className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-red-700'}`} />
                          <span>{loc.name}</span>
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-red-900 text-red-100' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {loc.tag}
                        </span>
                      </div>
                      <p className={`text-xs font-medium mt-1 ${isSelected ? 'text-red-100' : 'text-slate-600'}`}>
                        {loc.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Call Card */}
            <div className="pt-3 border-t border-slate-200 bg-white rounded-2xl p-4 border border-slate-200 space-y-2 text-center">
              <div className="text-xs font-bold text-slate-600">
                Need Junk Removed Today in Albuquerque?
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow"
              >
                <Phone className="w-4 h-4 fill-current text-emerald-400" />
                <span>Call Dispatch: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
