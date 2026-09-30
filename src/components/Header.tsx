import React, { useState } from 'react';
import { Menu, X, CalendarCheck, ShieldCheck } from 'lucide-react';

export type PageRoute = 'home' | 'vehicles' | 'about' | 'visit' | 'test-drive' | 'offers' | 'faq';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

interface NavItem {
  id: PageRoute;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'vehicles', label: 'Vehicles' },
  { id: 'about', label: 'About Us' },
  { id: 'visit', label: 'Visit Us' },
  { id: 'test-drive', label: 'Test Drive' },
  { id: 'offers', label: 'Offers' },
  { id: 'faq', label: 'FAQ' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#14161B]/95 backdrop-blur-md border-b border-[#23262E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name - Always visible on all screens */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none text-left"
            aria-label="AutoVista Motors - Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-[#23262E] border border-[#C9A24B]/30 p-1 group-hover:border-[#C9A24B] transition-colors flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="AutoVista Motors Insignia"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to elegant gold monogram if image not accessible
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="sr-only">AutoVista Motors Logo</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Outfit',sans-serif] text-lg sm:text-xl font-bold tracking-tight text-[#F2F0EA] group-hover:text-[#C9A24B] transition-colors whitespace-nowrap">
                AUTOVISTA
              </span>
              <span className="text-[10px] tracking-widest text-[#C9A24B] uppercase font-medium -mt-1">
                Motors Marina Bay
              </span>
            </div>
          </button>

          {/* Full Horizontal Navigation Bar: Strictly visible at >= 1024px (lg:flex) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-[#C9A24B] font-semibold'
                      : 'text-[#A7ABB5] hover:text-[#F2F0EA]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A24B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Zone: "Book a Test Drive" ALWAYS visible + Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNavClick('test-drive')}
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-md bg-[#C9A24B] text-[#14161B] hover:bg-[#D9B45D] active:scale-[0.98] transition-all shadow-md shadow-[#C9A24B]/10 whitespace-nowrap"
            >
              <CalendarCheck className="w-4 h-4 text-[#14161B]" />
              <span>Book a Test Drive</span>
            </button>

            {/* Hamburger Button: strictly below 1024px (< lg) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#A7ABB5] hover:text-[#F2F0EA] hover:bg-[#23262E] focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Collapsed Mobile/Tablet Dropdown Menu: displayed when hamburger toggled below 1024px */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#23262E] bg-[#14161B] shadow-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#23262E] text-[#C9A24B] border-l-4 border-[#C9A24B]'
                      : 'text-[#F2F0EA] hover:bg-[#23262E]/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#23262E] flex items-center justify-between text-xs text-[#A7ABB5] px-2">
            <span>Showroom: 10 Marina Blvd, Marina Bay, Singapore</span>
            <span className="flex items-center gap-1 text-[#C9A24B]">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
