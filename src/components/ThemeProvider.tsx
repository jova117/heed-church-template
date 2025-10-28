'use client';

import { useEffect } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
}

export function ThemeProvider({ children, defaultTheme = 'church' }: ThemeProviderProps) {

  useEffect(() => {
    // Check if we're on a demo route
    const checkTheme = () => {
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        const isDemoRoute = currentPath.startsWith('/overflow-church-network');
        
        // Only apply theme for demo routes, not for marketing pages
        if (isDemoRoute) {
          // Apply theme with dark mode class
          const themeClass = defaultTheme === 'church' ? 'church-theme planetary-atmosphere' : '';
          document.body.className = themeClass;
        }
        // For marketing pages, let the server-side theme selection stand
      }
    };

    // Initial check
    checkTheme();
  }, [defaultTheme]);

  return <>{children}</>;
}

