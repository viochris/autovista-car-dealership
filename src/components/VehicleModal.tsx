import React, { useEffect, useState } from 'react';
import { Vehicle, formatIDR } from '../data/vehicles';
import { X, CalendarCheck, CheckCircle2, Info, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onBookTestDrive: (vehicleName: string) => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({
  vehicle,
  onClose,
  onBookTestDrive,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset image index when vehicle changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [vehicle]);

  if (!vehicle) return null;

  const currentImageUrl = vehicle.gallery[selectedImageIndex] || vehicle.thumbnail;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        // Dismiss when clicking outside modal container
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-vehicle-title"
    >
      <div className="relative w-full max-w-4xl bg-[#14161B] border border-[#23262E] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header Bar with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#23262E] bg-[#14161B]/90 sticky top-0 z-10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
              {vehicle.category}
            </span>
            <span className="text-[#A7ABB5]">•</span>
            <span className="text-xs text-[#A7ABB5]">Flagship Specification</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#A7ABB5] hover:text-[#F2F0EA] hover:bg-[#23262E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
            aria-label="Close vehicle details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {/* Top Title & Price Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#23262E]">
            <div>
              <h2
                id="modal-vehicle-title"
                className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#F2F0EA]"
              >
                {vehicle.name}
              </h2>
              <p className="text-sm text-[#A7ABB5] mt-1 italic">
                {vehicle.tagline}
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-[#A7ABB5] uppercase tracking-wider block">
                Starting Price (OTR Flagship Delivery)
              </span>
              <span className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#C9A24B] tabular-nums">
                {formatIDR(vehicle.startingPriceIdr)}
              </span>
            </div>
          </div>

          {/* Section 7.3: Image Gallery Carousel & Thumbnail Strip */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#23262E] border border-[#23262E] shadow-inner group">
              <img
                src={currentImageUrl}
                alt={vehicle.name} // AC6: alt text exactly matches the real vehicle name
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
              />
              
              {/* Carousel Next / Prev Controls */}
              {vehicle.gallery.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === 0 ? vehicle.gallery.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-[#F2F0EA] hover:bg-[#C9A24B] hover:text-[#14161B] transition-colors focus:outline-none"
                    aria-label="Previous vehicle photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === vehicle.gallery.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-[#F2F0EA] hover:bg-[#C9A24B] hover:text-[#14161B] transition-colors focus:outline-none"
                    aria-label="Next vehicle photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Attribution Overlay Badge */}
              <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-[10px] text-[#A7ABB5] px-2.5 py-1 rounded border border-white/10">
                Real photo · Wikimedia Commons ({vehicle.imageAttribution.license})
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {vehicle.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    selectedImageIndex === idx
                      ? 'border-[#C9A24B] ring-2 ring-[#C9A24B]/30 scale-102'
                      : 'border-[#23262E] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={vehicle.name} // AC6: alt text exactly matches the real vehicle name
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Section 7.3: Full Specification Table */}
          <div className="space-y-3">
            <h3 className="font-['Outfit',sans-serif] text-base font-semibold text-[#F2F0EA] flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#C9A24B] rounded-full" />
              Technical Specifications
            </h3>

            <div className="bg-[#23262E] rounded-xl border border-[#23262E] overflow-hidden">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-[#14161B]/60">
                  <tr className="hover:bg-[#14161B]/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-[#A7ABB5] w-1/3">
                      Engine / Motor Type
                    </td>
                    <td className="py-3 px-4 text-[#F2F0EA]">
                      {vehicle.specs.engineOrMotor}
                    </td>
                  </tr>
                  <tr className="hover:bg-[#14161B]/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-[#A7ABB5]">
                      Transmission
                    </td>
                    <td className="py-3 px-4 text-[#F2F0EA]">
                      {vehicle.specs.transmission}
                    </td>
                  </tr>
                  <tr className="hover:bg-[#14161B]/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-[#A7ABB5]">
                      Seating Capacity
                    </td>
                    <td className="py-3 px-4 text-[#F2F0EA]">
                      {vehicle.specs.seatingCapacity}
                    </td>
                  </tr>
                  <tr className="hover:bg-[#14161B]/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-[#A7ABB5]">
                      Fuel Type / Electric Range
                    </td>
                    <td className="py-3 px-4 text-[#F2F0EA]">
                      {vehicle.specs.fuelTypeOrRange}
                    </td>
                  </tr>
                  <tr className="hover:bg-[#14161B]/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-[#A7ABB5]">
                      Key Dimensions &amp; Wheelbase
                    </td>
                    <td className="py-3 px-4 text-[#F2F0EA]">
                      {vehicle.specs.dimensions}
                    </td>
                  </tr>
                  {vehicle.specs.powerOutput && (
                    <tr className="hover:bg-[#14161B]/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-[#A7ABB5]">
                        Power Output
                      </td>
                      <td className="py-3 px-4 text-[#F2F0EA]">
                        {vehicle.specs.powerOutput}
                      </td>
                    </tr>
                  )}
                  {vehicle.specs.driveType && (
                    <tr className="hover:bg-[#14161B]/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-[#A7ABB5]">
                        Drivetrain Platform
                      </td>
                      <td className="py-3 px-4 text-[#F2F0EA]">
                        {vehicle.specs.driveType}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 7.3: Available Trims & Variants with Individual Pricing */}
          <div className="space-y-3">
            <h3 className="font-['Outfit',sans-serif] text-base font-semibold text-[#F2F0EA] flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#C9A24B] rounded-full" />
              Available Trims &amp; Pricing Breakdown
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {vehicle.trims.map((trim, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#23262E] border border-[#23262E] hover:border-[#C9A24B]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A7ABB5]">
                      Variant {idx + 1}
                    </span>
                    <h4 className="font-['Outfit',sans-serif] text-base font-semibold text-[#F2F0EA] mt-0.5">
                      {trim.name}
                    </h4>
                    {trim.highlight && (
                      <p className="text-xs text-[#A7ABB5] mt-1.5 leading-relaxed">
                        {trim.highlight}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#14161B] flex items-center justify-between">
                    <span className="text-xs text-[#A7ABB5]">On-The-Road Price</span>
                    <span className="text-base font-bold text-[#C9A24B] tabular-nums">
                      {formatIDR(trim.priceIdr)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7.3: Key Features (3-5 items as short bulleted list) */}
          <div className="space-y-3">
            <h3 className="font-['Outfit',sans-serif] text-base font-semibold text-[#F2F0EA] flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#C9A24B] rounded-full" />
              Key Vehicle Highlights
            </h3>

            <div className="bg-[#23262E] rounded-xl p-5 border border-[#23262E]">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {vehicle.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F2F0EA]">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Attribution Note */}
          <div className="p-3.5 rounded-lg bg-[#23262E]/40 border border-[#23262E] text-xs text-[#A7ABB5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C9A24B]" />
              <span>Real photograph license: {vehicle.imageAttribution.license}</span>
            </div>
            <a
              href={vehicle.imageAttribution.originalWikiUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#C9A24B] hover:underline flex items-center gap-1"
            >
              Wikimedia Commons Source <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Modal Footer Call-to-Action Bar */}
        <div className="px-6 py-4 bg-[#14161B] border-t border-[#23262E] flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-10">
          <div className="text-xs text-[#A7ABB5] text-center sm:text-left">
            Test drive reservations include dedicated showroom concierge and demonstration drive.
          </div>

          {/* Section 7.3: Pre-fills vehicle as preferred vehicle when linking to Test Drive page */}
          <button
            onClick={() => {
              onBookTestDrive(vehicle.name);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C9A24B] text-[#14161B] font-semibold text-sm hover:bg-[#D9B45D] active:scale-[0.98] transition-all shadow-md shadow-[#C9A24B]/10 whitespace-nowrap"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book a Test Drive for {vehicle.name}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
