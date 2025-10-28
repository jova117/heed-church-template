/**
 * Hero Section Component
 * 
 * Configurable hero section that can be customized via component configuration.
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { Content } from '../data/content-provider';
import { useImagePreload, useIsMobile } from '../hooks/useImagePreload';

interface HeroSectionProps {
  variant?: 'standard' | 'minimal' | 'extended';
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  variant = 'standard', 
  className = '' 
}) => {
  // Preload the hero image for better performance
  const { isLoaded: isHeroImageLoaded } = useImagePreload({ 
    src: '/sunrise.jpg', 
    priority: true 
  });

  // Detect mobile for performance optimizations
  const isMobile = useIsMobile();

  // Get component configuration based on variant
  const getVariantConfig = () => {
    switch (variant) {
      case 'minimal':
        return {
          showBackground: true,
          showGradient: false,
          showContent: true,
          showButtons: false,
          showLinks: false
        };
      case 'extended':
        return {
          showBackground: true,
          showGradient: true,
          showContent: true,
          showButtons: true,
          showLinks: true
        };
      default: // 'standard'
        return {
          showBackground: true,
          showGradient: true,
          showContent: true,
          showButtons: true,
          showLinks: false
        };
    }
  };
  
  const config = getVariantConfig();
  
  return (
    <section className={`relative h-screen bg-background text-foreground overflow-hidden hero-section ${className}`} style={{ height: '100vh' }}>
      {/* Background Image */}
      {config.showBackground && (
        <div className="absolute inset-0 z-0 hero-image-wrapper">
          {/* Loading placeholder */}
          {!isHeroImageLoaded && (
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/10 to-accent/20 animate-pulse" />
          )}
          
          <Image 
            src="/sunrise.jpg" 
            alt="Sunrise background"
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className={`object-cover object-center transition-opacity duration-500 ${
              isHeroImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
      )}
      
      {/* Atmospheric Gradient Orbs - Optimized for mobile */}
      {config.showGradient && !isMobile && (
        <>
          <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-2xl md:blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-radial from-secondary/20 to-transparent blur-[50px] md:blur-[100px] pointer-events-none"></div>
        </>
      )}
      
      {/* Simplified mobile gradient overlay for better performance */}
      {config.showGradient && isMobile && (
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      )}
      
      {/* Subtle Teal Tint Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary/10 via-transparent to-primary/8 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Main Headline */}
          <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6 leading-tight text-white px-2">
            {Content.hero.mainHeadline}<br />
            <span className="hero-title-accent">
              {Content.hero.mainHeadlineHighlight}
            </span>
          </h1>
          
          <p className="hero-subtitle text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            {Content.hero.tagline}
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 text-white/80 px-4">
            <a href="#im-new" className="hover:text-primary font-semibold text-sm sm:text-base py-2 px-3 sm:px-4 transition-all duration-300 hover:underline underline-offset-4">
              I&apos;m New
            </a>
            <a href="#church-news" className="hover:text-primary font-semibold text-sm sm:text-base py-2 px-3 sm:px-4 transition-all duration-300 hover:underline underline-offset-4">
              Church News
            </a>
            <a href="#locations" className="hover:text-primary font-semibold text-sm sm:text-base py-2 px-3 sm:px-4 transition-all duration-300 hover:underline underline-offset-4">
              Find a Campus
            </a>
            <a href="#groups" className="hover:text-primary font-semibold text-sm sm:text-base py-2 px-3 sm:px-4 transition-all duration-300 hover:underline underline-offset-4">
              {Content.smallGroups.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
