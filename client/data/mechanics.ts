export type Service = {
  name: string
  price: string
  duration: string
}

export type Review = {
  id: string
  author: string
  authorImage: string
  rating: number
  date: string
  comment: string
  servicePhotos?: string[]
}

export type Mechanic = {
  id: string
  name: string
  shopName: string
  image: string
  rating: number
  reviewCount: number
  specialty: string
  categories: string[]
  experience: number
  bio: string
  address: string
  phone: string
  hours: Record<string, string>
  services: Service[]
  reviews: Review[]
  certifications: string[]
  coordinates: { lat: number; lng: number }
}

export const mechanics: Mechanic[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    shopName: "Johnson's Auto Repair",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
    rating: 4.9,
    reviewCount: 128,
    specialty: "Engine Specialist",
    categories: ["Engine", "Diagnostics", "Oil Change", "Transmission"],
    experience: 15,
    bio: "Marcus has been turning wrenches for over 15 years, specializing in complex engine rebuilds and diagnostics. He trained at ASE and has worked with everything from classic cars to modern hybrids. His shop is known for honest pricing and meticulous work.",
    address: "245 West 47th Street, New York, NY 10036",
    phone: "(212) 555-0101",
    hours: {
      Monday: "8:00 AM - 6:00 PM",
      Tuesday: "8:00 AM - 6:00 PM",
      Wednesday: "8:00 AM - 6:00 PM",
      Thursday: "8:00 AM - 6:00 PM",
      Friday: "8:00 AM - 5:00 PM",
      Saturday: "9:00 AM - 2:00 PM",
      Sunday: "Closed",
    },
    services: [
      { name: "Full Engine Diagnostic", price: "$120", duration: "1.5 hrs" },
      { name: "Engine Tune-Up", price: "$250", duration: "3 hrs" },
      { name: "Oil Change & Filter", price: "$55", duration: "30 min" },
      { name: "Transmission Service", price: "$180", duration: "2 hrs" },
      { name: "Timing Belt Replacement", price: "$400", duration: "4 hrs" },
    ],
    reviews: [
      {
        id: "r1",
        author: "Sarah M.",
        authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-11-15",
        comment: "Marcus diagnosed my engine issue in under an hour and had it fixed the same day. Incredibly professional and the price was exactly as quoted. I won't go anywhere else.",
        servicePhotos: [
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1549317661-cf369843af5e?w=400&h=300&fit=crop&auto=format",
        ],
      },
      {
        id: "r2",
        author: "James T.",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-10-22",
        comment: "Got a complete engine overhaul done here. The work was flawless — car runs better than when I first bought it. Marcus kept me updated throughout the entire process.",
      },
      {
        id: "r3",
        author: "Diana L.",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-09-05",
        comment: "Amazing service. Came in for an oil change, they noticed my timing belt was close to failure. Saved me from a very expensive breakdown. Honest mechanics are hard to find!",
      },
    ],
    certifications: ["ASE Master Technician", "Hybrid Vehicle Specialist", "EPA 609 Certified"],
    coordinates: { lat: 40.7589, lng: -73.9851 },
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    shopName: "Precision Brake & Tire",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&auto=format",
    rating: 4.8,
    reviewCount: 94,
    specialty: "Brake & Suspension Expert",
    categories: ["Brakes", "Tires", "Oil Change", "Diagnostics"],
    experience: 11,
    bio: "Elena runs one of Brooklyn's most trusted brake and tire shops, with 11 years of hands-on experience. She is certified in advanced brake system diagnostics and has a reputation for thorough safety inspections. Her team treats every vehicle as if it were their own.",
    address: "78 Atlantic Avenue, Brooklyn, NY 11201",
    phone: "(718) 555-0234",
    hours: {
      Monday: "7:30 AM - 5:30 PM",
      Tuesday: "7:30 AM - 5:30 PM",
      Wednesday: "7:30 AM - 5:30 PM",
      Thursday: "7:30 AM - 5:30 PM",
      Friday: "7:30 AM - 5:00 PM",
      Saturday: "8:00 AM - 1:00 PM",
      Sunday: "Closed",
    },
    services: [
      { name: "Brake Pad Replacement (Axle)", price: "$180", duration: "1.5 hrs" },
      { name: "Rotor Resurfacing or Replacement", price: "$220", duration: "2 hrs" },
      { name: "Tire Rotation & Balance", price: "$60", duration: "45 min" },
      { name: "New Tire Mounting (each)", price: "$25", duration: "15 min" },
      { name: "Brake Fluid Flush", price: "$90", duration: "1 hr" },
      { name: "Oil Change", price: "$50", duration: "30 min" },
    ],
    reviews: [
      {
        id: "r4",
        author: "Carlos P.",
        authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-12-01",
        comment: "Elena and her team replaced all four brake pads and rotors in record time. The car stops on a dime now. Fair price and extremely professional.",
        servicePhotos: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
        ],
      },
      {
        id: "r5",
        author: "Tanya B.",
        authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-11-08",
        comment: "Best tire shop in Brooklyn, hands down. Quick, honest, and they explain everything. Elena caught a nail I didn't even know I had.",
      },
      {
        id: "r6",
        author: "Mike R.",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
        rating: 4,
        date: "2025-10-14",
        comment: "Great service on my brakes. Had to wait a little longer than expected but the quality of work made it worthwhile.",
      },
    ],
    certifications: ["ASE Brake Specialist", "Michelin Certified Technician", "TPMS Certified"],
    coordinates: { lat: 40.6892, lng: -73.9902 },
  },
  {
    id: "3",
    name: "David Kim",
    shopName: "Kim's Electrical & Diagnostics",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format",
    rating: 4.7,
    reviewCount: 76,
    specialty: "Electrical Systems Expert",
    categories: ["Electrical", "Diagnostics", "AC & Heating", "Engine"],
    experience: 9,
    bio: "David specializes in modern automotive electrical systems, EV charging infrastructure, and advanced diagnostic tools. With a background in electrical engineering, he brings a methodical approach to problem-solving that customers love. His shop is equipped with the latest scan tools.",
    address: "512 Queens Boulevard, Elmhurst, NY 11373",
    phone: "(718) 555-0356",
    hours: {
      Monday: "9:00 AM - 6:00 PM",
      Tuesday: "9:00 AM - 6:00 PM",
      Wednesday: "9:00 AM - 6:00 PM",
      Thursday: "9:00 AM - 6:00 PM",
      Friday: "9:00 AM - 5:00 PM",
      Saturday: "10:00 AM - 2:00 PM",
      Sunday: "Closed",
    },
    services: [
      { name: "Electrical System Diagnosis", price: "$100", duration: "1 hr" },
      { name: "Battery Replacement", price: "$180", duration: "45 min" },
      { name: "Alternator Replacement", price: "$320", duration: "2.5 hrs" },
      { name: "AC System Recharge", price: "$150", duration: "1 hr" },
      { name: "Starter Motor Replacement", price: "$280", duration: "2 hrs" },
      { name: "Check Engine Light Diagnosis", price: "$85", duration: "1 hr" },
    ],
    reviews: [
      {
        id: "r7",
        author: "Angela W.",
        authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-11-20",
        comment: "David fixed an electrical gremlin that three other shops couldn't figure out. He took his time, explained the root cause, and charged a very fair price. Highly recommend.",
        servicePhotos: [
          "https://images.unsplash.com/photo-1580274455952-e6d3c8b1b9e0?w=400&h=300&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1562141961-4991173bfdb7?w=400&h=300&fit=crop&auto=format",
        ],
      },
      {
        id: "r8",
        author: "Robert S.",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
        rating: 4,
        date: "2025-10-30",
        comment: "Very knowledgeable. Fixed my AC and the check engine light issue in one visit. Would definitely return.",
      },
    ],
    certifications: ["ASE Electrical Specialist", "EV Technician Certified", "Bosch Service Partner"],
    coordinates: { lat: 40.7372, lng: -73.8822 },
  },
  {
    id: "4",
    name: "Tony Vasquez",
    shopName: "Vasquez Transmission & Auto",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format",
    rating: 4.8,
    reviewCount: 112,
    specialty: "Transmission Specialist",
    categories: ["Transmission", "Engine", "Oil Change", "Diagnostics"],
    experience: 18,
    bio: "Tony is a veteran mechanic with 18 years of experience focusing on automatic and manual transmission rebuilds. He has worked on everything from family sedans to performance vehicles and heavy-duty trucks. Tony's shop has a reputation for getting complex jobs done right the first time.",
    address: "330 Morris Avenue, Bronx, NY 10451",
    phone: "(718) 555-0478",
    hours: {
      Monday: "8:00 AM - 6:00 PM",
      Tuesday: "8:00 AM - 6:00 PM",
      Wednesday: "8:00 AM - 6:00 PM",
      Thursday: "8:00 AM - 6:00 PM",
      Friday: "8:00 AM - 5:00 PM",
      Saturday: "9:00 AM - 1:00 PM",
      Sunday: "Closed",
    },
    services: [
      { name: "Transmission Fluid Service", price: "$130", duration: "1 hr" },
      { name: "Transmission Rebuild (Auto)", price: "$1800", duration: "3-5 days" },
      { name: "Transmission Rebuild (Manual)", price: "$1200", duration: "2-3 days" },
      { name: "Clutch Replacement", price: "$650", duration: "4 hrs" },
      { name: "Differential Service", price: "$200", duration: "2 hrs" },
      { name: "Oil Change & Filter", price: "$55", duration: "30 min" },
    ],
    reviews: [
      {
        id: "r9",
        author: "Luis G.",
        authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-12-10",
        comment: "Tony rebuilt my automatic transmission and it's running perfectly. He gave me a detailed breakdown of everything that was done. Worth every penny.",
        servicePhotos: [
          "https://images.unsplash.com/photo-1615906550268-e4b53f98c8d2?w=400&h=300&fit=crop&auto=format",
        ],
      },
      {
        id: "r10",
        author: "Patricia N.",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-11-02",
        comment: "Had a slipping transmission issue. Tony diagnosed it quickly and was upfront about the cost. Professional from start to finish.",
      },
      {
        id: "r11",
        author: "Kevin H.",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
        rating: 4,
        date: "2025-09-18",
        comment: "Great work on my clutch. Took a bit longer than estimated but the result was excellent. Fair pricing.",
      },
    ],
    certifications: ["ASE Transmission Specialist", "ATRA Certified", "GM Preferred Service Center"],
    coordinates: { lat: 40.8190, lng: -73.9240 },
  },
  {
    id: "5",
    name: "Priya Patel",
    shopName: "Patel Quick Lube & Service",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format",
    rating: 4.6,
    reviewCount: 201,
    specialty: "Preventive Maintenance Expert",
    categories: ["Oil Change", "Tires", "Brakes", "AC & Heating"],
    experience: 7,
    bio: "Priya built her business from the ground up with a focus on fast, reliable preventive maintenance. Her shop handles hundreds of oil changes and tire rotations each month while maintaining top-notch quality. She believes in educating customers so they can make informed decisions about their vehicles.",
    address: "890 Staten Island Expressway, Staten Island, NY 10314",
    phone: "(718) 555-0512",
    hours: {
      Monday: "7:00 AM - 7:00 PM",
      Tuesday: "7:00 AM - 7:00 PM",
      Wednesday: "7:00 AM - 7:00 PM",
      Thursday: "7:00 AM - 7:00 PM",
      Friday: "7:00 AM - 6:00 PM",
      Saturday: "8:00 AM - 4:00 PM",
      Sunday: "Closed",
    },
    services: [
      { name: "Conventional Oil Change", price: "$39", duration: "20 min" },
      { name: "Synthetic Oil Change", price: "$69", duration: "20 min" },
      { name: "Tire Rotation", price: "$35", duration: "30 min" },
      { name: "AC Inspection & Recharge", price: "$140", duration: "1 hr" },
      { name: "Wiper Blade Replacement", price: "$25", duration: "10 min" },
      { name: "Multi-Point Inspection", price: "$0", duration: "30 min" },
    ],
    reviews: [
      {
        id: "r12",
        author: "Samantha K.",
        authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-12-05",
        comment: "In and out in 20 minutes for an oil change! Priya's team is incredibly efficient without cutting corners. This is my go-to spot now.",
      },
      {
        id: "r13",
        author: "David C.",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
        rating: 4,
        date: "2025-11-28",
        comment: "Very fast and affordable. The free multi-point inspection is a great touch — they found a minor coolant leak I wasn't aware of.",
        servicePhotos: [
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop&auto=format",
        ],
      },
      {
        id: "r14",
        author: "Irene M.",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-10-17",
        comment: "Super friendly staff and transparent pricing. No upsells, just honest work. Priya is fantastic at what she does.",
      },
    ],
    certifications: ["ASE Certified Technician", "Valvoline Service Partner", "NAPA AutoCare Member"],
    coordinates: { lat: 40.5789, lng: -74.1723 },
  },
  {
    id: "6",
    name: "James O'Brien",
    shopName: "O'Brien Complete Auto Care",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format",
    rating: 4.9,
    reviewCount: 87,
    specialty: "Full-Service Master Mechanic",
    categories: ["Engine", "Brakes", "Electrical", "AC & Heating", "Diagnostics", "Transmission"],
    experience: 22,
    bio: "James has been a licensed mechanic for over 22 years and has seen nearly every automotive problem imaginable. His Hoboken shop offers comprehensive auto care with a personal touch. James personally oversees every repair and stands behind his work with a 12-month warranty.",
    address: "155 Hudson Street, Hoboken, NJ 07030",
    phone: "(201) 555-0689",
    hours: {
      Monday: "8:00 AM - 6:00 PM",
      Tuesday: "8:00 AM - 6:00 PM",
      Wednesday: "8:00 AM - 6:00 PM",
      Thursday: "8:00 AM - 6:00 PM",
      Friday: "8:00 AM - 5:30 PM",
      Saturday: "9:00 AM - 2:00 PM",
      Sunday: "Closed",
    },
    services: [
      { name: "Comprehensive Vehicle Inspection", price: "$95", duration: "1.5 hrs" },
      { name: "Full Engine Overhaul", price: "$2500", duration: "5-7 days" },
      { name: "Brake System Service", price: "$220", duration: "2 hrs" },
      { name: "AC System Repair", price: "$350", duration: "3 hrs" },
      { name: "Electrical Diagnosis & Repair", price: "$150", duration: "2 hrs" },
      { name: "Oil Change & Filter", price: "$60", duration: "30 min" },
    ],
    reviews: [
      {
        id: "r15",
        author: "Amanda F.",
        authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-12-12",
        comment: "James is the kind of mechanic you refer all your friends to. Fixed my AC, did a brake service, and gave me a full rundown of the car's condition. Outstanding work.",
        servicePhotos: [
          "https://images.unsplash.com/photo-1549317661-cf369843af5e?w=400&h=300&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1562141961-4991173bfdb7?w=400&h=300&fit=crop&auto=format",
        ],
      },
      {
        id: "r16",
        author: "Brian J.",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-11-25",
        comment: "The 12-month warranty on the engine overhaul gave me total peace of mind. James is thorough, communicative, and his pricing is very competitive for the quality.",
      },
      {
        id: "r17",
        author: "Rachel E.",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format",
        rating: 5,
        date: "2025-10-05",
        comment: "Had a complex electrical issue that took two days to trace. James was patient, honest, and the fix has held perfectly for months. Truly a master mechanic.",
      },
    ],
    certifications: ["ASE Master Technician", "AAA Approved Auto Repair", "Bosch Service Partner", "EPA 609 Certified"],
    coordinates: { lat: 40.7440, lng: -74.0324 },
  },
]
