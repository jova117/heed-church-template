/**
 * Custom hook for preloading critical images
 * Helps prevent fresh image loads on navigation
 */

import { useEffect, useState } from 'react';

/**
 * Hook to detect mobile devices for performance optimizations
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

interface UseImagePreloadOptions {
  src: string;
  priority?: boolean;
}

export const useImagePreload = ({ src, priority = false }: UseImagePreloadOptions) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    const handleLoad = () => {
      setIsLoaded(true);
      setIsError(false);
    };

    const handleError = () => {
      setIsError(true);
      setIsLoaded(false);
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    
    // Set loading priority
    if (priority) {
      img.loading = 'eager';
    }
    
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority]);

  return { isLoaded, isError };
};

/**
 * Preload multiple images
 */
export const useImagePreloadBatch = (sources: string[], priority = false) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!sources.length) return;

    const loadPromises = sources.map(src => {
      return new Promise<{ src: string; success: boolean }>((resolve) => {
        const img = new Image();
        
        if (priority) {
          img.loading = 'eager';
        }
        
        img.onload = () => resolve({ src, success: true });
        img.onerror = () => resolve({ src, success: false });
        
        img.src = src;
      });
    });

    Promise.all(loadPromises).then(results => {
      const loaded = new Set<string>();
      const errors = new Set<string>();
      
      results.forEach(({ src, success }) => {
        if (success) {
          loaded.add(src);
        } else {
          errors.add(src);
        }
      });
      
      setLoadedImages(loaded);
      setErrorImages(errors);
    });
  }, [sources, priority]);

  return { loadedImages, errorImages };
};
