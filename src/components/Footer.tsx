import React from 'react';
import { PageRoute } from './Header';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Award, ExternalLink } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14161B] border-t border-[#23262E] text-[#A7ABB5] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#23262E]">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-[#23262E] border border-[#C9A24B]/40 p-1 flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="AutoVista Motors Insignia"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA] tracking-tight">
                  AUTOVISTA MOTORS
                </span>
                <span className="text-[10px] tracking-widest text-[#C9A24B] uppercase font-medium -mt-1">
                  Premier Automotive Gallery
                </span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-[#A7ABB5]">
              An international multi-brand automotive gallery showcasing the finest Japanese executive hybrids, performance sedans, rugged SUVs, and next-generation electric mobility.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C9A24B]">
              <Award className="w-4 h-4" />
              <span>Tailored Consultations & Demonstration Drives</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-['Outfit',sans-serif] text-sm font-semibold uppercase tracking-wider text-[#F2F0EA]">
              Explore Showroom
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#C9A24B] transition-colors focus:outline-none"
                >
                  Showroom Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('vehicles')}
                  className="hover:text-[#C9A24B] transition-colors focus:outline-none"
                >
                  Complete Vehicle Lineup
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#C9A24B] transition-colors focus:outline-none"
                >
                  About AutoVista Motors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('visit')}
                  className="hover:text-[#C9A24B] transition-colors focus:outline-none"
                >
                  Visit Showroom & Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('test-drive')}
                  className="hover:text-[#C9A24B] transition-colors focus:outline-none"
                >
                  Schedule a Test Drive
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="hover:text-[#C9A24B] transition-colors focus:outline-none"
                >
                  Special Offers & Financing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-[#C9A24B] transition-colors focus:outline-none"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Showroom Address & Hours */}
          <div className="space-y-4">
            <h3 className="font-['Outfit',sans-serif] text-sm font-semibold uppercase tracking-wider text-[#F2F0EA]">
              Showroom Location
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-1" />
                <span className="leading-snug text-xs sm:text-sm text-[#F2F0EA]">
                  10 Marina Boulevard, MBFC Tower 2, Marina Bay, Singapore 018983
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#A7ABB5]">
                <Phone className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span className="font-mono text-[#F2F0EA]">+65 6818 6800 / +62 21 5790 1200</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#A7ABB5]">
                <Mail className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span className="text-[#F2F0EA]">concierge@autovistamotors.com</span>
              </div>

              {/* Tidied Operating Hours Schedule Card */}
              <div className="p-3 rounded-xl bg-[#23262E]/70 border border-[#23262E] space-y-2 mt-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#C9A24B]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C9A24B]" />
                    <span>Operating Hours</span>
                  </div>
                  <span className="text-[10px] text-[#A7ABB5] bg-[#14161B] px-1.5 py-0.5 rounded">
                    SGT (UTC+8)
                  </span>
                </div>

                <div className="text-xs space-y-1.5 text-[#A7ABB5]">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1">
                    <span>Monday – Saturday:</span>
                    <span className="font-mono text-[#F2F0EA] font-medium">09:00 – 20:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sunday &amp; Holidays:</span>
                    <span className="font-mono text-[#C9A24B] font-medium">10:00 – 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Curated Lineup Overview */}
          <div className="space-y-4">
            <h3 className="font-['Outfit',sans-serif] text-sm font-semibold uppercase tracking-wider text-[#F2F0EA]">
              Curated Lineup ({VEHICLES.length} Vehicles)
            </h3>
            <p className="text-xs text-[#A7ABB5] leading-relaxed">
              Our curated {VEHICLES.length}-vehicle portfolio represents benchmark engineering across 6 distinct automotive categories:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="px-2.5 py-1.5 rounded bg-[#23262E] text-[#F2F0EA] flex items-center justify-between">
                <span>Executive Sedans</span>
                <span className="text-[#C9A24B] font-mono text-[10px]">4</span>
              </span>
              <span className="px-2.5 py-1.5 rounded bg-[#23262E] text-[#F2F0EA] flex items-center justify-between">
                <span>Family SUVs</span>
                <span className="text-[#C9A24B] font-mono text-[10px]">4</span>
              </span>
              <span className="px-2.5 py-1.5 rounded bg-[#23262E] text-[#F2F0EA] flex items-center justify-between">
                <span>Luxury MPVs</span>
                <span className="text-[#C9A24B] font-mono text-[10px]">4</span>
              </span>
              <span className="px-2.5 py-1.5 rounded bg-[#23262E] text-[#F2F0EA] flex items-center justify-between">
                <span>Pure Electric</span>
                <span className="text-[#C9A24B] font-mono text-[10px]">4</span>
              </span>
              <span className="px-2.5 py-1.5 rounded bg-[#23262E] text-[#F2F0EA] flex items-center justify-between">
                <span>Sport Hatchbacks</span>
                <span className="text-[#C9A24B] font-mono text-[10px]">4</span>
              </span>
              <span className="px-2.5 py-1.5 rounded bg-[#23262E] text-[#F2F0EA] flex items-center justify-between">
                <span>Purist Coupes</span>
                <span className="text-[#C9A24B] font-mono text-[10px]">4</span>
              </span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleNav('test-drive')}
                className="w-full py-2 px-3 text-xs font-semibold rounded bg-[#23262E] text-[#C9A24B] border border-[#C9A24B]/30 hover:bg-[#C9A24B] hover:text-[#14161B] transition-colors cursor-pointer"
              >
                Request VIP Showroom Booking
              </button>
            </div>
          </div>

        </div>

        {/* Section 3 & AC7 Mandatory Non-Commercial Student Portfolio Disclaimer */}
        <div className="mt-8 pt-6 bg-[#23262E]/50 rounded-xl p-6 border border-[#23262E]">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs text-[#A7ABB5]">
              <p className="text-[#F2F0EA] font-semibold tracking-wide">
                MANDATORY PROJECT DISCLAIMER &amp; ATTRIBUTION NOTICE
              </p>
              <p className="leading-relaxed">
                <strong className="text-[#F2F0EA]">AutoVista Motors</strong> is a fictional, non-commercial student portfolio project created solely to demonstrate front-end visual design, typography, layout composition, and information hierarchy. AutoVista Motors is <strong className="text-[#F2F0EA]">not affiliated with, endorsed by, or representing</strong> any of the vehicle manufacturers shown (Toyota Motor Corporation, Honda Motor Co., Ltd., Tesla, Inc.) or their respective authorized Indonesian distributors (PT Toyota-Astra Motor, PT Honda Prospect Motor).
              </p>
              <p className="leading-relaxed">
                All vehicle model names, trademarks, badges, and logos remain the exclusive intellectual property of their respective trademark holders. All vehicle photographs displayed on this website are genuine, real-world photographs sourced under Creative Commons licenses from <span className="text-[#C9A24B]">Wikimedia Commons</span> with appropriate attribution and search query provenance documented in the source code. The showroom address is framed at Marina Bay Financial Centre, Singapore, for design showcase and demonstration purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7ABB5] gap-4">
          <p>© {new Date().getFullYear()} AutoVista Motors. Front-End Design Portfolio Showcase.</p>
          <div className="flex items-center gap-6">
            <span>Showroom: Marina Bay, Singapore</span>
            <span>·</span>
            <span>Currency: IDR (Rupiah)</span>
            <span>·</span>
            <span className="text-[#C9A24B]">Palette: Charcoal &amp; Gold</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
