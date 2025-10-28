/**
 * Watch Section Component
 * 
 * Configurable watch section that can be customized via component configuration.
 */

'use client';

import React from 'react';
import { Content } from '../data/content-provider';
import { Layout } from '../data/layout-provider';
import { ChurchData } from '../data/data-provider';

interface WatchSectionProps {
  variant?: 'standard' | 'minimal' | 'extended';
  className?: string;
}

export const WatchSection: React.FC<WatchSectionProps> = ({ 
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
          showMessages: true,
          showButtons: false,
          columns: 2
        };
      case 'extended':
        return {
          showTitle: true,
          showDescription: true,
          showMessages: true,
          showButtons: true,
          columns: 3
        };
      default: // 'standard'
        return {
          showTitle: true,
          showDescription: true,
          showMessages: true,
          showButtons: true,
          columns: 3
        };
    }
  };
  
  const config = getVariantConfig();
  
  return (
    <section className={`${Layout.patterns.section.spacing} bg-background ${className}`}>
      <div className={Layout.patterns.section.container}>
        <div className={Layout.patterns.section.content}>
          <div className={`text-center ${Layout.patterns.section.titleSpacing}`}>
            {config.showTitle && (
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Watch &<br />
                <span className="text-primary">Listen</span>
              </h2>
            )}
            {config.showDescription && (
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                Experience our latest messages and teachings from our pastors.
              </p>
            )}
          </div>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-${config.columns} gap-8`}>
            {ChurchData.messages.map((message, index) => (
              <div key={index} className="bg-background rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-primary/20">
                <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-12 border-l-background border-y-8 border-y-transparent ml-1"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{message.title}</h3>
                <p className="text-primary font-semibold mb-2">{message.speaker}</p>
                <p className="text-foreground text-sm">{message.date} • {message.duration}</p>
                {config.showButtons && (
                  <button className="w-full bg-primary hover:bg-primary/90 text-background font-bold py-3 px-4 rounded-lg transition-colors duration-300 mt-4">
                    {Content.sermon.watchNow}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
