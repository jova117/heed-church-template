/**
 * Dynamic Page Component
 * 
 * Renders pages based on component configuration.
 * This allows AI agents to modify page structure by updating the component config.
 */

'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { buildPage } from '../data/component-provider';
import LoadingSpinner from './LoadingSpinner';

// Import all available components
import Navigation from './Navigation';
import Footer from './Footer';
import HeroSection from './HeroSection';
import WatchSection from './WatchSection';
import WeWantYouHereSection from './WeWantYouHereSection';
import CampusSelector from './CampusSelector';
import FindYourPlaceSection from './FindYourPlaceSection';
import CultureOfGenerositySection from './CultureOfGenerositySection';
import OneStoryAtATimeSection from './OneStoryAtATimeSection';
import HowCanWeHelpSection from './HowCanWeHelpSection';

// Component mapping
const COMPONENT_MAP = {
  Navigation,
  Footer,
  HeroSection,
  WatchSection,
  WeWantYouHereSection,
  CampusSelector,
  FindYourPlaceSection,
  CultureOfGenerositySection,
  OneStoryAtATimeSection,
  HowCanWeHelpSection
};

// Dynamic Page Component
interface DynamicPageProps {
  pageType: string;
  className?: string;
}

export const DynamicPage: React.FC<DynamicPageProps> = ({ pageType, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageStructure, setPageStructure] = useState<{
    components: string[];
    layout: string;
    spacing: string;
  } | null>(null);
  
  // Load page structure with loading state
  useEffect(() => {
    setIsLoading(true);
    // Simulate async loading (in real app, this might be async)
    const structure = buildPage(pageType);
    setPageStructure(structure);
    setIsLoading(false);
  }, [pageType]);
  
  // Render components based on configuration (memoized for performance)
  const renderComponents = useMemo(() => {
    if (!pageStructure) {
      return [];
    }
    return pageStructure.components.map((componentName: string, index: number) => {
      const Component = COMPONENT_MAP[componentName as keyof typeof COMPONENT_MAP];
      
      if (!Component) {
        // Component not found - handled gracefully
        return (
          <div key={`error-${index}`} className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-destructive text-sm">
              Component &quot;{componentName}&quot; is not available
            </p>
          </div>
        );
      }
      
      // Add any component-specific props
      const componentProps = {
        // Add any component-specific props here
        ...(componentName === 'Navigation' && { currentPage: pageType }),
        ...(componentName === 'HeroSection' && { variant: 'standard' as const }),
        ...(componentName === 'WatchSection' && { variant: 'standard' as const }),
        ...(componentName === 'CampusSelector' && { variant: 'standard' as const }),
        ...(componentName === 'FindYourPlaceSection' && { variant: 'standard' as const }),
        ...(componentName === 'CultureOfGenerositySection' && { variant: 'standard' as const }),
        ...(componentName === 'OneStoryAtATimeSection' && { variant: 'standard' as const }),
        ...(componentName === 'HowCanWeHelpSection' && { variant: 'standard' as const })
      };
      
      return <Component key={`${componentName}-${index}`} {...componentProps} />;
    });
  }, [pageStructure, pageType]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner text="Loading page..." />
      </div>
    );
  }
  
  if (!pageStructure) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-foreground">The requested page type &quot;{pageType}&quot; is not configured.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className={`min-h-screen bg-background ${className}`}
      role="main"
      aria-label={`${pageType} page content`}
    >
      {renderComponents}
    </div>
  );
};

// Component variant renderer
interface ComponentVariantProps {
  componentType: string;
  variant?: string;
  props?: Record<string, unknown>;
}

export const ComponentVariant: React.FC<ComponentVariantProps> = ({ 
  componentType, 
  variant = 'standard', 
  props = {} 
}) => {
  const Component = COMPONENT_MAP[componentType as keyof typeof COMPONENT_MAP];
  
  if (!Component) {
    // Component not found - handled gracefully
    return (
      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
        <p className="text-destructive text-sm">
          Component &quot;{componentType}&quot; is not available
        </p>
      </div>
    );
  }
  
  return <Component variant={variant as 'standard' | 'minimal' | 'extended'} {...props} />;
};

// Page layout renderer
interface PageLayoutProps {
  layout: string;
  children: React.ReactNode;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ layout, children, className = '' }) => {
  const layoutClasses = {
    'single-column': 'flex flex-col',
    'two-column': 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    'three-column': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    'sidebar': 'grid grid-cols-1 lg:grid-cols-4 gap-8'
  };
  
  const layoutClass = layoutClasses[layout as keyof typeof layoutClasses] || 'flex flex-col';
  
  return (
    <div 
      className={`${layoutClass} ${className}`}
      role="region"
      aria-label={`${layout} layout`}
    >
      {children}
    </div>
  );
};

// Component spacing renderer
interface ComponentSpacingProps {
  spacing: string;
  children: React.ReactNode;
  className?: string;
}

export const ComponentSpacing: React.FC<ComponentSpacingProps> = ({ 
  spacing, 
  children, 
  className = '' 
}) => {
  const spacingClasses = {
    'small': 'py-8',
    'medium': 'py-12',
    'large': 'py-16',
    'xlarge': 'py-20',
    'xxlarge': 'py-24'
  };
  
  const spacingClass = spacingClasses[spacing as keyof typeof spacingClasses] || 'py-16';
  
  return (
    <div className={`${spacingClass} ${className}`}>
      {children}
    </div>
  );
};

export default DynamicPage;
