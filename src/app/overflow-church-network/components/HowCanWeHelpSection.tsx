/**
 * How Can We Help Section Component
 * 
 * Configurable section that can be customized via component configuration.
 */

'use client';

import React from 'react';
import { Layout, LayoutClasses } from '../data/layout-provider';

interface HowCanWeHelpSectionProps {
  variant?: 'standard' | 'minimal' | 'extended';
  className?: string;
}

export const HowCanWeHelpSection: React.FC<HowCanWeHelpSectionProps> = ({ 
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
          columns: 3
        };
      default: // 'standard'
        return {
          showTitle: true,
          showDescription: true,
          showCards: true,
          showButtons: true,
          columns: 3
        };
    }
  };
  
  const config = getVariantConfig();
  
  const helpCards = [
    {
      title: "Prayer Requests",
      description: "Submit your prayer requests and let our community pray for you.",
      button: "Submit Request"
    },
    {
      title: "Pastoral Care",
      description: "Connect with our pastoral team for spiritual guidance and support.",
      button: "Get Support"
    },
    {
      title: "Community Resources",
      description: "Access resources and support for various life situations and needs.",
      button: "View Resources"
    }
  ];
  
  return (
    <section className={`${Layout.patterns.section.spacing} bg-background ${className}`}>
      <div className={Layout.patterns.section.container}>
        <div className={Layout.patterns.section.content}>
          <div className={`text-center ${Layout.patterns.section.titleSpacing}`}>
            {config.showTitle && (
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How can we<br />
                <span className="text-primary">help?</span>
              </h2>
            )}
            {config.showDescription && (
              <p className="text-xl text-foreground max-w-4xl mx-auto">
                We&apos;re here to support you in your faith journey and life challenges.
              </p>
            )}
          </div>
          
          {config.showCards && (
            <div className={`grid md:grid-cols-2 lg:grid-cols-${config.columns} gap-8`}>
              {helpCards.map((card, index) => (
                <div key={index} className={LayoutClasses.card.standard}>
                  <div className="w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">🤝</span>
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

export default HowCanWeHelpSection;
