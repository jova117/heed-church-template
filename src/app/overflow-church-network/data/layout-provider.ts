/**
 * Layout Provider
 * 
 * Provides easy access to all layout configuration.
 * This acts as a single interface for all spacing and layout across the site.
 */

import {
  SECTION_SPACING,
  GRID_LAYOUTS,
  COMPONENT_SPACING,
  TYPOGRAPHY_SPACING,
  RESPONSIVE_BREAKPOINTS,
  LAYOUT_PATTERNS,
  ANIMATION_CONFIG,
  BORDER_CONFIG,
  SHADOW_CONFIG
} from './layout-config';

// Main layout object that can be easily imported
export const Layout = {
  section: SECTION_SPACING,
  grid: GRID_LAYOUTS,
  component: COMPONENT_SPACING,
  typography: TYPOGRAPHY_SPACING,
  responsive: RESPONSIVE_BREAKPOINTS,
  patterns: LAYOUT_PATTERNS,
  animation: ANIMATION_CONFIG,
  border: BORDER_CONFIG,
  shadow: SHADOW_CONFIG
};

// Individual exports for specific use cases
export {
  SECTION_SPACING,
  GRID_LAYOUTS,
  COMPONENT_SPACING,
  TYPOGRAPHY_SPACING,
  RESPONSIVE_BREAKPOINTS,
  LAYOUT_PATTERNS,
  ANIMATION_CONFIG,
  BORDER_CONFIG,
  SHADOW_CONFIG
};

// Helper function to get layout value by path
export const getLayout = (path: string) => {
  const keys = path.split('.');
  let layout: unknown = Layout;
  
  for (const key of keys) {
    if (layout && typeof layout === 'object' && key in layout) {
      layout = (layout as Record<string, unknown>)[key];
    } else {
      return null;
    }
  }
  
  return layout;
};

// Helper function to update layout (for AI agents)
export const updateLayout = (path: string, value: unknown) => {
  const keys = path.split('.');
  let current: Record<string, unknown> = Layout;
  
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]] as Record<string, unknown>;
  }
  
  current[keys[keys.length - 1]] = value;
};

// Pre-built layout classes for common patterns
export const LayoutClasses = {
  // Section layouts
  section: {
    hero: `${Layout.patterns.hero.spacing} ${Layout.patterns.hero.container}`,
    standard: `${Layout.patterns.section.spacing} ${Layout.patterns.section.container}`,
    content: `${Layout.patterns.section.content}`
  },
  
  // Grid layouts
  grid: {
    responsive: Layout.patterns.grid.container,
    card: Layout.patterns.grid.item
  },
  
  // Card layouts
  card: {
    standard: Layout.patterns.card.container,
    interactive: `${Layout.patterns.card.container} ${Layout.animation.properties.all} ${Layout.animation.duration.normal} ${Layout.animation.hover.scale}`
  },
  
  // Button layouts
  button: {
    primary: `${Layout.component.buttonPadding.large} ${Layout.border.radius.large} ${Layout.animation.properties.all} ${Layout.animation.duration.normal}`,
    secondary: `${Layout.component.buttonPadding.medium} ${Layout.border.radius.medium} ${Layout.animation.properties.all} ${Layout.animation.duration.normal}`
  }
};
