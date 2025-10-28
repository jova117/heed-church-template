/**
 * One Story at a Time Section Component
 * 
 * Configurable section that can be customized via component configuration.
 */

'use client';

import React from 'react';
import { Layout, LayoutClasses } from '../data/layout-provider';

interface OneStoryAtATimeSectionProps {
  variant?: 'standard' | 'minimal' | 'extended';
  className?: string;
}

export const OneStoryAtATimeSection: React.FC<OneStoryAtATimeSectionProps> = ({ 
  variant = 'standard', 
  className = '' 
}) => {
  // Get component configuration based on variant
  const getVariantConfig = () => {
    switch (variant) {
      case 'minimal':
        return {
          showTitle: true,
          showDescription: false,
          showStories: true,
          showButton: false,
          columns: 2
        };
      case 'extended':
        return {
          showTitle: true,
          showDescription: true,
          showStories: true,
          showButton: true,
          columns: 3
        };
      default: // 'standard'
        return {
          showTitle: true,
          showDescription: true,
          showStories: true,
          showButton: true,
          columns: 3
        };
    }
  };
  
  const config = getVariantConfig();
  
  const stories = [
    {
      image: "🙏",
      title: "Finding Hope in Difficult Times",
      description: "Sarah discovered strength and community through our support groups during her battle with cancer.",
      tags: ["Faith", "Prayer", "Community"]
    },
    {
      image: "👨‍👩‍👧‍👦",
      title: "A Family's Journey to Faith",
      description: "The Johnson family found purpose and belonging through our family ministry programs.",
      tags: ["Family", "Growth", "Belonging"]
    },
    {
      image: "🌟",
      title: "From Doubt to Devotion",
      description: "Mark's questions about faith led him to a deeper understanding and relationship with God.",
      tags: ["Faith", "Prayer", "Generosity", "Peace", "Relationships"]
    }
  ];
  
  return (
    <section className={`${Layout.patterns.section.spacing} bg-background ${className}`}>
      <div className={Layout.patterns.section.container}>
        <div className={Layout.patterns.section.content}>
          <div className={`text-center ${Layout.patterns.section.titleSpacing}`}>
            {config.showTitle && (
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                One story<br />
                <span className="text-primary">at a time</span>
              </h2>
            )}
            {config.showDescription && (
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                Changing Lives Through the Gospel
              </p>
            )}
          </div>
          
          {config.showStories && (
            <div className={`grid md:grid-cols-2 lg:grid-cols-${config.columns} gap-8`}>
              {stories.map((story, index) => (
                <div key={index} className={LayoutClasses.card.standard}>
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{story.image}</div>
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
          )}
          
          {config.showButton && (
            <div className="text-center mt-12">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                Our Stories
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OneStoryAtATimeSection;
