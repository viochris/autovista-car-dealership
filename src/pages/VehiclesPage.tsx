import React, { useState, useMemo } from 'react';
import { VEHICLES, Vehicle, formatIDR } from '../data/vehicles';
import {
  Eye,
  CalendarCheck,
  Sparkles,
  Search,
  X,
  SlidersHorizontal,
  ArrowUpDown,
  ArrowRightLeft,
  Check,
  Plus,
  Scale,
} from 'lucide-react';
import { VehicleComparisonModal } from '../components/VehicleComparisonModal';

interface VehiclesPageProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
  onBookTestDrive: (vehicleName: string) => void;
}

type FilterCategory = 'All' | 'Sedan' | 'SUV' | 'MPV' | 'Electric' | 'Hatchback' | 'Coupe';
type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';
type PricePreset = 'all' | 'under-500m' | '500m-1b' | '1b-1.8b' | 'above-1.8b' | 'custom';

// Fleet Budget Boundaries
const FLEET_MIN_PRICE = 250000000; // Rp 250 Juta
const FLEET_MAX_PRICE = 2500000000; // Rp 2,5 Miliar
const PRICE_STEP = 25000000; // Rp 25 Juta

export const VehiclesPage: React.FC<VehiclesPageProps> = ({
  onSelectVehicle,
  onBookTestDrive,
}) => {
  // Category & Search State
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Price Filter State (Dual Point Min & Max)
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
  const [selectedPricePreset, setSelectedPricePreset] = useState<PricePreset>('all');
  const [minPrice, setMinPrice] = useState<number>(FLEET_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState<number>(FLEET_MAX_PRICE);
  // Dedicated string inputs to allow fluid user editing without premature clamping
  const [minInput, setMinInput] = useState<string>(String(Math.round(FLEET_MIN_PRICE / 1_000_000)));
  const [maxInput, setMaxInput] = useState<string>(String(Math.round(FLEET_MAX_PRICE / 1_000_000)));

  // Vehicle Comparison State (Max 2 vehicles)
  const [comparedVehicles, setComparedVehicles] = useState<Vehicle[]>([]);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [comparisonNotice, setComparisonNotice] = useState<string | null>(null);

  const filterButtons: FilterCategory[] = [
    'All',
    'Sedan',
    'SUV',
    'MPV',
    'Electric',
    'Hatchback',
    'Coupe',
  ];

  // Helper to count vehicles per category
  const getCategoryCount = (cat: FilterCategory) => {
    if (cat === 'All') return VEHICLES.length;
    return VEHICLES.filter((vehicle) => vehicle.categoryFilter === cat).length;
  };

  // Handle Preset Price Button
  const handleSelectPricePreset = (preset: PricePreset) => {
    setSelectedPricePreset(preset);
    let newMin = FLEET_MIN_PRICE;
    let newMax = FLEET_MAX_PRICE;
    if (preset === 'all') {
      newMin = FLEET_MIN_PRICE;
      newMax = FLEET_MAX_PRICE;
    } else if (preset === 'under-500m') {
      newMin = FLEET_MIN_PRICE;
      newMax = 500000000;
    } else if (preset === '500m-1b') {
      newMin = 500000000;
      newMax = 1000000000;
    } else if (preset === '1b-1.8b') {
      newMin = 1000000000;
      newMax = 1800000000;
    } else if (preset === 'above-1.8b') {
      newMin = 1800000000;
      newMax = FLEET_MAX_PRICE;
    }
    setMinPrice(newMin);
    setMaxPrice(newMax);
    setMinInput(String(Math.round(newMin / 1_000_000)));
    setMaxInput(String(Math.round(newMax / 1_000_000)));
  };

  const handleCommitMinInput = () => {
    const num = Number(minInput);
    if (isNaN(num) || num <= 0) {
      setMinInput(String(Math.round(minPrice / 1_000_000)));
      return;
    }
    const raw = num * 1_000_000;
    const clamped = Math.max(FLEET_MIN_PRICE, Math.min(raw, maxPrice - PRICE_STEP));
    setMinPrice(clamped);
    setMinInput(String(Math.round(clamped / 1_000_000)));
    setSelectedPricePreset('custom');
  };

  const handleCommitMaxInput = () => {
    const num = Number(maxInput);
    if (isNaN(num) || num <= 0) {
      setMaxInput(String(Math.round(maxPrice / 1_000_000)));
      return;
    }
    const raw = num * 1_000_000;
    const clamped = Math.min(FLEET_MAX_PRICE, Math.max(raw, minPrice + PRICE_STEP));
    setMaxPrice(clamped);
    setMaxInput(String(Math.round(clamped / 1_000_000)));
    setSelectedPricePreset('custom');
  };

  const handleStepMin = (deltaMillions: number) => {
    const newPrice = Math.max(
      FLEET_MIN_PRICE,
      Math.min(minPrice + deltaMillions * 1_000_000, maxPrice - PRICE_STEP)
    );
    setMinPrice(newPrice);
    setMinInput(String(Math.round(newPrice / 1_000_000)));
    setSelectedPricePreset('custom');
  };

  const handleStepMax = (deltaMillions: number) => {
    const newPrice = Math.min(
      FLEET_MAX_PRICE,
      Math.max(maxPrice + deltaMillions * 1_000_000, minPrice + PRICE_STEP)
    );
    setMaxPrice(newPrice);
    setMaxInput(String(Math.round(newPrice / 1_000_000)));
    setSelectedPricePreset('custom');
  };

  // Handle Toggle Compare for a Vehicle
  const handleToggleCompare = (vehicle: Vehicle) => {
    const isAlreadySelected = comparedVehicles.some((v) => v.id === vehicle.id);

    if (isAlreadySelected) {
      setComparedVehicles((prev) => prev.filter((v) => v.id !== vehicle.id));
      setComparisonNotice(null);
    } else {
      if (comparedVehicles.length >= 2) {
        // Replace second vehicle and notify
        setComparedVehicles([comparedVehicles[0], vehicle]);
        setComparisonNotice(`Replaced second comparison slot with ${vehicle.name}.`);
        setTimeout(() => setComparisonNotice(null), 3500);
      } else {
        const next = [...comparedVehicles, vehicle];
        setComparedVehicles(next);
        if (next.length === 2) {
          setComparisonNotice(`Selected 2 vehicles! Click "Compare Now" to view side-by-side specs.`);
          setTimeout(() => setComparisonNotice(null), 4000);
        }
      }
    }
  };

  const handleOpenComparisonModal = () => {
    if (comparedVehicles.length === 0) {
      // Preload 2 default benchmark vehicles (e.g. Camry and Civic RS)
      setComparedVehicles([VEHICLES[0], VEHICLES[1]]);
    } else if (comparedVehicles.length === 1) {
      // Add a suitable second vehicle from same or different class
      const alt = VEHICLES.find((v) => v.id !== comparedVehicles[0].id) || VEHICLES[1];
      setComparedVehicles([comparedVehicles[0], alt]);
    }
    setIsComparisonModalOpen(true);
  };

  // Filter & Search & Sort & Price Range
  const filteredVehicles = useMemo(() => {
    let result = VEHICLES.filter((vehicle) => {
      // 1. Category check
      const matchesCategory =
        activeFilter === 'All' || vehicle.categoryFilter === activeFilter;

      // 2. Price filter check
      const matchesPrice =
        vehicle.startingPriceIdr >= minPrice && vehicle.startingPriceIdr <= maxPrice;

      // 3. Search query check
      if (!searchQuery.trim()) return matchesCategory && matchesPrice;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        vehicle.name.toLowerCase().includes(q) ||
        vehicle.category.toLowerCase().includes(q) ||
        vehicle.categoryFilter.toLowerCase().includes(q) ||
        vehicle.tagline.toLowerCase().includes(q) ||
        vehicle.notes.toLowerCase().includes(q) ||
        vehicle.specs.engineOrMotor.toLowerCase().includes(q) ||
        vehicle.specs.fuelTypeOrRange.toLowerCase().includes(q) ||
        vehicle.specs.transmission.toLowerCase().includes(q) ||
        (vehicle.specs.driveType && vehicle.specs.driveType.toLowerCase().includes(q)) ||
        vehicle.keyFeatures.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesPrice && matchesSearch;
    });

    // Sort order
    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.startingPriceIdr - b.startingPriceIdr);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.startingPriceIdr - a.startingPriceIdr);
    } else if (sortBy === 'name-asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeFilter, searchQuery, sortBy, minPrice, maxPrice]);

  const handleResetFilters = () => {
    setActiveFilter('All');
    setSearchQuery('');
    setSortBy('featured');
    setSelectedPricePreset('all');
    setMinPrice(FLEET_MIN_PRICE);
    setMaxPrice(FLEET_MAX_PRICE);
    setMinInput(String(Math.round(FLEET_MIN_PRICE / 1_000_000)));
    setMaxInput(String(Math.round(FLEET_MAX_PRICE / 1_000_000)));
  };

  const isPriceFilterActive = maxPrice < FLEET_MAX_PRICE || minPrice > FLEET_MIN_PRICE;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 pb-28">
      
      {/* Page Title & Introduction Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
          Complete Curated Lineup
        </span>
        <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F0EA] tracking-tight">
          Our Vehicles
        </h1>
        <p className="text-sm sm:text-base text-[#A7ABB5] leading-relaxed text-balance">
          Explore our premier multi-brand showroom featuring 24 benchmark models across executive sedans, rugged family SUVs, luxurious MPVs, pure electric pioneers, agile hot hatchbacks, and performance sports coupes.
        </p>
      </div>

      {/* Control Panel: Search Bar + Sorting + Price Filter Toggle + Compare Trigger */}
      <div className="rounded-2xl bg-[#23262E] border border-[#23262E] p-4 sm:p-5 shadow-xl space-y-4">
        
        {/* Top Control Bar: Search Input, Price Filter Toggle, Compare Button & Sort Dropdown */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Search Input Bar */}
          <div className="relative flex-1 max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A7ABB5]">
              <Search className="w-4 h-4 text-[#C9A24B]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by model, brand, or powertrain (e.g. Camry, Hybrid, Turbo, AWD)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#14161B] border border-white/5 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-sm text-[#F2F0EA] placeholder-[#A7ABB5]/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#A7ABB5] hover:text-[#F2F0EA] transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Action Buttons: Price Filter Toggle, Compare Vehicles & Sort Dropdown */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Price Filter Collapsible Button */}
            <button
              onClick={() => setIsPriceFilterOpen((prev) => !prev)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer border ${
                isPriceFilterActive || isPriceFilterOpen
                  ? 'bg-[#C9A24B]/15 text-[#C9A24B] border-[#C9A24B]/40'
                  : 'bg-[#14161B] text-[#A7ABB5] hover:text-[#F2F0EA] border-white/5'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Budget Filter</span>
              {isPriceFilterActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
              )}
            </button>

            {/* Compare Vehicles Button */}
            <button
              onClick={handleOpenComparisonModal}
              className={`px-3 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer border ${
                comparedVehicles.length > 0
                  ? 'bg-[#C9A24B] text-[#14161B] border-[#C9A24B] shadow-md font-bold'
                  : 'bg-[#14161B] text-[#A7ABB5] hover:text-[#F2F0EA] border-white/5'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                  comparedVehicles.length > 0
                    ? 'bg-[#14161B]/20 text-[#14161B]'
                    : 'bg-white/10 text-[#C9A24B]'
                }`}
              >
                {comparedVehicles.length}/2
              </span>
            </button>

            {/* Sort By Dropdown */}
            <div className="flex items-center gap-1.5">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2 rounded-xl bg-[#14161B] border border-white/5 text-xs font-semibold text-[#F2F0EA] focus:border-[#C9A24B] focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>

          </div>

        </div>

        {/* Expandable Price Range Slider & Direct Input Filters */}
        {isPriceFilterOpen && (
          <div className="p-4 sm:p-6 rounded-2xl bg-[#14161B]/95 border border-[#C9A24B]/30 space-y-6 animate-in fade-in duration-200 shadow-2xl">
            
            {/* Header: Title, Active Range, and Reset Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
              <div>
                <h3 className="text-sm font-bold text-[#F2F0EA] flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#C9A24B]" />
                  <span>Budget Range Filter (Min &amp; Max)</span>
                </h3>
                <p className="text-xs text-[#A7ABB5] mt-0.5">
                  Drag the two knobs directly on the track or enter exact amounts in millions below.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#C9A24B] bg-[#23262E] px-3 py-1 rounded-lg border border-[#C9A24B]/30">
                  {formatIDR(minPrice)} – {formatIDR(maxPrice)}
                </span>
                {isPriceFilterActive && (
                  <button
                    onClick={() => handleSelectPricePreset('all')}
                    className="text-xs text-[#A7ABB5] hover:text-[#C9A24B] underline transition-colors cursor-pointer"
                  >
                    Reset Filter
                  </button>
                )}
              </div>
            </div>

            {/* Section 1: Interactive Dual-Thumb Range Slider Directly on Track */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#A7ABB5]">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-[#F2F0EA] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C9A24B]" />
                  <span>Interactive Dual-Knob Track Slider</span>
                </span>
                <span className="text-[#C9A24B] font-mono text-[11px]">
                  Drag green knob for Min • Drag red knob for Max
                </span>
              </div>

              {/* Slider Track with Knobs on the Bar */}
              <div className="relative w-full h-12 flex items-center select-none py-2 px-1">
                {/* Background Full Fleet Bar */}
                <div className="absolute left-1 right-1 h-3 bg-[#23262E] rounded-full overflow-hidden border border-white/10 pointer-events-none" />

                {/* Highlighted Active Segment on the Track */}
                <div
                  className="absolute h-3 bg-gradient-to-r from-emerald-500 via-[#C9A24B] to-rose-400 rounded-full pointer-events-none shadow-sm shadow-[#C9A24B]/30 transition-all duration-75"
                  style={{
                    left: `${Math.round(((minPrice - FLEET_MIN_PRICE) / (FLEET_MAX_PRICE - FLEET_MIN_PRICE)) * 100)}%`,
                    width: `${Math.max(
                      2,
                      Math.round(((maxPrice - minPrice) / (FLEET_MAX_PRICE - FLEET_MIN_PRICE)) * 100)
                    )}%`,
                  }}
                />

                {/* Min Slider Knob on the Track */}
                <input
                  type="range"
                  min={FLEET_MIN_PRICE}
                  max={FLEET_MAX_PRICE}
                  step={PRICE_STEP}
                  value={minPrice}
                  onChange={(e) => {
                    const val = Math.min(Number(e.target.value), maxPrice - PRICE_STEP);
                    setMinPrice(val);
                    setMinInput(String(Math.round(val / 1_000_000)));
                    setSelectedPricePreset('custom');
                  }}
                  className="absolute inset-0 w-full h-full bg-transparent pointer-events-none appearance-none cursor-pointer focus:outline-none z-20 
                    [&::-webkit-slider-thumb]:pointer-events-auto 
                    [&::-webkit-slider-thumb]:w-6 
                    [&::-webkit-slider-thumb]:h-6 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-emerald-400 
                    [&::-webkit-slider-thumb]:border-2 
                    [&::-webkit-slider-thumb]:border-[#14161B] 
                    [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(52,211,153,0.7)] 
                    [&::-webkit-slider-thumb]:cursor-grab 
                    [&::-webkit-slider-thumb]:active:cursor-grabbing 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-moz-range-thumb]:pointer-events-auto 
                    [&::-moz-range-thumb]:w-6 
                    [&::-moz-range-thumb]:h-6 
                    [&::-moz-range-thumb]:rounded-full 
                    [&::-moz-range-thumb]:bg-emerald-400 
                    [&::-moz-range-thumb]:border-2 
                    [&::-moz-range-thumb]:border-[#14161B] 
                    [&::-moz-range-thumb]:shadow-[0_0_12px_rgba(52,211,153,0.7)] 
                    [&::-moz-range-thumb]:cursor-grab 
                    [&::-moz-range-thumb]:active:cursor-grabbing"
                  aria-label="Minimum budget slider"
                />

                {/* Max Slider Knob on the Track */}
                <input
                  type="range"
                  min={FLEET_MIN_PRICE}
                  max={FLEET_MAX_PRICE}
                  step={PRICE_STEP}
                  value={maxPrice}
                  onChange={(e) => {
                    const val = Math.max(Number(e.target.value), minPrice + PRICE_STEP);
                    setMaxPrice(val);
                    setMaxInput(String(Math.round(val / 1_000_000)));
                    setSelectedPricePreset('custom');
                  }}
                  className="absolute inset-0 w-full h-full bg-transparent pointer-events-none appearance-none cursor-pointer focus:outline-none z-30 
                    [&::-webkit-slider-thumb]:pointer-events-auto 
                    [&::-webkit-slider-thumb]:w-6 
                    [&::-webkit-slider-thumb]:h-6 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-rose-400 
                    [&::-webkit-slider-thumb]:border-2 
                    [&::-webkit-slider-thumb]:border-[#14161B] 
                    [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(251,113,133,0.7)] 
                    [&::-webkit-slider-thumb]:cursor-grab 
                    [&::-webkit-slider-thumb]:active:cursor-grabbing 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-moz-range-thumb]:pointer-events-auto 
                    [&::-moz-range-thumb]:w-6 
                    [&::-moz-range-thumb]:h-6 
                    [&::-moz-range-thumb]:rounded-full 
                    [&::-moz-range-thumb]:bg-rose-400 
                    [&::-moz-range-thumb]:border-2 
                    [&::-moz-range-thumb]:border-[#14161B] 
                    [&::-moz-range-thumb]:shadow-[0_0_12px_rgba(251,113,133,0.7)] 
                    [&::-moz-range-thumb]:cursor-grab 
                    [&::-moz-range-thumb]:active:cursor-grabbing"
                  aria-label="Maximum budget slider"
                />
              </div>

              {/* Track Boundary Legend */}
              <div className="flex justify-between items-center text-[11px] text-[#A7ABB5] font-mono px-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block shadow-xs" />
                  <span>Min: {formatIDR(minPrice)}</span>
                </div>
                <div className="hidden sm:inline-block text-[#A7ABB5]/60 text-[10px]">
                  Fleet Bound: {formatIDR(FLEET_MIN_PRICE)} – {formatIDR(FLEET_MAX_PRICE)}
                </div>
                <div className="flex items-center gap-1.5 text-rose-400 font-semibold">
                  <span>Max: {formatIDR(maxPrice)}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block shadow-xs" />
                </div>
              </div>
            </div>

            {/* Section 2: Direct Amount Entry in Millions IDR */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center justify-between text-xs text-[#A7ABB5]">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-[#F2F0EA] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C9A24B]" />
                  <span>Direct Price Entry (In Millions IDR)</span>
                </span>
                <span className="text-[11px] text-[#A7ABB5]">
                  Type exact numbers or use ±50M buttons
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Min Price Input Card */}
                <div className="p-3.5 rounded-xl bg-[#23262E] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <label htmlFor="min-price-number" className="font-semibold text-[#F2F0EA] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Minimum Budget (Min)</span>
                    </label>
                    <span className="font-mono text-xs text-[#C9A24B]">
                      {formatIDR(minPrice)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#A7ABB5] bg-[#14161B] px-2.5 py-2 rounded-lg border border-white/5">
                      IDR
                    </span>
                    <input
                      id="min-price-number"
                      type="number"
                      value={minInput}
                      onChange={(e) => {
                        const valStr = e.target.value;
                        setMinInput(valStr);
                        const num = Number(valStr);
                        if (!isNaN(num) && num >= 100 && num <= (maxPrice - PRICE_STEP) / 1_000_000) {
                          setMinPrice(num * 1_000_000);
                          setSelectedPricePreset('custom');
                        }
                      }}
                      onBlur={handleCommitMinInput}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleCommitMinInput();
                          (e.target as HTMLInputElement).blur();
                        }
                      }}
                      placeholder="e.g. 500"
                      className="flex-1 px-3 py-2 rounded-lg bg-[#14161B] border border-white/10 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-sm font-mono text-[#F2F0EA]"
                    />
                    <span className="text-xs font-semibold text-[#A7ABB5]">Million</span>

                    {/* Quick Step Buttons for Min */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleStepMin(-50)}
                        className="px-2.5 py-2 rounded-lg bg-[#14161B] hover:bg-black text-[11px] font-mono text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/5 transition-colors cursor-pointer"
                        title="Decrease by 50 Million"
                      >
                        -50M
                      </button>
                      <button
                        type="button"
                        onClick={() => handleStepMin(50)}
                        className="px-2.5 py-2 rounded-lg bg-[#14161B] hover:bg-black text-[11px] font-mono text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/5 transition-colors cursor-pointer"
                        title="Increase by 50 Million"
                      >
                        +50M
                      </button>
                    </div>
                  </div>
                </div>

                {/* Max Price Input Card */}
                <div className="p-3.5 rounded-xl bg-[#23262E] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <label htmlFor="max-price-number" className="font-semibold text-[#F2F0EA] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      <span>Maximum Budget (Max)</span>
                    </label>
                    <span className="font-mono text-xs text-[#C9A24B]">
                      {formatIDR(maxPrice)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#A7ABB5] bg-[#14161B] px-2.5 py-2 rounded-lg border border-white/5">
                      IDR
                    </span>
                    <input
                      id="max-price-number"
                      type="number"
                      value={maxInput}
                      onChange={(e) => {
                        const valStr = e.target.value;
                        setMaxInput(valStr);
                        const num = Number(valStr);
                        if (!isNaN(num) && num >= (minPrice + PRICE_STEP) / 1_000_000 && num <= FLEET_MAX_PRICE / 1_000_000) {
                          setMaxPrice(num * 1_000_000);
                          setSelectedPricePreset('custom');
                        }
                      }}
                      onBlur={handleCommitMaxInput}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleCommitMaxInput();
                          (e.target as HTMLInputElement).blur();
                        }
                      }}
                      placeholder="e.g. 1800"
                      className="flex-1 px-3 py-2 rounded-lg bg-[#14161B] border border-white/10 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-sm font-mono text-[#F2F0EA]"
                    />
                    <span className="text-xs font-semibold text-[#A7ABB5]">Million</span>

                    {/* Quick Step Buttons for Max */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleStepMax(-50)}
                        className="px-2.5 py-2 rounded-lg bg-[#14161B] hover:bg-black text-[11px] font-mono text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/5 transition-colors cursor-pointer"
                        title="Decrease by 50 Million"
                      >
                        -50M
                      </button>
                      <button
                        type="button"
                        onClick={() => handleStepMax(50)}
                        className="px-2.5 py-2 rounded-lg bg-[#14161B] hover:bg-black text-[11px] font-mono text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/5 transition-colors cursor-pointer"
                        title="Increase by 50 Million"
                      >
                        +50M
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Section 3: Quick Budget Presets in English */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
              <span className="text-[11px] text-[#A7ABB5] mr-1 font-semibold">Quick Presets:</span>
              
              <button
                type="button"
                onClick={() => handleSelectPricePreset('all')}
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                  selectedPricePreset === 'all'
                    ? 'bg-[#C9A24B] text-[#14161B] font-bold shadow-sm'
                    : 'bg-[#23262E] text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/5'
                }`}
              >
                All Budgets
              </button>

              <button
                type="button"
                onClick={() => handleSelectPricePreset('under-500m')}
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                  selectedPricePreset === 'under-500m'
                    ? 'bg-[#C9A24B] text-[#14161B] font-bold shadow-sm'
                    : 'bg-[#23262E] text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/5'
                }`}
              >
                Under IDR 500M
              </button>

              <button
                type="button"
                onClick={() => handleSelectPricePreset('500m-1b')}
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                  selectedPricePreset === '500m-1b'
                    ? 'bg-[#C9A24B] text-[#14161B] font-bold shadow-sm'
                    : 'bg-[#23262E] text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/5'
                }`}
              >
                IDR 500M – 1B
              </button>

              <button
                type="button"
                onClick={() => handleSelectPricePreset('1b-1.8b')}
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                  selectedPricePreset === '1b-1.8b'
                    ? 'bg-[#C9A24B] text-[#14161B] font-bold shadow-sm'
                    : 'bg-[#23262E] text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/5'
                }`}
              >
                IDR 1B – 1.8B
              </button>

              <button
                type="button"
                onClick={() => handleSelectPricePreset('above-1.8b')}
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                  selectedPricePreset === 'above-1.8b'
                    ? 'bg-[#C9A24B] text-[#14161B] font-bold shadow-sm'
                    : 'bg-[#23262E] text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/5'
                }`}
              >
                Above IDR 1.8B
              </button>
            </div>

          </div>
        )}

        {/* Category Filter Tabs with Exact Dynamic Vehicle Counts */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-2">
          {filterButtons.map((cat) => {
            const isActive = activeFilter === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer inline-flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#C9A24B] text-[#14161B] shadow-md shadow-[#C9A24B]/10 font-bold'
                    : 'bg-[#14161B]/80 text-[#A7ABB5] hover:text-[#F2F0EA] hover:bg-[#14161B]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
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

        {/* Live Filter Indicator Bar */}
        <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#A7ABB5]">
          <div className="flex flex-wrap items-center gap-2">
            <span>
              Showing <strong className="text-[#F2F0EA]">{filteredVehicles.length}</strong> of{' '}
              <strong className="text-[#F2F0EA]">{VEHICLES.length}</strong> vehicles
            </span>
            {searchQuery && (
              <span className="text-[#C9A24B]">
                matching &ldquo;{searchQuery}&rdquo;
              </span>
            )}
            {isPriceFilterActive && (
              <span className="text-[#C9A24B] bg-[#14161B] px-2 py-0.5 rounded border border-white/5">
                Budget: {formatIDR(minPrice)} – {formatIDR(maxPrice)}
              </span>
            )}
          </div>

          {(activeFilter !== 'All' || searchQuery || sortBy !== 'featured' || isPriceFilterActive) && (
            <button
              onClick={handleResetFilters}
              className="text-[#C9A24B] hover:underline font-semibold text-xs cursor-pointer text-left sm:text-right"
            >
              Reset All Filters
            </button>
          )}
        </div>

      </div>

      {/* Comparison User Toast Notification */}
      {comparisonNotice && (
        <div className="p-3 rounded-xl bg-[#23262E] border border-[#C9A24B] text-xs text-[#F2F0EA] flex items-center justify-between gap-3 shadow-lg animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C9A24B] shrink-0" />
            <span>{comparisonNotice}</span>
          </div>
          <button
            onClick={handleOpenComparisonModal}
            className="px-3 py-1 rounded bg-[#C9A24B] text-[#14161B] font-bold text-xs shrink-0 cursor-pointer"
          >
            Open Comparison
          </button>
        </div>
      )}

      {/* Grid of Vehicles or Empty State */}
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => {
            const isCompared = comparedVehicles.some((v) => v.id === vehicle.id);

            return (
              <div
                key={vehicle.id}
                className={`group rounded-2xl bg-[#23262E] border transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-xl ${
                  isCompared
                    ? 'border-[#C9A24B] ring-1 ring-[#C9A24B]/40 shadow-[#C9A24B]/10'
                    : 'border-[#23262E] hover:border-[#C9A24B]/50 hover:shadow-[#C9A24B]/5'
                }`}
              >
                {/* Card Top: Clickable image and main tags */}
                <div className="relative">
                  <div
                    onClick={() => onSelectVehicle(vehicle)}
                    className="cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#14161B]">
                      <img
                        src={vehicle.thumbnail}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 bg-[#14161B]/85 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-semibold text-[#C9A24B] border border-white/10">
                        {vehicle.category}
                      </div>

                      <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-[10px] text-[#A7ABB5] px-2 py-0.5 rounded">
                        Verified Vehicle Photo
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h2 className="font-['Outfit',sans-serif] text-2xl font-bold text-[#F2F0EA] group-hover:text-[#C9A24B] transition-colors">
                          {vehicle.name}
                        </h2>
                      </div>

                      <p className="text-xs sm:text-sm text-[#A7ABB5] leading-relaxed line-clamp-2">
                        {vehicle.tagline}
                      </p>

                      <div className="pt-2 text-xs text-[#A7ABB5]/90 flex flex-wrap gap-x-3 gap-y-1">
                        <span>{vehicle.specs.seatingCapacity}</span>
                        <span>•</span>
                        <span>{vehicle.specs.fuelTypeOrRange.split('(')[0].trim()}</span>
                        {vehicle.specs.driveType && (
                          <>
                            <span>•</span>
                            <span>{vehicle.specs.driveType.split('/')[0].trim()}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Compare Toggle Pill on Top Right of Card Image */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleCompare(vehicle);
                    }}
                    className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-md inline-flex items-center gap-1.5 backdrop-blur-sm ${
                      isCompared
                        ? 'bg-[#C9A24B] text-[#14161B] font-bold border border-[#C9A24B]'
                        : 'bg-[#14161B]/85 text-[#A7ABB5] hover:text-[#F2F0EA] border border-white/10 hover:border-[#C9A24B]/50'
                    }`}
                    title={isCompared ? 'Remove from comparison' : 'Add to side-by-side comparison'}
                  >
                    {isCompared ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Comparing</span>
                      </>
                    ) : (
                      <>
                        <ArrowRightLeft className="w-3.5 h-3.5 text-[#C9A24B]" />
                        <span>Compare</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Card Footer: Starting Price in Rupiah & "View Details" CTA button */}
                <div className="p-6 pt-4 border-t border-[#14161B] bg-[#23262E]/70 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#A7ABB5]">
                      Starting Price
                    </span>
                    <span className="font-['Outfit',sans-serif] text-xl font-bold text-[#C9A24B] tabular-nums">
                      {formatIDR(vehicle.startingPriceIdr)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onSelectVehicle(vehicle)}
                      className="w-full py-2.5 px-3 rounded-lg bg-[#14161B] text-[#F2F0EA] hover:bg-[#14161B]/80 hover:text-white border border-[#23262E] text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors focus:outline-none cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C9A24B]" />
                      <span>View Details</span>
                    </button>

                    <button
                      onClick={() => onBookTestDrive(vehicle.name)}
                      className="w-full py-2.5 px-3 rounded-lg bg-[#C9A24B] text-[#14161B] hover:bg-[#D9B45D] text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors shadow-sm focus:outline-none cursor-pointer"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-[#14161B]" />
                      <span>Test Drive</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl bg-[#23262E] border border-[#23262E] p-12 text-center space-y-4 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-[#14161B] text-[#C9A24B] flex items-center justify-center mx-auto border border-[#C9A24B]/30">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA]">
            No Vehicles Match Your Criteria
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ABB5] leading-relaxed">
            {isPriceFilterActive
              ? `No vehicles found within your selected budget range (${formatIDR(minPrice)} – ${formatIDR(maxPrice)}). Try adjusting your budget slider or resetting filters.`
              : `We couldn't find any vehicles matching "${searchQuery}" in the selected category. Try searching for a different model name or resetting your filters.`}
          </p>
          <div className="pt-2">
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-lg bg-[#C9A24B] text-[#14161B] font-bold text-xs hover:bg-[#D9B45D] transition-colors cursor-pointer"
            >
              Reset All Filters &amp; Budget
            </button>
          </div>
        </div>
      )}

      {/* Information Banner on Lineup Authenticity */}
      <div className="p-6 rounded-xl bg-[#23262E]/50 border border-[#23262E] text-xs text-[#A7ABB5] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#C9A24B] shrink-0" />
          <span>
            Every vehicle displayed represents an official model offered through AutoVista Motors. Full OTR pricing, warranty guidelines, and trim availability can be examined in our private consultation suites.
          </span>
        </div>
        <button
          onClick={() => onBookTestDrive('')}
          className="text-[#C9A24B] font-semibold hover:underline shrink-0 whitespace-nowrap inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Schedule Showroom Visit</span>
        </button>
      </div>

      {/* Floating Bottom Comparison Dock (Visible whenever >= 1 vehicle is selected) */}
      {comparedVehicles.length > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-4xl mx-auto rounded-2xl bg-[#14161B]/95 backdrop-blur-md border border-[#C9A24B]/40 shadow-2xl p-3 sm:p-4 animate-in slide-in-from-bottom duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Slot Preview Thumbnails */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              
              {/* Slot 1 */}
              <div className="flex items-center gap-2 p-1.5 pr-3 rounded-xl bg-[#23262E] border border-white/5 relative">
                <div className="w-10 h-7 rounded overflow-hidden bg-black shrink-0">
                  <img
                    src={comparedVehicles[0].thumbnail}
                    alt={comparedVehicles[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-[#A7ABB5] block leading-none">Vehicle 1</span>
                  <span className="text-xs font-bold text-[#F2F0EA] truncate max-w-[120px] block">
                    {comparedVehicles[0].name}
                  </span>
                </div>
                <button
                  onClick={() =>
                    setComparedVehicles((prev) => prev.filter((_, i) => i !== 0))
                  }
                  className="text-[#A7ABB5] hover:text-[#F2F0EA] p-0.5 ml-1"
                  title="Remove vehicle 1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Slot 2 */}
              {comparedVehicles.length > 1 ? (
                <div className="flex items-center gap-2 p-1.5 pr-3 rounded-xl bg-[#23262E] border border-white/5 relative">
                  <div className="w-10 h-7 rounded overflow-hidden bg-black shrink-0">
                    <img
                      src={comparedVehicles[1].thumbnail}
                      alt={comparedVehicles[1].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-[#A7ABB5] block leading-none">Vehicle 2</span>
                    <span className="text-xs font-bold text-[#F2F0EA] truncate max-w-[120px] block">
                      {comparedVehicles[1].name}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setComparedVehicles((prev) => prev.filter((_, i) => i !== 1))
                    }
                    className="text-[#A7ABB5] hover:text-[#F2F0EA] p-0.5 ml-1"
                    title="Remove vehicle 2"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 p-2 px-3 rounded-xl bg-[#23262E]/50 border border-dashed border-white/20 text-[#A7ABB5] text-xs">
                  <Plus className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>Select 2nd model</span>
                </div>
              )}

            </div>

            {/* Actions: Clear & Compare Now */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => setComparedVehicles([])}
                className="px-3 py-2 rounded-xl text-xs text-[#A7ABB5] hover:text-[#F2F0EA] hover:bg-[#23262E] transition-colors cursor-pointer"
              >
                Clear
              </button>

              <button
                onClick={handleOpenComparisonModal}
                className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-[#C9A24B] hover:bg-[#D9B45D] text-[#14161B] font-bold text-xs transition-all shadow-md inline-flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
              >
                <Scale className="w-4 h-4" />
                <span>
                  {comparedVehicles.length === 2
                    ? 'Compare Now'
                    : 'Compare with Companion'}
                </span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Side-by-Side Comparison Modal */}
      <VehicleComparisonModal
        isOpen={isComparisonModalOpen}
        vehicle1={comparedVehicles[0] || VEHICLES[0]}
        vehicle2={
          comparedVehicles[1] ||
          (VEHICLES[1].id !== (comparedVehicles[0]?.id || '') ? VEHICLES[1] : VEHICLES[2])
        }
        onClose={() => setIsComparisonModalOpen(false)}
        onSelectVehicle1={(v) => {
          setComparedVehicles((prev) => [v, prev[1] || VEHICLES[1]]);
        }}
        onSelectVehicle2={(v) => {
          setComparedVehicles((prev) => [prev[0] || VEHICLES[0], v]);
        }}
        onSwapVehicles={() => {
          setComparedVehicles((prev) => {
            const v1 = prev[0] || VEHICLES[0];
            const v2 = prev[1] || VEHICLES[1];
            return [v2, v1];
          });
        }}
        onSelectVehicleForModal={onSelectVehicle}
        onBookTestDrive={onBookTestDrive}
      />

    </div>
  );
};
