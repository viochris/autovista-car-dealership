import React, { useState, useEffect, useRef } from 'react';
import { VEHICLES, formatIDR, Vehicle } from '../data/vehicles';
import { PageRoute } from '../components/Header';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Award,
  ChevronRight,
  Compass,
  Gauge,
  Flame,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectVehicle }) => {
  // Highlight 3 distinct cars from the lineup: Sedan, Compact SUV, Electric
  const featuredVehicles = VEHICLES.filter((v) =>
    ['toyota-camry', 'honda-crv', 'tesla-model-3'].includes(v.id)
  );

  // Parallax Scroll Tracking State (Local strictly to Home Page)
  const [scrollY, setScrollY] = useState(0);

  // Scroll reveal visibility flags for sections
  const [featuredVisible, setFeaturedVisible] = useState(false);
  const [standardsVisible, setStandardsVisible] = useState(false);
  const [offersVisible, setOffersVisible] = useState(false);

  const featuredRef = useRef<HTMLElement>(null);
  const standardsRef = useRef<HTMLElement>(null);
  const offersRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial calculation
    handleScroll();

    // Intersection Observer for smooth reveal on scroll
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === featuredRef.current) setFeaturedVisible(true);
          if (entry.target === standardsRef.current) setStandardsVisible(true);
          if (entry.target === offersRef.current) setOffersVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    });

    if (featuredRef.current) observer.observe(featuredRef.current);
    if (standardsRef.current) observer.observe(standardsRef.current);
    if (offersRef.current) observer.observe(offersRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative space-y-20 pb-20 overflow-hidden">
      
      {/* Ambient Parallax Glow Orbs (Subtle background depth shifting with scroll) */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A24B]/10 rounded-full blur-[140px] will-change-transform z-0"
        style={{
          transform: `translate3d(-50%, ${scrollY * 0.25}px, 0)`,
        }}
      />
      <div
        className="pointer-events-none absolute top-[900px] -left-40 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] will-change-transform z-0"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.12}px, 0)`,
        }}
      />
      <div
        className="pointer-events-none absolute top-[1800px] -right-40 w-[600px] h-[600px] bg-[#C9A24B]/5 rounded-full blur-[160px] will-change-transform z-0"
        style={{
          transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
        }}
      />

      {/* 1. Hero Section: Rich Multi-Layer Parallax Banner */}
      <section className="relative min-h-[640px] lg:min-h-[760px] flex items-center justify-center overflow-hidden border-b border-[#23262E]">
        
        {/* Layer 1: Background Image with Slower Parallax Motion */}
        <div
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(${1 + Math.min(scrollY * 0.0004, 0.15)})`,
          }}
        >
          <img
            src="/showroom-hero.jpg"
            alt="AutoVista Motors Showroom Interior"
            className="w-full h-full object-cover object-center filter brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14161B] via-[#14161B]/60 to-[#14161B]/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#14161B]/40 to-[#14161B]" />
        </div>

        {/* Layer 2: Floating Foreground Content with Dynamic Depth & Subtle Fade */}
        <div
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-12 pb-16 will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.12}px, 0)`,
            opacity: Math.max(0.15, 1 - scrollY / 850),
          }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23262E]/85 border border-[#C9A24B]/35 backdrop-blur-md text-xs font-semibold text-[#C9A24B] uppercase tracking-widest shadow-lg shadow-black/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24B] animate-pulse" />
            <span>International Premier Multi-Brand Automotive Destination</span>
          </div>

          <h1 className="font-['Outfit',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F2F0EA] tracking-tight leading-[1.15] text-balance">
            Where Engineering Excellence Meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24B] via-[#F3DE9C] to-[#C9A24B]">
              Bespoke Distinction
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#A7ABB5] leading-relaxed text-balance">
            Explore our curated fleet of luxury executive sedans, rugged family SUVs, intelligent MPVs, and cutting-edge electric transport. Experience refined automotive acquisition at Marina Bay.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('vehicles')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#C9A24B] text-[#14161B] font-bold text-sm hover:bg-[#D9B45D] active:scale-[0.98] transition-all shadow-xl shadow-[#C9A24B]/20 cursor-pointer"
            >
              <span>Explore Our Lineup</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('visit')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#23262E]/90 text-[#F2F0EA] border border-white/10 hover:border-[#C9A24B]/40 hover:bg-[#23262E] font-medium text-sm transition-all cursor-pointer backdrop-blur-xs"
            >
              <Compass className="w-4 h-4 text-[#C9A24B]" />
              <span>Visit Showroom</span>
            </button>
          </div>

          {/* Layer 3: Glass Floating Highlights Bar (Parallax Floating Elevation) */}
          <div
            className="pt-6 max-w-4xl mx-auto will-change-transform"
            style={{
              transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
            }}
          >
            <div className="rounded-2xl bg-[#23262E]/80 backdrop-blur-md border border-[#C9A24B]/25 p-3 sm:p-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-left shadow-2xl shadow-black/60">
              <div className="p-3 rounded-xl bg-[#14161B]/70 border border-white/5 space-y-0.5 hover:border-[#C9A24B]/40 transition-colors">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24B] flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#C9A24B]" /> Selection
                </span>
                <p className="text-xl sm:text-2xl font-bold text-[#F2F0EA] font-['Outfit',sans-serif] tabular-nums">
                  24 Icons
                </p>
                <p className="text-xs text-[#A7ABB5]">Curated Masterpieces</p>
              </div>
              <div className="p-3 rounded-xl bg-[#14161B]/70 border border-white/5 space-y-0.5 hover:border-[#C9A24B]/40 transition-colors">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24B] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#C9A24B]" /> Authenticity
                </span>
                <p className="text-xl sm:text-2xl font-bold text-[#F2F0EA] font-['Outfit',sans-serif] tabular-nums">
                  100% Real
                </p>
                <p className="text-xs text-[#A7ABB5]">Verified Specifications</p>
              </div>
              <div className="p-3 rounded-xl bg-[#14161B]/70 border border-white/5 space-y-0.5 hover:border-[#C9A24B]/40 transition-colors">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24B] flex items-center gap-1">
                  <Compass className="w-3 h-3 text-[#C9A24B]" /> Location
                </span>
                <p className="text-xl sm:text-2xl font-bold text-[#F2F0EA] font-['Outfit',sans-serif] tabular-nums truncate">
                  Marina Bay
                </p>
                <p className="text-xs text-[#A7ABB5]">Flagship Pavilion</p>
              </div>
              <div className="p-3 rounded-xl bg-[#14161B]/70 border border-white/5 space-y-0.5 hover:border-[#C9A24B]/40 transition-colors">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24B] flex items-center gap-1">
                  <Gauge className="w-3 h-3 text-[#C9A24B]" /> Financing
                </span>
                <p className="text-xl sm:text-2xl font-bold text-[#C9A24B] font-['Outfit',sans-serif] tabular-nums">
                  2.18% p.a.
                </p>
                <p className="text-xs text-[#A7ABB5]">Fixed Promotional Rate</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Featured Vehicles Strip: Animated Scroll-In Elevation */}
      <section
        ref={featuredRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          featuredVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
              Showroom Highlights
            </span>
            <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA] mt-1">
              Featured Lineup
            </h2>
            <p className="text-sm text-[#A7ABB5] mt-1">
              Three definitive expressions of modern automotive refinement.
            </p>
          </div>

          <button
            onClick={() => onNavigate('vehicles')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A24B] hover:text-[#D9B45D] transition-colors group cursor-pointer"
          >
            <span>View All Vehicles ({VEHICLES.length})</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredVehicles.map((vehicle, idx) => (
            <div
              key={vehicle.id}
              onClick={() => onSelectVehicle(vehicle)}
              className="group cursor-pointer rounded-2xl bg-[#23262E] border border-[#23262E] hover:border-[#C9A24B]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-2 shadow-xl hover:shadow-[#C9A24B]/10"
              style={{
                transitionDelay: `${idx * 120}ms`,
              }}
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#14161B]">
                  <img
                    src={vehicle.thumbnail}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#14161B]/85 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-medium text-[#C9A24B] border border-white/10">
                    {vehicle.category}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-[10px] text-[#A7ABB5] px-2 py-0.5 rounded">
                    Verified Photo
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA] group-hover:text-[#C9A24B] transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-[#A7ABB5] line-clamp-2 leading-relaxed">
                    {vehicle.tagline}
                  </p>
                </div>
              </div>

              {/* Price and Action Bar */}
              <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-[#14161B]/60">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A7ABB5] block">
                    Starting from
                  </span>
                  <span className="font-['Outfit',sans-serif] text-base font-bold text-[#C9A24B] tabular-nums">
                    {formatIDR(vehicle.startingPriceIdr)}
                  </span>
                </div>

                <span className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-[#14161B] text-[#F2F0EA] group-hover:bg-[#C9A24B] group-hover:text-[#14161B] transition-all shadow-sm">
                  Details
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "Why Choose AutoVista" section with Parallax Stagger */}
      <section
        ref={standardsRef}
        className={`bg-[#14161B] py-14 border-y border-[#23262E] transition-all duration-700 ${
          standardsVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
              The AutoVista Standard
            </span>
            <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA] mt-1">
              Why Discerning Drivers Choose AutoVista
            </h2>
            <p className="text-sm text-[#A7ABB5] mt-2">
              A bespoke, client-centered automotive acquisition standard built on transparency and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Proposition 1 */}
            <div className="p-6 rounded-2xl bg-[#23262E] border border-white/5 space-y-3 hover:border-[#C9A24B]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#14161B] border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
                Multi-Brand Mastery
              </h3>
              <p className="text-xs text-[#A7ABB5] leading-relaxed">
                Objective advisory comparing top Japanese executive hybrids, renowned family crossovers, and pioneer EV powertrains under one roof.
              </p>
            </div>

            {/* Proposition 2 */}
            <div className="p-6 rounded-2xl bg-[#23262E] border border-white/5 space-y-3 hover:border-[#C9A24B]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#14161B] border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
                Transparent Integrity
              </h3>
              <p className="text-xs text-[#A7ABB5] leading-relaxed">
                Guaranteed On-The-Road (OTR) Indonesian Rupiah pricing with zero hidden delivery charges and factory warranty documentation.
              </p>
            </div>

            {/* Proposition 3 */}
            <div className="p-6 rounded-2xl bg-[#23262E] border border-white/5 space-y-3 hover:border-[#C9A24B]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#14161B] border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
                Marina Bay Flagship Lounge
              </h3>
              <p className="text-xs text-[#A7ABB5] leading-relaxed">
                An intimate showroom experience located at 10 Marina Boulevard with dedicated private vehicle handover bays and consultation suites.
              </p>
            </div>

            {/* Proposition 4 */}
            <div className="p-6 rounded-2xl bg-[#23262E] border border-white/5 space-y-3 hover:border-[#C9A24B]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#14161B] border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
                EV &amp; Hybrid Stewardship
              </h3>
              <p className="text-xs text-[#A7ABB5] leading-relaxed">
                Specialized technician support, complimentary home wallbox setup, and seamless fast-charging orientation for new electric vehicle owners.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Testimonials Section: Interactive Auto-Carousel with Pause on Hover */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
            Client Experiences
          </span>
          <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA] mt-1">
            Testimonials of Distinction
          </h2>
          <p className="text-xs sm:text-sm text-[#A7ABB5] mt-1.5">
            Hear from distinguished executives, families, and EV pioneers who acquired their vehicles through AutoVista Motors.
          </p>
        </div>

        {/* Carousel Component */}
        <TestimonialCarousel />
      </section>

      {/* 5. Promotional Banner with Parallax Rotating Kinetic Rings */}
      <section
        ref={offersRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          offersVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="rounded-3xl bg-gradient-to-r from-[#23262E] via-[#23262E] to-[#14161B] border border-[#C9A24B]/40 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
          
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#C9A24B]/15 text-[#C9A24B] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Special Financing Quarter
            </div>
            <h3 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA]">
              Exclusive 2.18% p.a. Fixed Financing &amp; Trade-In Bonus
            </h3>
            <p className="text-sm text-[#A7ABB5] max-w-xl">
              Enjoy tailored repayment structures, 3-year complimentary scheduled maintenance, and instant trade-in appraisals for your current vehicle.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <button
              onClick={() => onNavigate('offers')}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#C9A24B] text-[#14161B] font-bold text-sm hover:bg-[#D9B45D] active:scale-[0.98] transition-all shadow-lg shadow-[#C9A24B]/20 cursor-pointer"
            >
              <span>Explore Current Offers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Background Decorative Rings Rotating Parallax on Scroll */}
          <div
            className="absolute -right-12 -bottom-12 w-72 h-72 rounded-full border border-[#C9A24B]/20 pointer-events-none will-change-transform"
            style={{
              transform: `rotate(${scrollY * 0.08}deg)`,
            }}
          />
          <div
            className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border border-[#C9A24B]/10 pointer-events-none will-change-transform"
            style={{
              transform: `rotate(${-scrollY * 0.05}deg)`,
            }}
          />
        </div>
      </section>

    </div>
  );
};
