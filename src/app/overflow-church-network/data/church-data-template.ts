/**
 * Church Data Template
 * 
 * This is a template file that AI agents can use to generate church-specific data.
 * Simply replace the mock data with your church's actual information.
 * 
 * INSTRUCTIONS FOR AI AGENTS:
 * 1. Set USE_MOCK_DATA to false
 * 2. Replace all mock data with real church data
 * 3. Ensure all required fields are filled
 * 4. Test the site to ensure all data displays correctly
 */

// Configuration toggle - set to false to use real church data
export const USE_MOCK_DATA = false;

// Church Information - REPLACE WITH YOUR CHURCH'S DATA
export const CHURCH_INFO = {
  name: "YOUR CHURCH NAME", // e.g., "Grace Community Church"
  tagline: "YOUR CHURCH TAGLINE", // e.g., "Where faith meets community"
  description: "YOUR CHURCH DESCRIPTION", // e.g., "A welcoming community focused on growing in faith together"
  website: "https://yourchurch.com",
  email: "info@yourchurch.com",
  phone: "(555) 123-4567",
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "Your State",
    zip: "12345",
    country: "Your Country"
  },
  socialMedia: {
    facebook: "https://facebook.com/yourchurch",
    instagram: "https://instagram.com/yourchurch",
    youtube: "https://youtube.com/yourchurch",
    twitter: "https://twitter.com/yourchurch"
  }
};

// Lead Pastor Information - REPLACE WITH YOUR LEAD PASTOR'S DATA
export const LEAD_PASTOR = {
  name: "Pastor John Smith", // Replace with actual lead pastor name
  title: "Lead Pastor", // Replace with actual title
  email: "pastor@yourchurch.com",
  phone: "(555) 123-4567",
  bio: "Pastor John has been leading our church for X years, helping people discover their purpose and grow in their faith.",
  image: "/images/pastors/lead-pastor.jpg"
};

// Campus Data - REPLACE WITH YOUR CHURCH'S CAMPUSES
export const CAMPUSES = [
  {
    id: 'main-campus', // Unique identifier
    name: 'Main Campus', // Campus name
    address: '123 Main Street',
    city: 'Your City',
    state: 'Your State',
    zip: '12345',
    phone: '(555) 123-4567',
    email: 'main@yourchurch.com',
    lat: 40.7128, // Latitude for maps
    lng: -74.0060, // Longitude for maps
    serviceTimes: [
      { day: 'Sunday', time: '9:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '11:00 AM', type: 'Worship Service' },
      { day: 'Wednesday', time: '7:00 PM', type: 'Bible Study' }
    ],
    features: [
      'Children\'s Ministry',
      'Youth Programs',
      'Parking Available',
      'Wheelchair Accessible',
      'Coffee Shop'
    ],
    image: '/images/main-campus.jpg',
    pastor: {
      name: 'Pastor John Smith',
      title: 'Campus Pastor - Main Campus',
      email: 'pastor@yourchurch.com',
      phone: '(555) 123-4567'
    }
  }
  // Add more campuses as needed
];

// Small Groups Data - REPLACE WITH YOUR CHURCH'S SMALL GROUPS
export const SMALL_GROUPS = [
  {
    id: 1,
    name: 'Young Families',
    leader: 'Mike & Sarah Johnson',
    campus: 'Main Campus',
    day: 'Sunday',
    time: '6:00 PM',
    lifeStage: 'Families',
    interests: ['Parenting', 'Marriage', 'Faith'],
    description: 'A group for families with young children to connect and grow in faith together.',
    location: 'Main Campus',
    capacity: '8/12',
    image: '👨‍👩‍👧‍👦'
  }
  // Add more small groups as needed
];

// Recent Messages/Sermons - REPLACE WITH YOUR CHURCH'S RECENT MESSAGES
export const RECENT_MESSAGES = [
  {
    title: "Your Recent Message Title",
    speaker: "Pastor John Smith",
    date: "January 12, 2025",
    duration: "42 min",
    image: "🎯",
    description: "Your message description here."
  }
  // Add more recent messages as needed
];

// Service Times (for quick reference) - REPLACE WITH YOUR CHURCH'S SERVICE TIMES
export const SERVICE_TIMES = [
  { name: "Main Campus", address: "123 Main Street", time: "9:00am, 11:00am" }
  // Add more service times as needed
];

// Contact Information - REPLACE WITH YOUR CHURCH'S CONTACT INFO
export const CONTACT_INFO = {
  mainOffice: {
    address: "123 Main Street, Your City, State 12345",
    phone: "(555) 123-4567",
    email: "info@yourchurch.com"
  },
  hours: {
    office: "Monday - Friday: 9:00 AM - 5:00 PM",
    services: "Sundays: 9:00 AM, 11:00 AM"
  }
};
