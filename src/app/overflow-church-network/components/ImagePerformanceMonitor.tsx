/**
 * Image Performance Monitor Component
 * Helps track and log image loading performance for debugging
 */

'use client';

import { useEffect, useRef } from 'react';

interface ImagePerformanceMonitorProps {
  src: string;
  onLoadTime?: (loadTime: number) => void;
  onError?: (error: string) => void;
}

export const ImagePerformanceMonitor: React.FC<ImagePerformanceMonitorProps> = ({
  src,
  onLoadTime,
  onError
}) => {
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!src) return;

    startTimeRef.current = performance.now();

    const img = new Image();
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTimeRef.current;
      console.log(`Image ${src} loaded in ${loadTime.toFixed(2)}ms`);
      onLoadTime?.(loadTime);
    };

    const handleError = (event: Event) => {
      const error = `Failed to load image: ${src}`;
      console.error(error, event);
      onError?.(error);
    };

    img.onload = handleLoad;
    img.onerror = handleError as OnErrorEventHandler;
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoadTime, onError]);

  return null; // This component doesn't render anything
};

export default ImagePerformanceMonitor;
