import React from 'react';
import { Practice } from '../types';

const practices: Practice[] = [
  { id: 'yoga', label: 'Yoga', icon: 'self_improvement' },
  { id: 'meditation', label: 'Meditation', icon: 'dark_mode' },
  { id: 'breathwork', label: 'Breathwork', icon: 'spa' },
  { id: 'pilates', label: 'Pilates', icon: 'volunteer_activism' },
];

export const FeaturedPractices: React.FC = () => {
  return (
    <div className="pb-8 text-center md:text-left">
      <h3 className="text-2xl font-bold mb-6 font-display text-plum-deep dark:text-white md:text-3xl">
        Explore Practices
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {practices.map((practice) => (
          <div 
            key={practice.id}
            className="bg-white dark:bg-white/5 p-6 rounded-xl soft-shadow border border-primary/5 hover:border-primary/30 hover:bg-white/80 dark:hover:bg-white/10 transition-all cursor-default group flex flex-col items-center justify-center md:aspect-square"
          >
            <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform">
              {practice.icon}
            </span>
            <p className="font-bold text-plum-deep dark:text-lavender-mist text-lg">
              {practice.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};