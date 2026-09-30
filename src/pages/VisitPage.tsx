import React from 'react';
import { MapPin, Phone, Mail, Clock, Compass, Navigation, Car, ShieldCheck, Zap } from 'lucide-react';
import { PageRoute } from '../components/Header';

interface VisitPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const VisitPage: React.FC<VisitPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Title & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
          Marina Bay Flagship Gallery
        </span>
        <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F0EA] tracking-tight">
          Visit Our Showroom
        </h1>
        <p className="text-sm sm:text-base text-[#A7ABB5] leading-relaxed text-balance">
          Welcome to the AutoVista Motors international flagship gallery, positioned along the prestigious waterfront promenade of Marina Bay in Singapore.
        </p>
      </div>

      {/* Main Two-Column Layout: Details + Map Embed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Showroom Details (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Contact Card - Refined Luxury Layout */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#23262E] border border-[#23262E] shadow-2xl space-y-5">
            
            {/* Card Header with Status Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-[#14161B]">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-5 bg-[#C9A24B] rounded-full" />
                <h2 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA] tracking-tight">
                  Flagship Gallery Information
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open Today
              </span>
            </div>

            {/* Modular Info Blocks */}
            <div className="space-y-3.5">
              
              {/* 1. Address Block */}
              <div className="p-4 rounded-xl bg-[#14161B]/80 border border-[#23262E] hover:border-[#C9A24B]/30 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">
                  <MapPin className="w-4 h-4 shrink-0 text-[#C9A24B]" />
                  <span>Showroom Address</span>
                </div>
                <div className="pl-6 space-y-0.5 text-xs sm:text-sm">
                  <p className="font-semibold text-[#F2F0EA]">
                    Marina Bay Financial Centre (MBFC) Tower 2
                  </p>
                  <p className="text-[#A7ABB5]">
                    10 Marina Boulevard, Level 1 Promenade
                  </p>
                  <p className="text-[#A7ABB5]">
                    Marina Bay, Singapore 018983
                  </p>
                </div>
              </div>

              {/* 2. Operating Hours Block */}
              <div className="p-4 rounded-xl bg-[#14161B]/80 border border-[#23262E] hover:border-[#C9A24B]/30 transition-colors space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0 text-[#C9A24B]" />
                    <span>Operating Hours</span>
                  </div>
                  <span className="text-[10px] lowercase tracking-normal text-[#A7ABB5] bg-[#23262E] px-2 py-0.5 rounded">
                    SGT (UTC+8)
                  </span>
                </div>

                <div className="pl-6 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-[#23262E]/70">
                    <span className="text-[#A7ABB5]">Monday – Friday</span>
                    <span className="font-semibold font-mono text-[#F2F0EA]">09:00 – 20:00</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#23262E]/70">
                    <span className="text-[#A7ABB5]">Saturday</span>
                    <span className="font-semibold font-mono text-[#F2F0EA]">09:00 – 19:00</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-[#C9A24B]">
                    <span className="font-medium">Sunday &amp; Public Holidays</span>
                    <span className="font-semibold font-mono">10:00 – 18:00</span>
                  </div>
                </div>
              </div>

              {/* 3. Telephone Contacts Block */}
              <div className="p-4 rounded-xl bg-[#14161B]/80 border border-[#23262E] hover:border-[#C9A24B]/30 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">
                  <Phone className="w-4 h-4 shrink-0 text-[#C9A24B]" />
                  <span>Direct Telephone Lines</span>
                </div>
                <div className="pl-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <a
                    href="tel:+6568186800"
                    className="p-2 rounded-lg bg-[#23262E]/80 hover:bg-[#23262E] border border-white/5 hover:border-[#C9A24B]/30 transition-colors flex flex-col"
                  >
                    <span className="text-[10px] text-[#A7ABB5] uppercase">Singapore Direct</span>
                    <span className="font-semibold font-mono text-[#F2F0EA] mt-0.5">+65 6818 6800</span>
                  </a>
                  <a
                    href="tel:+622157901200"
                    className="p-2 rounded-lg bg-[#23262E]/80 hover:bg-[#23262E] border border-white/5 hover:border-[#C9A24B]/30 transition-colors flex flex-col"
                  >
                    <span className="text-[10px] text-[#A7ABB5] uppercase">Regional Hotline</span>
                    <span className="font-semibold font-mono text-[#F2F0EA] mt-0.5">+62 21 5790 1200</span>
                  </a>
                </div>
              </div>

              {/* 4. VIP Concierge Desk Block */}
              <div className="p-4 rounded-xl bg-[#14161B]/80 border border-[#23262E] hover:border-[#C9A24B]/30 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">
                  <Mail className="w-4 h-4 shrink-0 text-[#C9A24B]" />
                  <span>VIP Concierge Desk</span>
                </div>
                <div className="pl-6 flex items-center justify-between text-xs sm:text-sm">
                  <a
                    href="mailto:concierge@autovistamotors.com"
                    className="text-[#F2F0EA] hover:text-[#C9A24B] font-medium transition-colors"
                  >
                    concierge@autovistamotors.com
                  </a>
                  <span className="text-[10px] text-[#A7ABB5] bg-[#23262E] px-2 py-0.5 rounded">
                    24h Response
                  </span>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('test-drive')}
                className="w-full py-3.5 rounded-xl bg-[#C9A24B] text-[#14161B] font-bold text-sm hover:bg-[#D9B45D] active:scale-[0.99] transition-all shadow-lg shadow-[#C9A24B]/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Car className="w-4 h-4 text-[#14161B]" />
                <span>Reserve VIP Showroom Appointment</span>
              </button>
            </div>
          </div>

          {/* Directions Note - Segmented Structured Cards */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#23262E] border border-[#23262E] shadow-2xl space-y-4">
            <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA] flex items-center gap-2">
              <Navigation className="w-5 h-5 text-[#C9A24B]" />
              Directions &amp; Access Roads
            </h3>

            <div className="space-y-3">
              
              <div className="p-3.5 rounded-xl bg-[#14161B]/70 border border-[#23262E] space-y-1">
                <p className="text-xs font-bold text-[#C9A24B] uppercase tracking-wider">
                  From Changi International Airport (18 Mins)
                </p>
                <p className="text-xs text-[#A7ABB5] leading-relaxed">
                  Drive southwest via East Coast Parkway (ECP) toward Marina Coastal Expressway (MCE). Take Exit 2 for Central Boulevard and turn left onto Marina Boulevard.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#14161B]/70 border border-[#23262E] space-y-1">
                <p className="text-xs font-bold text-[#C9A24B] uppercase tracking-wider">
                  From Orchard Road / Central District (8 Mins)
                </p>
                <p className="text-xs text-[#A7ABB5] leading-relaxed">
                  Follow Bras Basah Road through Nicoll Highway and Shenton Way directly into Marina Boulevard.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#14161B]/70 border border-[#23262E] space-y-1">
                <p className="text-xs font-bold text-[#C9A24B] uppercase tracking-wider">
                  Prominent Landmarks &amp; Valet
                </p>
                <p className="text-xs text-[#A7ABB5] leading-relaxed">
                  Directly opposite The Promontory @ Marina Bay and Marina Bay Sands, overlooking the Formula 1 street circuit. Dedicated private valet drop-off at Tower 2 lobby.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Embedded Map (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Map Container */}
          <div className="rounded-2xl bg-[#23262E] border border-[#23262E] overflow-hidden shadow-2xl flex flex-col">
            
            {/* Top Bar for Map */}
            <div className="px-5 py-3.5 bg-[#14161B] border-b border-[#23262E] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-[#F2F0EA]">
                  Marina Bay Flagship Geolocation
                </span>
              </div>
              <span className="text-[11px] text-[#C9A24B] font-mono">
                1.2789° N, 103.8536° E
              </span>
            </div>

            {/* Embedded Interactive Map iframe centered on Marina Bay Financial Centre, Singapore */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#14161B]">
              <iframe
                title="AutoVista Motors Showroom at Marina Bay Financial Centre Singapore"
                src="https://maps.google.com/maps?q=10+Marina+Boulevard,+Marina+Bay+Financial+Centre,+Singapore&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-[1.05]"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Bottom Map Info Strip */}
            <div className="p-4 bg-[#14161B]/80 text-xs text-[#A7ABB5] flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#23262E]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A24B]" />
                <span>10 Marina Boulevard, Marina Bay, Singapore</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Marina+Bay+Financial+Centre+Singapore"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#C9A24B] hover:underline font-semibold"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

          {/* Showroom Amenities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#23262E] border border-[#23262E] text-center space-y-1.5 hover:border-[#C9A24B]/30 transition-colors">
              <Zap className="w-5 h-5 text-[#C9A24B] mx-auto" />
              <p className="font-semibold text-xs text-[#F2F0EA]">DC Fast Chargers</p>
              <p className="text-[10px] text-[#A7ABB5]">Dual 120 kW Stalls</p>
            </div>
            <div className="p-4 rounded-xl bg-[#23262E] border border-[#23262E] text-center space-y-1.5 hover:border-[#C9A24B]/30 transition-colors">
              <ShieldCheck className="w-5 h-5 text-[#C9A24B] mx-auto" />
              <p className="font-semibold text-xs text-[#F2F0EA]">VIP Consultation</p>
              <p className="text-[10px] text-[#A7ABB5]">Private Lounges</p>
            </div>
            <div className="p-4 rounded-xl bg-[#23262E] border border-[#23262E] text-center space-y-1.5 hover:border-[#C9A24B]/30 transition-colors">
              <Car className="w-5 h-5 text-[#C9A24B] mx-auto" />
              <p className="font-semibold text-xs text-[#F2F0EA]">Dedicated Drive</p>
              <p className="text-[10px] text-[#A7ABB5]">Waterfront Circuit</p>
            </div>
            <div className="p-4 rounded-xl bg-[#23262E] border border-[#23262E] text-center space-y-1.5 hover:border-[#C9A24B]/30 transition-colors">
              <Compass className="w-5 h-5 text-[#C9A24B] mx-auto" />
              <p className="font-semibold text-xs text-[#F2F0EA]">Valet Parking</p>
              <p className="text-[10px] text-[#A7ABB5]">Complimentary</p>
            </div>
          </div>

          {/* VIP Reception & Waterfront Drive Highlight Banner */}
          <div className="p-6 rounded-2xl bg-[#23262E] border border-[#23262E] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#C9A24B] uppercase tracking-wider">
                Private Showroom Experience
              </span>
              <span className="text-xs text-[#A7ABB5]">Tower 2 Lobby Level</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A7ABB5] leading-relaxed">
              Appointments include complimentary valet parking at Marina Bay Financial Centre Tower 2, private barista service in our executive lounge, and an uninterrupted 45-minute demonstration drive along the Marina Bay street course.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
