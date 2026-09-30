import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, CalendarCheck, Sparkles, Search, MapPin, ArrowRight, X } from 'lucide-react';
import { PageRoute } from '../components/Header';

interface FaqPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface FaqItem {
  id: string;
  category: 'Test Drive' | 'Financing' | 'Warranty & Service' | 'Showroom & Delivery';
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  // 1. Test Drive (4 items)
  {
    id: 'faq-1',
    category: 'Test Drive',
    question: 'How do I book a test drive and what credentials must I present?',
    answer:
      'Booking a demonstration drive is simple via our in-page "Book a Test Drive" portal. Upon arrival at our flagship showroom at Marina Bay Financial Centre, Singapore, you will be welcomed by your designated automotive specialist. Please present an active, valid driver’s license or an International Driving Permit. Our 45-minute arterial route spans both the iconic Marina Bay waterfront circuit and high-speed expressway stretches to give you a thorough impression of handling, braking, and cabin acoustics.'
  },
  {
    id: 'faq-td-2',
    category: 'Test Drive',
    question: 'Can I test drive multiple vehicles back-to-back during a single appointment?',
    answer:
      'Yes, back-to-back comparisons are warmly welcomed. Many discerning buyers compare executive dynamics between the Toyota Camry Hybrid and the Honda Civic RS, or compare high-chassis versatility between the Honda CR-V and Toyota Fortuner. We also frequently host dual sessions transitioning from conventional ICE vehicles to the pure electric Tesla Model 3. Please reserve a 90-minute appointment or leave a note in the reservation form so we can prepare both vehicles.'
  },
  {
    id: 'faq-td-3',
    category: 'Test Drive',
    question: 'Can family members or executive colleagues accompany me during the drive?',
    answer:
      'Absolutely. For family and executive vehicles like the Toyota Innova Zenix and Honda CR-V, we strongly encourage bringing your family or executive passengers. Experiencing the second-row captain seats, power ottomans, panoramic sunroof, and rear acoustic isolation firsthand provides vital reassurance for your purchase decision.'
  },
  {
    id: 'faq-td-4',
    category: 'Test Drive',
    question: 'What insurance and safety coverage is included during demonstration drives?',
    answer:
      'All demonstration drives are conducted with comprehensive multi-risk commercial insurance with zero financial liability for registered drivers. A factory-trained specialist accompanies you in the front passenger seat to explain active safety systems (Toyota Safety Sense, Honda SENSING, and Tesla Autopilot) and assist with driving route navigation.'
  },

  // 2. Financing (4 items)
  {
    id: 'faq-2',
    category: 'Financing',
    question: 'Which financing institutions and payment methods does AutoVista Motors support?',
    answer:
      'AutoVista Motors collaborates directly with leading regional automotive finance institutions, including BCA Finance, Mandiri Tunas Finance (MTF), DBS Private Banking, and Maybank Finance. We offer flat promotional rates starting at 2.18% p.a. for up to 36-month tenures, alongside structured balloon payment options. We accept direct RTGS wire transfers, certified bank drafts, and trade-in equity settlement.'
  },
  {
    id: 'faq-7',
    category: 'Financing',
    question: 'Can I trade in my current vehicle regardless of its brand or age?',
    answer:
      'Absolutely. Our multi-brand appraisal desk evaluates any registered vehicle regardless of brand. We carry out an objective 120-point mechanical, structural, and cosmetic inspection within 30 minutes. The agreed valuation can be applied directly to offset your down payment on any new vehicle in our lineup.'
  },
  {
    id: 'faq-fin-3',
    category: 'Financing',
    question: 'What is the minimum down payment and available repayment tenure?',
    answer:
      'Down payments typically start from 20% for qualified individual and corporate buyers. Flexible tenures range from 12 to 72 months (1 to 6 years). During our special financing quarter, we also offer 50:50 payment programs (pay 50% upfront, 50% in 12 months with 0% interest) and tailored balloon payment structures that keep monthly commitments exceptionally modest.'
  },
  {
    id: 'faq-fin-4',
    category: 'Financing',
    question: 'Do you assist with corporate leasing, COP programs, and tax deductions?',
    answer:
      'Yes. Our corporate accounts desk specializes in Car Ownership Programs (COP), executive fleet acquisitions, and tax-efficient operating leases. We supply formal commercial invoices with full VAT/PPN breakdown, schedule depreciation plans, and bundle scheduled maintenance into a single consolidated corporate monthly statement.'
  },

