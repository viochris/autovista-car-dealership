import React from 'react';
import { Award, Compass, ShieldCheck, Sparkles, Users, History, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../components/Header';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const milestones = [
    {
      year: '2024 (Q1)',
      title: 'Conception of AutoVista Motors',
      description:
        'Established conceptually as an avant-garde automotive gallery designed to bridge Japanese engineering refinement, European grand tourers, and next-generation electric mobility for discerning international motorists.'
    },
    {
      year: '2024 (Q3)',
      title: 'Flagship Showroom Unveiling at Marina Bay',
      description:
        'Inaugurated our premier showcase facility located at 10 Marina Boulevard, Marina Bay, Singapore, introducing private consultation lounges, high-voltage battery service bays, and dual DC fast-charging stalls.'
    },
    {
      year: '2025 (Q2)',
      title: 'Multi-Category Fleet Expansion',
      description:
        'Expanded our curated inventory into six distinct categories: executive sedans, rugged SUVs, luxury MPVs, pure electric models, versatile hatchbacks, and purist sports coupes.'
    },
    {
      year: '2026',
      title: '500+ Handover Milestone & Concierge Standard',
      description:
        'Celebrated over 500 bespoke vehicle acquisitions across regional clients with a benchmark 99.4% client satisfaction rating.'
    }
  ];

  const leadershipRoles = [
    {
      name: 'Adrian Vance',
      role: 'Managing Principal & Founder',
      image: '/team/adrian.jpg',
      bio: 'Over 18 years of executive leadership in international luxury automotive retail, private client stewardship, and multi-brand distribution.'
    },
    {
      name: 'Clara Kensington, M.Sc.',
      role: 'Director of Automotive Curation',
      image: '/team/clara.jpg',
      bio: 'Former technical vehicle specialist overseeing performance benchmarking, trim specifications, dynamic road tests, and quality verification.'
    },
    {
      name: 'Brian Sterling',
      role: 'Head of EV & Hybrid Engineering',
      image: '/team/bambang.jpg',
      bio: 'Pioneering technician lead certified in high-voltage battery architecture, wallbox logistics, fast charging, and telemetry diagnostic systems.'
    },
    {
      name: 'Diana Davies',
      role: 'Chief Client Experience Concierge',
      image: '/team/dewi.jpg',
      bio: 'Architect of our white-glove demonstration drives, bespoke VIP vehicle handovers, tailored financing consultations, and title administration.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Title & Breadcrumb Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
          Our Heritage &amp; Vision
        </span>
        <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F0EA] tracking-tight">
          About AutoVista Motors
        </h1>
        <p className="text-sm sm:text-base text-[#A7ABB5] leading-relaxed text-balance">
          A dedicated multi-brand dealership created to redefine how executive sedans, family SUVs, electric pioneers, luxury MPVs, agile hatchbacks, and sports coupes are presented and acquired.
        </p>
      </div>

      {/* 1. Company Story Section: Founding narrative */}
      <section className="rounded-2xl bg-[#23262E] border border-[#23262E] p-8 sm:p-12 overflow-hidden relative">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14161B] text-[#C9A24B] text-xs font-semibold uppercase tracking-wider border border-[#C9A24B]/30">
            <Sparkles className="w-3.5 h-3.5" /> Premier Dealership Story
          </div>

          <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA] leading-snug">
            Crafting a New Paradigm for Multi-Brand Automotive Elegance
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#A7ABB5] leading-relaxed">
            <p>
              AutoVista Motors was conceived as a boutique automotive dealership established to embody the apex of modern front-end design, thoughtful typographic hierarchy, and seamless digital interaction. Framed within the prestigious Marina Bay waterfront financial district of Singapore, our showroom reimagines the multi-brand automotive gallery experience.
            </p>
            <p>
              Rather than an overwhelming inventory of countless models, AutoVista Motors champions rigorous curation across six automotive benchmarks: executive sedans, capable family SUVs, first-class MPVs, pure electric pioneers, urban sports hatchbacks, and purist sports coupes.
            </p>
            <p>
              Overlooking the iconic Singapore Marina Bay skyline, AutoVista Motors bridges scholarly design rigor with tangible real-world automotive engineering specifications.
            </p>
          </div>
        </div>

        {/* Decorative Watermark Emblem in Background */}
        <div className="absolute -right-12 -bottom-12 w-96 h-96 opacity-10 pointer-events-none">
          <img
            src="/logo.png"
            alt="AutoVista Motors"
            className="w-full h-full object-contain filter grayscale"
          />
        </div>
      </section>

      {/* 2. Mission and Values Section: 4 short statements */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
            Guiding Philosophy
          </span>
          <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA] mt-1">
            Our Guiding Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-xl bg-[#23262E] border border-[#23262E] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#14161B] text-[#C9A24B] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
              Uncompromising Curation
            </h3>
            <p className="text-xs text-[#A7ABB5] leading-relaxed">
              We decline generic volume in favor of definitive class leaders that excel in safety, reliability, and engineering heritage.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#23262E] border border-[#23262E] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#14161B] text-[#C9A24B] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
              Transparent Integrity
            </h3>
            <p className="text-xs text-[#A7ABB5] leading-relaxed">
              Every pricing schedule is guaranteed On-The-Road (OTR) with all registration, warranty, and documentation clearly outlined without hidden fees.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#23262E] border border-[#23262E] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#14161B] text-[#C9A24B] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
              Bespoke Stewardship
            </h3>
            <p className="text-xs text-[#A7ABB5] leading-relaxed">
              From personal demonstration routes along Marina Bay to custom wallbox installations, we serve each owner as a long-term partner.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#23262E] border border-[#23262E] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#14161B] text-[#C9A24B] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
              Electrification Expertise
            </h3>
            <p className="text-xs text-[#A7ABB5] leading-relaxed">
              Full diagnostic testing, high-voltage battery verification, and seamless charging orientation for all hybrid and electric owners.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Leadership Section: With Real Photo Portraits & English Executive Names */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
            Executive Direction
          </span>
          <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA] mt-1">
            Leadership &amp; Advisory Team
          </h2>
          <p className="text-xs sm:text-sm text-[#A7ABB5] mt-1">
            Our principal team brings decades of combined experience across luxury automotive retail and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipRoles.map((member) => (
            <div
              key={member.name}
              className="p-6 rounded-2xl bg-[#23262E] border border-[#23262E] hover:border-[#C9A24B]/40 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                {/* Real High-Resolution Portrait with Rounded Mask */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C9A24B] bg-[#14161B] shadow-lg mx-auto sm:mx-0 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div>
                  <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#C9A24B] font-medium mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-[#A7ABB5] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-[#14161B] flex items-center gap-1.5 text-[11px] text-[#A7ABB5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>Executive Certified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Timeline / Milestone Section: Chronological progression */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
            Progression
          </span>
          <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA] mt-1">
            Milestones of Excellence
          </h2>
        </div>

        <div className="relative border-l-2 border-[#23262E] ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8 py-2">
          {milestones.map((item) => (
            <div key={item.year} className="relative group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#14161B] border-2 border-[#C9A24B] group-hover:bg-[#C9A24B] transition-colors" />

              <div className="p-5 rounded-xl bg-[#23262E] border border-[#23262E] space-y-2">
                <span className="text-xs font-bold text-[#C9A24B] uppercase tracking-wider font-mono">
                  {item.year}
                </span>
                <h3 className="font-['Outfit',sans-serif] text-base font-bold text-[#F2F0EA]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7ABB5] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Bar */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#23262E] to-[#14161B] border border-[#C9A24B]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA]">
            Experience AutoVista Motors in Person
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ABB5]">
            Visit our Marina Bay flagship pavilion or reserve an executive demonstration drive today.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={() => onNavigate('visit')}
            className="px-5 py-2.5 rounded-lg bg-[#14161B] hover:bg-[#14161B]/80 text-[#F2F0EA] text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
          >
            Showroom Directions
          </button>
          <button
            onClick={() => onNavigate('test-drive')}
            className="px-5 py-2.5 rounded-lg bg-[#C9A24B] text-[#14161B] hover:bg-[#D9B45D] text-xs font-bold transition-colors shadow-sm cursor-pointer"
          >
            Book a Test Drive
          </button>
        </div>
      </div>

    </div>
  );
};
