// Mars-themed mock data for Overflow Church Network prototype
// DEPRECATED: This file is now deprecated - use the centralized data system instead
// See: src/app/overflow-church-network/data/church-config.ts

// DEPRECATED: Use ChurchData from data-provider.ts instead
export const mockCampusData = [
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
    image: '/images/mars-central.jpg'
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
    lat: -13.4,
    lng: 59.7,
    serviceTimes: [
      { day: 'Sunday', time: '10:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '12:00 PM', type: 'Worship Service' },
      { day: 'Thursday', time: '7:30 PM', type: 'Prayer Meeting' }
    ],
    features: [
      'Underground Sanctuary',
      'Canyon Views',
      'Geothermal Heating',
      'Mining Heritage Museum',
      'Rover Service Station'
    ],
    image: '/images/valles-marineris.jpg'
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
      { day: 'Saturday', time: '6:00 PM', type: 'Fellowship' }
    ],
    features: [
      'Orbital Chapel',
      'Zero Gravity Worship',
      'Space Suit Storage',
      'Communication Array',
      'Solar Wind Generator'
    ],
    image: '/images/phobos-station.jpg'
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
    image: '/images/new-terra.jpg'
  }
];

export const mockPastorData = {
  leadPastor: {
    name: 'Dr. Alex Chen',
    title: 'Lead Pastor',
    email: 'alex.chen@overflowmars.com',
    phone: '(555) 100-MARS',
    bio: 'Pastor Alex has been serving the Mars community for over 15 years, helping establish the first Christian church on the red planet.',
    image: '/images/pastor-alex.jpg'
  },
  campusPastors: [
    {
      name: 'Rev. Steven Martinez',
      title: 'Campus Pastor - Mars Central',
      email: 'sarah.martinez@overflowmars.com',
      phone: '(555) 101-MARS',
      campus: 'Mars Central Campus'
    },
    {
      name: 'Pastor David Kim',
      title: 'Campus Pastor - Valles Marineris',
      email: 'david.kim@overflowmars.com',
      phone: '(555) 102-MARS',
      campus: 'Valles Marineris Campus'
    },
    {
      name: 'Rev. Michael Rodriguez',
      title: 'Campus Pastor - Phobos Station',
      email: 'maria.rodriguez@overflowmars.com',
      phone: '(555) 103-MARS',
      campus: 'Phobos Station Campus'
    },
    {
      name: 'Pastor Steven Martinez',
      title: 'Campus Pastor - New Terra',
      email: 'sarah.martinez@overflowmars.com',
      phone: '(555) 104-MARS',
      campus: 'New Terra Campus'
    }
  ]
};

export const mockContactData = {
  mainOffice: {
    address: '123 Olympus Mons Boulevard, New Terra, Mars 00001',
    phone: '(555) 123-MARS',
    email: 'info@overflowmars.com',
    hours: 'Monday - Friday: 9:00 AM - 5:00 PM (Mars Time)'
  },
  emergencyContact: {
    phone: '(555) 911-MARS',
    email: 'emergency@overflowmars.com',
    available: '24/7 Mars Time'
  },
  departments: [
    {
      name: 'Children\'s Ministry',
      contact: 'children@overflowmars.com',
      phone: '(555) 200-MARS'
    },
    {
      name: 'Youth Ministry',
      contact: 'youth@overflowmars.com',
      phone: '(555) 201-MARS'
    },
    {
      name: 'Small Groups',
      contact: 'groups@overflowmars.com',
      phone: '(555) 202-MARS'
    },
    {
      name: 'Missions',
      contact: 'missions@overflowmars.com',
      phone: '(555) 203-MARS'
    }
  ]
};

export const mockServiceTimes = [
  { name: "Mars Central", address: "123 Olympus Mons Boulevard", time: "9:00am, 11:00am" },
  { name: "Valles Marineris", address: "456 Canyon Ridge Drive", time: "10:00am, 12:00pm" },
  { name: "Phobos Station", address: "789 Space Station Alpha", time: "8:00am, 2:00pm" },
  { name: "New Terra", address: "321 Red Planet Plaza", time: "9:30am, 11:30am" }
];

export const mockSmallGroups = [
  {
    id: 'mars-explorers',
    name: 'Mars Explorers Group',
    description: 'A group for those passionate about Mars exploration and discovery. We study how faith and science work together in the cosmos.',
    leader: {
      name: 'Dr. James Wilson',
      email: 'james.wilson@overflowmars.com',
      phone: '(555) 301-MARS'
    },
    meetingDetails: {
      day: 'Sunday',
      time: '3:00 PM',
      frequency: 'Weekly',
      location: 'Mars Central - Observatory Room',
      campus: 'Mars Central Campus'
    },
    demographics: {
      lifeStage: ['Adults (26-45)', 'Seniors (55+)'],
      ageRange: '26-65',
      interests: ['Science', 'Exploration', 'Astronomy']
    },
    capacity: {
      current: 8,
      max: 15
    },
    features: ['Telescope Access', 'Space Suit Training', 'Mission Planning']
  },
  {
    id: 'terraformers',
    name: 'Terraformers Group',
    description: 'Join us as we discuss how to make Mars more like home while maintaining our faith and values.',
    leader: {
      name: 'Sarah Chen',
      email: 'sarah.chen@overflowmars.com',
      phone: '(555) 302-MARS'
    },
    meetingDetails: {
      day: 'Wednesday',
      time: '7:00 PM',
      frequency: 'Weekly',
      location: 'Valles Marineris - Underground Chapel',
      campus: 'Valles Marineris Campus'
    },
    demographics: {
      lifeStage: ['Young Adults (18-25)', 'Adults (26-45)'],
      ageRange: '18-45',
      interests: ['Environment', 'Sustainability', 'Community']
    },
    capacity: {
      current: 12,
      max: 20
    },
    features: ['Greenhouse Access', 'Environmental Projects', 'Community Service']
  },
  {
    id: 'space-families',
    name: 'Space Families Group',
    description: 'A group for families living and working in space, supporting each other through the unique challenges of space life.',
    leader: {
      name: 'Mike and Lisa Johnson',
      email: 'johnsons@overflowmars.com',
      phone: '(555) 303-MARS'
    },
    meetingDetails: {
      day: 'Saturday',
      time: '6:00 PM',
      frequency: 'Weekly',
      location: 'Phobos Station - Family Center',
      campus: 'Phobos Station Campus'
    },
    demographics: {
      lifeStage: ['Families', 'Married Couples'],
      ageRange: '25-50',
      interests: ['Family', 'Parenting', 'Space Life']
    },
    capacity: {
      current: 6,
      max: 12
    },
    features: ['Childcare Available', 'Family Activities', 'Space Parenting Resources']
  }
];
