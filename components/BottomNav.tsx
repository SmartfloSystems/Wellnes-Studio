import React, { useState } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'schedule', label: 'Schedule', icon: 'calendar_month' },
  { id: 'passes', label: 'Passes', icon: 'loyalty' },
  { id: 'studio', label: 'Studio', icon: 'location_on' },
];

export const BottomNav: React.FC = () => {
  // State kept for visual "Home" active status, but interactivity removed
  const [activeTab] = useState('home');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-primary/10 flex justify-around items-center py-3 pb-6 px-6 z-50 shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            type="button"
            className={`flex flex-col items-center transition-colors duration-200 cursor-default ${
              isActive 
                ? 'text-primary' 
                : 'text-plum-deep/40 dark:text-lavender-mist/40 hover:text-plum-deep/60 dark:hover:text-lavender-mist/60'
            }`}
          >
            <span 
              className={`material-symbols-outlined transition-transform duration-200 ${
                isActive ? 'scale-110' : ''
              }`}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-bold mt-1">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};