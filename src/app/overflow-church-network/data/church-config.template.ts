/**
 * Church Configuration Template
 * 
 * Copy this file to church-config.ts and customize it for your church.
 * This is the single source of truth for all church data.
 * AI agents can easily update this file to customize the entire site.
 */

// Configuration toggle - set to false to use real church data
export const USE_MOCK_DATA = false;

// Church Information
export const CHURCH_INFO = {
  name: "Your Church Name",
  tagline: "Your church tagline or mission statement",
  description: "A brief description of your church and what makes it special.",
  website: "https://yourchurch.com",
  email: "info@yourchurch.com",
  phone: "(555) 123-4567",
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "Your State",
    zip: "12345",
    country: "United States"
  },
  socialMedia: {
    facebook: "https://facebook.com/yourchurch",
    instagram: "https://instagram.com/yourchurch",
    youtube: "https://youtube.com/yourchurch",
    twitter: "https://twitter.com/yourchurch"
  }
};

// Lead Pastor Information
export const LEAD_PASTOR = {
  name: "Pastor John Smith",
  title: "Lead Pastor",
  email: "pastor@yourchurch.com",
  phone: "(555) 123-4567",
  bio: "Pastor John has been leading Your Church Name for over 10 years, helping people discover their purpose and grow in their faith.",
  image: "/images/pastors/john-smith.jpg"
};

