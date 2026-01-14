import React from 'react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'passes', label: 'Passes' },
  { id: 'studio', label: 'Studio' },
];

export const TopNav: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden text-primary flex size-10 items-center justify-center cursor-default hover:bg-primary/5 rounded-full transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <h2 className="text-plum-deep dark:text-white text-xl md:text-2xl font-bold tracking-tight font-display cursor-default hover:opacity-80 transition-opacity">
              Wellness Studio
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                type="button"
                className="text-plum-deep/70 dark:text-lavender-mist/70 hover:text-primary dark:hover:text-primary font-bold text-sm tracking-wide transition-colors cursor-default"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Profile Icon */}
          <div className="flex items-center justify-end md:w-auto">
            <button className="text-primary hover:text-primary/80 transition-colors p-2 hover:bg-primary/5 rounded-full cursor-default">
              <span className="material-symbols-outlined text-2xl">account_circle</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};