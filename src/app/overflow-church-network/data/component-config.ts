/**
 * Component Configuration System
 * 
 * This is the single source of truth for all component structures, configurations, and selections.
 * AI agents can easily update this file to customize the entire site's component architecture.
 */

// Page Structure Configuration
export const PAGE_STRUCTURE = {
  // Main page components in order
  mainPage: {
    components: [
      'Navigation',
      'HeroSection', 
      'WatchSection',
      'WeWantYouHereSection',
      'CampusSelector',
      'FindYourPlaceSection',
      'CultureOfGenerositySection',
      'OneStoryAtATimeSection',
      'HowCanWeHelpSection',
      'Footer'
    ],
    layout: 'single-column',
    spacing: 'standard'
  },
  
  // First time visitor page components
  firstTimePage: {
    components: [
      'Navigation',
      'FirstTimeHero',
      'CampusSelector',
      'WhatToExpect',
      'FAQSection',
      'ScheduleVisitForm',
      'Footer'
    ],
    layout: 'single-column',
    spacing: 'standard'
  },
  
  // Campus page components
  campusPage: {
    components: [
      'Navigation',
      'CampusHero',
      'CampusInfo',
      'PastorInfo',
      'Directions',
      'Footer'
    ],
    layout: 'single-column',
    spacing: 'standard'
  }
};

// Component Selection Configuration
export const COMPONENT_SELECTION = {
  // Hero section variants
  heroSection: {
    type: 'standard', // 'standard', 'minimal', 'extended'
    showBackground: true,
    showGradient: true,
    showContent: true,
    showButtons: true
  },
  
  // Navigation variants
  navigation: {
    type: 'standard', // 'standard', 'minimal', 'extended'
    showLogo: true,
    showMenu: true,
    showSocial: false,
    sticky: true
  },
  
  // Footer variants
  footer: {
    type: 'standard', // 'standard', 'minimal', 'extended'
    showLinks: true,
    showSocial: true,
    showContact: true,
    showCopyright: true
  }
};

// Component Configuration
export const COMPONENT_CONFIG = {
  // Hero Section Configuration
  heroSection: {
    layout: 'centered',
    background: 'gradient',
    content: {
      title: 'dynamic',
      subtitle: 'dynamic',
      buttons: ['watch', 'join']
    },
    styling: {
      textAlign: 'center',
      padding: 'large',
      spacing: 'standard'
    }
  },
  
  // Watch Section Configuration
  watchSection: {
    layout: 'grid',
    columns: 3,
    content: {
      title: 'dynamic',
      description: 'dynamic',
      messages: 'dynamic'
    },
    styling: {
      background: 'white',
      padding: 'large',
      spacing: 'standard'
    }
  },
  
  // Campus Selector Configuration
  campusSelector: {
    layout: 'grid',
    columns: 4,
    content: {
      title: 'dynamic',
      description: 'dynamic',
      campuses: 'dynamic'
    },
    styling: {
      background: 'white',
      padding: 'large',
      spacing: 'standard'
    }
  },
  
  // Find Your Place Section Configuration
  findYourPlaceSection: {
    layout: 'grid',
    columns: 4,
    content: {
      title: 'dynamic',
      description: 'dynamic',
      cards: ['new', 'groups', 'serve', 'next']
    },
    styling: {
      background: 'white',
      padding: 'large',
      spacing: 'standard'
    }
  }
};

