/**
 * Component Provider
 * 
 * Provides easy access to all component configuration.
 * This acts as a single interface for all component structure across the site.
 */

import {
  PAGE_STRUCTURE,
  COMPONENT_SELECTION,
  COMPONENT_CONFIG,
  COMPONENT_VARIANTS,
  COMPONENT_DEPENDENCIES,
  COMPONENT_STYLING,
  COMPONENT_CONTENT,
  COMPONENT_INTERACTIONS,
  COMPONENT_ANIMATIONS
} from './component-config';

// Main component object that can be easily imported
export const Components = {
  structure: PAGE_STRUCTURE,
  selection: COMPONENT_SELECTION,
  config: COMPONENT_CONFIG,
  variants: COMPONENT_VARIANTS,
  dependencies: COMPONENT_DEPENDENCIES,
  styling: COMPONENT_STYLING,
  content: COMPONENT_CONTENT,
  interactions: COMPONENT_INTERACTIONS,
  animations: COMPONENT_ANIMATIONS
};

// Individual exports for specific use cases
export {
  PAGE_STRUCTURE,
  COMPONENT_SELECTION,
  COMPONENT_CONFIG,
  COMPONENT_VARIANTS,
  COMPONENT_DEPENDENCIES,
  COMPONENT_STYLING,
  COMPONENT_CONTENT,
  COMPONENT_INTERACTIONS,
  COMPONENT_ANIMATIONS
};

// Helper function to get component configuration by path
export const getComponent = (path: string) => {
  const keys = path.split('.');
  let component: unknown = Components;
  
  for (const key of keys) {
    if (component && typeof component === 'object' && key in component) {
      component = (component as Record<string, unknown>)[key];
    } else {
      return null;
    }
  }
  
  return component;
};

// Helper function to update component configuration (for AI agents)
export const updateComponent = (path: string, value: unknown) => {
  const keys = path.split('.');
  let current: Record<string, unknown> = Components;
  
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]] as Record<string, unknown>;
  }
  
  current[keys[keys.length - 1]] = value;
};

// Helper function to get page structure
export const getPageStructure = (pageType: string) => {
  return Components.structure[pageType as keyof typeof Components.structure] || null;
};

// Helper function to get component variant
export const getComponentVariant = (componentType: string, variant: string) => {
  const component = Components.variants[componentType as keyof typeof Components.variants];
  return component?.[variant as keyof typeof component] || null;
};

// Helper function to get component styling
export const getComponentStyling = (componentType: string, styleType: string) => {
  const component = Components.styling[styleType as keyof typeof Components.styling];
  return component?.[componentType as keyof typeof component] || null;
};

// Pre-built component configurations for common patterns
export const ComponentConfigs = {
  // Hero section configurations
  heroSection: {
    standard: {
      layout: Components.styling.layouts.centered,
      background: Components.styling.backgrounds.gradient,
      spacing: Components.styling.spacing.large,
      content: Components.content.heroSection
    },
    minimal: {
      layout: Components.styling.layouts.centered,
      background: Components.styling.backgrounds.solid,
      spacing: Components.styling.spacing.medium,
      content: Components.content.heroSection
    }
  },
  
  // Navigation configurations
  navigation: {
    standard: {
      layout: Components.styling.layouts.flex,
      background: Components.styling.backgrounds.transparent,
      spacing: Components.styling.spacing.small,
      content: ['logo', 'menu', 'social']
    },
    minimal: {
      layout: Components.styling.layouts.flex,
      background: Components.styling.backgrounds.solid,
      spacing: Components.styling.spacing.small,
      content: ['logo', 'menu']
    }
  },
  
  // Footer configurations
  footer: {
    standard: {
      layout: Components.styling.layouts.grid,
      background: Components.styling.backgrounds.dark,
      spacing: Components.styling.spacing.large,
      content: ['links', 'social', 'contact', 'copyright']
    },
    minimal: {
      layout: Components.styling.layouts.centered,
      background: Components.styling.backgrounds.light,
      spacing: Components.styling.spacing.medium,
      content: ['links', 'copyright']
    }
  }
};

// Component builder functions
export const buildComponent = (componentType: string, variant: string = 'standard') => {
  const config = ComponentConfigs[componentType as keyof typeof ComponentConfigs];
  const variantConfig = config?.[variant as keyof typeof config];
  
  if (!variantConfig) {
    return null;
  }
  
  return {
    type: componentType,
    variant: variant,
    config: variantConfig
  };
};

// Page builder function
export const buildPage = (pageType: string) => {
  const structure = getPageStructure(pageType);
  
  if (!structure) {
    return null;
  }
  
  return {
    type: pageType,
    components: structure.components,
    layout: structure.layout,
    spacing: structure.spacing
  };
};