  // 3. Warranty & Service (4 items)
  {
    id: 'faq-3',
    category: 'Warranty & Service',
    question: 'Are all vehicles covered by official manufacturer warranties?',
    answer:
      'Yes. Every Toyota, Honda, and Tesla vehicle distributed through AutoVista Motors is backed by its official manufacturer warranty documentation. Toyota models include standard 3-year / 100,000 km bumper-to-bumper warranty plus an 8-year / 160,000 km hybrid battery warranty. Honda vehicles include a 3-year / 100,000 km warranty. The Tesla Model 3 comes with an 8-year or 160,000 km battery and drive unit guarantee.'
  },
  {
    id: 'faq-4',
    category: 'Warranty & Service',
    question: 'What does the complimentary scheduled maintenance package entail?',
    answer:
      'All vehicle purchases during our promotional quarter include 3 years or 50,000 km of complimentary scheduled maintenance. This covers engine oil and filter replacements, brake fluid inspections, multi-point electronic diagnostics, wheel rotation, and labor charges at authorized brand service centers across regional partner networks.'
  },
  {
    id: 'faq-ws-3',
    category: 'Warranty & Service',
    question: 'How is high-voltage battery health verified for hybrids and electric vehicles?',
    answer:
      'Our Marina Bay technical facility is equipped with dedicated battery analyzers and certified high-voltage technicians. Every scheduled service check includes a comprehensive State of Health (SoH) diagnostics report, cell voltage balancing verification, and thermal coolant inspection to ensure lifetime battery longevity.'
  },
  {
    id: 'faq-ws-4',
    category: 'Warranty & Service',
    question: 'Where can I service my car after taking delivery?',
    answer:
      'You can service your vehicle at our Marina Bay Flagship Service Pavilion or at any authorized brand dealer workshop (Toyota, Honda, or certified Tesla service partners). Your digital warranty passport is synchronized in real time so all factory recall campaigns, scheduled milestones, and software updates are seamlessly recognized.'
  },

