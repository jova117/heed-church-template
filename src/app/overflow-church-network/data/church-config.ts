/**
 * Church Configuration System
 * 
 * This is the single source of truth for all church data.
 * AI agents can easily update this file to customize the entire site.
 */

// Configuration toggle - set to false to use real church data
export const USE_MOCK_DATA = true;

// Church Information
export const CHURCH_INFO = {
  name: "Overflow Church Network",
  tagline: "We exist to see lives transformed through discipleship",
  description: "By walking with Christ and with one another, we're forming a community of believers.",
  website: "https://overflowmars.com",
  email: "info@overflowmars.com",
  phone: "(555) 123-MARS",
  address: {
    street: "123 Olympus Mons Boulevard",
    city: "New Terra",
    state: "Mars",
    zip: "00001",
    country: "Mars"
  },
  socialMedia: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#"
  }
};

// Lead Pastor Information
export const LEAD_PASTOR = {
  name: "Dr. Alex Chen",
  title: "Lead Pastor",
  email: "alex.chen@overflowmars.com",
  phone: "(555) 101-MARS",
  bio: "Pastor Alex has been leading Overflow Church Network for over 10 years, helping people discover their purpose and grow in their faith.",
  image: "/images/pastors/alex-chen.jpg"
};

// Campus Data
export const CAMPUSES = [
  {
    id: 'mars-central',
    name: 'Mars Central Campus',
    address: '123 Olympus Mons Boulevard',
    city: 'New Terra',
    state: 'Mars',
    zip: '00001',
    phone: '(555) 123-MARS',
    email: 'central@overflowmars.com',
    lat: 18.65,
    lng: 226.2,
    serviceTimes: [
      { day: 'Sunday', time: '9:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '11:00 AM', type: 'Worship Service' },
      { day: 'Wednesday', time: '7:00 PM', type: 'Bible Study' }
    ],
    features: [
      'Zero Gravity Chapel',
      'Oxygen Garden',
      'Mars Rover Parking',
      'Solar Panel Roof',
      'Dome Observatory'
    ],
    image: '/images/mars-central.jpg',
    pastor: {
      name: 'Pastor Alex Chen',
      title: 'Campus Pastor - Mars Central',
      email: 'alex.chen@overflowmars.com',
      phone: '(555) 101-MARS'
    }
  },
  {
    id: 'valles-marineris',
    name: 'Valles Marineris Campus',
    address: '456 Canyon Ridge Drive',
    city: 'Valles Marineris',
    state: 'Mars',
    zip: '00002',
    phone: '(555) 456-MARS',
    email: 'valles@overflowmars.com',
    lat: -7.0,
    lng: 186.0,
    serviceTimes: [
      { day: 'Sunday', time: '10:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '12:00 PM', type: 'Worship Service' },
      { day: 'Thursday', time: '7:30 PM', type: 'Bible Study' }
    ],
    features: [
      'Underground Sanctuary',
      'Canyon Views',
      'Geothermal Heating',
      'Mining Heritage Museum',
      'Canyon Observatory'
    ],
    image: '/images/valles-marineris.jpg',
    pastor: {
      name: 'Pastor David Kim',
      title: 'Campus Pastor - Valles Marineris',
      email: 'david.kim@overflowmars.com',
      phone: '(555) 102-MARS'
    }
  },
  {
    id: 'phobos-station',
    name: 'Phobos Station Campus',
    address: '789 Space Station Alpha',
    city: 'Phobos Station',
    state: 'Mars',
    zip: '00003',
    phone: '(555) 789-MARS',
    email: 'phobos@overflowmars.com',
    lat: 0.0,
    lng: 0.0,
    serviceTimes: [
      { day: 'Sunday', time: '8:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '2:00 PM', type: 'Worship Service' },
      { day: 'Friday', time: '6:00 PM', type: 'Bible Study' }
    ],
    features: [
      'Zero Gravity Chapel',
      'Space Station Cafe',
      'Orbital Observatory',
      'Solar Wind Generator',
      'Asteroid Mining Museum'
    ],
    image: '/images/phobos-station.jpg',
    pastor: {
      name: 'Pastor Michael Rodriguez',
      title: 'Campus Pastor - Phobos Station',
      email: 'maria.rodriguez@overflowmars.com',
      phone: '(555) 103-MARS'
    }
  },
  {
    id: 'new-terra',
    name: 'New Terra Campus',
    address: '321 Red Planet Plaza',
    city: 'New Terra',
    state: 'Mars',
    zip: '00004',
    phone: '(555) 321-MARS',
    email: 'newterra@overflowmars.com',
    lat: 0.0,
    lng: 0.0,
    serviceTimes: [
      { day: 'Sunday', time: '9:30 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '11:30 AM', type: 'Worship Service' },
      { day: 'Tuesday', time: '7:00 PM', type: 'Bible Study' }
    ],
    features: [
      'Community Center',
      'Greenhouse Cafe',
      'Rover Service Station',
      'Solar Wind Generator',
      'Sustainable Living Center'
    ],
    image: '/images/new-terra.jpg',
    pastor: {
      name: 'Pastor Steven Martinez',
      title: 'Campus Pastor - New Terra',
      email: 'sarah.martinez@overflowmars.com',
      phone: '(555) 104-MARS'
    }
  }
];

// Messages Data
export const MESSAGES = [
  {
    id: 'message-1',
    title: 'Finding Hope in Difficult Times',
    speaker: 'Pastor Alex Chen',
    date: 'December 15, 2024',
    duration: '45 minutes',
    description: 'A message about finding hope and strength through faith during challenging times.',
    videoUrl: '#',
    audioUrl: '#',
    image: '/images/messages/hope.jpg'
  },
  {
    id: 'message-2',
    title: 'The Power of Community',
    speaker: 'Pastor Samuel Johnson',
    date: 'December 8, 2024',
    duration: '42 minutes',
    description: 'Exploring how community strengthens our faith and supports our journey.',
    videoUrl: '#',
    audioUrl: '#',
    image: '/images/messages/community.jpg'
  },
  {
    id: 'message-3',
    title: 'Walking in Faith',
    speaker: 'Pastor David Kim',
    date: 'December 1, 2024',
    duration: '38 minutes',
    description: 'Practical steps for living out our faith in everyday life.',
    videoUrl: '#',
    audioUrl: '#',
    image: '/images/messages/faith.jpg'
  }
];

// Small Groups Data
export const SMALL_GROUPS = [
  {
    id: 1,
    name: 'Young Families Connect',
    leader: 'Mike & Sarah Johnson',
    campus: 'Mars Central',
    day: 'Sunday',
    time: '6:00 PM',
    lifeStage: 'Families',
    interests: ['Parenting', 'Marriage', 'Faith'],
    description: 'A group for families with young children to connect, share parenting tips, and grow in faith together.',
    location: 'Mars Central Campus',
    capacity: '8/12',
    image: '👨‍👩‍👧‍👦'
  },
  {
    id: 2,
    name: 'Singles in Their 20s',
    leader: 'David Chen',
    campus: 'Valles Marineris',
    day: 'Tuesday',
    time: '7:00 PM',
    lifeStage: 'Singles',
    interests: ['Career', 'Relationships', 'Faith'],
    description: 'Building friendships and growing in faith while navigating career and relationships in your 20s.',
    location: 'Valles Marineris Campus',
    capacity: '6/10',
    image: '👥'
  },
  {
    id: 3,
    name: 'Empty Nesters',
    leader: 'Bob & Linda Smith',
    campus: 'Phobos Station',
    day: 'Wednesday',
    time: '6:30 PM',
    lifeStage: 'Empty Nesters',
    interests: ['Retirement', 'Travel', 'Faith'],
    description: 'A group for couples who have launched their children and are exploring this new season of life.',
    location: 'Phobos Station Campus',
    capacity: '10/12',
    image: '👴👵'
  },
  {
    id: 4,
    name: 'Working Moms',
    leader: 'Jennifer Martinez',
    campus: 'New Terra',
    day: 'Thursday',
    time: '7:30 PM',
    lifeStage: 'Women',
    interests: ['Work-Life Balance', 'Parenting', 'Faith'],
    description: 'Support and encouragement for working moms juggling career, family, and faith.',
    location: 'New Terra Campus',
    capacity: '7/10',
    image: '👩‍💼'
  },
  {
    id: 5,
    name: 'Men\'s Accountability',
    leader: 'Pastor Alex Chen',
    campus: 'Mars Central',
    day: 'Saturday',
    time: '7:00 AM',
    lifeStage: 'Men',
    interests: ['Accountability', 'Leadership', 'Faith'],
    description: 'A men\'s group focused on accountability, leadership, and growing in character and faith.',
    location: 'Mars Central Campus',
    capacity: '12/15',
    image: '👨‍💼'
  },
  {
    id: 6,
    name: 'Newlyweds',
    leader: 'Tom & Lisa Wilson',
    campus: 'Valles Marineris',
    day: 'Friday',
    time: '7:00 PM',
    lifeStage: 'Couples',
    interests: ['Marriage', 'Communication', 'Faith'],
    description: 'Building strong marriages from the start with other newlywed couples.',
    location: 'Valles Marineris Campus',
    capacity: '5/8',
    image: '💑'
  }
];

// Recent Messages/Sermons
export const RECENT_MESSAGES = [
  {
    title: "Rhythms of the Kingdom",
    speaker: "Pastor Alex Chen",
    date: "January 12, 2025",
    duration: "42 min",
    image: "🎯",
    description: "Discover how God has uniquely designed you to make a difference in the world around you."
  },
  {
    title: "Walking in Purpose",
    speaker: "Pastor David Kim",
    date: "January 5, 2025",
    duration: "38 min",
    image: "🚶‍♂️",
    description: "Understanding your calling and living with intentionality in every season of life."
  },
  {
    title: "Community Over Comfort",
    speaker: "Pastor Michael Rodriguez",
    date: "December 29, 2024",
    duration: "45 min",
    image: "🤝",
    description: "Why authentic relationships are essential for spiritual growth and personal development."
  }
];

// Service Times (for quick reference)
export const SERVICE_TIMES = [
  { name: "Mars Central", address: "123 Olympus Mons Boulevard", time: "9:00am, 11:00am" },
  { name: "Valles Marineris", address: "456 Canyon Ridge Drive", time: "10:00am, 12:00pm" },
  { name: "Phobos Station", address: "789 Space Station Alpha", time: "8:00am, 2:00pm" },
  { name: "New Terra", address: "321 Red Planet Plaza", time: "9:30am, 11:30am" }
];

// Contact Information
export const CONTACT_INFO = {
  mainOffice: {
    address: "123 Olympus Mons Boulevard, New Terra, Mars 00001",
    phone: "(555) 123-MARS",
    email: "info@overflowmars.com"
  },
  hours: {
    office: "Monday - Friday: 9:00 AM - 5:00 PM",
    services: "Sundays: 9:00 AM, 11:00 AM, 6:00 PM"
  }
};
