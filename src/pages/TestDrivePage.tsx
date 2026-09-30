import React, { useState, useEffect } from 'react';
import { VEHICLES, formatIDR } from '../data/vehicles';
import { PageRoute } from '../components/Header';
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Car,
  User,
  Phone,
  Mail,
  FileText,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Fuel,
  Gauge,
  Users,
  AlertCircle,
} from 'lucide-react';

interface TestDrivePageProps {
  preselectedVehicle?: string;
  onNavigate: (page: PageRoute) => void;
}

// Helper to resolve exact Vehicle object from name, id, or partial string
const resolveVehicle = (nameOrId?: string): (typeof VEHICLES)[0] => {
  if (!nameOrId || !nameOrId.trim()) return VEHICLES[0];
  const clean = nameOrId.trim().toLowerCase();
  const found =
    VEHICLES.find((v) => v.name.toLowerCase() === clean) ||
    VEHICLES.find((v) => v.id.toLowerCase() === clean) ||
    VEHICLES.find((v) => v.name.toLowerCase().includes(clean)) ||
    VEHICLES.find((v) => clean.includes(v.name.toLowerCase()));
  return found || VEHICLES[0];
};

export const TestDrivePage: React.FC<TestDrivePageProps> = ({
  preselectedVehicle,
  onNavigate,
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  // Validation Errors State
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  
  // Resolve vehicle based on prop
  const initialVehicle = resolveVehicle(preselectedVehicle);
  const [selectedVehicle, setSelectedVehicle] = useState(initialVehicle.name);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [message, setMessage] = useState('');

  // Confirmation State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Update selected vehicle whenever prop changes
  useEffect(() => {
    if (preselectedVehicle) {
      const match = resolveVehicle(preselectedVehicle);
      setSelectedVehicle(match.name);
    }
  }, [preselectedVehicle]);

  // Set default preferred date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setPreferredDate(dateStr);
  }, []);

  // Validate Email Address
  const validateEmail = (val: string): string | null => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Email address is required.';
    }
    if (!trimmed.includes('@')) {
      return "Email must contain '@'.";
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address.';
    }
    return null;
  };

  // Validate WhatsApp / Phone Number
  const validatePhone = (val: string): string | null => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Phone number is required.';
    }
    if (!trimmed.startsWith('+')) {
      return "Must start with '+' and country code (e.g. +62).";
    }
    // Clean spaces, hyphens, and parentheses
    const digitsOnly = trimmed.slice(1).replace(/[\s\-().]/g, '');
    if (!/^\d+$/.test(digitsOnly)) {
      return 'Numbers only after the country code (+).';
    }
    if (digitsOnly.length < 8 || digitsOnly.length > 15) {
      return 'Phone number must be 8–15 digits.';
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    const emailErr = validateEmail(email);
    const phoneErr = validatePhone(phone);

    setEmailError(emailErr);
    setPhoneError(phoneErr);

    if (emailErr || phoneErr) {
      if (phoneErr) {
        document.getElementById('test-drive-phone')?.focus();
      } else if (emailErr) {
        document.getElementById('test-drive-email')?.focus();
      }
      return;
    }

    // Generate realistic reservation reference
    const randomCode = 'AVM-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(randomCode);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setMessage('');
    setEmailError(null);
    setPhoneError(null);
    setHasAttemptedSubmit(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const chosenVehicleData = resolveVehicle(selectedVehicle);

  const handleNavigateTop = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Page Title & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23262E] border border-[#C9A24B]/30 text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VIP Concierge Reservation</span>
        </div>
        <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F0EA] tracking-tight">
          Book a Test Drive
        </h1>
        <p className="text-sm sm:text-base text-[#A7ABB5] leading-relaxed text-balance">
          Experience the performance, engineering, and craftsmanship of our curated fleet along Marina Bay&apos;s scenic demonstration route.
        </p>
      </div>

      {/* Main Container */}
      {!isSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Reservation Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#23262E] border border-[#23262E] shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Header Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#14161B]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#14161B] text-[#C9A24B] flex items-center justify-center border border-[#C9A24B]/30">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-['Outfit',sans-serif] text-lg font-bold text-[#F2F0EA]">
                    Reservation Details
                  </h2>
                  <p className="text-xs text-[#A7ABB5]">
                    Step 1 of 1 — Instant In-Page Confirmation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#C9A24B] font-medium bg-[#14161B] px-3 py-1.5 rounded-full border border-[#C9A24B]/20 w-fit">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Obligation</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#F2F0EA] uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C9A24B]" />
                    <span>Full Name</span>
                    <span className="text-[#C9A24B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Henry Crawford"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#14161B] border border-[#14161B] focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-[#F2F0EA] text-sm placeholder-[#A7ABB5]/50 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="test-drive-phone" className="text-xs font-semibold text-[#F2F0EA] uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
                    <span>WhatsApp / Phone</span>
                    <span className="text-[#C9A24B]">*</span>
                  </label>
                  <input
                    id="test-drive-phone"
                    type="tel"
                    required
                    placeholder="+62 812 3456 7890"
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value;
                      setPhone(val);
                      if (hasAttemptedSubmit || phoneError) {
                        setPhoneError(validatePhone(val));
                      }
                    }}
                    onBlur={() => {
                      if (phone) {
                        setPhoneError(validatePhone(phone));
                      }
                    }}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#14161B] text-[#F2F0EA] text-sm placeholder-[#A7ABB5]/40 transition-colors border ${
                      phoneError
                        ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/40'
                        : 'border-[#14161B] focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]'
                    }`}
                  />
                  {phoneError && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1 animate-in fade-in duration-150">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{phoneError}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Email Address & Preferred Vehicle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="test-drive-email" className="text-xs font-semibold text-[#F2F0EA] uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C9A24B]" />
                    <span>Email Address</span>
                    <span className="text-[#C9A24B]">*</span>
                  </label>
                  <input
                    id="test-drive-email"
                    type="email"
                    required
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEmail(val);
                      if (hasAttemptedSubmit || emailError) {
                        setEmailError(validateEmail(val));
                      }
                    }}
                    onBlur={() => {
                      if (email) {
                        setEmailError(validateEmail(email));
                      }
                    }}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#14161B] text-[#F2F0EA] text-sm placeholder-[#A7ABB5]/40 transition-colors border ${
                      emailError
                        ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/40'
                        : 'border-[#14161B] focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]'
                    }`}
                  />
                  {emailError && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1 animate-in fade-in duration-150">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{emailError}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#F2F0EA] uppercase tracking-wider flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#C9A24B]" />
                    <span>Preferred Vehicle</span>
                    <span className="text-[#C9A24B]">*</span>
                  </label>
                  <select
                    required
                    value={chosenVehicleData.name}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#14161B] border border-[#14161B] focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-[#F2F0EA] text-sm transition-colors cursor-pointer"
                  >
                    {VEHICLES.map((vehicle) => (
                      <option key={vehicle.id} value={vehicle.name}>
                        {vehicle.name} ({vehicle.category})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#F2F0EA] uppercase tracking-wider flex items-center gap-1.5">
                    <CalendarCheck className="w-3.5 h-3.5 text-[#C9A24B]" />
                    <span>Preferred Date</span>
                    <span className="text-[#C9A24B]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#14161B] border border-[#14161B] focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-[#F2F0EA] text-sm transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#F2F0EA] uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C9A24B]" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#14161B] border border-[#14161B] focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-[#F2F0EA] text-sm transition-colors cursor-pointer"
                  >
                    <option value="09:30 AM">09:30 AM (Morning Session)</option>
                    <option value="11:00 AM">11:00 AM (Late Morning)</option>
                    <option value="02:00 PM">02:00 PM (Early Afternoon)</option>
                    <option value="04:00 PM">04:00 PM (Golden Hour Sunset Drive)</option>
                    <option value="06:00 PM">06:00 PM (Evening City Lights)</option>
                  </select>
                </div>
              </div>

              {/* Special Request or Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#F2F0EA] uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>Special Requests or Focus (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Would like to test hybrid efficiency, examine second-row space, or discuss trade-in appraisal..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#14161B] border border-[#14161B] focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-[#F2F0EA] text-sm placeholder-[#A7ABB5]/50 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#C9A24B] text-[#14161B] font-bold text-sm sm:text-base hover:bg-[#D9B45D] active:scale-[0.99] transition-all shadow-xl shadow-[#C9A24B]/15 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5 text-[#14161B]" />
                  <span>Confirm VIP Test Drive Reservation</span>
                </button>
                <p className="text-[11px] text-center text-[#A7ABB5] mt-2.5">
                  No advance fee or credit card required. Free cancellation at any time.
                </p>
              </div>

            </form>
          </div>

          {/* Right Column: Companion Vehicle Preview Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Vehicle Highlight Card */}
            <div className="rounded-2xl bg-[#23262E] border border-[#23262E] overflow-hidden shadow-2xl space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#14161B]">
                <img
                  src={chosenVehicleData.thumbnail}
                  alt={chosenVehicleData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#14161B]/85 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-semibold text-[#C9A24B] border border-white/10">
                  {chosenVehicleData.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-[10px] text-[#A7ABB5] px-2 py-0.5 rounded">
                  Official Model
                </div>
              </div>

              <div className="p-5 pt-1 space-y-4">
                <div>
                  <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#F2F0EA]">
                    {chosenVehicleData.name}
                  </h3>
                  <p className="text-xs text-[#A7ABB5] mt-1 leading-relaxed">
                    {chosenVehicleData.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#14161B]/80 border border-white/5 space-y-0.5">
                    <span className="text-[10px] uppercase text-[#A7ABB5] block">Powertrain</span>
                    <span className="font-semibold text-[#F2F0EA] truncate block">{chosenVehicleData.specs.engineOrMotor.split('(')[0]}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#14161B]/80 border border-white/5 space-y-0.5">
                    <span className="text-[10px] uppercase text-[#A7ABB5] block">Seating</span>
                    <span className="font-semibold text-[#F2F0EA] block">{chosenVehicleData.specs.seatingCapacity}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#14161B]/80 border border-white/5 space-y-0.5">
                    <span className="text-[10px] uppercase text-[#A7ABB5] block">Fuel / Range</span>
                    <span className="font-semibold text-[#F2F0EA] truncate block">{chosenVehicleData.specs.fuelTypeOrRange.split('(')[0]}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#14161B]/80 border border-white/5 space-y-0.5">
                    <span className="text-[10px] uppercase text-[#A7ABB5] block">Starting OTR</span>
                    <span className="font-semibold text-[#C9A24B] block">{formatIDR(chosenVehicleData.startingPriceIdr)}</span>
                  </div>
                </div>

                {/* VIP Perks */}
                <div className="pt-3 border-t border-[#14161B] space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A24B] block">
                    What&apos;s Included With Your Visit:
                  </span>
                  <div className="space-y-1.5 text-xs text-[#A7ABB5]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                      <span>Dedicated product specialist &amp; 45-min arterial drive route</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                      <span>Complimentary valet parking at MBFC Tower 2 lobby</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                      <span>Private consultation suite &amp; specialty espresso bar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Showroom Reminder */}
            <div className="p-4 rounded-xl bg-[#23262E]/70 border border-[#23262E] flex items-center justify-between text-xs text-[#A7ABB5]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>10 Marina Blvd, Marina Bay, Singapore</span>
              </div>
              <button
                type="button"
                onClick={() => handleNavigateTop('visit')}
                className="text-[#C9A24B] font-semibold hover:underline shrink-0"
              >
                View Map
              </button>
            </div>

          </div>

        </div>
      ) : (
        /* In-Page Success Confirmation Message */
        <div className="max-w-2xl mx-auto rounded-2xl bg-[#23262E] border-2 border-[#C9A24B]/60 shadow-2xl p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#C9A24B]/20 text-[#C9A24B] flex items-center justify-center mx-auto border border-[#C9A24B]">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C9A24B] font-semibold">
              Reservation Confirmed
            </span>
            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold text-[#F2F0EA]">
              We Look Forward to Welcoming You
            </h2>
            <p className="text-sm text-[#A7ABB5] max-w-lg mx-auto">
              Your test drive reservation has been registered in the AutoVista Motors showroom schedule. A dedicated automotive specialist will have the vehicle prepared and sanitized for your demonstration.
            </p>
          </div>

          {/* Details Summary Card */}
          <div className="max-w-lg mx-auto bg-[#14161B] rounded-xl p-6 border border-[#23262E] text-left space-y-3.5 text-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#23262E]">
              <span className="text-xs text-[#A7ABB5]">Confirmation Code</span>
              <span className="font-mono font-bold text-base text-[#C9A24B]">
                {confirmationCode}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[#A7ABB5] block">Guest Name</span>
                <span className="font-semibold text-[#F2F0EA]">{fullName}</span>
              </div>
              <div>
                <span className="text-[#A7ABB5] block">Contact</span>
                <span className="font-semibold text-[#F2F0EA]">{phone}</span>
              </div>
              <div>
                <span className="text-[#A7ABB5] block">Reserved Vehicle</span>
                <span className="font-semibold text-[#C9A24B]">{selectedVehicle}</span>
              </div>
              <div>
                <span className="text-[#A7ABB5] block">Appointment Time</span>
                <span className="font-semibold text-[#F2F0EA]">
                  {preferredDate} ({preferredTime})
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#23262E] flex items-start gap-2 text-xs text-[#A7ABB5]">
              <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
              <span>
                Showroom: Marina Bay Financial Centre, 10 Marina Boulevard, Singapore. Complimentary valet parking provided.
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#23262E] hover:bg-[#14161B] text-[#F2F0EA] border border-[#23262E] text-sm font-semibold transition-colors cursor-pointer"
            >
              Book Another Test Drive
            </button>
            <button
              onClick={() => handleNavigateTop('visit')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#C9A24B] text-[#14161B] text-sm font-bold hover:bg-[#D9B45D] transition-colors cursor-pointer"
            >
              View Showroom Directions
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
