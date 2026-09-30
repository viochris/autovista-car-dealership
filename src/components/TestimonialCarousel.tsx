import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  vehicle: string;
  avatarText: string;
  avatarImage: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Henry Crawford',
    role: 'Managing Director, Apex Regional Capital',
    vehicle: 'Toyota Camry',
    avatarText: 'HC',
    avatarImage: '/avatars/hendra.jpg',
    quote:
      'The acquisition experience for our Toyota Camry was flawless. The AutoVista concierge arranged an extended evening test drive along Marina Boulevard and handled registration with utmost professionalism.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Maya Montgomery',
    role: 'Co-Founder, Bayfront Innovation Lab',
    vehicle: 'Tesla Model 3',
    avatarText: 'MM',
    avatarImage: '/avatars/maya.jpg',
    quote:
      'Transitioning to the Tesla Model 3 was effortless. AutoVista not only assisted with the financing structure but also arranged the certified home wall-box installation ahead of delivery day.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Robert Sterling',
    role: 'Principal Architect, Studio Sterling',
    vehicle: 'Toyota Innova Zenix',
    avatarText: 'RS',
    avatarImage: '/avatars/budi.jpg',
    quote:
      'Our family needed the comfort of the Innova Zenix Hybrid for weekend grand touring along scenic coastal routes. The second-row captain seats and transparent trade-in valuation made the decision instantaneous.',
    rating: 5,
  },
  {
    id: 'test-4',
    name: 'Kevin Parker',
    role: 'Software Architect, Antares Labs',
    vehicle: 'Honda Civic RS',
    avatarText: 'KP',
    avatarImage: '/avatars/kevin.jpg',
    quote:
      'The Civic RS turbo powertrain and razor-sharp steering exceeded my expectations. AutoVista arranged a tailored evening test drive through winding city sectors that truly highlighted its chassis poise.',
    rating: 5,
  },
  {
    id: 'test-5',
    name: 'Dr. Michelle Vance',
    role: 'Orthopedic Surgeon, Bayfront Medical Center',
    vehicle: 'Toyota Fortuner',
    avatarText: 'MV',
    avatarImage: '/avatars/michelle.jpg',
    quote:
      'The Fortuner provides unmatched command of the road and rugged peace of mind during regional highway journeys. The showroom handover suite was top-tier and the 2.18% interest rate was unbeatable.',
    rating: 5,
  },
  {
    id: 'test-6',
    name: 'Stephanie & David Windsor',
    role: 'Private Asset Investors, Marina South',
    vehicle: 'Honda CR-V',
    avatarText: 'SW',
    avatarImage: '/avatars/stephanie.jpg',
    quote:
      'We wanted the refined versatility of the latest Honda CR-V with full Honda SENSING safety suites. AutoVista’s concierge coordinated trade-in for our older SUV and delivered the new car in showroom-mint condition.',
    rating: 5,
  },
  {
    id: 'test-7',
    name: 'Samuel Lawrence',
    role: 'Fintech Partner, Straits Alpha Ventures',
    vehicle: 'Tesla Model 3 Long Range',
    avatarText: 'SL',
    avatarImage: '/avatars/samuel.jpg',
    quote:
      'From vehicle consultation to supercharging guidance, AutoVista provides a white-glove EV onboarding experience that traditional dealerships simply cannot match. Highly recommended.',
    rating: 5,
  },
  {
    id: 'test-8',
    name: 'Ian Sinclair, Esq.',
    role: 'Senior Legal Partner, Sinclair & Associates',
    vehicle: 'Toyota Camry Hybrid',
    avatarText: 'IS',
    avatarImage: '/avatars/irwan.jpg',
    quote:
      'The whisper-quiet cabin and seamless hybrid transitions make the Camry Hybrid ideal for client transfers. AutoVista’s transparent OTR pricing with zero hidden delivery add-ons established immediate trust.',
    rating: 5,
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Continuous auto-advance every 5 seconds without hover pausing
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000); // Advances automatically every 5 seconds

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto" aria-label="Client Testimonials Carousel">
      
      {/* Top Header Row: Counter Badge Only (Pause button and Auto-playing text removed) */}
      <div className="flex items-center justify-end mb-3 px-2">
        <div className="px-3 py-1 rounded-full bg-[#23262E] border border-white/5 text-xs font-mono text-[#F2F0EA]">
          <span className="text-[#C9A24B] font-bold">{currentIndex + 1}</span>
          <span className="text-[#A7ABB5] mx-1">/</span>
          <span className="text-[#A7ABB5]">{total}</span>
        </div>
      </div>

      {/* Main Testimonial Card */}
      <div className="relative rounded-2xl bg-[#23262E] border border-[#23262E] hover:border-[#C9A24B]/40 transition-all duration-300 p-8 sm:p-10 shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
        
        {/* Subtle Watermark Quote Mark */}
        <div className="absolute right-6 top-6 opacity-5 pointer-events-none text-[#C9A24B]">
          <Quote className="w-28 h-28" />
        </div>

        {/* Card Top: Stars & Vehicle Badge */}
        <div className="flex items-center justify-between gap-4 z-10">
          <div className="flex items-center gap-1 text-[#C9A24B]">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C9A24B]" />
            ))}
          </div>

          <div className="px-3 py-1 rounded-full bg-[#14161B] border border-[#C9A24B]/30 text-xs font-semibold text-[#C9A24B]">
            <span>Acquired: {current.vehicle}</span>
          </div>
        </div>

        {/* Card Body: Quote */}
        <div className="my-6 z-10">
          <p className="font-['Outfit',sans-serif] text-base sm:text-lg md:text-xl text-[#F2F0EA] font-medium leading-relaxed italic">
            &ldquo;{current.quote}&rdquo;
          </p>
        </div>

        {/* Card Bottom: Client Info */}
        <div className="flex items-center justify-between border-t border-white/5 pt-5 z-10">
          <div className="flex items-center gap-3">
            {/* Real Portrait Avatar with Initials Fallback */}
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A24B] bg-[#14161B] shrink-0 relative shadow-md">
              <img
                src={current.avatarImage}
                alt={current.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#C9A24B] -z-10">
                {current.avatarText}
              </div>
            </div>

            <div>
              <h4 className="font-['Outfit',sans-serif] text-base font-bold text-[#F2F0EA]">
                {current.name}
              </h4>
              <p className="text-xs text-[#A7ABB5]">
                {current.role}
              </p>
            </div>
          </div>

          {/* Verified Owner Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#14161B] text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Verified Owner</span>
          </div>
        </div>

      </div>

      {/* Navigation Controls: Arrows and Indicators */}
      <div className="flex items-center justify-between mt-5 px-2">
        
        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          className="p-2.5 rounded-xl bg-[#23262E] hover:bg-[#C9A24B] text-[#A7ABB5] hover:text-[#14161B] border border-[#23262E] hover:border-[#C9A24B] transition-all cursor-pointer shadow-md"
          title="Previous Testimonial"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel Dots */}
        <div className="flex items-center gap-2">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 h-2 bg-[#C9A24B]'
                  : 'w-2 h-2 bg-[#A7ABB5]/40 hover:bg-[#A7ABB5]'
              }`}
              title={`Go to testimonial by ${item.name}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="p-2.5 rounded-xl bg-[#23262E] hover:bg-[#C9A24B] text-[#A7ABB5] hover:text-[#14161B] border border-[#23262E] hover:border-[#C9A24B] transition-all cursor-pointer shadow-md"
          title="Next Testimonial"
          aria-label="Next Testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

    </div>
  );
};
