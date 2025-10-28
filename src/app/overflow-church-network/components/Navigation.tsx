'use client';

import React, { useState } from 'react';

interface NavigationProps {
  currentPage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'I\'m New', href: '/first-time' },
    { name: 'Groups', href: '/small-groups' },
    { name: 'Sermons', href: '/sermon' },
  ];

  const campusItems = [
    { name: 'Mars Central', href: '/mars-central' },
    { name: 'Valles Marineris', href: '/valles-marineris' },
    { name: 'Phobos Station', href: '/phobos-station' },
    { name: 'New Terra', href: '/new-terra' },
  ];

  // Check if we're on a campus page
  const isCampusPage = currentPage && campusItems.some(campus => 
    campus.name.toLowerCase() === currentPage.toLowerCase()
  );

  return (
    <nav className="bg-background shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300">
              Overflow
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-semibold transition-colors duration-300 ${
                  currentPage === item.name.toLowerCase()
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Campus Dropdown */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 font-semibold transition-colors duration-300 ${
                isCampusPage 
                  ? 'text-secondary' 
                  : 'text-primary hover:text-secondary'
              }`}>
                <span>Locations</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {campusItems.map((campus) => {
                    const isCurrentCampus = currentPage && campus.name.toLowerCase() === currentPage.toLowerCase();
                    return (
                      <a
                        key={campus.name}
                        href={campus.href}
                        className={`block px-4 py-2 transition-colors duration-300 ${
                          isCurrentCampus
                            ? 'text-secondary bg-secondary/10'
                            : 'text-foreground hover:bg-secondary/10 hover:text-secondary'
                        }`}
                      >
                        {campus.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <a href="#" className="btn-primary">
              Give
            </a>
            <a href="#" className="text-foreground hover:text-primary font-semibold transition-colors duration-300">
              My Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block font-semibold transition-colors duration-300 ${
                    currentPage === item.name.toLowerCase()
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-border">
                <p className={`text-sm font-semibold mb-2 ${
                  isCampusPage ? 'text-secondary' : 'text-primary'
                }`}>Campus Locations</p>
                {campusItems.map((campus) => {
                  const isCurrentCampus = currentPage && campus.name.toLowerCase() === currentPage.toLowerCase();
                  return (
                    <a
                      key={campus.name}
                      href={campus.href}
                      className={`block py-2 transition-colors duration-300 ${
                        isCurrentCampus
                          ? 'text-secondary'
                          : 'text-foreground hover:text-secondary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {campus.name}
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-border flex space-x-4">
                <a href="#" className="btn-primary">
                  Give
                </a>
                <a href="#" className="text-foreground hover:text-primary font-semibold transition-colors duration-300">
                  My Account
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;