  // 4. Showroom & Delivery (4 items)
  {
    id: 'faq-5',
    category: 'Showroom & Delivery',
    question: 'Where is the flagship showroom located and do you offer private consultations?',
    answer:
      'Our flagship showroom is prominently located at Marina Bay Financial Centre (MBFC) Tower 2, 10 Marina Boulevard, Level 1 Promenade, Marina Bay, Singapore. We feature private executive consultation suites, a client espresso bar, dedicated vehicle handover bays, dual 120 kW DC fast chargers, and complimentary valet parking for all visitors.'
  },
  {
    id: 'faq-6',
    category: 'Showroom & Delivery',
    question: 'What is included in the Tesla Model 3 EV handover and home charging setup?',
    answer:
      'Every Tesla Model 3 delivery includes complimentary certified home assessment and installation of an official Gen 3 Wall Connector (up to 11 kW AC). Our EV specialists provide an orientation on Tesla app pairing, Sentry Mode configuration, navigation pre-conditioning, and access to Supercharger networks throughout regional corridors.'
  },
  {
    id: 'faq-8',
    category: 'Showroom & Delivery',
    question: 'How long does document processing (Registration, Plates, Title) take?',
    answer:
      'Official vehicle registration and license plates are typically completed within 10 to 14 business days following delivery. Temporary dealer plates are provided immediately so you can drive your vehicle from day one. Formal ownership title documents are expedited and delivered via secure diplomatic courier.'
  },
  {
    id: 'faq-sd-4',
    category: 'Showroom & Delivery',
    question: 'Do you offer enclosed carrier home delivery or ceremonial vehicle unveiling?',
    answer:
      'Yes. For clients celebrating a milestone or preferring direct residential or corporate delivery, we provide an enclosed single-car transporter delivery anywhere in the metropolitan area. The handover includes a bespoke champagne unveiling ceremony, personalized key presentation box, and a one-on-one tech orientation at your home.'
  }
];

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true, // First item open by default
  });
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Test Drive', 'Financing', 'Warranty & Service', 'Showroom & Delivery'];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    const targetFaq = cat === 'All' ? FAQS[0] : FAQS.find((f) => f.category === cat);
    if (targetFaq) {
      setOpenItems((prev) => ({
        ...prev,
        [targetFaq.id]: true,
      }));
    }
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    // Only search the question text
    const matchesSearch =
      query === '' ||
      faq.question.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const handleNavigateTop = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Page Title & Intro */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23262E] border border-[#C9A24B]/30 text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge &amp; Advisory</span>
        </div>
        <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F0EA] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#A7ABB5] leading-relaxed text-balance">
          Find clear answers regarding demonstration drives, customized financing, manufacturer warranties, and our Marina Bay flagship pavilion.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-3xl mx-auto space-y-3">
        {/* Search Input - Stretches to match exact left and right boundaries of category row */}
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C9A24B]" />
          <input
            type="text"
            placeholder="Search questions by keyword (e.g. warranty, Tesla, rate)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#23262E] border border-white/5 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-sm text-[#F2F0EA] placeholder-[#A7ABB5]/50 transition-colors shadow-md"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A7ABB5] hover:text-[#F2F0EA] transition-colors p-1"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Chips - Flush with search bar from left to right */}
        <div className="flex flex-wrap sm:flex-nowrap items-stretch justify-between gap-2 w-full">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = cat === 'All' ? FAQS.length : FAQS.filter(f => f.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleSelectCategory(cat)}
                className={`flex-1 min-w-fit px-3 sm:px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-center ${
                  isActive
                    ? 'bg-[#C9A24B] text-[#14161B] shadow-md font-bold'
                    : 'bg-[#23262E] text-[#A7ABB5] hover:text-[#F2F0EA] hover:bg-[#14161B] border border-white/5'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? 'bg-[#14161B]/20 text-[#14161B]'
                      : 'bg-white/10 text-[#C9A24B]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expandable Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 rounded-2xl bg-[#23262E]/50 border border-[#23262E] text-center space-y-2">
            <p className="text-sm font-semibold text-[#F2F0EA]">No questions match &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs text-[#A7ABB5]">Try searching for other terms or choose &ldquo;All&rdquo; categories.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-2 text-xs text-[#C9A24B] font-semibold hover:underline"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#23262E] border-[#C9A24B]/40 shadow-lg'
                    : 'bg-[#23262E]/70 border-[#23262E] hover:border-[#C9A24B]/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24B]">
                      {faq.category}
                    </span>
                    <h3 className="font-['Outfit',sans-serif] text-base sm:text-lg font-bold text-[#F2F0EA] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-1.5 rounded-full bg-[#14161B] text-[#C9A24B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C9A24B] text-[#14161B]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#A7ABB5] leading-relaxed border-t border-[#14161B]/60 animate-in fade-in-50 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Contact Box (Tidied Layout with Instant Scroll to Top) */}
      <div className="rounded-2xl bg-gradient-to-r from-[#23262E] via-[#23262E] to-[#14161B] border border-[#C9A24B]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
        <div className="space-y-2 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] text-[10px] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Direct Advisory
          </div>
          <h3 className="font-['Outfit',sans-serif] text-xl sm:text-2xl font-bold text-[#F2F0EA]">
            Have an unanswered question?
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ABB5] max-w-lg">
            Our concierge team is available to assist via direct consultation, private walkthrough, or phone.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 z-10 w-full sm:w-auto">
          <button
            onClick={() => handleNavigateTop('test-drive')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#C9A24B] text-[#14161B] font-bold text-xs sm:text-sm hover:bg-[#D9B45D] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#C9A24B]/10 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-[#14161B]" />
            <span>Book Consultation</span>
          </button>
          
          <button
            onClick={() => handleNavigateTop('visit')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#14161B] text-[#F2F0EA] border border-[#23262E] hover:border-[#C9A24B]/50 hover:bg-[#23262E] font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#C9A24B]" />
            <span>Visit Showroom</span>
          </button>
        </div>

        {/* Subtle decorative circles */}
        <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full border border-[#C9A24B]/10 pointer-events-none" />
      </div>

    </div>
  );
};
