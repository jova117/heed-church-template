/**
 * Layout Configuration System
 * 
 * This is the single source of truth for all spacing, padding, margins, and layout values.
 * AI agents can easily update this file to customize the entire site's layout and spacing.
 */

// Section Spacing
export const SECTION_SPACING = {
  // Vertical padding for sections
  sectionPadding: {
    small: 'py-12',      // 48px
    medium: 'py-16',     // 64px  
    large: 'py-20',      // 80px
    xlarge: 'py-24',     // 96px
    xxlarge: 'py-32'     // 128px
  },
  
  // Horizontal padding for containers
  containerPadding: {
    small: 'px-2',       // 8px
    medium: 'px-4',      // 16px
    large: 'px-6',       // 24px
    xlarge: 'px-8'       // 32px
  },
  
  // Bottom margins for content blocks
  contentMargin: {
    small: 'mb-4',       // 16px
    medium: 'mb-6',      // 24px
    large: 'mb-8',       // 32px
    xlarge: 'mb-12',     // 48px
    xxlarge: 'mb-16',    // 64px
    xxxlarge: 'mb-20'    // 80px
  }
};

// Grid Layouts
export const GRID_LAYOUTS = {
  // Grid gaps
  gridGap: {
    small: 'gap-2',      // 8px
    medium: 'gap-4',     // 16px
    large: 'gap-6',      // 24px
    xlarge: 'gap-8',     // 32px
    xxlarge: 'gap-12'    // 48px
  },
  
  // Grid columns
  gridColumns: {
    single: 'grid-cols-1',
    double: 'grid-cols-2',
    triple: 'grid-cols-3',
    quadruple: 'grid-cols-4',
    responsive: {
      mobile: 'grid-cols-1',
      tablet: 'md:grid-cols-2',
      desktop: 'lg:grid-cols-3',
      wide: 'xl:grid-cols-4'
    }
  }
};

// Component Spacing
export const COMPONENT_SPACING = {
  // Card padding
  cardPadding: {
    small: 'p-4',        // 16px
    medium: 'p-6',       // 24px
    large: 'p-8',        // 32px
    xlarge: 'p-12'       // 48px
  },
  
  // Button padding
  buttonPadding: {
    small: 'py-2 px-4',  // 8px 16px
    medium: 'py-3 px-6', // 12px 24px
    large: 'py-4 px-8',  // 16px 32px
    xlarge: 'py-6 px-12' // 24px 48px
  },
  
  // Icon sizes
  iconSizes: {
    small: 'w-4 h-4',    // 16px
    medium: 'w-6 h-6',   // 24px
    large: 'w-8 h-8',    // 32px
    xlarge: 'w-12 h-12', // 48px
    xxlarge: 'w-16 h-16' // 64px
  }
};

// Typography Spacing
export const TYPOGRAPHY_SPACING = {
  // Line heights
  lineHeight: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  },
  
  // Letter spacing
  letterSpacing: {
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest'
  },
  
  // Text spacing
  textSpacing: {
    small: 'mb-2',
    medium: 'mb-4',
    large: 'mb-6',
    xlarge: 'mb-8'
  }
};

// Responsive Breakpoints
export const RESPONSIVE_BREAKPOINTS = {
  // Container max widths
  containerMaxWidth: {
    small: 'max-w-sm',     // 384px
    medium: 'max-w-md',    // 448px
    large: 'max-w-lg',     // 512px
    xlarge: 'max-w-xl',    // 576px
    xxlarge: 'max-w-2xl',  // 672px
    xxxlarge: 'max-w-4xl', // 896px
    xxxxlarge: 'max-w-6xl' // 1152px
  },
  
  // Responsive spacing
  responsiveSpacing: {
    mobile: {
      section: 'py-12',
      container: 'px-4',
      content: 'mb-8'
    },
    tablet: {
      section: 'md:py-16',
      container: 'md:px-6',
      content: 'md:mb-12'
    },
    desktop: {
      section: 'lg:py-20',
      container: 'lg:px-8',
      content: 'lg:mb-16'
    }
  }
};

// Layout Patterns
export const LAYOUT_PATTERNS = {
  // Hero section layout
  hero: {
    container: 'container mx-auto px-4',
    content: 'max-w-4xl mx-auto text-center',
    spacing: 'py-20',
    titleSpacing: 'mb-6',
    subtitleSpacing: 'mb-8'
  },
  
  // Section layout
  section: {
    container: 'container mx-auto px-4',
    content: 'max-w-6xl mx-auto',
    spacing: 'py-20',
    titleSpacing: 'mb-16',
    contentSpacing: 'mb-12'
  },
  
  // Card layout
  card: {
    container: 'bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/20',
    titleSpacing: 'mb-4',
    contentSpacing: 'mb-6',
    buttonSpacing: 'mt-6'
  },
  
  // Grid layout
  grid: {
    container: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
    item: 'bg-background rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-primary/20'
  }
};

// Animation and Transitions
export const ANIMATION_CONFIG = {
  // Transition durations
  duration: {
    fast: 'duration-200',
    normal: 'duration-300',
    slow: 'duration-500',
    slower: 'duration-700'
  },
  
  // Transition properties
  properties: {
    all: 'transition-all',
    colors: 'transition-colors',
    shadow: 'transition-shadow',
    transform: 'transition-transform'
  },
  
  // Hover effects
  hover: {
    scale: 'hover:scale-105',
    shadow: 'hover:shadow-lg',
    shadowXl: 'hover:shadow-xl'
  }
};

// Border and Radius
export const BORDER_CONFIG = {
  // Border radius
  radius: {
    none: 'rounded-none',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg',
    xlarge: 'rounded-xl',
    xxlarge: 'rounded-2xl',
    full: 'rounded-full'
  },
  
  // Border styles
  border: {
    none: 'border-0',
    thin: 'border',
    medium: 'border-2',
    thick: 'border-4'
  }
};

// Shadow System
export const SHADOW_CONFIG = {
  // Shadow sizes
  shadow: {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xlarge: 'shadow-xl',
    xxlarge: 'shadow-2xl'
  },
  
  // Hover shadows
  hoverShadow: {
    none: 'hover:shadow-none',
    small: 'hover:shadow-sm',
    medium: 'hover:shadow-md',
    large: 'hover:shadow-lg',
    xlarge: 'hover:shadow-xl',
    xxlarge: 'hover:shadow-2xl'
  }
};