// Campus Data
export const CAMPUSES = [
  {
    id: 'main-campus',
    name: 'Main Campus',
    address: '123 Main Street',
    city: 'Your City',
    state: 'Your State',
    zip: '12345',
    phone: '(555) 123-4567',
    email: 'main@yourchurch.com',
    lat: 40.7128,
    lng: -74.0060,
    serviceTimes: [
      { day: 'Sunday', time: '9:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '11:00 AM', type: 'Worship Service' },
      { day: 'Wednesday', time: '7:00 PM', type: 'Bible Study' }
    ],
    features: [
      'Worship Center',
      'Children\'s Ministry',
      'Youth Center',
      'Coffee Shop',
      'Prayer Room'
    ],
    image: '/images/campuses/main-campus.jpg',
    pastor: {
      name: 'Pastor John Smith',
      email: 'pastor@yourchurch.com',
      phone: '(555) 123-4567'
    }
  },
  {
    id: 'north-campus',
    name: 'North Campus',
    address: '456 North Avenue',
    city: 'Your City',
    state: 'Your State',
    zip: '12346',
    phone: '(555) 123-4568',
    email: 'north@yourchurch.com',
    lat: 40.7589,
    lng: -73.9851,
    serviceTimes: [
      { day: 'Sunday', time: '10:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '12:00 PM', type: 'Worship Service' }
    ],
    features: [
      'Worship Center',
      'Children\'s Ministry',
      'Community Center',
      'Gymnasium'
    ],
    image: '/images/campuses/north-campus.jpg',
    pastor: {
      name: 'Pastor Jane Doe',
      email: 'jane@yourchurch.com',
      phone: '(555) 123-4568'
    }
  }
];

// Small Groups Data
export const SMALL_GROUPS = [
  {
    id: 'young-adults',
    name: 'Young Adults Group',
    description: 'A community for young adults in their 20s and 30s to grow in faith together.',
    campus: 'Main Campus',
    day: 'Tuesday',
    time: '7:00 PM',
    location: 'Room 101',
    leader: 'John Smith',
    leaderEmail: 'john@yourchurch.com',
    capacity: 15,
    currentMembers: 12,
    lifeStage: 'Young Adults',
    interests: ['Bible Study', 'Fellowship', 'Service'],
    image: '/images/groups/young-adults.jpg'
  },
  {
    id: 'seniors',
    name: 'Senior Saints',
    description: 'A group for seniors to study God\'s word and enjoy fellowship.',
    campus: 'Main Campus',
    day: 'Thursday',
    time: '10:00 AM',
    location: 'Fellowship Hall',
    leader: 'Mary Johnson',
    leaderEmail: 'mary@yourchurch.com',
    capacity: 20,
    currentMembers: 18,
    lifeStage: 'Seniors',
    interests: ['Bible Study', 'Fellowship', 'Prayer'],
    image: '/images/groups/seniors.jpg'
  }
];

// Recent Messages/Sermons
export const MESSAGES = [
  {
    id: 'message-1',
    title: 'Walking in Faith',
    speaker: 'Pastor John Smith',
    date: '2025-01-12',
    duration: '42 min',
    description: 'Learning to trust God in every season of life.',
    videoUrl: 'https://youtube.com/watch?v=example1',
    audioUrl: '/audio/walking-in-faith.mp3',
    image: '/images/messages/walking-in-faith.jpg',
    tags: ['Faith', 'Trust', 'Growth']
  },
  {
    id: 'message-2',
    title: 'Love in Action',
    speaker: 'Pastor Jane Doe',
    date: '2025-01-05',
    duration: '38 min',
    description: 'How to show God\'s love through our actions.',
    videoUrl: 'https://youtube.com/watch?v=example2',
    audioUrl: '/audio/love-in-action.mp3',
    image: '/images/messages/love-in-action.jpg',
    tags: ['Love', 'Service', 'Community']
  }
];

// Service Times
export const SERVICE_TIMES = [
  {
    name: 'Main Campus',
    times: [
      { day: 'Sunday', time: '9:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '11:00 AM', type: 'Worship Service' },
      { day: 'Wednesday', time: '7:00 PM', type: 'Bible Study' }
    ]
  },
  {
    name: 'North Campus',
    times: [
      { day: 'Sunday', time: '10:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '12:00 PM', type: 'Worship Service' }
    ]
  }
];

// Contact Information
export const CONTACT_INFO = {
  general: {
    email: 'info@yourchurch.com',
    phone: '(555) 123-4567',
    address: '123 Main Street, Your City, State 12345'
  },
  staff: [
    {
      name: 'Pastor John Smith',
      title: 'Lead Pastor',
      email: 'pastor@yourchurch.com',
      phone: '(555) 123-4567'
    },
    {
      name: 'Pastor Jane Doe',
      title: 'Associate Pastor',
      email: 'jane@yourchurch.com',
      phone: '(555) 123-4568'
    }
  ],
  departments: [
    {
      name: 'Children\'s Ministry',
      email: 'children@yourchurch.com',
      phone: '(555) 123-4569'
    },
    {
      name: 'Youth Ministry',
      email: 'youth@yourchurch.com',
      phone: '(555) 123-4570'
    }
  ]
};

// Events Data
export const EVENTS = [
  {
    id: 'event-1',
    title: 'Community Outreach',
    date: '2025-02-15',
    time: '9:00 AM',
    location: 'Main Campus',
    description: 'Join us as we serve our community through various outreach activities.',
    image: '/images/events/community-outreach.jpg',
    registrationRequired: true,
    maxAttendees: 50
  },
  {
    id: 'event-2',
    title: 'Bible Study Conference',
    date: '2025-03-20',
    time: '6:00 PM',
    location: 'North Campus',
    description: 'A weekend conference focused on deepening your understanding of God\'s word.',
    image: '/images/events/bible-study-conference.jpg',
    registrationRequired: true,
    maxAttendees: 100
  }
];

// Ministry Data
export const MINISTRIES = [
  {
    id: 'children',
    name: 'Children\'s Ministry',
    description: 'Nurturing young hearts and minds in the love of Christ.',
    ageRange: 'Ages 2-12',
    contact: 'children@yourchurch.com',
    image: '/images/ministries/children.jpg'
  },
  {
    id: 'youth',
    name: 'Youth Ministry',
    description: 'Empowering teenagers to live for Christ in their daily lives.',
    ageRange: 'Ages 13-18',
    contact: 'youth@yourchurch.com',
    image: '/images/ministries/youth.jpg'
  }
];

// Giving Information
export const GIVING_INFO = {
  online: {
    url: 'https://yourchurch.com/give',
    description: 'Give online securely through our website'
  },
  inPerson: {
    description: 'Give in person during services or at the church office'
  },
  mail: {
    address: '123 Main Street, Your City, State 12345',
    description: 'Mail your offering to the church address'
  }
};
