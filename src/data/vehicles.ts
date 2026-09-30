export interface VehicleTrim {
  name: string;
  priceIdr: number;
  highlight?: string;
}

export interface VehicleSpecs {
  engineOrMotor: string;
  transmission: string;
  seatingCapacity: string;
  fuelTypeOrRange: string;
  dimensions: string;
  powerOutput?: string;
  driveType?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'Sedan (Sporty)' | 'SUV' | 'SUV (Compact)' | 'MPV' | 'Electric' | 'Hatchback' | 'Coupe';
  categoryFilter: 'Sedan' | 'SUV' | 'MPV' | 'Electric' | 'Hatchback' | 'Coupe';
  notes: string;
  tagline: string;
  startingPriceIdr: number;
  thumbnail: string;
  gallery: string[];
  specs: VehicleSpecs;
  keyFeatures: string[];
  trims: VehicleTrim[];
  imageAttribution: {
    source: string;
    searchQuery: string;
    license: string;
    originalWikiUrl: string;
  };
}

/**
 * Curated AutoVista Motors Fleet:
 * Exactly 6 distinct categories with exactly 4 models per category (24 vehicles total).
 * Strict compliance: Minimum 3, Maximum 5 per category (4 cars each).
 */
export const VEHICLES: Vehicle[] = [
  // ==========================================
  // CATEGORY 1: SEDAN (4 Vehicles)
  // ==========================================
  {
    id: 'toyota-camry',
    name: 'Toyota Camry',
    category: 'Sedan',
    categoryFilter: 'Sedan',
    notes: 'Mid-size executive sedan delivering unparalleled rear-cabin comfort and dynamic hybrid efficiency.',
    tagline: 'The Pinnacle of Executive Refinement & Hybrid Efficiency',
    startingPriceIdr: 799300000,
    thumbnail: '/vehicles/camry_1.jpg',
    gallery: [
      '/vehicles/camry_1.jpg',
      '/vehicles/camry_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg'
    ],
    specs: {
      engineOrMotor: '2.5L 4-Cylinder DOHC Dual VVT-i / Dynamic Force Hybrid (A25A-FXS)',
      transmission: 'Direct Shift 8-Speed Automatic / Electronically Controlled Continuously Variable (E-CVT)',
      seatingCapacity: '5 Executive Leather Seats',
      fuelTypeOrRange: 'Gasoline / Hybrid Electric (50L Fuel Tank, approx. 22.4 km/L)',
      dimensions: '4,885 mm L × 1,840 mm W × 1,445 mm H (Wheelbase: 2,825 mm)',
      powerOutput: '204 PS (Petrol) / 211 PS Combined (Hybrid)',
      driveType: 'Front-Wheel Drive (FWD)'
    },
    keyFeatures: [
      'Toyota Safety Sense (TSS) 2.5+ with Pre-Collision System & Dynamic Radar Cruise Control',
      'Rear Seat Luxury Touchscreen Controller with Power Reclining & Independent Climate',
      '9-Inch Floating Touchscreen Infotainment with JBL® 9-Speaker Premium Audio System',
      'Nanoe™ X Cabin Air Purification & Qi Wireless Smartphone Charging Pad'
    ],
    trims: [
      {
        name: 'Camry 2.5 V A/T',
        priceIdr: 799300000,
        highlight: 'Luxury executive standard with 18-inch alloy wheels and full leather upholstery'
      },
      {
        name: 'Camry 2.5 HEV (Hybrid)',
        priceIdr: 937400000,
        highlight: '4th Generation Toyota Hybrid System, moonroof, and rear seat power recline'
      }
    ],
    imageAttribution: {
      source: 'Wikimedia Commons',
      searchQuery: 'site:commons.wikimedia.org "2018 Toyota Camry (ASV70R) Ascent sedan"',
      license: 'Creative Commons Attribution-ShareAlike 4.0 International',
      originalWikiUrl: 'https://commons.wikimedia.org/wiki/File:2018_Toyota_Camry_(ASV70R)_Ascent_sedan_(2018-08-27)_01.jpg'
    }
  },
  {
    id: 'honda-civic-rs',
    name: 'Honda Civic RS',
    category: 'Sedan (Sporty)',
    categoryFilter: 'Sedan',
    notes: 'Compact sporty sedan engineered for high-revving turbocharged precision and aggressive aerodynamics.',
    tagline: 'Sport-Tuned Turbo Performance Meets Aggressive Aerodynamics',
    startingPriceIdr: 616800000,
    thumbnail: '/vehicles/civic_1.jpg',
    gallery: [
      '/vehicles/civic_1.jpg',
      '/vehicles/civic_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/2022_Honda_Civic_Touring_in_Lunar_Silver_Metallic%2C_Front_Left%2C_05-10-2022.jpg'
    ],
    specs: {
      engineOrMotor: '1.5L VTEC Turbo 4-Cylinder DOHC 16-Valve Direct Injection',
      transmission: 'Sport-Tuned Continuously Variable Transmission (CVT) with Steering Paddle Shifts',
      seatingCapacity: '5 Sport Bucket Seats',
      fuelTypeOrRange: 'Gasoline (47L Fuel Tank, approx. 17.2 km/L highway)',
      dimensions: '4,678 mm L × 1,802 mm W × 1,415 mm H (Wheelbase: 2,735 mm)',
      powerOutput: '178 PS @ 6,000 RPM / 240 Nm @ 1,700–4,500 RPM',
      driveType: 'Front-Wheel Drive (FWD)'
    },
    keyFeatures: [
      'Honda SENSING™ Full Driver Assistance Suite with Lead Car Departure Notification',
      'RS Exclusive Aero Kit: Dual Chrome Exhaust Finishers & Gloss Black Trunk Spoiler',
      '10.2-inch Interactive Full TFT Digital Gauge Display & 9-inch Advanced Display Audio',
      'Red Ambient Cabin Illumination with Suede-Leather Sport Seats & Red Contrast Stitching'
    ],
    trims: [
      {
        name: 'Civic RS 1.5L Turbo',
        priceIdr: 616800000,
        highlight: 'Full RS aerodynamic package, Honda SENSING, and 17-inch Matte Black alloy wheels'
      },
      {
        name: 'Civic RS Aero Edition',
        priceIdr: 639900000,
        highlight: 'Includes extended sports diffuser package and premium Bose 12-speaker audio system'
      }
    ],
    imageAttribution: {
      source: 'Wikimedia Commons',
      searchQuery: 'site:commons.wikimedia.org "2022 Honda Civic Touring in Lunar Silver Metallic"',
      license: 'Creative Commons Attribution-ShareAlike 4.0 International',
      originalWikiUrl: 'https://commons.wikimedia.org/wiki/File:2022_Honda_Civic_Touring_in_Lunar_Silver_Metallic,_Front_Left,_05-10-2022.jpg'
    }
  },
  {
    id: 'mercedes-benz-c-class',
    name: 'Mercedes-Benz C-Class',
    category: 'Sedan',
    categoryFilter: 'Sedan',
    notes: 'Contemporary German luxury sedan featuring second-generation MBUX and EQ Boost mild-hybrid technology.',
    tagline: 'Modern Luxury Sedan with EQ Boost Mild-Hybrid Intelligence',
    startingPriceIdr: 1060000000,
    thumbnail: '/vehicles/merc_c_1.jpg',
    gallery: [
      '/vehicles/merc_c_1.jpg',
      '/vehicles/merc_c_2.jpg'
    ],
    specs: {
      engineOrMotor: '2.0L 4-Cylinder Turbocharged with 48V Mild Hybrid EQ Boost',
      transmission: '9G-TRONIC 9-Speed Automatic Transmission',
      seatingCapacity: '5 Executive Leather Seats',
      fuelTypeOrRange: 'Gasoline Mild-Hybrid (66L Fuel Tank, approx. 15.6 km/L)',
      dimensions: '4,751 mm L × 1,820 mm W × 1,438 mm H (Wheelbase: 2,865 mm)',
      powerOutput: '204 PS + 20 PS EQ Boost / 300 Nm Torque',
      driveType: 'Rear-Wheel Drive (RWD)'
    },
    keyFeatures: [
      '11.9-Inch High-Resolution Central Portrait Touchscreen with Second-Gen MBUX',
      'Burmester® 3D Surround Sound System with 15 High-Performance Speakers',
      'Active Parking Assist with PARKTRONIC & 360-Degree Surround Cameras',
      'Digital Light Headlamp Technology with Ultra Range High Beam Projection'
    ],
    trims: [
      {
        name: 'C 200 Avantgarde Line',
        priceIdr: 1060000000,
        highlight: 'Artico leather upholstery, 18-inch 5-spoke wheels, and MBUX Navigation'
      },
      {
        name: 'C 300 AMG Line',
        priceIdr: 1250000000,
        highlight: '258 PS engine output, panoramic sliding sunroof, and 19-inch AMG multi-spoke wheels'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Mercedes-Benz C-Class luxury sedan',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'bmw-3-series',
    name: 'BMW 3 Series',
    category: 'Sedan',
    categoryFilter: 'Sedan',
    notes: 'The undisputed benchmark sports sedan combining 50:50 weight distribution with BMW Curved Display iDrive 8.5.',
    tagline: 'The Ultimate Sports Sedan with Curved Display & M Sport Dynamics',
    startingPriceIdr: 1080000000,
    thumbnail: '/vehicles/bmw_3_1.jpg',
    gallery: [
      '/vehicles/bmw_3_1.jpg',
      '/vehicles/bmw_3_2.jpg'
    ],
    specs: {
      engineOrMotor: '2.0L BMW TwinPower Turbo 4-Cylinder Inline Petrol Engine',
      transmission: '8-Speed Steptronic Sport Automatic with Steering Shift Paddles',
      seatingCapacity: '5 Sport Leather Seats',
      fuelTypeOrRange: 'Gasoline (59L Fuel Tank, approx. 15.4 km/L combined)',
      dimensions: '4,713 mm L × 1,827 mm W × 1,440 mm H (Wheelbase: 2,851 mm)',
      powerOutput: '184 PS @ 5,000 RPM / 300 Nm @ 1,350–4,000 RPM',
      driveType: 'Rear-Wheel Drive (RWD) with 50:50 Axle Weight Distribution'
    },
    keyFeatures: [
      'BMW Curved Display: 12.3-inch Digital Cluster & 14.9-inch Control Display running iDrive 8.5',
      'M Aerodynamics Package with M Sport Suspension and Variable Sport Steering',
      'Harman Kardon Surround Sound System with 16 Balanced Loudspeakers',
      'Driving Assistant Professional with Lane Change Warning and Reversing Assistant'
    ],
    trims: [
      {
        name: '320i M Sport',
        priceIdr: 1080000000,
        highlight: 'Alcantara/Sensatec combination upholstery, 18-inch M light alloy wheels, and M steering wheel'
      },
      {
        name: '330i M Sport Pro',
        priceIdr: 1215000000,
        highlight: '258 PS / 400 Nm tuning, M Sport brakes with red calipers, and BMW Laserlight headlamps'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'BMW 3 Series sports sedan',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },

  // ==========================================
  // CATEGORY 2: SUV (4 Vehicles)
  // ==========================================
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'SUV',
    categoryFilter: 'SUV',
    notes: 'High-riding ladder-frame SUV built for authoritative road command and demanding terrain.',
    tagline: 'Dominant Ladder-Frame SUV Engineered for Uncompromising Terrain',
    startingPriceIdr: 573700000,
    thumbnail: '/vehicles/fortuner_1.jpg',
    gallery: [
      '/vehicles/fortuner_1.jpg',
      '/vehicles/fortuner_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg'
    ],
    specs: {
      engineOrMotor: '2.8L 1GD-FTV 4-Cylinder Turbocharged Diesel / 2.4L 2GD-FTV Diesel',
      transmission: '6-Speed Automatic with Sport Sequential Switchmatic & Paddle Shift',
      seatingCapacity: '7 Full-Size Passenger Seats',
      fuelTypeOrRange: 'Diesel (80L Fuel Tank, approx. 13.8 km/L combined)',
      dimensions: '4,795 mm L × 1,855 mm W × 1,835 mm H (Ground Clearance: 225 mm)',
      powerOutput: '204 PS @ 3,000–4,000 RPM / 500 Nm @ 1,600–2,800 RPM',
      driveType: '4×2 Rear-Wheel Drive / 4×4 with Easy 4WD Dial Switch'
    },
    keyFeatures: [
      'Downhill Assist Control (DAC), Hill Start Assist, & Automatic Limited Slip Differential',
      'Power Backdoor with Foot-Activated Hands-Free Kick Sensor and Height Memory',
      '9-inch Display Audio with NFC Toll Card Reader & Smartphone Integration',
      '360-Degree Panoramic View Monitor with Moving Object Detection (MOD)'
    ],
    trims: [
      {
        name: 'Fortuner 2.4 G 4x2 A/T',
        priceIdr: 573700000,
        highlight: 'Reliable 2GD-FTV powertrain, LED projector headlamps, and 3-row comfort'
      },
      {
        name: 'Fortuner 2.8 VRZ 4x2 A/T',
        priceIdr: 631200000,
        highlight: 'High-torque 1GD engine (500 Nm), leather cabin, and power tailgate with kick sensor'
      },
      {
        name: 'Fortuner 2.8 GR Sport 4x4 A/T',
        priceIdr: 740350000,
        highlight: 'Full Gazoo Racing tuned suspension, 4WD dial, GR aero body kit, and dual-zone AC'
      }
    ],
    imageAttribution: {
      source: 'Wikimedia Commons',
      searchQuery: 'site:commons.wikimedia.org "2015 Toyota Fortuner"',
      license: 'Creative Commons Attribution-ShareAlike 4.0 International',
      originalWikiUrl: 'https://commons.wikimedia.org/wiki/File:2015_Toyota_Fortuner_(New_Zealand).jpg'
    }
  },
  {
    id: 'honda-crv',
    name: 'Honda CR-V',
    category: 'SUV (Compact)',
    categoryFilter: 'SUV',
    notes: 'Premium crossover uniting dual-motor hybrid fuel economy with spacious 7-passenger capability.',
    tagline: 'Sophisticated Daily Crossover with Dual-Motor Hybrid Innovation',
    startingPriceIdr: 749100000,
    thumbnail: '/vehicles/crv_1.jpg',
    gallery: [
      '/vehicles/crv_1.jpg',
      '/vehicles/crv_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Honda_CR-V_e-HEV_Elegance_AWD_%28VI%29_%E2%80%93_f_14072024.jpg'
    ],
    specs: {
      engineOrMotor: '2.0L Direct Injection Atkinson-Cycle 4-Cylinder + Dual Electric Motor (e:HEV) / 1.5L VTEC Turbo',
      transmission: 'Electronic Continuously Variable Transmission (E-CVT)',
      seatingCapacity: '5 Passengers (RS e:HEV) / 7 Passengers (1.5L Turbo)',
      fuelTypeOrRange: 'Hybrid Electric / Gasoline (57L Tank, approx. 21.6 km/L combined)',
      dimensions: '4,691 mm L × 1,866 mm W × 1,681 mm H (Wheelbase: 2,701 mm)',
      powerOutput: '207 PS Combined System Power / 335 Nm Motor Torque',
      driveType: 'Front-Wheel Drive (FWD) / Real Time All-Wheel Drive'
    },
    keyFeatures: [
      'Honda CONNECT Telematics with Smartphone Digital Key & Remote Air Conditioning',
      'Panoramic Power Sunroof with One-Touch Anti-Pinch Operation & Electric Sunshade',
      'Hands-Free Power Tailgate with Walk-Away Automatic Lock Sensor',
      'Bose® Premium 12-Speaker Audio System with CenterPoint® Surround Technology'
    ],
    trims: [
      {
        name: 'CR-V 1.5L Turbo (7-Seater)',
        priceIdr: 749100000,
        highlight: 'Spacious 3-row seating configuration with 190 PS turbo engine and Honda SENSING'
      },
      {
        name: 'CR-V 2.0L RS e:HEV (Hybrid)',
        priceIdr: 814500000,
        highlight: 'Sporty RS styling, dual-motor hybrid powertrain, Bose audio, and heads-up display'
      }
    ],
    imageAttribution: {
      source: 'Wikimedia Commons',
      searchQuery: 'site:commons.wikimedia.org "Honda CR-V e-HEV Elegance AWD (VI)"',
      license: 'Creative Commons Attribution-ShareAlike 4.0 International',
      originalWikiUrl: 'https://commons.wikimedia.org/wiki/File:Honda_CR-V_e-HEV_Elegance_AWD_(VI)_%E2%80%93_f_14072024.jpg'
    }
  },
  {
    id: 'mitsubishi-pajero-sport',
    name: 'Mitsubishi Pajero Sport',
    category: 'SUV',
    categoryFilter: 'SUV',
    notes: 'Formidable Japanese 7-seater SUV armed with Dakar Rally heritage and Super Select 4WD-II.',
    tagline: 'Rugged Heritage Meets Executive Comfort with Super Select 4WD-II',
    startingPriceIdr: 593100000,
    thumbnail: '/vehicles/pajero_1.jpg',
    gallery: [
      '/vehicles/pajero_1.jpg',
      '/vehicles/pajero_2.jpg'
    ],
    specs: {
      engineOrMotor: '2.4L 4N15 MIVEC Turbocharged Intercooled Diesel DOHC 16-Valve',
      transmission: '8-Speed Automatic Transmission with Sport Mode & Magnesium Paddle Shifts',
      seatingCapacity: '7 Full-Size Passenger Seats',
      fuelTypeOrRange: 'Diesel (68L Fuel Tank, approx. 12.8 km/L)',
      dimensions: '4,825 mm L × 1,815 mm W × 1,835 mm H (Ground Clearance: 218 mm)',
      powerOutput: '181 PS @ 3,500 RPM / 430 Nm @ 2,500 RPM',
      driveType: '4×2 Rear-Wheel Drive / Super Select 4WD-II with Off-Road Mode'
    },
    keyFeatures: [
      '8-Inch Color LCD Digital Meter Cluster with Customizable Multi-Information Themes',
      'Power Tailgate with Kick Sensor and Hands-Free Smartphone Proximity Opening',
      'Forward Collision Mitigation (FCM), Ultrasonic Misacceleration Mitigation (UMS), & BSW',
      'Dual-Zone Automatic Climate Control with Nanoe™ Cabin Air Purification'
    ],
    trims: [
      {
        name: 'Dakar 4x2 A/T',
        priceIdr: 593100000,
        highlight: '181 PS MIVEC clean diesel, black leather seats, and 8-inch touchscreen display'
      },
      {
        name: 'Dakar Ultimate 4x4 A/T',
        priceIdr: 740600000,
        highlight: 'Super Select 4WD-II, roof-mounted rear passenger monitor, and adaptive cruise control'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Mitsubishi Pajero Sport offroad SUV',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'hyundai-palisade',
    name: 'Hyundai Palisade',
    category: 'SUV',
    categoryFilter: 'SUV',
    notes: 'Full-size flagship Korean SUV appointed with ventilated second-row captain seats and dual sunroofs.',
    tagline: 'Flagship 3-Row Luxury SUV with Captain Seats and Command Presence',
    startingPriceIdr: 910000000,
    thumbnail: '/vehicles/palisade_1.jpg',
    gallery: [
      '/vehicles/palisade_1.jpg',
      '/vehicles/palisade_2.jpg'
    ],
    specs: {
      engineOrMotor: 'R 2.2L CRDi 4-Cylinder Inline Turbocharged Diesel Engine',
      transmission: '8-Speed Shift-by-Wire Automatic Transmission with Drive Mode Dial',
      seatingCapacity: '7 Luxury Captain Seats',
      fuelTypeOrRange: 'Diesel (71L Fuel Tank, approx. 14.1 km/L combined)',
      dimensions: '4,995 mm L × 1,975 mm W × 1,750 mm H (Wheelbase: 2,900 mm)',
      powerOutput: '200 PS @ 3,800 RPM / 440 Nm @ 1,750–2,750 RPM',
      driveType: 'Front-Wheel Drive / HTRAC Multi-Terrain All-Wheel Drive'
    },
    keyFeatures: [
      'Second-Row Heated & Ventilated Executive Captain Seats with Independent Climate Control',
      'Dual Sunroof with Front Tilting and Rear Panoramic Power Sliding Glass',
      '12.3-Inch Digital Instrument Cluster & 12.3-Inch Navigation Touchscreen with Bluelink',
      'Hyundai SmartSense Suite: Blind-Spot View Monitor (BVM) & Highway Driving Assist'
    ],
    trims: [
      {
        name: 'Palisade Prime',
        priceIdr: 910000000,
        highlight: '7-seater configuration, wireless charging, and full LED projector headlights'
      },
      {
        name: 'Palisade Signature AWD',
        priceIdr: 1180000000,
        highlight: 'HTRAC All-Wheel Drive, Nappa leather, 20-inch alloy wheels, and Infinity 12-speaker audio'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Hyundai Palisade flagship luxury SUV',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },

  // ==========================================
  // CATEGORY 3: MPV (4 Vehicles)
  // ==========================================
  {
    id: 'toyota-innova-zenix',
    name: 'Toyota Innova Zenix',
    category: 'MPV',
    categoryFilter: 'MPV',
    notes: 'TNGA monocoque crossover MPV offering executive ottoman seats and 23.8 km/L hybrid efficiency.',
    tagline: 'Next-Generation TNGA Crossover MPV for Modern Executive Families',
    startingPriceIdr: 430400000,
    thumbnail: '/vehicles/innova_1.jpg',
    gallery: [
      '/vehicles/innova_1.jpg',
      '/vehicles/innova_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Toyota_Innova_Zenix_2.0_V_%28III%29_%E2%80%93_f_22032025.jpg'
    ],
    specs: {
      engineOrMotor: '2.0L M20A-FXS 4-Cylinder Dynamic Force Hybrid / 2.0L M20A-FKS Gasoline',
      transmission: 'Direct-Shift 10-Speed Continuously Variable Transmission (CVT)',
      seatingCapacity: '7 - 8 Passengers (Executive Captain Seat Option)',
      fuelTypeOrRange: 'Hybrid Electric / Gasoline (52L Tank, approx. 23.8 km/L Hybrid)',
      dimensions: '4,755 mm L × 1,850 mm W × 1,795 mm H (Wheelbase: 2,850 mm)',
      powerOutput: '186 PS Combined Hybrid System / 174 PS Gasoline',
      driveType: 'Front-Wheel Drive on TNGA-C Monocoque Platform'
    },
    keyFeatures: [
      'Second-Row Ottoman Captain Seats with Power Recline & Extendable Footrests',
      'Panoramic Retractable Sunroof with Warm Ambient Illumination Lighting',
      'Dual 10-Inch Rear Seat Entertainment (RSE) Displays with Independent Audio',
      'Electric Parking Brake (EPB) with Auto Brake Hold & 360-degree Panoramic Monitor'
    ],
    trims: [
      {
        name: 'Innova Zenix 2.0 G CVT',
        priceIdr: 430400000,
        highlight: 'TNGA monocoque comfort, 16-inch alloy wheels, and 9-inch display audio'
      },
      {
        name: 'Innova Zenix 2.0 V CVT',
        priceIdr: 476200000,
        highlight: 'Panoramic roof, 10-inch rear seat entertainment, and LED ambient illumination'
      },
      {
        name: 'Innova Zenix 2.0 Q HV Modellista (Hybrid)',
        priceIdr: 633600000,
        highlight: 'Ottoman Captain Seats, Modellista body kit, TSS 3.0, and 23.8 km/L fuel efficiency'
      }
    ],
    imageAttribution: {
      source: 'Wikimedia Commons',
      searchQuery: 'site:commons.wikimedia.org "Toyota Innova Zenix 2.0 V (III)"',
      license: 'Creative Commons Attribution-ShareAlike 4.0 International',
      originalWikiUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_Innova_Zenix_2.0_V_(III)_%E2%80%93_f_22032025.jpg'
    }
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    category: 'MPV',
    categoryFilter: 'MPV',
    notes: 'The gold standard in luxury MPV transit with private jet ottoman suites and whisper-quiet hybrid isolation.',
    tagline: 'The Apex of First-Class Travel with Executive Lounge Ottoman Seating',
    startingPriceIdr: 1407200000,
    thumbnail: '/vehicles/alphard_1.jpg',
    gallery: [
      '/vehicles/alphard_1.jpg',
      '/vehicles/alphard_2.jpg'
    ],
    specs: {
      engineOrMotor: '2.5L A25A-FXS 4-Cylinder Hybrid Dynamic Force / 2.5L 2AR-FE Gasoline',
      transmission: 'Electronically Controlled Continuously Variable Transmission (E-CVT)',
      seatingCapacity: '7 First-Class Lounge Seats',
      fuelTypeOrRange: 'Hybrid Electric / Gasoline (60L Tank, approx. 17.5 km/L Hybrid)',
      dimensions: '5,010 mm L × 1,850 mm W × 1,945 mm H (Wheelbase: 3,000 mm)',
      powerOutput: '250 PS Combined System Output (Hybrid)',
      driveType: 'Front-Wheel Drive / E-Four Electronic All-Wheel Drive'
    },
    keyFeatures: [
      'Executive Lounge VIP Ottoman Seats with Heating, Ventilation, and Massage Presets',
      '14-Inch Rear Seat Ceiling Entertainment Display with HDMI and Wireless Streaming',
      'Universal Power Steps on Both Sliding Doors & Independent Dual Sunroof Pods',
      'JBL® Premium 15-Speaker Audio with Acoustic Noise-Cancelling Laminated Glass'
    ],
    trims: [
      {
        name: 'Alphard 2.5 X CVT',
        priceIdr: 1407200000,
        highlight: '7-passenger luxury, dual power sliding doors, and Toyota Safety Sense'
      },
      {
        name: 'Alphard 2.5 HEV Executive Lounge',
        priceIdr: 1715000000,
        highlight: 'E-Four AWD, full Nappa leather massage captain seats, and Modellista styling'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Toyota Alphard luxury minivan MPV',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'hyundai-staria',
    name: 'Hyundai Staria',
    category: 'MPV',
    categoryFilter: 'MPV',
    notes: 'Architectural MPV showcase with panoramic glass, zero-gravity relaxation loungers, and futuristic aerodynamics.',
    tagline: 'Futuristic Spaceship Silhouette with Unrivaled Interior Space & Comfort',
    startingPriceIdr: 924000000,
    thumbnail: '/vehicles/staria_1.jpg',
    gallery: [
      '/vehicles/staria_1.jpg',
      '/vehicles/staria_2.jpg'
    ],
    specs: {
      engineOrMotor: '2.2L CRDi Inline 4-Cylinder Turbocharged Diesel Engine',
      transmission: '8-Speed Electronic Shift-by-Wire Automatic Transmission',
      seatingCapacity: '7 Executive or 9 Flexible Passenger Seats',
      fuelTypeOrRange: 'Diesel (75L Fuel Tank, approx. 13.2 km/L combined)',
      dimensions: '5,253 mm L × 1,997 mm W × 1,990 mm H (Wheelbase: 3,273 mm)',
      powerOutput: '177 PS @ 3,800 RPM / 430 Nm @ 1,500–2,500 RPM',
      driveType: 'Front-Wheel Drive (FWD)'
    },
    keyFeatures: [
      'Full-Horizontal Horizon LED Daytime Running Lamp with Parametric Pixel Lighting',
      'Premium Relaxation Seats in 2nd Row with 1-Touch Zero-Gravity Recline Mode',
      'Smart Power Sliding Doors and Smart Power Tailgate with Proximity Sensing',
      'Bose® 12-Speaker Sound System with Dynamic Speed Compensation'
    ],
    trims: [
      {
        name: 'Staria Signature 9',
        priceIdr: 924000000,
        highlight: '9-seater versatility with 2nd-row swiveling conference seats'
      },
      {
        name: 'Staria Signature 7',
        priceIdr: 1060500000,
        highlight: 'Premium 7-seater with dual zero-gravity relaxation seats and suede headlining'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Hyundai Staria futuristic van MPV',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'toyota-veloz',
    name: 'Toyota Veloz',
    category: 'MPV',
    categoryFilter: 'MPV',
    notes: 'Practical 7-seater compact crossover MPV with sofa mode interior versatility and Toyota Safety Sense.',
    tagline: 'Premium Family Crossover MPV with Agile Dynamics and Modern Tech',
    startingPriceIdr: 304400000,
    thumbnail: '/vehicles/veloz_1.jpg',
    gallery: [
      '/vehicles/veloz_1.jpg',
      '/vehicles/veloz_2.jpg'
    ],
    specs: {
      engineOrMotor: '1.5L 2NR-VE 4-Cylinder DOHC 16-Valve Dual VVT-i',
      transmission: 'Continuously Variable Transmission (CVT) with Manual Sequential Mode',
      seatingCapacity: '7 Flexible Family Seats with Sofa Mode Configuration',
      fuelTypeOrRange: 'Gasoline (43L Fuel Tank, approx. 16.5 km/L)',
      dimensions: '4,475 mm L × 1,750 mm W × 1,700 mm H (Ground Clearance: 205 mm)',
      powerOutput: '106 PS @ 6,000 RPM / 138 Nm @ 4,200 RPM',
      driveType: 'Front-Wheel Drive (FWD)'
    },
    keyFeatures: [
      'Toyota Safety Sense (TSS) Suite with Lane Departure Assist & Front Departure Alert',
      '9-Inch Advanced Touchscreen Infotainment with Wireless Apple CarPlay & Android Auto',
      'Electric Parking Brake (EPB) with Auto Brake Hold & Qi Wireless Smartphone Charger',
      'Full Digital 7-inch TFT Combination Meter Display with 4 Selectable Themes'
    ],
    trims: [
      {
        name: 'Veloz 1.5 M/T',
        priceIdr: 304400000,
        highlight: '5-speed manual, 16-inch alloy wheels, and digital climate control'
      },
      {
        name: 'Veloz 1.5 Q CVT TSS',
        priceIdr: 335300000,
        highlight: 'Full Toyota Safety Sense, 17-inch two-tone wheels, and 360-degree all-round monitor'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Toyota Veloz modern MPV',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },

  // ==========================================
  // CATEGORY 4: ELECTRIC (4 Vehicles)
  // ==========================================
  {
    id: 'tesla-model-3',
    name: 'Tesla Model 3',
    category: 'Electric',
    categoryFilter: 'Electric',
    notes: 'The pioneer electric sports sedan with instant torque, 629 km range, and Tesla Autopilot active safety.',
    tagline: 'Instant Pure Electric Acceleration Meets Autonomous Technology',
    startingPriceIdr: 1500000000,
    thumbnail: '/vehicles/model3_1.jpg',
    gallery: [
      '/vehicles/model3_1.jpg',
      '/vehicles/model3_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg'
    ],
    specs: {
      engineOrMotor: 'Permanent Magnet Synchronous AC Motor (Single RWD / Dual Motor AWD)',
      transmission: 'Single-Speed Fixed Reduction Gear',
      seatingCapacity: '5 Premium Vegan Leather Seats',
      fuelTypeOrRange: '100% Electric (60 kWh / 78.1 kWh Battery, 513 km – 629 km WLTP Range)',
      dimensions: '4,720 mm L × 1,850 mm W × 1,441 mm H (Wheelbase: 2,875 mm)',
      powerOutput: '283 PS (RWD) / 498 PS (Long Range) / 510 PS (Performance, 0–100 km/h in 3.1s)',
      driveType: 'Rear-Wheel Drive (RWD) / Dual Motor All-Wheel Drive (AWD)'
    },
    keyFeatures: [
      '15.4-inch Cinematic Center Touchscreen with Ambient Acoustic Sound-Dampening Glass',
      'Tesla Autopilot Suite: 8 Optical Cameras with 360° Vision & Active Emergency Braking',
      'Ultra-Fast DC Supercharging: Recharges up to 282 km of Range in 15 Minutes',
      'Sentry Mode Security System with 24/7 Remote Video Surveillance & Dog Mode Climate'
    ],
    trims: [
      {
        name: 'Model 3 Rear-Wheel Drive (Standard)',
        priceIdr: 1500000000,
        highlight: '513 km WLTP range, 0-100 km/h in 6.1s, and acoustic all-around glass'
      },
      {
        name: 'Model 3 Long Range All-Wheel Drive',
        priceIdr: 1720000000,
        highlight: '629 km WLTP range, Dual Motor AWD, 17-speaker premium audio, and heated/ventilated seats'
      },
      {
        name: 'Model 3 Performance All-Wheel Drive',
        priceIdr: 1850000000,
        highlight: '510 PS, 0-100 km/h in 3.1s, carbon fiber spoiler, Track Mode V3, and 20-inch Warp wheels'
      }
    ],
    imageAttribution: {
      source: 'Wikimedia Commons',
      searchQuery: 'site:commons.wikimedia.org "Tesla Model 3 (2023) Autofrühling Ulm"',
      license: 'Creative Commons Attribution-ShareAlike 4.0 International',
      originalWikiUrl: 'https://commons.wikimedia.org/wiki/File:Tesla_Model_3_(2023)_Autofr%C3%BChling_Ulm_IMG_9282.jpg'
    }
  },
  {
    id: 'hyundai-ioniq-5',
    name: 'Hyundai Ioniq 5',
    category: 'Electric',
    categoryFilter: 'Electric',
    notes: 'Award-winning retro-futuristic electric crossover with 800V charging and Vehicle-to-Load capability.',
    tagline: 'Iconic Retro-Futuristic Crossover EV with 800V Ultra-Fast Charging',
    startingPriceIdr: 782000000,
    thumbnail: '/vehicles/ioniq5_1.jpg',
    gallery: [
      '/vehicles/ioniq5_1.jpg',
      '/vehicles/ioniq5_2.jpg'
    ],
    specs: {
      engineOrMotor: 'Permanent Magnet Synchronous Motor (Rear Motor / Dual Motor AWD)',
      transmission: 'Single-Speed Reduction Gear with Steering Regenerative Paddle Shifters',
      seatingCapacity: '5 Eco-Processed Leather Seats',
      fuelTypeOrRange: '100% Electric (72.6 kWh Battery, 481 km WLTP Driving Range)',
      dimensions: '4,635 mm L × 1,890 mm W × 1,605 mm H (Wheelbase: 3,000 mm)',
      powerOutput: '217 PS / 350 Nm (2WD) or 305 PS / 605 Nm (AWD)',
      driveType: 'Rear-Wheel Drive (2WD) / HTRAC All-Wheel Drive (AWD)'
    },
    keyFeatures: [
      '800V Multi-Charging Architecture: 10% to 80% Supercharging in Just 18 Minutes',
      'Vehicle-to-Load (V2L) 3.6 kW Bi-Directional Power Port for Appliances and Camping',
      'Vision Roof Glass Canopy and Sliding Universal Island Center Console',
      'Parametric Pixel LED Lighting with Dual 12.3-Inch Integrated Panoramic Screens'
    ],
    trims: [
      {
        name: 'Ioniq 5 Prime Standard Range',
        priceIdr: 782000000,
        highlight: '58 kWh battery, 384 km range, and Smart Cruise Control'
      },
      {
        name: 'Ioniq 5 Signature Long Range',
        priceIdr: 895000000,
        highlight: '72.6 kWh battery, 481 km range, Bose 8-speaker audio, and relaxation seats'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Hyundai Ioniq 5 electric car',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'byd-seal',
    name: 'BYD Seal',
    category: 'Electric',
    categoryFilter: 'Electric',
    notes: 'Cell-to-Body aerodynamic electric sports sedan with ultra-durable Blade Battery and 530 PS dual motors.',
    tagline: 'Ocean-Aesthetic Performance EV Sedan with Blade Battery Safety',
    startingPriceIdr: 629000000,
    thumbnail: '/vehicles/byd_seal_1.jpg',
    gallery: [
      '/vehicles/byd_seal_1.jpg',
      '/vehicles/byd_seal_2.jpg'
    ],
    specs: {
      engineOrMotor: 'Permanent Magnet Synchronous Motor (Rear Motor / Dual Motors AWD)',
      transmission: 'Single-Speed Fixed Reduction Gear',
      seatingCapacity: '5 Integrated Sport Leather Seats',
      fuelTypeOrRange: '100% Electric (82.5 kWh BYD Blade Battery, 570–650 km Range)',
      dimensions: '4,800 mm L × 1,875 mm W × 1,460 mm H (Wheelbase: 2,920 mm)',
      powerOutput: '313 PS (Premium RWD) / 530 PS (Performance AWD, 0-100 in 3.8s)',
      driveType: 'Rear-Wheel Drive (RWD) / Intelligent All-Wheel Drive (AWD)'
    },
    keyFeatures: [
      'Cell-to-Body (CTB) Structural Integration with Ultra-Safe BYD Blade Battery',
      '15.6-Inch Rotatable Intelligent Center Touchscreen with DiLink Smart System',
      'iTAC (Intelligent Torque Adaptation Control) with Frequency Selective Damping (FSD)',
      'Dynaudio® 12-Speaker Premium Sound System & Crystal Gear Shift Knob'
    ],
    trims: [
      {
        name: 'Seal Premium Extended Range',
        priceIdr: 629000000,
        highlight: '650 km NEDC range, 313 PS rear motor, and head-up display'
      },
      {
        name: 'Seal Performance AWD',
        priceIdr: 719000000,
        highlight: '530 PS dual motors, 0-100 km/h in 3.8s, and adaptive electronic suspension'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'BYD Seal electric sedan',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'tesla-model-y',
    name: 'Tesla Model Y',
    category: 'Electric',
    categoryFilter: 'Electric',
    notes: 'The globally celebrated electric utility vehicle offering panoramic glass, 2,158L cargo, and Dual Motor AWD.',
    tagline: 'The World’s Best-Selling Electric Mid-Size SUV with Versatile Utility',
    startingPriceIdr: 1750000000,
    thumbnail: '/vehicles/modely_1.jpg',
    gallery: [
      '/vehicles/modely_1.jpg',
      '/vehicles/modely_2.jpg'
    ],
    specs: {
      engineOrMotor: 'Dual Motor All-Wheel Drive (Front Induction + Rear Permanent Magnet)',
      transmission: 'Single-Speed Fixed Reduction Gear',
      seatingCapacity: '5 Adults with 2,158 Liters Max Cargo Space',
      fuelTypeOrRange: '100% Electric (78.1 kWh Battery, 533 km WLTP Driving Range)',
      dimensions: '4,751 mm L × 1,921 mm W × 1,624 mm H (Wheelbase: 2,890 mm)',
      powerOutput: '440 PS Dual Motor / 493 Nm Torque (0–100 km/h in 5.0s)',
      driveType: 'Dual Motor All-Wheel Drive (AWD)'
    },
    keyFeatures: [
      'Expansive All-Glass Acoustic Roof with Infrared and Ultraviolet Protection',
      'Tesla Autopilot Navigation with 360° Optical Camera Vision System',
      'HEPA Hospital-Grade Air Filtration System with Bioweapon Defense Mode',
      '15-Inch Landscape Touchscreen Display with Over-The-Air (OTA) Updates'
    ],
    trims: [
      {
        name: 'Model Y Long Range AWD',
        priceIdr: 1750000000,
        highlight: '533 km WLTP range, Dual Motor AWD, and premium heated seating throughout'
      },
      {
        name: 'Model Y Performance AWD',
        priceIdr: 1980000000,
        highlight: '510 PS, 0-100 km/h in 3.7s, 21-inch Überturbine wheels, and carbon spoiler'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Tesla Model Y electric crossover',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },

  // ==========================================
  // CATEGORY 5: HATCHBACK (4 Vehicles)
  // ==========================================
  {
    id: 'honda-city-hatchback-rs',
    name: 'Honda City Hatchback RS',
    category: 'Hatchback',
    categoryFilter: 'Hatchback',
    notes: 'Urban sport hatchback celebrated for class-leading interior volume, 4-mode ULTRA Seats, and Honda SENSING.',
    tagline: 'Versatile Urban Turbo Hatchback with Renowned Ultra Seats',
    startingPriceIdr: 374600000,
    thumbnail: '/vehicles/city_hb_1.jpg',
    gallery: [
      '/vehicles/city_hb_1.jpg',
      '/vehicles/city_hb_2.jpg'
    ],
    specs: {
      engineOrMotor: '1.5L DOHC 4-Cylinder 16-Valve i-VTEC Engine',
      transmission: 'CVT Automatic Transmission with Steering Paddle Shift',
      seatingCapacity: '5 Passengers with 4-Mode ULTRA Seats',
      fuelTypeOrRange: 'Gasoline (40L Fuel Tank, approx. 17.8 km/L)',
      dimensions: '4,349 mm L × 1,748 mm W × 1,488 mm H (Wheelbase: 2,600 mm)',
      powerOutput: '121 PS @ 6,600 RPM / 145 Nm @ 4,300 RPM',
      driveType: 'Front-Wheel Drive (FWD)'
    },
    keyFeatures: [
      'Honda SENSING™ Full Active Driver Safety Suite with Collision Mitigation Braking',
      'ULTRA Seat Configurations: Utility, Long, Tall, and Refresh Cabin Lounge Modes',
      '8-Inch Advanced Display Audio with Smartphone Connection & 8-Speaker Audio',
      'RS Aero Styling Package with Rear Diffuser and Black Shark Fin Antenna'
    ],
    trims: [
      {
        name: 'City Hatchback RS M/T',
        priceIdr: 374600000,
        highlight: '6-speed short-throw manual gearbox and RS leather-suede seats'
      },
      {
        name: 'City Hatchback RS CVT with Honda SENSING',
        priceIdr: 398600000,
        highlight: 'Full Honda SENSING, auto high beam, and remote engine start'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Honda City Hatchback sport',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'toyota-yaris-gr-sport',
    name: 'Toyota Yaris GR Sport',
    category: 'Hatchback',
    categoryFilter: 'Hatchback',
    notes: 'Motorsport-inspired hot hatch equipped with Gazoo Racing chassis tuning, aero body kit, and 7 SRS airbags.',
    tagline: 'Agile Street Hatchback Infused with Gazoo Racing Motorsport DNA',
    startingPriceIdr: 341400000,
    thumbnail: '/vehicles/yaris_1.jpg',
    gallery: [
      '/vehicles/yaris_1.jpg',
      '/vehicles/yaris_2.jpg'
    ],
    specs: {
      engineOrMotor: '1.5L 2NR-FE 4-Cylinder DOHC 16-Valve Dual VVT-i',
      transmission: '7-Speed Sport Sequential Shiftmatic CVT with Paddle Shift',
      seatingCapacity: '5 Sport Bucket Seats',
      fuelTypeOrRange: 'Gasoline (42L Fuel Tank, approx. 16.9 km/L)',
      dimensions: '4,145 mm L × 1,730 mm W × 1,500 mm H (Wheelbase: 2,550 mm)',
      powerOutput: '107 PS @ 6,000 RPM / 140 Nm @ 4,200 RPM',
      driveType: 'Front-Wheel Drive (FWD)'
    },
    keyFeatures: [
      'GR Sport Aero Bodykit with Front Grille Mesh and Aerodynamic Roof Spoiler',
      'Panoramic View Monitor (PVM) with 360-Degree Vehicle Perimeter Vision',
      '9-Inch Display Audio with Smartphone Connectivity & 6 Airbag Safety Shield',
      'Sport and Eco Drive Mode Selector with Red Contrast Interior Stitching'
    ],
    trims: [
      {
        name: 'Yaris 1.5 S CVT GR Sport (3 Airbags)',
        priceIdr: 341400000,
        highlight: 'GR exterior package, 16-inch dark alloy wheels, and leather steering wheel'
      },
      {
        name: 'Yaris 1.5 S CVT GR Sport (7 Airbags)',
        priceIdr: 349000000,
        highlight: 'Complete 7 SRS airbag array, blind-spot monitoring, and rear cross traffic alert'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Toyota Yaris GR Sport hatchback',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'mini-cooper-3-door',
    name: 'MINI Cooper 3-Door',
    category: 'Hatchback',
    categoryFilter: 'Hatchback',
    notes: 'British design icon delivering signature go-kart responsiveness and an avant-garde circular OLED display.',
    tagline: 'The Legendary British Go-Kart Icon with Circular OLED Architecture',
    startingPriceIdr: 985000000,
    thumbnail: '/vehicles/mini_1.jpg',
    gallery: [
      '/vehicles/mini_1.jpg',
      '/vehicles/mini_2.jpg'
    ],
    specs: {
      engineOrMotor: '2.0L MINI TwinPower Turbo 4-Cylinder Inline Petrol Engine',
      transmission: '7-Speed Steptronic Dual Clutch Automatic Transmission',
      seatingCapacity: '4 Premium Sport Seats',
      fuelTypeOrRange: 'Gasoline (44L Fuel Tank, approx. 16.2 km/L combined)',
      dimensions: '3,876 mm L × 1,744 mm W × 1,432 mm H (Wheelbase: 2,495 mm)',
      powerOutput: '204 PS @ 5,000–6,500 RPM / 300 Nm @ 1,450–4,500 RPM',
      driveType: 'Front-Wheel Drive (FWD) with Direct Go-Kart Steering Tuning'
    },
    keyFeatures: [
      'Revolutionary 240 mm Diameter High-Resolution Circular Central OLED Touchscreen',
      'MINI Experience Modes with Ambient Light Projections and Unique Acoustic Signatures',
      'Harman Kardon Surround Sound System with Flush Glass Dashboard Integrations',
      'Classic British Union Jack LED Tail Lamps with Customizable Light Signatures'
    ],
    trims: [
      {
        name: 'Cooper C Classic',
        priceIdr: 985000000,
        highlight: '156 PS 3-cylinder turbo, 17-inch alloy wheels, and Vescin synthetic leather interior'
      },
      {
        name: 'Cooper S Favoured',
        priceIdr: 1150000000,
        highlight: '204 PS 4-cylinder turbo, 18-inch Night Flash wheels, and head-up display'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'MINI Cooper 3 door hatchback',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'volkswagen-golf-tsi',
    name: 'Volkswagen Golf R-Line',
    category: 'Hatchback',
    categoryFilter: 'Hatchback',
    notes: 'The definitive European hot hatchback with IQ.LIGHT LED matrix headlamps and Innovision Digital Cockpit.',
    tagline: 'The Benchmark European Compact Hatchback with TSI Turbo Efficiency',
    startingPriceIdr: 700000000,
    thumbnail: '/vehicles/golf_1.jpg',
    gallery: [
      '/vehicles/golf_1.jpg',
      '/vehicles/golf_2.jpg'
    ],
    specs: {
      engineOrMotor: '1.4L TSI 4-Cylinder Turbocharged Direct Injection Petrol Engine',
      transmission: '8-Speed Tiptronic Automatic Transmission with Steering Paddle Shifts',
      seatingCapacity: '5 Ergonomic Sport Seats',
      fuelTypeOrRange: 'Gasoline (50L Fuel Tank, approx. 17.5 km/L combined)',
      dimensions: '4,284 mm L × 1,789 mm W × 1,456 mm H (Wheelbase: 2,636 mm)',
      powerOutput: '150 PS @ 5,000–6,000 RPM / 250 Nm @ 1,500–3,500 RPM',
      driveType: 'Front-Wheel Drive (FWD) with XDS Electronic Differential Lock'
    },
    keyFeatures: [
      'Innovision Cockpit: 10.25-Inch Digital Cockpit Pro & 10-Inch Discover Media Touchscreen',
      'IQ.LIGHT LED Matrix Headlights with Dynamic Light Assist and Sweeping Turn Indicators',
      'Wireless App-Connect (Apple CarPlay / Android Auto) with 30-Color Ambient Lighting',
      'R-Line Aerodynamic Body Styling with 18-Inch Bergamo Alloy Wheels'
    ],
    trims: [
      {
        name: 'Golf 1.4 TSI Life',
        priceIdr: 700000000,
        highlight: 'Standard digital cockpit, keyless access, and 17-inch Belmont alloy wheels'
      },
      {
        name: 'Golf 1.4 TSI R-Line',
        priceIdr: 775000000,
        highlight: 'Sport suspension, R-Line interior with stainless steel pedals, and IQ.LIGHT matrix'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Volkswagen Golf R-Line hatchback',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },

  // ==========================================
  // CATEGORY 6: COUPE (4 Vehicles)
  // ==========================================
  {
    id: 'toyota-gr86',
    name: 'Toyota GR86',
    category: 'Coupe',
    categoryFilter: 'Coupe',
    notes: 'Purist rear-wheel drive sports coupe powered by an ultra-responsive naturally aspirated 2.4L boxer engine.',
    tagline: 'Pure Rear-Wheel Drive Boxer Sports Coupe Crafted for Driving Purists',
    startingPriceIdr: 984100000,
    thumbnail: '/vehicles/gr86_1.jpg',
    gallery: [
      '/vehicles/gr86_1.jpg',
      '/vehicles/gr86_2.jpg'
    ],
    specs: {
      engineOrMotor: '2.4L FA24 Naturally Aspirated 4-Cylinder Horizontally Opposed Boxer',
      transmission: '6-Speed Close-Ratio Manual / 6-Speed Automatic with Paddle Shift',
      seatingCapacity: '2+2 Sport Bucket Seats',
      fuelTypeOrRange: 'Gasoline (50L Fuel Tank, approx. 11.8 km/L combined)',
      dimensions: '4,265 mm L × 1,775 mm W × 1,310 mm H (Wheelbase: 2,575 mm)',
      powerOutput: '235 PS @ 7,000 RPM / 250 Nm @ 3,700 RPM (0–100 km/h in 6.3s)',
      driveType: 'Rear-Wheel Drive (RWD) with Torsen® Limited-Slip Differential (LSD)'
    },
    keyFeatures: [
      'Ultra-Low Center of Gravity with Lightweight Aluminum Roof Panels and Front Fenders',
      'Track Mode Stability Management with Switchable Vehicle Stability Control (VSC)',
      '7-Inch Digital TFT Gauge Cluster with Horizontally Moving Boxer RPM Animation',
      'Ultrasuede® and Genuine Leather Sport Seats with Deep Bolster Support'
    ],
    trims: [
      {
        name: 'GR86 2.4L M/T',
        priceIdr: 984100000,
        highlight: '6-speed manual transmission, aluminum pedals, and 18-inch matte black wheels'
      },
      {
        name: 'GR86 2.4L A/T with EyeSight',
        priceIdr: 1018500000,
        highlight: '6-speed automatic, EyeSight driver assist suite, and adaptive cruise control'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Toyota GR86 sports coupe',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'toyota-gr-supra',
    name: 'Toyota GR Supra',
    category: 'Coupe',
    categoryFilter: 'Coupe',
    notes: 'Legendary inline-6 twin-scroll turbo grand tourer boasting 387 PS and perfect 50:50 golden ratio balance.',
    tagline: 'Iconic Twin-Scroll Turbocharger Performance with 50:50 Golden Ratio',
    startingPriceIdr: 2188400000,
    thumbnail: '/vehicles/supra_1.jpg',
    gallery: [
      '/vehicles/supra_1.jpg',
      '/vehicles/supra_2.jpg'
    ],
    specs: {
      engineOrMotor: '3.0L Inline 6-Cylinder Twin-Scroll Turbocharged DOHC 24-Valve (B58)',
      transmission: '6-Speed Intelligent Manual (iMT) / 8-Speed Sport Automatic',
      seatingCapacity: '2 Pure Cockpit Racing Seats',
      fuelTypeOrRange: 'Gasoline (52L Fuel Tank, approx. 12.2 km/L combined)',
      dimensions: '4,380 mm L × 1,865 mm W × 1,295 mm H (Wheelbase: 2,470 mm)',
      powerOutput: '387 PS @ 5,800–6,500 RPM / 500 Nm @ 1,800–5,000 RPM (0–100 in 4.1s)',
      driveType: 'Rear-Wheel Drive (RWD) with Active Electronically Controlled Differential'
    },
    keyFeatures: [
      'Adaptive Variable Suspension (AVS) with Double-Joint Spring Strut Front Axle',
      'Brembo® 4-Piston Front Aluminum Caliper Brakes with 348 mm Ventilated Discs',
      'JBL® 12-Speaker Premium Sound System & Full Color Head-Up Display (HUD)',
      'Double-Bubble Aerodynamic Roof Architecture Inspired by the Legendary 2000GT'
    ],
    trims: [
      {
        name: 'GR Supra 3.0L M/T',
        priceIdr: 2188400000,
        highlight: 'Intelligent 6-speed manual with rev-matching, 19-inch forged alloy wheels'
      },
      {
        name: 'GR Supra 3.0L A/T',
        priceIdr: 2210000000,
        highlight: '8-speed automatic with launch control and radar cruise control'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Toyota GR Supra coupe sports car',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'bmw-4-series-coupe',
    name: 'BMW 4 Series Coupe',
    category: 'Coupe',
    categoryFilter: 'Coupe',
    notes: 'Expressive luxury performance coupe with striking vertical kidney grille and M Sport variable steering.',
    tagline: 'Sculpted Athletic Presence with Unmistakable Vertical Kidney Grille',
    startingPriceIdr: 1625000000,
    thumbnail: '/vehicles/bmw_4_1.jpg',
    gallery: [
      '/vehicles/bmw_4_1.jpg',
      '/vehicles/bmw_4_2.jpg'
    ],
    specs: {
      engineOrMotor: '2.0L BMW TwinPower Turbo 4-Cylinder Inline Petrol Engine',
      transmission: '8-Speed Steptronic Sport Transmission with Sprint Function',
      seatingCapacity: '4 Individual Sport Leather Seats',
      fuelTypeOrRange: 'Gasoline (59L Fuel Tank, approx. 15.2 km/L combined)',
      dimensions: '4,768 mm L × 1,852 mm W × 1,383 mm H (Wheelbase: 2,851 mm)',
      powerOutput: '258 PS @ 5,000–6,500 RPM / 400 Nm @ 1,550–4,400 RPM (0–100 in 5.8s)',
      driveType: 'Rear-Wheel Drive (RWD) with M Sport Differential'
    },
    keyFeatures: [
      'Bold Vertical BMW Kidney Grille with Aerodynamic Air Flap Control System',
      'M Sport Suspension with Stiffened Anti-Roll Bars and Additional Body Bracing',
      'Frameless Coupe Doors with Acoustic Double-Glazed Soundproof Glass',
      'BMW Live Cockpit Professional with 14.9-inch Curved Glass Operating System 8.5'
    ],
    trims: [
      {
        name: '430i Coupe M Sport Pro',
        priceIdr: 1625000000,
        highlight: 'M aerodynamic package, red M Sport brake calipers, and 19-inch BMW Individual wheels'
      },
      {
        name: 'M440i xDrive Coupe',
        priceIdr: 2280000000,
        highlight: '3.0L 6-cylinder 374 PS, xDrive all-wheel drive, and M carbon exterior pack'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'BMW 4 Series Coupe sports car',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'porsche-718-cayman',
    name: 'Porsche 718 Cayman',
    category: 'Coupe',
    categoryFilter: 'Coupe',
    notes: 'Mid-engine driver’s sports car designed around sublime cornering balance and 300 PS turbocharged power.',
    tagline: 'Mid-Engine Precision Engineering Engineered for Pure Cornering Balance',
    startingPriceIdr: 2500000000,
    thumbnail: '/vehicles/porsche_718_1.jpg',
    gallery: [
      '/vehicles/porsche_718_1.jpg',
      '/vehicles/porsche_718_2.jpg'
    ],
    specs: {
      engineOrMotor: '2.0L Turbocharged 4-Cylinder Horizontally Opposed Mid-Mounted Boxer',
      transmission: '7-Speed Porsche Doppelkupplung (PDK) Automatic with Launch Control',
      seatingCapacity: '2 Ergonomic Sports Seats Plus with Electric Backrest Adjustment',
      fuelTypeOrRange: 'Gasoline (54L Fuel Tank, approx. 12.7 km/L combined)',
      dimensions: '4,379 mm L × 1,801 mm W × 1,295 mm H (Wheelbase: 2,475 mm)',
      powerOutput: '300 PS @ 6,500 RPM / 380 Nm @ 2,150–4,500 RPM (0–100 km/h in 4.7s)',
      driveType: 'Rear-Wheel Drive (Mid-Engine Layout with Optimal 45:55 Balance)'
    },
    keyFeatures: [
      'Porsche Active Suspension Management (PASM) with 10 mm Lower Ride Height',
      'Sport Chrono Package with Mode Switch on GT Sports Steering Wheel',
      'Centrally Positioned Sports Exhaust System with Dual Stainless Steel Tailpipes',
      'Dual Luggage Compartments (150L Front Boot + 275L Rear Cargo Bay)'
    ],
    trims: [
      {
        name: '718 Cayman 2.0L PDK',
        priceIdr: 2500000000,
        highlight: '300 PS boxer engine, 18-inch Cayman alloy wheels, and Porsche Communication Management'
      },
      {
        name: '718 Cayman S 2.5L PDK',
        priceIdr: 2950000000,
        highlight: '350 PS variable turbine geometry turbo, 19-inch Boxster S wheels, and bi-xenon headlights'
      }
    ],
    imageAttribution: {
      source: 'Unsplash Car Collection',
      searchQuery: 'Porsche 718 Cayman sports coupe',
      license: 'Unsplash Free License',
      originalWikiUrl: 'https://unsplash.com'
    }
  }
];

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount).replace('IDR', 'IDR ');
}
