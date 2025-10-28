/**
 * Theme utility functions for managing different theme variations
 */

export type ThemeType = 'default' | 'church';

export interface ThemeConfig {
  type: ThemeType;
  className: string;
}

export const THEME_CONFIGS: Record<string, ThemeConfig> = {
  default: {
    type: 'default',
    className: '',
  },
  church: {
    type: 'church',
    className: 'church-theme',
  },
};

/**
 * Apply a theme to the document body
 */
export function applyTheme(themeKey: string): void {
  if (typeof window === 'undefined') return;
  
  const config = THEME_CONFIGS[themeKey];
  if (!config) {
    return;
  }
  
  // Remove all existing theme classes
  Object.values(THEME_CONFIGS).forEach(theme => {
    if (theme.className) {
      const classes = theme.className.split(' ').filter(cls => cls.trim() !== '');
      if (classes.length > 0) {
        document.body.classList.remove(...classes);
      }
    }
  });
  
  // Apply new theme classes
  if (config.className) {
    const classes = config.className.split(' ').filter(cls => cls.trim() !== '');
    if (classes.length > 0) {
      document.body.classList.add(...classes);
    }
  }
  
  // Store theme preference
  localStorage.setItem('heed-theme', themeKey);
}

/**
 * Get the current theme from localStorage
 */
export function getStoredTheme(): string {
  if (typeof window === 'undefined') return 'default';
  return localStorage.getItem('heed-theme') || 'default';
}

/**
 * Initialize theme on page load
 */
export function initializeTheme(): void {
  if (typeof window === 'undefined') return;
  
  const storedTheme = getStoredTheme();
  applyTheme(storedTheme);
}

/**
 * Get theme configuration by key
 */
export function getThemeConfig(themeKey: string): ThemeConfig | null {
  return THEME_CONFIGS[themeKey] || null;
}

/**
 * Get all available themes
 */
export function getAvailableThemes(): Array<{ key: string; config: ThemeConfig }> {
  return Object.entries(THEME_CONFIGS).map(([key, config]) => ({ key, config }));
}

/**
 * Check if a theme is currently active
 */
export function isThemeActive(themeKey: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const config = THEME_CONFIGS[themeKey];
  if (!config || !config.className) return false;
  
  const classes = config.className.split(' ').filter(cls => cls.trim() !== '');
  if (classes.length === 0) return false;
  
  return classes.every(className => 
    document.body.classList.contains(className)
  );
}

/**
 * Get the current active theme
 */
export function getCurrentTheme(): string {
  if (typeof window === 'undefined') return 'default';
  
  for (const [key] of Object.entries(THEME_CONFIGS)) {
    if (isThemeActive(key)) {
      return key;
    }
  }
  
  return 'default';
}
