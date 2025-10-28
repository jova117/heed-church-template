'use client';

import React, { useState } from 'react';
import { Heart, MapPin, BookOpen, Handshake } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Hero Section for Small Groups
const SmallGroupsHero = () => {
  return (
    <section className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your <span className="text-primary">People</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground">
              Life is better in community. Join a small group where you&apos;ll build authentic relationships, grow in your faith, and find support for life&apos;s journey.
          </p>
          <div className="card p-8 max-w-2xl mx-auto">
            <p className="text-lg text-foreground">
              &quot;Small groups are where real life happens. It&apos;s where we share our struggles, celebrate our victories, and grow together in faith.&quot;
            </p>
            <p className="text-sm text-primary mt-4 font-semibold">- Pastor Alex Chen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Small Groups Section
const WhySmallGroups = () => {
  const benefits = [
    {
      icon: <Handshake className="w-12 h-12 mx-auto text-primary" />,
      title: 'Authentic Relationships',
      description: 'Build deep, meaningful friendships with people who genuinely care about you and your journey.'
    },
    {
      icon: <BookOpen className="w-12 h-12 mx-auto text-primary" />,
      title: 'Spiritual Growth',
      description: 'Study God\'s Word together, ask questions, and grow in your understanding of faith.'
    },
    {
      icon: <Heart className="w-12 h-12 mx-auto text-primary" />,
      title: 'Support & Encouragement',
      description: 'Find support during life\'s challenges and celebrate victories together.'
    },
    {
      icon: <MapPin className="w-12 h-12 mx-auto text-primary" />,
      title: 'Purpose & Service',
      description: 'Discover your unique gifts and find ways to serve others in your community.'
    }
  ];
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why <span className="text-primary">Small Groups?</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Small groups are the heart of Overflow. They&apos;re where we move from being a crowd to being a community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 card">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Group Finder with Filters
const GroupFinder = () => {
  const [filters, setFilters] = useState({
    campus: '',
    day: '',
    time: '',
    lifeStage: '',
    interests: [] as string[]
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const quizQuestions = [
    {
      question: "What's your life stage?",
      options: [
        { value: 'singles', label: 'Single' },
        { value: 'couples', label: 'Married/Couple' },
        { value: 'families', label: 'Family with Kids' },
        { value: 'empty-nesters', label: 'Empty Nesters' }
      ]
    },
    {
      question: "What day works best for you?",
      options: [
        { value: 'sunday', label: 'Sunday' },
        { value: 'monday', label: 'Monday' },
        { value: 'tuesday', label: 'Tuesday' },
        { value: 'wednesday', label: 'Wednesday' },
        { value: 'thursday', label: 'Thursday' },
        { value: 'friday', label: 'Friday' },
        { value: 'saturday', label: 'Saturday' }
      ]
    },
    {
      question: "Which campus is closest to you?",
      options: [
        { value: 'mars-central', label: 'Mars Central' },
        { value: 'valles-marineris', label: 'Valles Marineris' },
        { value: 'phobos-station', label: 'Phobos Station' },
        { value: 'new-terra', label: 'New Terra' }
      ]
    },
    {
      question: "What are you most interested in?",
      options: [
        { value: 'marriage', label: 'Marriage & Relationships' },
        { value: 'parenting', label: 'Parenting' },
        { value: 'career', label: 'Career & Work' },
        { value: 'faith', label: 'Spiritual Growth' },
        { value: 'accountability', label: 'Accountability' },
        { value: 'service', label: 'Serving Others' }
      ]
    }
  ];
  
  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = {...quizAnswers, [questionIndex]: answer};
    setQuizAnswers(newAnswers);
    
    if (questionIndex < quizQuestions.length - 1) {
      setQuizStep(questionIndex + 1);
    } else {
      // Quiz complete - apply answers to filters
      applyQuizToFilters(newAnswers);
      setShowQuiz(false);
    }
  };
  
  const applyQuizToFilters = (answers: {[key: number]: string}) => {
    const newFilters = {...filters};
    
    // Map quiz answers to filter values
    if (answers[0]) { // Life stage
      const lifeStageMap: {[key: string]: string} = {
        'singles': 'Singles',
        'couples': 'Couples', 
        'families': 'Families',
        'empty-nesters': 'Empty Nesters'
      };
      newFilters.lifeStage = lifeStageMap[answers[0]] || '';
    }
    
    if (answers[1]) { // Day
      const dayMap: {[key: string]: string} = {
        'sunday': 'Sunday',
        'monday': 'Monday',
        'tuesday': 'Tuesday',
        'wednesday': 'Wednesday',
        'thursday': 'Thursday',
        'friday': 'Friday',
        'saturday': 'Saturday'
      };
      newFilters.day = dayMap[answers[1]] || '';
    }
    
    if (answers[2]) { // Campus
      const campusMap: {[key: string]: string} = {
        'mars-central': 'Mars Central',
        'valles-marineris': 'Valles Marineris',
        'phobos-station': 'Phobos Station',
        'new-terra': 'New Terra'
      };
      newFilters.campus = campusMap[answers[2]] || '';
    }
    
    if (answers[3]) { // Interests
      newFilters.interests = [answers[3]];
    }
    
    setFilters(newFilters);
  };
  
  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setShowQuiz(false);
  };
  
  const groups = [
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
      image: null
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
      image: null
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
      image: null
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
      image: null
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
      image: null
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
      image: null
    }
  ];
  
  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.leader.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCampus = !filters.campus || group.campus === filters.campus;
    const matchesDay = !filters.day || group.day === filters.day;
    const matchesLifeStage = !filters.lifeStage || group.lifeStage === filters.lifeStage;
    
    return matchesSearch && matchesCampus && matchesDay && matchesLifeStage;
  });
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Find Your <span className="text-primary">Perfect Group</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Use our filters to find a small group that fits your schedule, location, and life stage.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="card p-8 mb-12">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search groups by name, leader, or description..."
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-foreground/60"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <select
                className="px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={filters.campus}
                onChange={(e) => setFilters({...filters, campus: e.target.value})}
              >
                <option value="">All Campuses</option>
                <option value="Mars Central">Mars Central</option>
                <option value="Valles Marineris">Valles Marineris</option>
                <option value="Phobos Station">Phobos Station</option>
                <option value="New Terra">New Terra</option>
              </select>
              
              <select
                className="px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={filters.day}
                onChange={(e) => setFilters({...filters, day: e.target.value})}
              >
                <option value="">All Days</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
              
              <select
                className="px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={filters.lifeStage}
                onChange={(e) => setFilters({...filters, lifeStage: e.target.value})}
              >
                <option value="">All Life Stages</option>
                <option value="Singles">Singles</option>
                <option value="Couples">Couples</option>
                <option value="Families">Families</option>
                <option value="Empty Nesters">Empty Nesters</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
              
              <button
                onClick={() => setFilters({campus: '', day: '', time: '', lifeStage: '', interests: []})}
                className="px-4 py-3 bg-primary/10 hover:bg-primary/20 text-foreground rounded-lg transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
          
          {/* Groups Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGroups.map((group) => (
              <div key={group.id} className="card overflow-hidden">
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground">{group.name}</h3>
                    <p className="text-foreground">Led by {group.leader}</p>
                  </div>
                  
                  <p className="text-foreground mb-4">{group.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-foreground">
                      <strong>Location:</strong> {group.location}
                    </div>
                    <div className="text-sm text-foreground">
                      <strong>Time:</strong> {group.day}s at {group.time}
                    </div>
                    <div className="text-sm text-foreground">
                      <strong>Members:</strong> {group.capacity}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {group.interests.map((interest, index) => (
                      <span key={index} className="bg-primary/10 text-foreground text-xs px-2 py-1 rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full btn-primary">
                    Request to Join
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quiz Assistant */}
          {!showQuiz && (
            <div className="bg-primary/5 rounded-xl p-6 mb-8 text-center mt-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Need help finding the right group?</h3>
              <p className="text-foreground mb-4">Take our quick quiz and we&apos;ll recommend the best small groups for you.</p>
              <button
                onClick={() => setShowQuiz(true)}
                className="btn-primary"
              >
                Take Quick Quiz
              </button>
            </div>
          )}
          
          {/* Quiz Interface */}
          {showQuiz && (
            <div className="bg-primary rounded-xl p-8 mb-8 text-primary-foreground mt-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Quick Match Quiz</h3>
                  <p className="text-primary-foreground">Answer a few questions to find your perfect group</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-primary-foreground mb-2">
                    <span>Question {quizStep + 1} of {quizQuestions.length}</span>
                    <span>{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary-foreground h-2 rounded-full transition-all duration-300"
                      style={{width: `${((quizStep + 1) / quizQuestions.length) * 100}%`}}
                    ></div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-6 text-center text-primary-foreground">
                  {quizQuestions[quizStep].question}
                </h4>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {quizQuestions[quizStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(quizStep, option.value)}
                      className="p-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-all duration-300 text-left text-primary-foreground"
                    >
                      <div className="font-semibold text-center">{option.label}</div>
                    </button>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={resetQuiz}
                    className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300"
                  >
                    Skip Quiz
                  </button>
                  {quizStep > 0 && (
                    <button
                      onClick={() => setQuizStep(quizStep - 1)}
                      className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300"
                    >
                      ← Previous Question
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {filteredGroups.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">No groups found</h3>
              <p className="text-foreground mb-6">Try adjusting your filters or search terms.</p>
              <button
                onClick={() => {
                  setFilters({campus: '', day: '', time: '', lifeStage: '', interests: []});
                  setSearchTerm('');
                }}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Group Leader",
      quote: "Leading a small group has been one of the most rewarding experiences of my life. Watching people grow in their faith and build deep relationships is incredible."
    },
    {
      name: "Mike Chen",
      role: "Group Member",
      quote: "I was new to the area and didn't know anyone. My small group became my family. We support each other through everything."
    },
    {
      name: "Lisa & Tom Wilson",
      role: "Married Couple",
      quote: "Our small group has strengthened our marriage and given us lifelong friends. We can't imagine life without this community."
    }
  ];
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Real Stories from <span className="text-primary">Real People</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              See how small groups have transformed lives and built lasting relationships in our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-foreground">{testimonial.role}</p>
                </div>
                <blockquote className="text-foreground italic text-lg leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function SmallGroupsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="groups" />
      <SmallGroupsHero />
      <WhySmallGroups />
      <GroupFinder />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}