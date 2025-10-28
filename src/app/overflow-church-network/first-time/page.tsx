'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Hero Section for First-Time Visitors
const FirstTimeHero = () => {
  return (
    <section className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-primary">Overflow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground">
            We&apos;re so glad you&apos;re here! Let us help you feel at home from the moment you arrive.
          </p>
          <div className="card p-8 max-w-2xl mx-auto">
            <p className="text-lg text-foreground">
              &ldquo;We know visiting a new church can feel overwhelming. That&apos;s why we&apos;ve created this guide to help you know exactly what to expect and feel confident about your visit.&rdquo;
            </p>
            <p className="text-sm text-primary mt-4 font-semibold">- Pastor Alex Chen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Campus Selector with Enhanced Features
const CampusSelector = () => {
  const [selectedCampus, setSelectedCampus] = useState('mars-central');
  
  const campuses = [
    {
      id: 'mars-central',
      name: 'Mars Central Campus',
      address: '123 Olympus Mons Boulevard, New Terra, Mars 00001',
      phone: '(555) 123-MARS',
      times: 'Sundays: 9:00am, 11:00am, Wednesdays: 7:00pm',
      distance: '2.3 miles away',
      pastor: 'Pastor Alex Chen',
      description: 'Our main campus with zero gravity chapel and oxygen garden.',
      features: ['Zero Gravity Chapel', 'Oxygen Garden', 'Mars Rover Parking', 'Solar Panel Roof']
    },
    {
      id: 'valles-marineris',
      name: 'Valles Marineris Campus',
      address: '456 Canyon Ridge Drive, Valles Marineris, Mars 00002',
      phone: '(555) 456-MARS',
      times: 'Sundays: 10:00am, 12:00pm, Thursdays: 7:30pm',
      distance: '5.7 miles away',
      pastor: 'Pastor David Kim',
      description: 'A growing campus with underground sanctuary and canyon views.',
      features: ['Underground Sanctuary', 'Canyon Views', 'Geothermal Heating', 'Mining Heritage Museum']
    },
    {
      id: 'phobos-station',
      name: 'Phobos Station Campus',
      address: '789 Space Station Alpha, Phobos Station, Mars 00003',
      phone: '(555) 789-MARS',
      times: 'Sundays: 8:00am, 2:00pm, Saturdays: 6:00pm',
      distance: '8.2 miles away',
      pastor: 'Pastor Michael Rodriguez',
      description: 'A unique orbital campus perfect for space exploration enthusiasts.',
      features: ['Orbital Chapel', 'Zero Gravity Worship', 'Space Suit Storage', 'Communication Array']
    },
    {
      id: 'new-terra',
      name: 'New Terra Campus',
      address: '321 Red Planet Plaza, New Terra, Mars 00004',
      phone: '(555) 321-MARS',
      times: 'Sundays: 9:30am, 11:30am, Tuesdays: 7:00pm',
      distance: '6.1 miles away',
      pastor: 'Pastor Steven Martinez',
      description: 'A community-focused campus with sustainable living and greenhouse cafe.',
      features: ['Community Center', 'Greenhouse Cafe', 'Rover Service Station', 'Solar Wind Generator']
    }
  ];
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choose Your <span className="text-primary">Campus</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              We have four convenient locations across Mars. Each campus has its own personality while sharing the same mission and values.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {campuses.map((campus) => (
              <div
                key={campus.id}
                className={`p-8 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedCampus === campus.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary'
                }`}
                onClick={() => setSelectedCampus(campus.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{campus.name}</h3>
                    <p className="text-primary font-semibold">{campus.pastor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-primary font-semibold">{campus.distance}</p>
                  </div>
                </div>
                
                <p className="text-foreground mb-4">{campus.description}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Address:</span> {campus.address}
                  </p>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Phone:</span> 
                    <a href={`tel:${campus.phone}`} className="text-primary hover:underline ml-1">
                      {campus.phone}
                    </a>
                  </p>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Service Times:</span> {campus.times}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {campus.features.map((feature, index) => (
                    <span key={index} className="bg-primary/10 text-foreground text-xs px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 btn-primary">
                    Get Directions
                  </button>
                  <button className="flex-1 btn-secondary">
                    Call Campus
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Campus CTA */}
          <div className="text-center p-8 card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to visit {campuses.find(c => c.id === selectedCampus)?.name}?
            </h3>
            <p className="text-foreground mb-6">
              We&apos;d love to welcome you this Sunday. Click below to plan your visit and receive a welcome gift.
            </p>
            <button className="btn-primary text-lg py-4 px-8">
              Plan Your Visit to {campuses.find(c => c.id === selectedCampus)?.name}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// What to Expect Section
const WhatToExpect = () => {
  const [activeTab, setActiveTab] = useState('arrival');
  
  const tabs = [
    {
      id: 'arrival',
      title: 'Arrival',
      icon: '🚗',
      content: {
        title: 'What to Expect When You Arrive',
        items: [
          {
            title: 'Parking',
            description: 'Free parking is available in our main lot. Look for visitor parking spaces near the main entrance.',
            details: 'Our parking team will help direct you to the best spots. If you need assistance, just ask!'
          },
          {
            title: 'Welcome Center',
            description: 'Stop by our Welcome Center in the lobby for a free gift and to get your questions answered.',
            details: 'Our friendly volunteers will help you find your way and answer any questions you have.'
          },
          {
            title: 'Children\'s Check-in',
            description: 'If you have children, visit our secure check-in area where you\'ll receive a security tag.',
            details: 'Your children will be safe and well-cared for while you enjoy the service.'
          }
        ]
      }
    },
    {
      id: 'service',
      title: 'Service',
      icon: '⛪',
      content: {
        title: 'What to Expect During Service',
        items: [
          {
            title: 'Length',
            description: 'Our services typically last about 75 minutes, including worship and teaching.',
            details: 'We start and end on time so you can plan your day accordingly.'
          },
          {
            title: 'Dress Code',
            description: 'Come as you are! We have people in everything from jeans to business casual.',
            details: 'The most important thing is that you\'re comfortable and feel welcome.'
          },
          {
            title: 'Worship Style',
            description: 'Contemporary worship with a mix of modern and traditional songs.',
            details: 'Feel free to worship in whatever way feels natural to you - standing, sitting, or raising your hands.'
          }
        ]
      }
    },
    {
      id: 'after',
      title: 'After Service',
      icon: '☕',
      content: {
        title: 'What to Expect After Service',
        items: [
          {
            title: 'Connection Time',
            description: 'Stay for coffee and conversation in our lobby after the service.',
            details: 'This is a great time to meet people and ask questions about getting involved.'
          },
          {
            title: 'Next Steps',
            description: 'Visit our Next Steps area to learn about small groups and ways to get connected.',
            details: 'We\'ll help you find the perfect next step for your journey.'
          },
          {
            title: 'Follow-up',
            description: 'We\'ll send you a follow-up email with resources and information about upcoming events.',
            details: 'No pressure - just helpful information to support your spiritual journey.'
          }
        ]
      }
    }
  ];
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What to <span className="text-primary">Expect</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              We want you to feel comfortable and confident about your visit. Here&apos;s exactly what you can expect.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 m-2 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-primary/10 text-foreground hover:bg-primary/20'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              {tabs.find(tab => tab.id === activeTab)?.content.title}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {tabs.find(tab => tab.id === activeTab)?.content.items.map((item, index) => (
                <div key={index} className="card">
                  <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                  <p className="text-foreground mb-4">{item.description}</p>
                  <p className="text-sm text-foreground italic">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  
  const faqs = [
    {
      question: "What should I wear?",
      answer: "Come as you are! We have people in everything from jeans and t-shirts to business casual. The most important thing is that you feel comfortable and welcome."
    },
    {
      question: "What about my kids?",
      answer: "We have excellent children's programming for all ages, from nursery through 5th grade. Your children will be safe, well-cared for, and have fun while you enjoy the service."
    },
    {
      question: "Will I be singled out as a visitor?",
      answer: "No way! We won't ask you to stand up, introduce yourself, or do anything that makes you feel uncomfortable. We want you to relax and enjoy your visit."
    },
    {
      question: "What if I'm not sure about God or Christianity?",
      answer: "That's perfectly fine! We welcome people wherever they are in their spiritual journey. Come with your questions - we're here to help, not to pressure you."
    },
    {
      question: "How long is the service?",
      answer: "Our services typically last about 75 minutes, including worship and teaching. We start and end on time so you can plan your day accordingly."
    },
    {
      question: "Is there coffee?",
      answer: "Absolutely! We have free coffee available in our lobby before and after the service. It's a great way to meet people and feel at home."
    }
  ];
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-foreground">
              Have a question? We&apos;ve got answers. If you don&apos;t see your question here, feel free to contact us.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted transition-colors duration-300"
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <span className={`text-primary transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Schedule Visit Form
const ScheduleVisitForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    campus: 'mars-central',
    visitDate: '',
    familySize: '',
    children: '',
    interests: []
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your <span className="text-primary">Visit</span>
            </h2>
            <p className="text-xl text-secondary-foreground max-w-2xl mx-auto">
              Let us know you&apos;re coming and we&apos;ll make sure you have an amazing first visit experience.
            </p>
          </div>
          
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-foreground/60"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-foreground/60"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-foreground/60"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Campus *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-foreground/60"
                    value={formData.campus}
                    onChange={(e) => setFormData({...formData, campus: e.target.value})}
                  >
                    <option value="mars-central">Mars Central Campus</option>
                    <option value="valles-marineris">Valles Marineris Campus</option>
                    <option value="phobos-station">Phobos Station Campus</option>
                    <option value="new-terra">New Terra Campus</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Preferred Visit Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-foreground/60"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({...formData, visitDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Family Size</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-foreground/60"
                    value={formData.familySize}
                    onChange={(e) => setFormData({...formData, familySize: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="just-me">Just Me</option>
                    <option value="couple">Couple</option>
                    <option value="family-3-4">Family (3-4 people)</option>
                    <option value="family-5+">Family (5+ people)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Children (ages)</label>
                <input
                  type="text"
                  placeholder="e.g., 5, 8, 12"
                  className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  value={formData.children}
                  onChange={(e) => setFormData({...formData, children: e.target.value})}
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg py-4 px-8"
                >
                  Schedule My Visit
                </button>
                <p className="text-sm text-foreground mt-4">
                  * We&apos;ll send you a welcome gift and follow up after your visit!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function FirstTimeVisitorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="i'm new" />
      <FirstTimeHero />
      <CampusSelector />
      <WhatToExpect />
      <FAQSection />
      <ScheduleVisitForm />
      <Footer />
    </div>
  );
}