// Component Variants
export const COMPONENT_VARIANTS = {
  // Hero section variants
  heroSection: {
    standard: {
      layout: 'centered',
      background: 'gradient',
      content: ['title', 'subtitle', 'buttons']
    },
    minimal: {
      layout: 'centered',
      background: 'solid',
      content: ['title', 'subtitle']
    },
    extended: {
      layout: 'centered',
      background: 'gradient',
      content: ['title', 'subtitle', 'description', 'buttons', 'links']
    }
  },
  
  // Navigation variants
  navigation: {
    standard: {
      layout: 'horizontal',
      content: ['logo', 'menu', 'social'],
      styling: 'transparent'
    },
    minimal: {
      layout: 'horizontal',
      content: ['logo', 'menu'],
      styling: 'solid'
    },
    extended: {
      layout: 'horizontal',
      content: ['logo', 'menu', 'social', 'contact'],
      styling: 'transparent'
    }
  },
  
  // Footer variants
  footer: {
    standard: {
      layout: 'grid',
      content: ['links', 'social', 'contact', 'copyright'],
      styling: 'dark'
    },
    minimal: {
      layout: 'centered',
      content: ['links', 'copyright'],
      styling: 'light'
    },
    extended: {
      layout: 'grid',
      content: ['links', 'social', 'contact', 'newsletter', 'copyright'],
      styling: 'dark'
    }
  }
};

// Component Dependencies
export const COMPONENT_DEPENDENCIES = {
  // Required components for each page type
  pageDependencies: {
    mainPage: ['Navigation', 'HeroSection', 'Footer'],
    firstTimePage: ['Navigation', 'FirstTimeHero', 'Footer'],
    campusPage: ['Navigation', 'CampusHero', 'Footer']
  },
  
  // Optional components that can be added
  optionalComponents: {
    mainPage: ['WatchSection', 'WeWantYouHereSection', 'CampusSelector', 'FindYourPlaceSection', 'CultureOfGenerositySection', 'OneStoryAtATimeSection', 'HowCanWeHelpSection'],
    firstTimePage: ['CampusSelector', 'WhatToExpect', 'FAQSection', 'ScheduleVisitForm'],
    campusPage: ['CampusInfo', 'PastorInfo', 'Directions']
  }
};

// Component Styling Configuration
export const COMPONENT_STYLING = {
  // Background options
  backgrounds: {
    solid: 'bg-background',
    gradient: 'bg-gradient-to-br from-secondary to-accent',
    transparent: 'bg-transparent',
    dark: 'bg-foreground',
    light: 'bg-background'
  },
  
  // Layout options
  layouts: {
    centered: 'text-center',
    left: 'text-left',
    right: 'text-right',
    grid: 'grid',
    flex: 'flex'
  },
  
  // Spacing options
  spacing: {
    small: 'py-8',
    medium: 'py-12',
    large: 'py-16',
    xlarge: 'py-20',
    xxlarge: 'py-24'
  },
  
  // Padding options
  padding: {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
    xlarge: 'p-12'
  }
};

// Component Content Configuration
export const COMPONENT_CONTENT = {
  // Hero section content
  heroSection: {
    title: 'dynamic',
    subtitle: 'dynamic',
    description: 'dynamic',
    buttons: ['watch', 'join'],
    links: ['about', 'locations', 'groups']
  },
  
  // Watch section content
  watchSection: {
    title: 'dynamic',
    description: 'dynamic',
    messages: 'dynamic',
    buttons: ['watch', 'listen']
  },
  
  // Campus selector content
  campusSelector: {
    title: 'dynamic',
    description: 'dynamic',
    campuses: 'dynamic',
    buttons: ['directions', 'learn-more']
  }
};

// Component Interaction Configuration
export const COMPONENT_INTERACTIONS = {
  // Hover effects
  hover: {
    scale: 'hover:scale-105',
    shadow: 'hover:shadow-lg',
    color: 'hover:text-primary'
  },
  
  // Click effects
  click: {
    scale: 'active:scale-95',
    shadow: 'active:shadow-md'
  },
  
  // Focus effects
  focus: {
    ring: 'focus:ring-2 focus:ring-primary',
    outline: 'focus:outline-none'
  }
};

// Component Animation Configuration
export const COMPONENT_ANIMATIONS = {
  // Entrance animations
  entrance: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right'
  },
  
  // Exit animations
  exit: {
    fadeOut: 'animate-fade-out',
    slideUp: 'animate-slide-up-out',
    slideDown: 'animate-slide-down-out'
  },
  
  // Transition animations
  transition: {
    all: 'transition-all duration-300',
    colors: 'transition-colors duration-300',
    transform: 'transition-transform duration-300'
  }
};
