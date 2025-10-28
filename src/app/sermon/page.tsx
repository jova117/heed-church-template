'use client';

import React, { useState } from 'react';
import Navigation from '../overflow-church-network/components/Navigation';
import Footer from '../overflow-church-network/components/Footer';
import { 
  Play, 
  Pause, 
  Volume2, 
  Maximize, 
  Settings, 
  Church, 
  Users, 
  Heart, 
  Copy, 
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  ChevronLeft,
  Gift,
  Star,
  Handshake,
  FileText,
  Target,
  BookOpen
} from 'lucide-react';

// Sermon Hero Section
const SermonHero = () => {
  return (
    <section className="bg-background text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
              Latest Message
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Finding Your Purpose in Life
            </h1>
            <p className="text-xl text-foreground mb-6">
              Discover how God has uniquely designed you to make a difference in the world around you.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-foreground">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Pastor Alex Chen
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                January 12, 2025
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Mars Central Campus
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Player Section
const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card overflow-hidden">
            <div className="relative aspect-video bg-muted">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-primary/20 hover:bg-primary/30 rounded-full p-6 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-20 border-l-primary-foreground border-y-12 border-y-transparent ml-1"></div>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-foreground text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                    <p className="text-lg">Video would play here</p>
                    <p className="text-sm text-muted-foreground">Duration: 42:15</p>
                  </div>
                </div>
              )}
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/80 rounded-lg p-3">
                  <div className="flex items-center justify-between text-foreground">
                    <div className="flex items-center space-x-4">
                      <button className="hover:text-primary transition-colors duration-300">
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <span className="text-sm">0:00 / 42:15</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="hover:text-primary transition-colors duration-300">
                        <Volume2 className="w-5 h-5" />
                      </button>
                      <button className="hover:text-primary transition-colors duration-300">
                        <Maximize className="w-5 h-5" />
                      </button>
                      <button className="hover:text-primary transition-colors duration-300">
                        <Settings className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-1">
                      <div className="bg-primary h-1 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Post-Sermon CTAs
const PostSermonCTAs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Take the <span className="text-primary">Next Step?</span>
            </h2>
            <p className="text-xl text-foreground">
              Don&apos;t let this message end here. Here are some ways to continue your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Visit Us */}
            <div className="text-center p-8 bg-primary/10 rounded-xl">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Church className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visit Us This Sunday</h3>
              <p className="text-foreground mb-6">
                Experience this message in person and connect with our community. We&apos;d love to meet you!
              </p>
              <button className="btn-primary w-full">
                Plan Your Visit
              </button>
            </div>
            
            {/* Join a Group */}
            <div className="text-center p-8 bg-primary/10 rounded-xl">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Join a Small Group</h3>
              <p className="text-foreground mb-6">
                Discuss this message with others and build meaningful relationships in a small group setting.
              </p>
              <button className="btn-primary w-full">
                Find a Group
              </button>
            </div>
            
            {/* Get Involved */}
            <div className="text-center p-8 bg-primary/10 rounded-xl">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Start Serving</h3>
              <p className="text-foreground mb-6">
                Discover your unique gifts and find ways to serve others in our community and beyond.
              </p>
              <button className="btn-primary w-full">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Discussion Questions
const DiscussionQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  
  const questions = [
    {
      question: "What resonated most with you from today's message?",
      description: "Share what stood out to you and why it connected with your life."
    },
    {
      question: "How have you seen God's purpose at work in your life?",
      description: "Reflect on moments when you felt God's direction or calling."
    },
    {
      question: "What gifts or talents do you have that could serve others?",
      description: "Think about your unique abilities and how they might bless others."
    },
    {
      question: "What's one step you can take this week to live out your purpose?",
      description: "Make it specific and actionable - something you can actually do."
    }
  ];
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Discussion <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-foreground">
              Use these questions to reflect on the message or discuss with others in a small group.
            </p>
          </div>
          
          <div className="card">
            <div className="mb-8">
              <div className="flex justify-between text-sm text-foreground mb-2">
                <span>Question {activeQuestion + 1} of {questions.length}</span>
                <span>{Math.round(((activeQuestion + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{width: `${((activeQuestion + 1) / questions.length) * 100}%`}}
                ></div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {questions[activeQuestion].question}
              </h3>
              <p className="text-foreground mb-6">
                {questions[activeQuestion].description}
              </p>
              
              <div className="bg-muted rounded-lg p-6">
                <textarea
                  placeholder="Share your thoughts here..."
                  className="w-full h-32 p-4 bg-background text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-foreground/60 resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setActiveQuestion(Math.max(0, activeQuestion - 1))}
                disabled={activeQuestion === 0}
                className="px-6 py-3 bg-muted hover:bg-muted/80 disabled:bg-muted/50 disabled:text-muted-foreground text-foreground rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={() => setActiveQuestion(Math.min(questions.length - 1, activeQuestion + 1))}
                disabled={activeQuestion === questions.length - 1}
                className="px-6 py-3 btn-primary disabled:bg-muted disabled:text-muted-foreground flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Related Content
const RelatedContent = () => {
  const relatedSermons = [
    {
      title: "Discovering Your Spiritual Gifts",
      speaker: "Pastor Mike Smith",
      date: "January 5, 2025",
      duration: "38:42",
      icon: Gift
    },
    {
      title: "Living with Purpose in Everyday Life",
      speaker: "Pastor Samuel Johnson",
      date: "December 29, 2024",
      duration: "41:15",
      icon: Star
    },
    {
      title: "The Call to Serve Others",
      speaker: "Pastor David Chen",
      date: "December 22, 2024",
      duration: "39:28",
      icon: Handshake
    }
  ];
  
  const resources = [
    {
      title: "Purpose Discovery Guide",
      type: "PDF Download",
      description: "A comprehensive guide to help you discover your unique purpose and calling.",
      icon: FileText
    },
    {
      title: "Spiritual Gifts Assessment",
      type: "Online Quiz",
      description: "Take our assessment to discover your spiritual gifts and how to use them.",
      icon: Target
    },
    {
      title: "Serving Opportunities",
      type: "Resource List",
      description: "Explore ways to serve in our community and make a difference.",
      icon: BookOpen
    }
  ];
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Related Sermons */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Related <span className="text-primary">Sermons</span>
              </h2>
              <div className="space-y-6">
                {relatedSermons.map((sermon, index) => {
                  const IconComponent = sermon.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-300 cursor-pointer">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">{sermon.title}</h3>
                        <p className="text-sm text-foreground mb-1">{sermon.speaker}</p>
                        <p className="text-sm text-foreground">{sermon.date} • {sermon.duration}</p>
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-colors duration-300">
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Resources */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Helpful <span className="text-primary">Resources</span>
              </h2>
              <div className="space-y-6">
                {resources.map((resource, index) => {
                  const IconComponent = resource.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-300 cursor-pointer">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">{resource.title}</h3>
                        <p className="text-sm text-primary mb-1">{resource.type}</p>
                        <p className="text-sm text-foreground">{resource.description}</p>
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-colors duration-300">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Combined Social Sharing and Email Signup
const SocialSharingAndSignup = () => {
  const shareOptions = [
    { platform: 'Facebook', icon: Facebook, color: 'bg-primary' },
    { platform: 'Twitter', icon: Twitter, color: 'bg-primary' },
    { platform: 'LinkedIn', icon: Linkedin, color: 'bg-primary' },
    { platform: 'Email', icon: Mail, color: 'bg-primary' }
  ];
  
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Social Sharing Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Share This <span className="text-primary">Message</span>
          </h2>
          <p className="text-xl text-foreground mb-8">
            Help others discover their purpose by sharing this message with your friends and family.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {shareOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <button
                  key={index}
                  className="btn-primary flex items-center space-x-2"
                >
                  <IconComponent className="w-5 h-5" />
                  <span>Share on {option.platform}</span>
                </button>
              );
            })}
          </div>
          
          <div className="card">
            <h3 className="font-bold text-foreground mb-4">Suggested Message:</h3>
            <p className="text-foreground italic mb-4">
              &quot;Just watched an amazing message about finding your purpose in life. It really spoke to me and I think you&apos;d enjoy it too! Check it out: [Link]&quot;
            </p>
            <button className="btn-primary flex items-center gap-2">
              <Copy className="w-4 h-4" />
              Copy Message
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="h-px bg-background-foreground/20"></div>
        </div>

        {/* Email Signup Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Sermon Notes <span className="text-primary">Delivered Weekly</span>
          </h2>
          <p className="text-xl text-foreground mb-8">
            Never miss a message. Get sermon notes, discussion questions, and key takeaways delivered to your inbox every week.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-foreground/60"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-foreground mt-4">
              Plus, get our free &quot;Purpose Discovery Guide&quot; when you subscribe!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function SermonPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="sermons" />
      <SermonHero />
      <VideoPlayer />
      <DiscussionQuestions />
      <RelatedContent />
      <PostSermonCTAs />
      <SocialSharingAndSignup />
      <Footer />
    </div>
  );
}