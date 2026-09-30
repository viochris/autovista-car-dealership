import React, { useEffect } from 'react';
import { VEHICLES, Vehicle, formatIDR } from '../data/vehicles';
import {
  X,
  ArrowRightLeft,
  CalendarCheck,
  Eye,
  Check,
  Fuel,
  Gauge,
  Users,
  Maximize2,
  Zap,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface VehicleComparisonModalProps {
  isOpen: boolean;
  vehicle1: Vehicle | null;
  vehicle2: Vehicle | null;
  onClose: () => void;
  onSelectVehicle1: (vehicle: Vehicle) => void;
  onSelectVehicle2: (vehicle: Vehicle) => void;
  onSwapVehicles: () => void;
  onSelectVehicleForModal: (vehicle: Vehicle) => void;
  onBookTestDrive: (vehicleName: string) => void;
}

export const VehicleComparisonModal: React.FC<VehicleComparisonModalProps> = ({
  isOpen,
  vehicle1,
  vehicle2,
  onClose,
  onSelectVehicle1,
  onSelectVehicle2,
  onSwapVehicles,
  onSelectVehicleForModal,
  onBookTestDrive,
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Fallback defaults if either is null
  const v1 = vehicle1 || VEHICLES[0];
  const v2 = vehicle2 || (VEHICLES[1].id !== v1.id ? VEHICLES[1] : VEHICLES[2]);

  const priceDiff = Math.abs(v1.startingPriceIdr - v2.startingPriceIdr);
  const cheaperVehicle =
    v1.startingPriceIdr < v2.startingPriceIdr
      ? v1.name
      : v2.startingPriceIdr < v1.startingPriceIdr
      ? v2.name
      : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="comparison-modal-title"
    >
      <div className="relative w-full max-w-5xl bg-[#14161B] border border-[#23262E] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#23262E] bg-[#14161B]/95 sticky top-0 z-20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#23262E] text-[#C9A24B] flex items-center justify-center border border-[#C9A24B]/30">
              <ArrowRightLeft className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="comparison-modal-title"
                className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]"
              >
                Side-by-Side Vehicle Comparison
              </h2>
              <p className="text-xs text-[#A7ABB5]">
                Compare technical specifications, dimensions, features, and pricing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onSwapVehicles}
              className="p-2 rounded-lg bg-[#23262E] text-[#A7ABB5] hover:text-[#C9A24B] hover:bg-[#14161B] border border-white/5 transition-colors cursor-pointer text-xs font-semibold inline-flex items-center gap-1.5"
              title="Swap vehicle columns"
            >
              <ArrowRightLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Swap</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#A7ABB5] hover:text-[#F2F0EA] hover:bg-[#23262E] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close comparison modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Top Comparison Cards: Vehicle 1 vs Vehicle 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-[#23262E]/40 p-4 rounded-2xl border border-white/5">
            
            {/* Vehicle 1 Card Selector */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#23262E] border border-white/5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C9A24B] font-bold">
                    Vehicle 1
                  </span>
                  <select
                    value={v1.id}
                    onChange={(e) => {
                      const found = VEHICLES.find((v) => v.id === e.target.value);
                      if (found) onSelectVehicle1(found);
                    }}
                    className="px-2.5 py-1 text-xs rounded-lg bg-[#14161B] text-[#F2F0EA] border border-white/10 focus:border-[#C9A24B] cursor-pointer"
                  >
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[#14161B] mb-3">
                  <img
                    src={v1.thumbnail}
                    alt={v1.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/70 text-[#C9A24B]">
                    {v1.category}
                  </div>
                </div>

                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA]">
                  {v1.name}
                </h3>
                <p className="text-xs text-[#A7ABB5] line-clamp-1 italic mt-0.5">
                  {v1.tagline}
                </p>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-baseline justify-between">
                  <span className="text-[11px] text-[#A7ABB5] uppercase">Starting Price</span>
                  <span className="font-['Outfit',sans-serif] text-lg font-bold text-[#C9A24B]">
                    {formatIDR(v1.startingPriceIdr)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onSelectVehicleForModal(v1);
                  }}
                  className="py-2 px-2 rounded-lg bg-[#14161B] text-[#F2F0EA] hover:bg-black text-xs font-semibold inline-flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>Details</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onBookTestDrive(v1.name);
                  }}
                  className="py-2 px-2 rounded-lg bg-[#C9A24B] text-[#14161B] hover:bg-[#D9B45D] text-xs font-bold inline-flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-sm"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Test Drive</span>
                </button>
              </div>
            </div>

            {/* Vehicle 2 Card Selector */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#23262E] border border-white/5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C9A24B] font-bold">
                    Vehicle 2
                  </span>
                  <select
                    value={v2.id}
                    onChange={(e) => {
                      const found = VEHICLES.find((v) => v.id === e.target.value);
                      if (found) onSelectVehicle2(found);
                    }}
                    className="px-2.5 py-1 text-xs rounded-lg bg-[#14161B] text-[#F2F0EA] border border-white/10 focus:border-[#C9A24B] cursor-pointer"
                  >
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[#14161B] mb-3">
                  <img
                    src={v2.thumbnail}
                    alt={v2.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/70 text-[#C9A24B]">
                    {v2.category}
                  </div>
                </div>

                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA]">
                  {v2.name}
                </h3>
                <p className="text-xs text-[#A7ABB5] line-clamp-1 italic mt-0.5">
                  {v2.tagline}
                </p>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-baseline justify-between">
                  <span className="text-[11px] text-[#A7ABB5] uppercase">Starting Price</span>
                  <span className="font-['Outfit',sans-serif] text-lg font-bold text-[#C9A24B]">
                    {formatIDR(v2.startingPriceIdr)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onSelectVehicleForModal(v2);
                  }}
                  className="py-2 px-2 rounded-lg bg-[#14161B] text-[#F2F0EA] hover:bg-black text-xs font-semibold inline-flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>Details</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onBookTestDrive(v2.name);
                  }}
                  className="py-2 px-2 rounded-lg bg-[#C9A24B] text-[#14161B] hover:bg-[#D9B45D] text-xs font-bold inline-flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-sm"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Test Drive</span>
                </button>
              </div>
            </div>

          </div>

          {/* Pricing Analysis Highlight Banner */}
          {priceDiff > 0 && cheaperVehicle && (
            <div className="p-3.5 rounded-xl bg-[#23262E] border border-[#C9A24B]/30 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>
                  <strong>{cheaperVehicle}</strong> has a lower starting price by{' '}
                  <strong className="text-[#C9A24B]">{formatIDR(priceDiff)}</strong>.
                </span>
              </div>
              <span className="text-[11px] text-[#A7ABB5] shrink-0 hidden sm:inline">
                Both models include official manufacturer warranty
              </span>
            </div>
          )}

          {/* Side-by-Side Detailed Specification Comparison Table */}
          <div className="rounded-xl overflow-hidden border border-[#23262E] bg-[#23262E]/20">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#14161B] text-[#C9A24B] border-b border-[#23262E]">
                  <th className="py-3 px-4 w-1/4 font-semibold uppercase tracking-wider text-[11px]">
                    Specification
                  </th>
                  <th className="py-3 px-4 w-[37.5%] font-bold text-sm">
                    {v1.name}
                  </th>
                  <th className="py-3 px-4 w-[37.5%] font-bold text-sm">
                    {v2.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23262E]">
                
                {/* Section Header: Classification */}
                <tr className="bg-[#14161B]/60">
                  <td
                    colSpan={3}
                    className="py-2 px-4 text-[11px] font-bold uppercase tracking-wider text-[#C9A24B]"
                  >
                    1. General Classification &amp; Identity
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium">Category / Segment</td>
                  <td className="py-3 px-4 text-[#F2F0EA] font-semibold">{v1.category}</td>
                  <td className="py-3 px-4 text-[#F2F0EA] font-semibold">{v2.category}</td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium">Starting OTR Price</td>
                  <td className="py-3 px-4 text-[#C9A24B] font-bold">{formatIDR(v1.startingPriceIdr)}</td>
                  <td className="py-3 px-4 text-[#C9A24B] font-bold">{formatIDR(v2.startingPriceIdr)}</td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium">Seating Capacity</td>
                  <td className="py-3 px-4 text-[#F2F0EA]">{v1.specs.seatingCapacity}</td>
                  <td className="py-3 px-4 text-[#F2F0EA]">{v2.specs.seatingCapacity}</td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium">Exterior Dimensions</td>
                  <td className="py-3 px-4 text-[#F2F0EA]">{v1.specs.dimensions}</td>
                  <td className="py-3 px-4 text-[#F2F0EA]">{v2.specs.dimensions}</td>
                </tr>

                {/* Section Header: Powertrain */}
                <tr className="bg-[#14161B]/60">
                  <td
                    colSpan={3}
                    className="py-2 px-4 text-[11px] font-bold uppercase tracking-wider text-[#C9A24B]"
                  >
                    2. Powertrain &amp; Performance
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium">Engine / Motor</td>
                  <td className="py-3 px-4 text-[#F2F0EA] leading-relaxed">{v1.specs.engineOrMotor}</td>
                  <td className="py-3 px-4 text-[#F2F0EA] leading-relaxed">{v2.specs.engineOrMotor}</td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium">Power &amp; Output</td>
                  <td className="py-3 px-4 text-[#F2F0EA] font-semibold">
                    {v1.specs.powerOutput || 'Standard Manufacturer Output'}
                  </td>
                  <td className="py-3 px-4 text-[#F2F0EA] font-semibold">
                    {v2.specs.powerOutput || 'Standard Manufacturer Output'}
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium">Transmission</td>
                  <td className="py-3 px-4 text-[#F2F0EA]">{v1.specs.transmission}</td>
                  <td className="py-3 px-4 text-[#F2F0EA]">{v2.specs.transmission}</td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium">Drivetrain Type</td>
                  <td className="py-3 px-4 text-[#F2F0EA]">
                    {v1.specs.driveType || 'Front-Wheel Drive (FWD)'}
                  </td>
                  <td className="py-3 px-4 text-[#F2F0EA]">
                    {v2.specs.driveType || 'Front-Wheel Drive (FWD)'}
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium">Fuel &amp; Efficiency / Range</td>
                  <td className="py-3 px-4 text-[#F2F0EA]">{v1.specs.fuelTypeOrRange}</td>
                  <td className="py-3 px-4 text-[#F2F0EA]">{v2.specs.fuelTypeOrRange}</td>
                </tr>

                {/* Section Header: Key Features */}
                <tr className="bg-[#14161B]/60">
                  <td
                    colSpan={3}
                    className="py-2 px-4 text-[11px] font-bold uppercase tracking-wider text-[#C9A24B]"
                  >
                    3. Key Features &amp; Safety Technology
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium align-top">
                    Signature Technologies
                  </td>
                  <td className="py-3 px-4 align-top">
                    <ul className="space-y-1.5">
                      {v1.keyFeatures.map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[#F2F0EA]">
                          <Check className="w-3.5 h-3.5 text-[#C9A24B] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-3 px-4 align-top">
                    <ul className="space-y-1.5">
                      {v2.keyFeatures.map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[#F2F0EA]">
                          <Check className="w-3.5 h-3.5 text-[#C9A24B] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>

                {/* Section Header: Trims */}
                <tr className="bg-[#14161B]/60">
                  <td
                    colSpan={3}
                    className="py-2 px-4 text-[11px] font-bold uppercase tracking-wider text-[#C9A24B]"
                  >
                    4. Available Trims &amp; Pricing Tiers
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 text-[#A7ABB5] font-medium align-top">Trim Variants</td>
                  <td className="py-3 px-4 align-top space-y-2">
                    {v1.trims.map((t, i) => (
                      <div key={i} className="p-2 rounded bg-[#14161B]/80 border border-white/5 space-y-0.5">
                        <div className="flex items-center justify-between text-xs font-bold text-[#F2F0EA]">
                          <span>{t.name}</span>
                          <span className="text-[#C9A24B]">{formatIDR(t.priceIdr)}</span>
                        </div>
                        {t.highlight && (
                          <p className="text-[11px] text-[#A7ABB5]">{t.highlight}</p>
                        )}
                      </div>
                    ))}
                  </td>
                  <td className="py-3 px-4 align-top space-y-2">
                    {v2.trims.map((t, i) => (
                      <div key={i} className="p-2 rounded bg-[#14161B]/80 border border-white/5 space-y-0.5">
                        <div className="flex items-center justify-between text-xs font-bold text-[#F2F0EA]">
                          <span>{t.name}</span>
                          <span className="text-[#C9A24B]">{formatIDR(t.priceIdr)}</span>
                        </div>
                        {t.highlight && (
                          <p className="text-[11px] text-[#A7ABB5]">{t.highlight}</p>
                        )}
                      </div>
                    ))}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 px-6 border-t border-[#23262E] bg-[#14161B] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A7ABB5]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A24B]" />
            <span>Schedule back-to-back demonstration drives at our Marina Bay showroom</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#23262E] text-[#F2F0EA] hover:bg-[#23262E]/80 text-xs font-semibold cursor-pointer w-full sm:w-auto"
            >
              Close Comparison
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTestDrive(`${v1.name} & ${v2.name}`);
              }}
              className="px-4 py-2 rounded-lg bg-[#C9A24B] text-[#14161B] hover:bg-[#D9B45D] text-xs font-bold cursor-pointer inline-flex items-center justify-center gap-1.5 w-full sm:w-auto shadow-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Dual Test Drive</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
