'use client';

import React, { useState } from 'react';

interface QuizAnswers {
  [key: number]: string;
}

interface PersonalizedResults {
  title: string;
  description: string;
  recommendations: string[];
  nextSteps: string[];
}

const StartingPointQuiz = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [results, setResults] = useState<PersonalizedResults | null>(null);
  
  const startingPointQuestions = [
    {
      id: 1,
      question: "What brings you to our church today?",
      options: [
        { 
          value: 'explorer', 
          label: 'Exploring Faith', 
          description: 'I\'m exploring faith for the first time'
        },
        { 
          value: 'seeker', 
          label: 'New Home', 
          description: 'I\'m looking for a new church home'
        },
        { 
          value: 'connector', 
          label: 'Community', 
          description: 'I want to connect with others'
        },
        { 
          value: 'server', 
          label: 'Ready to Serve', 
          description: 'I\'m ready to serve and make a difference'
        }
      ]
    },
    {
      id: 2,
      question: "What's your faith background?",
      options: [
        { value: 'new', label: 'New to Faith' },
        { value: 'returning', label: 'Returning to Faith' },
        { value: 'growing', label: 'Growing in Faith' },
        { value: 'mature', label: 'Mature Believer' }
      ]
    },
    {
      id: 3,
      question: "What are you most looking for?",
      options: [
        { value: 'understanding', label: 'Understanding' },
        { value: 'community', label: 'Community' },
        { value: 'purpose', label: 'Purpose' },
        { value: 'growth', label: 'Spiritual Growth' }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to connect?",
      options: [
        { value: 'online', label: 'Online First' },
        { value: 'in-person', label: 'In-Person' },
        { value: 'small-group', label: 'Small Groups' },
        { value: 'service', label: 'Sunday Service' }
      ]
    }
  ];
  
  const getPersonalizedResults = (answers: QuizAnswers): PersonalizedResults => {
    const userType = answers[0]; // Primary answer determines user type
    
    const resultMappings: { [key: string]: PersonalizedResults } = {
      explorer: {
        title: "Faith Explorer",
        description: "Perfect! We're excited to walk alongside you in your faith journey.",
        recommendations: [
          "Watch our 'What is Christianity?' video series",
          "Join our 'Exploring Faith' small group",
          "Attend a Sunday service",
          "Download our 'New to Faith' guide"
        ],
        nextSteps: [
          "Plan your first visit",
          "Connect with a mentor",
          "Start reading the Bible"
        ]
      },
      seeker: {
        title: "Church Seeker",
        description: "Welcome! We'd love to help you find your church home.",
        recommendations: [
          "Visit our 'What to Expect' page",
          "Join our 'Newcomers' small group",
          "Meet with a pastor",
          "Attend our welcome event"
        ],
        nextSteps: [
          "Schedule a visit",
          "Meet our team",
          "Learn about our beliefs"
        ]
      },
      connector: {
        title: "Community Builder",
        description: "Great! We believe in the power of authentic community.",
        recommendations: [
          "Join a small group",
          "Attend our community events",
          "Volunteer for a ministry",
          "Connect with like-minded people"
        ],
        nextSteps: [
          "Find your small group",
          "Attend a community event",
          "Start volunteering"
        ]
      },
      server: {
        title: "Servant Leader",
        description: "Amazing! We need people like you to help us make a difference.",
        recommendations: [
          "Explore our ministry opportunities",
          "Join our volunteer team",
          "Attend our leadership training",
          "Connect with other leaders"
        ],
        nextSteps: [
          "Browse ministries",
          "Apply to volunteer",
          "Join leadership development"
        ]
      }
    };
    
    return resultMappings[userType] || resultMappings.explorer;
  };
  
  const handleAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = {...answers, [questionIndex]: answer};
    setAnswers(newAnswers);
    
    if (questionIndex < startingPointQuestions.length - 1) {
      setCurrentStep(questionIndex + 1);
    } else {
      // Quiz complete - show results
      const personalizedResults = getPersonalizedResults(newAnswers);
      setResults(personalizedResults);
    }
  };
  
  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
    setShowQuiz(false);
  };
  
  // Initial collapsed state - MATCHING GROUP QUIZ STYLE
  if (!showQuiz && !results) {
    return (
      <div className="bg-primary/5 rounded-xl p-6 mb-8 text-center mt-8">
        <h3 className="text-xl font-bold text-foreground mb-2">Not Sure Where to Start?</h3>
        <p className="text-foreground mb-4">Take our quick assessment to find your perfect starting point</p>
        <button
          onClick={() => setShowQuiz(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Take Quick Assessment
        </button>
      </div>
    );
  }
  
  // Quiz interface - MATCHING GROUP QUIZ STYLE
  if (showQuiz && !results) {
    return (
      <div className="bg-primary rounded-xl p-8 mb-8 text-primary-foreground mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Quick Assessment</h3>
            <p className="text-primary-foreground">Answer a few questions to find your perfect starting point</p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between text-sm text-primary-foreground mb-2">
              <span>Question {currentStep + 1} of {startingPointQuestions.length}</span>
              <span>{Math.round(((currentStep + 1) / startingPointQuestions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-primary-foreground h-2 rounded-full transition-all duration-300"
                style={{width: `${((currentStep + 1) / startingPointQuestions.length) * 100}%`}}
              ></div>
            </div>
          </div>
          
          <h4 className="text-xl font-bold mb-6 text-center text-primary-foreground">
            {startingPointQuestions[currentStep].question}
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {startingPointQuestions[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentStep, option.value)}
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
              Skip Assessment
            </button>
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300"
              >
                ← Previous Question
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  // Results display - MATCHING GROUP QUIZ STYLE
  if (results) {
    return (
      <div className="bg-primary rounded-xl p-8 mb-8 text-primary-foreground mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Your Personalized Journey</h3>
            <p className="text-primary-foreground">Based on your answers, here&apos;s your perfect starting point</p>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-primary-foreground mb-2">{results.title}</h4>
              <p className="text-primary-foreground">{results.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <h5 className="text-lg font-bold text-primary-foreground mb-4">Start Here:</h5>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="text-primary-foreground text-sm">
                      • {rec}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <h5 className="text-lg font-bold text-primary-foreground mb-4">Next Steps:</h5>
                <ul className="space-y-2">
                  {results.nextSteps.map((step, index) => (
                    <li key={index} className="text-primary-foreground text-sm">
                      • {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold py-3 px-6 rounded-lg transition-colors duration-300 mr-4">
                Get My Personalized Plan
              </button>
              <button className="bg-primary/20 hover:bg-primary/30 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                View All Options
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <button
              onClick={resetQuiz}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300 mr-6"
            >
              Retake Assessment
            </button>
            <button className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300">
              Share Results
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};

export default StartingPointQuiz;
