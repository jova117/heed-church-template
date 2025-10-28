/**
 * Find Your Place Section Component
 * 
 * Configurable section that can be customized via component configuration.
 */

'use client';

import React from 'react';
import { Content } from '../data/content-provider';
import { Layout, LayoutClasses } from '../data/layout-provider';
import { UserPlus, Users2, HandHeart, ArrowRight } from 'lucide-react';

interface FindYourPlaceSectionProps {
  variant?: 'standard' | 'minimal' | 'extended';
  className?: string;
}

export const FindYourPlaceSection: React.FC<FindYourPlaceSectionProps> = ({ 
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
          showCards: true,
          showButtons: false,
          columns: 2
        };
      case 'extended':
        return {
          showTitle: true,
          showDescription: true,
          showCards: true,
          showButtons: true,
          columns: 4
        };
      default: // 'standard'
        return {
          showTitle: true,
          showDescription: true,
          showCards: true,
          showButtons: true,
          columns: 4
        };
    }
  };
  
  const config = getVariantConfig();
  
  const cards = [
    {
      icon: UserPlus,
      title: "I&apos;m New",
      description: "First time visiting? We&apos;ll help you feel at home from the moment you arrive.",
      button: "Plan Your Visit"
    },
    {
      icon: Users2,
      title: Content.smallGroups.title,
      description: Content.smallGroups.description,
      button: Content.smallGroups.joinGroup
    },
    {
      icon: HandHeart,
      title: "Serve",
      description: "Use your gifts to make a difference in our community and beyond.",
      button: "Find Opportunities"
    },
    {
      icon: ArrowRight,
      title: "Next Steps",
      description: "Ready to take the next step in your faith journey? We're here to help.",
      button: "Learn More"
    }
  ];
  
  return (
    <section className={`${Layout.patterns.section.spacing} bg-background ${className}`}>
      <div className={Layout.patterns.section.container}>
        <div className={Layout.patterns.section.content}>
          <div className={`text-center ${Layout.patterns.section.titleSpacing}`}>
            {config.showTitle && (
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Find Your<br />
                <span className="text-primary">Place</span>
              </h2>
            )}
            {config.showDescription && (
              <p className="text-xl text-foreground max-w-4xl mx-auto">
                Whether you&apos;re exploring faith for the first time or looking for a new church home, we have a place for you.
              </p>
            )}
          </div>
          
          {config.showCards && (
            <div className={`grid md:grid-cols-2 lg:grid-cols-${config.columns} gap-8`}>
              {cards.map((card, index) => (
                <div key={index} className={LayoutClasses.card.standard}>
                  <div className="w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center mx-auto mb-6">
                    <card.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                  <p className="text-foreground mb-6">
                    {card.description}
                  </p>
                  {config.showButtons && (
                    <button className="bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                      {card.button}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindYourPlaceSection;
