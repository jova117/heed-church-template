/**
 * Campus Selector Component
 * 
 * Configurable campus selector that can be customized via component configuration.
 */

'use client';

import React, { useState } from 'react';
import { Content } from '../data/content-provider';
import { Layout } from '../data/layout-provider';
import { ChurchData } from '../data/data-provider';

interface CampusSelectorProps {
  variant?: 'standard' | 'minimal' | 'extended';
  className?: string;
}

export const CampusSelector: React.FC<CampusSelectorProps> = ({ 
  variant = 'standard', 
  className = '' 
}) => {
  const [selectedCampus, setSelectedCampus] = useState('mars-central');
  
  // Get component configuration based on variant
  const getVariantConfig = () => {
    switch (variant) {
      case 'minimal':
        return {
          showTitle: true,
          showDescription: false,
          showCampusCards: true,
          showButtons: false,
          columns: 2
        };
      case 'extended':
        return {
          showTitle: true,
          showDescription: true,
          showCampusCards: true,
          showButtons: true,
          columns: 4
        };
      default: // 'standard'
        return {
          showTitle: true,
          showDescription: true,
          showCampusCards: true,
          showButtons: true,
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
                {Content.campus.title} <span className="text-primary">Campus</span>
              </h2>
            )}
            {config.showDescription && (
              <p className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto px-4">
                {Content.campus.description}
              </p>
            )}
          </div>
          
          {config.showCampusCards && (
            <div className={`grid md:grid-cols-2 lg:grid-cols-${config.columns} gap-6`}>
              {ChurchData.campuses.map((campus) => (
                <div 
                  key={campus.id} 
                  className={`bg-background rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border ${
                    selectedCampus === campus.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-primary/20 hover:border-primary/40 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedCampus(campus.id)}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{campus.name}</h3>
                  <p className="text-foreground text-sm mb-3">{campus.address}</p>
                  <p className="text-sm text-primary font-semibold mb-4">
                    {campus.serviceTimes.map(st => `${st.day}: ${st.time}`).join(', ')}
                  </p>
                  <p className="text-sm text-primary font-semibold mb-4">2.3 miles away</p>
                  
                  {config.showButtons && (
                    <div className="flex flex-col gap-2">
                      <button className="bg-primary hover:bg-primary/90 text-background font-bold py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm transition-colors duration-300">
                        {Content.campus.getDirections}
                      </button>
                      <button className="border border-primary text-primary hover:bg-primary hover:text-background font-bold py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm transition-colors duration-300">
                        {Content.campus.learnMore}
                      </button>
                    </div>
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

export default CampusSelector;
