/**
 * We Want You Here Section Component
 * 
 * Configurable section that can be customized via component configuration.
 */

'use client';

import React from 'react';
import { Layout } from '../data/layout-provider';
import { ChurchData } from '../data/data-provider';

interface WeWantYouHereSectionProps {
  variant?: 'standard' | 'minimal' | 'extended';
  className?: string;
}

export const WeWantYouHereSection: React.FC<WeWantYouHereSectionProps> = ({ 
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
          showButton: false,
          showCampusCards: true,
          columns: 2
        };
      case 'extended':
        return {
          showTitle: true,
          showDescription: true,
          showButton: true,
          showCampusCards: true,
          columns: 4
        };
      default: // 'standard'
        return {
          showTitle: true,
          showDescription: true,
          showButton: true,
          showCampusCards: true,
          columns: 4
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
                We want<br />
                <span className="text-primary">you here</span>
              </h2>
            )}
            {config.showDescription && (
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              We are one family with multiple campuses across the community. Whether this is your first time visiting a church or you&apos;re just new to Overflow, we&apos;re glad you&apos;re here.
            </p>
            )}
            {config.showButton && (
              <div className="mt-8">
                <button className="bg-primary hover:bg-primary/90 text-background font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                  Find a Campus
                </button>
              </div>
            )}
          </div>
          
          {config.showCampusCards && (
            <div className={`grid md:grid-cols-2 lg:grid-cols-${config.columns} gap-6`}>
              {ChurchData.campuses.map((campus) => (
                <div key={campus.id} className="bg-background rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-2">{campus.name}</h3>
                  <p className="text-foreground text-sm mb-3">{campus.address}</p>
                  <p className="text-primary font-semibold text-sm">
                    {campus.serviceTimes.map(st => `${st.day}: ${st.time}`).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeWantYouHereSection;
