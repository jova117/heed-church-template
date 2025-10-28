'use client';

import React, { useState } from 'react';
import Navigation from './overflow-church-network/components/Navigation';
import Footer from './overflow-church-network/components/Footer';
import LoadingSpinner from './overflow-church-network/components/LoadingSpinner';
import ErrorBoundary from './overflow-church-network/components/ErrorBoundary';
import { ChurchData } from './overflow-church-network/data/data-provider';
import { Content } from './overflow-church-network/data/content-provider';
import { Layout, LayoutClasses } from './overflow-church-network/data/layout-provider';
import { Users, Globe, Heart, UserPlus, Users2, HandHeart, ArrowRight } from 'lucide-react';
import StartingPointQuiz from '@/components/StartingPointQuiz';
import HeroSection from './overflow-church-network/components/HeroSection';

// Watch Section Component
const WatchSection = () => {
  return (
    <section className={`${Layout.patterns.section.spacing} bg-background`}>
      <div className={Layout.patterns.section.container}>
        <div className={Layout.patterns.section.content}>
          <div className={`text-center ${Layout.patterns.section.titleSpacing}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Watch &<br />
              <span className="text-primary">Listen</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience powerful messages, worship, and community from anywhere. Available on all your devices.
            </p>
          </div>
          
          {/* Live Service */}
          <div className="card mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-lg font-semibold text-foreground">Live Now</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Sunday Service</h3>
                <p className="text-xl mb-6 text-muted-foreground">Join us for worship, teaching, and community</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">
                    Watch Live
                  </button>
                  <button className="btn-secondary">
                    Join Chat
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-96 h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-0 h-0 border-l-12 border-l-primary border-y-8 border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Live Stream</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Messages */}
          <div className={LayoutClasses.grid.responsive}>
            {[
              {
                title: "Rhythms of the Kingdom",
                speaker: "Pastor Alex Chen",
                date: "January 12, 2025",
                duration: "42 min"
              },
              {
                title: "Finding Your Purpose",
                speaker: "Pastor Mike Smith",
                date: "January 5, 2025",
                duration: "38 min"
              },
              {
                title: "Community Matters",
                speaker: "Pastor Samuel Johnson",
                date: "December 29, 2024",
                duration: "35 min"
              }
            ].map((message, index) => (
              <div key={index} className="card">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{message.title}</h3>
                  <p className="text-primary font-semibold">{message.speaker}</p>
                  <p className="text-muted-foreground text-sm">{message.date} • {message.duration}</p>
                </div>
                <button className="w-full btn-primary">
                  Watch Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-secondary text-lg py-4 px-8">
              View All Messages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// We Want You Here Section Component
const WeWantYouHereSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We want<br />
              <span className="text-primary">you here</span>
            </h2>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              We are one family with multiple campuses across the community. Whether this is your first time visiting a church or you&apos;re just new to Overflow, we&apos;re glad you&apos;re here.
            </p>
            <div className="mt-8">
              <button className="btn-primary text-lg py-4 px-8">
                Find a Campus
              </button>
            </div>
          </div>
          
          {/* Campus Preview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ChurchData.campuses.map((campus) => (
              <div key={campus.id} className="card">
                <h3 className="text-xl font-bold text-foreground mb-2">{campus.name}</h3>
                <p className="text-foreground text-sm mb-3">{campus.address}</p>
                <p className="text-primary font-semibold text-sm">
                  {campus.serviceTimes.map(st => `${st.day}: ${st.time}`).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Campus Selector Component
const CampusSelector = () => {
  const [selectedCampus, setSelectedCampus] = useState('mars-central');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Transform campus data for display
  const campuses = ChurchData.campuses.map(campus => ({
    id: campus.id,
    name: campus.name,
    address: `${campus.address}, ${campus.city}, ${campus.state} ${campus.zip}`,
    phone: campus.phone,
    times: campus.serviceTimes.map(st => `${st.day}: ${st.time}`).join(', '),
    distance: '2.3 miles away', // This would be calculated based on user location
    pastor: `Pastor ${campus.name.split(' ')[0]} Pastor` // This would come from ChurchData.leadPastor
  }));

  const handleCampusSelect = async (campusId: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setSelectedCampus(campusId);
    } catch {
      setError('Failed to select campus. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {Content.campus.title} <span className="text-primary">Campus</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto px-4">
              {Content.campus.description}
            </p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-destructive text-center">{error}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {campuses.map((campus) => (
              <div
                key={campus.id}
                className={`p-4 sm:p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedCampus === campus.id
                    ? 'border-primary bg-primary/5'
                    : 'border-primary/20 hover:border-primary/40'
                } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => !isLoading && handleCampusSelect(campus.id)}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{campus.name}</h3>
                  <p className="text-sm text-foreground mb-4">{campus.pastor}</p>
                  <p className="text-sm text-foreground mb-4">{campus.address}</p>
                  <p className="text-sm text-primary font-semibold mb-4">{campus.times}</p>
                  <p className="text-sm text-primary font-semibold mb-4">{campus.distance}</p>
                  
                  <div className="flex flex-col gap-2">
                    <button className="btn-primary text-sm py-2 px-4">
                      {Content.campus.getDirections}
                    </button>
                    <button className="btn-secondary text-sm py-2 px-4">
                      {Content.campus.learnMore}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Campus Details */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 card">
            {isLoading ? (
              <LoadingSpinner text="Loading campus details..." />
            ) : (
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Ready to visit {campuses.find(c => c.id === selectedCampus)?.name}?
                </h3>
                <p className="text-foreground mb-6 text-sm sm:text-base">
                  We&apos;d love to welcome you this Sunday. Click below to plan your visit and receive a welcome gift.
                </p>
                <button className="btn-primary text-lg py-4 px-8">
                  Plan Your Visit to {campuses.find(c => c.id === selectedCampus)?.name}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Find Your Place Section Component
const FindYourPlaceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Find Your<br />
              <span className="text-primary">Place</span>
            </h2>
            <p className="text-xl text-foreground max-w-4xl mx-auto">
              Whether you&apos;re exploring faith for the first time or looking for a new church home, we have a place for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* I'm New */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">I&apos;m New</h3>
              <p className="text-foreground mb-6">
                First time visiting? We&apos;ll help you feel at home from the moment you arrive.
              </p>
              <button className="btn-primary">
                Plan Your Visit
              </button>
            </div>
            
            {/* Small Groups */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Users2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{Content.smallGroups.title}</h3>
              <p className="text-foreground mb-6">
                {Content.smallGroups.description}
              </p>
              <button className="btn-primary">
                {Content.smallGroups.joinGroup}
              </button>
            </div>
            
            {/* Serve */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <HandHeart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Serve</h3>
              <p className="text-foreground mb-6">
                Discover your gifts and make a difference in our community and beyond.
              </p>
              <button className="btn-primary">
                Get Involved
              </button>
            </div>
            
            {/* Next Steps */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Next Steps</h3>
              <p className="text-foreground mb-6">
                Ready to take the next step in your faith journey? We&apos;re here to help.
              </p>
              <button className="btn-primary">
                {Content.giving.learnMore}
              </button>
            </div>
          </div>
          
          {/* Interactive Quiz Component */}
          <StartingPointQuiz />
        </div>
      </div>
    </section>
  );
};

// Culture of Generosity Section Component
const CultureOfGenerositySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              A culture<br />
              <span className="text-primary">{Content.giving.title}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Community Engagement */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Community Engagement</h3>
              <p className="text-foreground mb-6">
                We want to unleash the full force of the church to love people one at a time. Match your gifts and abilities with ways to serve.
              </p>
              <button className="btn-primary">
                Engage
              </button>
            </div>
            
            {/* Missions */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Missions</h3>
              <p className="text-foreground mb-6">
                We worship a God who sends, gives, and loves. Explore what God is doing and how you can be part of it.
              </p>
              <button className="btn-primary">
                Explore
              </button>
            </div>
            
            {/* Disaster Response */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Disaster Response</h3>
              <p className="text-foreground mb-6">
                As a community of believers, we care for those impacted by unpredictable events. Learn how you can help.
              </p>
              <button className="btn-primary">
                Respond
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// One Story at a Time Section Component
const OneStoryAtATimeSection = () => {
  const stories = [
    {
      title: "From Addiction to Purpose: A Story of Redemption",
      description: "He thought building cars and partying would lead to fulfillment—but addiction took over. Years later, one quiet morning turned everything around.",
      tags: ["Addiction", "Faith", "Peace", "Prayer", "Relationships"],
    },
    {
      title: "More Than Physical Healing: From Kidney Failure to Baptism",
      description: "Isabelle was just 7 when we rushed her to the ER following months of high fevers, weight loss, and no clear answers.",
      tags: ["Faith", "Prayer", "Generosity", "Peace", "Relationships"],
    },
    {
      title: "Where Do You Truly Belong?: A Story of Finding Home",
      description: "Facing rejection and discrimination in multiple countries, she grew up searching for belonging until she found it in community.",
      tags: ["Community", "Faith", "Relationships", "Peace"],
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              One story<br />
              <span className="text-primary">at a time</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Changing Lives Through the Gospel
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="card">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{story.title}</h3>
                  <p className="text-foreground mb-6 leading-relaxed">{story.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {story.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary text-lg py-4 px-8">
              Our Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// How Can We Help Section Component
const HowCanWeHelpSection = () => {
  const helpItems = [
    {
      title: "Care",
      description: "God did not make us to walk this journey alone. For a variety of groups, counseling referrals, mentoring, and pastoral care, call 208.777.7325 or visit our Care page to learn more.",
      button: "Find Support",
    },
    {
      title: "Prayer",
      description: "We firmly believe that prayer changes things, and we would love to join you in lifting your needs up to God.",
      button: "Request Prayer",
    },
    {
      title: "Sermons",
      description: "Looking for a message about a particular topic or wanting to view a sermon again?",
      button: "Watch Here",
    },
    {
      title: "Resources",
      description: "Grow deeper in your faith with Bible studies, reading plans, current sermon series resources, and more.",
      button: "Learn More",
    },
    {
      title: "Church News",
      description: "Check out the Church News page for everything from events to connection opportunities",
      button: "What's New",
    },
    {
      title: "Contact",
      description: "Have questions or need help? We'd love to hear from you.",
      button: "Contact",
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How can we<br />
              <span className="text-primary">help?</span>
            </h2>
          </div>
          
          <div className={LayoutClasses.grid.responsive}>
            {helpItems.map((item, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground mb-6 leading-relaxed">{item.description}</p>
                <button className="btn-primary">
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function HomePage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Navigation currentPage="home" />
        <HeroSection />
        <WatchSection />
        <div id="locations"><WeWantYouHereSection /></div>
        <CampusSelector />
        <div id="im-new"><div id="groups"><FindYourPlaceSection /></div></div>
        <CultureOfGenerositySection />
        <OneStoryAtATimeSection />
        <div id="church-news"><HowCanWeHelpSection /></div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}