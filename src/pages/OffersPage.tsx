import React, { useState } from 'react';
import { VEHICLES, formatIDR } from '../data/vehicles';
import { PageRoute } from '../components/Header';
import {
  Tag,
  Percent,
  RefreshCw,
  Calculator,
  ShieldCheck,
  CalendarCheck,
  CheckCircle2,
  Info,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface OffersPageProps {
  onNavigate: (page: PageRoute) => void;
  onBookTestDrive: (vehicleName: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({
  onNavigate,
  onBookTestDrive,
}) => {
  // Financing Calculator State
  const [selectedVehicleId, setSelectedVehicleId] = useState(VEHICLES[0].id);
  const [downPaymentPercent, setDownPaymentPercent] = useState(25); // 20% to 50%
  const [tenureMonths, setTenureMonths] = useState(36); // 12, 24, 36, 48, 60
  const interestRatePa = 0.0218; // 2.18% p.a. flat promo rate

  const activeVehicle =
    VEHICLES.find((v) => v.id === selectedVehicleId) || VEHICLES[0];

  // Calculations
  const totalPrice = activeVehicle.startingPriceIdr;
  const downPaymentAmount = (totalPrice * downPaymentPercent) / 100;
  const principalLoan = totalPrice - downPaymentAmount;
  const tenureYears = tenureMonths / 12;
  const totalInterest = principalLoan * interestRatePa * tenureYears;
  const totalLoanRepay = principalLoan + totalInterest;
  const monthlyInstallment = Math.round(totalLoanRepay / tenureMonths);

  const handleScrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('calculator');
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Title & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
          Privileged Ownership
        </span>
        <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F0EA] tracking-tight">
          Current Offers &amp; Financing
        </h1>
        <p className="text-sm sm:text-base text-[#A7ABB5] leading-relaxed text-balance">
          Discover exclusive acquisition programs, subsidized interest rates with top Indonesian banking institutions, and premium vehicle trade-in appraisals.
        </p>
      </div>

      {/* 1. 2-3 Promotional Cards (Section 6 Wireframe) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Promotional Card 1: Short-term discount / Cash Advantage */}
        <div className="rounded-2xl bg-[#23262E] border border-[#23262E] hover:border-[#C9A24B]/50 transition-all p-7 space-y-5 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#14161B] text-[#C9A24B] flex items-center justify-center border border-[#C9A24B]/30">
              <Tag className="w-6 h-6" />
            </div>

            <div className="inline-block px-3 py-1 rounded bg-[#C9A24B]/15 text-[#C9A24B] text-[11px] font-bold uppercase tracking-wider">
              Exclusive Showroom Allowance
            </div>

            <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA]">
              IDR 35,000,000 Executive Cash Advantage
            </h3>

            <p className="text-xs sm:text-sm text-[#A7ABB5] leading-relaxed">
              Direct showroom acquisition rebate applied across in-stock Toyota Camry and Honda CR-V variants registered before the end of the current quarter.
            </p>

            <ul className="text-xs text-[#F2F0EA] space-y-2 pt-2 border-t border-[#14161B]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Immediate deduction on OTR invoice</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Complimentary V-Kool Solargard tint upgrade</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Valid for private &amp; corporate registrations</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#14161B]">
            <button
              onClick={() => onBookTestDrive('Toyota Camry')}
              className="w-full py-2.5 rounded-lg bg-[#14161B] hover:bg-[#C9A24B] hover:text-[#14161B] text-[#F2F0EA] font-semibold text-xs transition-colors"
            >
              Inquire About Camry &amp; CR-V
            </button>
          </div>
        </div>

        {/* Promotional Card 2: Financing/Installment Highlight */}
        <div className="rounded-2xl bg-gradient-to-b from-[#23262E] to-[#1a1c22] border-2 border-[#C9A24B] p-7 space-y-5 flex flex-col justify-between shadow-2xl relative">
          <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#C9A24B] text-[#14161B] text-[11px] font-extrabold uppercase tracking-wider shadow">
            Featured Partner Rate
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#14161B] text-[#C9A24B] flex items-center justify-center border border-[#C9A24B]/30">
              <Percent className="w-6 h-6" />
            </div>

            <div className="inline-block px-3 py-1 rounded bg-[#C9A24B]/15 text-[#C9A24B] text-[11px] font-bold uppercase tracking-wider">
              Ultra-Low Flat Interest
            </div>

            <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA]">
              2.18% p.a. Fixed Financing up to 3 Years
            </h3>

            <p className="text-xs sm:text-sm text-[#A7ABB5] leading-relaxed">
              Financed through Tier-1 institutional partners (BCA Finance, Mandiri Tunas Finance) with rapid 24-hour credit pre-approval and low down-payment schemes.
            </p>

            <ul className="text-xs text-[#F2F0EA] space-y-2 pt-2 border-t border-[#14161B]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Fixed monthly installment for peace of mind</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Includes Comprehensive All-Risk insurance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Zero administrative provisioning surcharges</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#14161B]">
            <button
              type="button"
              onClick={handleScrollToCalculator}
              className="w-full py-2.5 rounded-lg bg-[#C9A24B] text-[#14161B] font-bold text-xs hover:bg-[#D9B45D] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Calculate Your Installment Below</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Promotional Card 3: Trade-in Offer */}
        <div className="rounded-2xl bg-[#23262E] border border-[#23262E] hover:border-[#C9A24B]/50 transition-all p-7 space-y-5 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#14161B] text-[#C9A24B] flex items-center justify-center border border-[#C9A24B]/30">
              <RefreshCw className="w-6 h-6" />
            </div>

            <div className="inline-block px-3 py-1 rounded bg-[#C9A24B]/15 text-[#C9A24B] text-[11px] font-bold uppercase tracking-wider">
              Guaranteed Valuation
            </div>

            <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA]">
              Premium Multi-Brand Trade-In Guarantee
            </h3>

            <p className="text-xs sm:text-sm text-[#A7ABB5] leading-relaxed">
              Upgrade to a new Honda Civic RS, Toyota Fortuner, or Innova Zenix with guaranteed above-market trade-in appraisals and immediate settlement on your existing car.
            </p>

            <ul className="text-xs text-[#F2F0EA] space-y-2 pt-2 border-t border-[#14161B]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Free 30-minute 120-point showroom inspection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Additional IDR 15,000,000 trade-in subsidy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Trade-in proceeds seamlessly offset down payment</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#14161B]">
            <button
              onClick={() => onNavigate('test-drive')}
              className="w-full py-2.5 rounded-lg bg-[#14161B] hover:bg-[#C9A24B] hover:text-[#14161B] text-[#F2F0EA] font-semibold text-xs transition-colors"
            >
              Book Trade-In Appraisal
            </button>
          </div>
        </div>

      </div>

      {/* 2. Interactive Financing Illustration / Calculator (Section 6 Wireframe) */}
      <section id="calculator" className="scroll-mt-24 rounded-2xl bg-[#23262E] border border-[#23262E] p-8 sm:p-12 shadow-2xl space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#14161B]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">
              <Calculator className="w-4 h-4" />
              <span>Interactive Financing Simulator</span>
            </div>
            <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA] mt-1">
              Estimate Your Monthly Investment
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ABB5] mt-1">
              Simulate monthly installments based on our 2.18% p.a. promotional rate structure.
            </p>
          </div>

          {/* Vehicle Selector */}
          <div className="space-y-1.5 min-w-[260px]">
            <label className="text-xs font-semibold text-[#F2F0EA] uppercase tracking-wider">
              Select Vehicle Model
            </label>
            <select
              value={selectedVehicleId}
              onChange={(e) => setSelectedVehicleId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#14161B] border border-[#14161B] focus:border-[#C9A24B] text-[#F2F0EA] text-sm font-semibold cursor-pointer"
            >
              {VEHICLES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} ({formatIDR(v.startingPriceIdr)})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Down Payment Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-[#F2F0EA]">
                  Down Payment (DP): <span className="text-[#C9A24B]">{downPaymentPercent}%</span>
                </span>
                <span className="font-mono text-sm text-[#A7ABB5]">
                  {formatIDR(downPaymentAmount)}
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-[#14161B] rounded-lg appearance-none cursor-pointer accent-[#C9A24B]"
              />
              <div className="flex justify-between text-[11px] text-[#A7ABB5]">
                <span>20% (Minimum)</span>
                <span>35%</span>
                <span>50% (Comfort)</span>
              </div>
            </div>

            {/* Loan Tenure Selector */}
            <div className="space-y-3">
              <span className="font-semibold text-sm text-[#F2F0EA] block">
                Financing Tenure: <span className="text-[#C9A24B]">{tenureMonths} Months ({tenureMonths / 12} Years)</span>
              </span>
              <div className="grid grid-cols-5 gap-2">
                {[12, 24, 36, 48, 60].map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setTenureMonths(months)}
                    className={`py-2.5 rounded-lg text-xs font-bold transition-all ${
                      tenureMonths === months
                        ? 'bg-[#C9A24B] text-[#14161B] shadow'
                        : 'bg-[#14161B] text-[#A7ABB5] hover:text-[#F2F0EA] hover:bg-[#14161B]/80'
                    }`}
                  >
                    {months / 12}Y ({months}M)
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Base Specs Recap */}
            <div className="p-4 rounded-xl bg-[#14161B]/60 border border-[#14161B] flex items-center justify-between text-xs text-[#A7ABB5]">
              <span>Base On-The-Road Price: <strong className="text-[#F2F0EA]">{formatIDR(totalPrice)}</strong></span>
              <span>Promo Interest: <strong className="text-[#C9A24B]">2.18% Flat p.a.</strong></span>
            </div>

          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#14161B] rounded-2xl p-6 sm:p-8 border border-[#C9A24B]/40 space-y-6 shadow-2xl">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A7ABB5] block">
                Estimated Monthly Installment
              </span>
              <div className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-[#C9A24B] mt-1 tabular-nums">
                {formatIDR(monthlyInstallment)}
                <span className="text-xs font-normal text-[#A7ABB5] ml-1">/ month</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-[#A7ABB5] pt-4 border-t border-[#23262E]">
              <div className="flex justify-between">
                <span>Principal Financed Amount:</span>
                <span className="font-mono text-[#F2F0EA]">{formatIDR(principalLoan)}</span>
              </div>
              <div className="flex justify-between">
                <span>Down Payment ({downPaymentPercent}%):</span>
                <span className="font-mono text-[#F2F0EA]">{formatIDR(downPaymentAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Financing Tenure:</span>
                <span className="text-[#F2F0EA]">{tenureMonths} Months</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onBookTestDrive(activeVehicle.name)}
                className="w-full py-3 rounded-lg bg-[#C9A24B] text-[#14161B] font-bold text-sm hover:bg-[#D9B45D] transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Apply for {activeVehicle.name}</span>
              </button>
            </div>

            <div className="p-3 rounded-lg bg-[#23262E]/60 text-[11px] text-[#A7ABB5] flex items-start gap-2">
              <Info className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
              <span>
                <strong>Illustrative Notice:</strong> Calculated figures are illustrative estimates for portfolio demonstration. Official approval, exact insurance premiums, and final monthly installments are determined upon formal credit evaluation.
              </span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
