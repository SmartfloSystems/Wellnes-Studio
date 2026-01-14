import React from 'react';
import { ClassSession } from '../types';

const todayClasses: ClassSession[] = [
  { id: 'vinyasa', title: 'Vinyasa Flow', time: 'Today • 5:30 PM', isPrimary: true },
  { id: 'restorative', title: 'Restorative Zen', time: 'Today • 7:00 PM', isPrimary: false },
  { id: 'morning', title: 'Morning Rise', time: 'Tomorrow • 7:00 AM', isPrimary: false },
];

export const BookingCard: React.FC = () => {
  return (
    <div className="h-full">
      <div className="bg-white dark:bg-white/5 border border-primary/20 rounded-2xl p-6 md:p-8 soft-shadow h-full flex flex-col justify-center backdrop-blur-sm">
        <div className="text-center mb-6">
            <h4 className="text-xl md:text-2xl font-bold mb-2 font-display text-plum-deep dark:text-white">Ready to Begin?</h4>
            <p className="text-sm md:text-base text-plum-deep/60 dark:text-lavender-mist/60 font-display">
            Join our next collective flow.
            </p>
        </div>
        
        <div className="flex flex-col gap-3 flex-grow">
          {todayClasses.slice(0, 3).map((session) => (
            <div 
              key={session.id} 
              className="flex items-center justify-between p-3 bg-background-light dark:bg-white/5 rounded-lg border border-primary/5 hover:border-primary/20 transition-colors cursor-default group"
            >
              <div className="text-left">
                <p className="font-bold text-sm text-plum-deep dark:text-lavender-mist group-hover:text-primary transition-colors">{session.title}</p>
                <p className="text-xs opacity-60 text-plum-deep dark:text-lavender-mist">{session.time}</p>
              </div>
              <button 
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-transform cursor-default ${
                  session.isPrimary 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'bg-primary/20 text-primary hover:bg-primary/30'
                }`}
              >
                Book
              </button>
            </div>
          ))}
        </div>

        <button className="mt-8 w-full py-4 bg-primary text-white rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all cursor-default">
          View Full Schedule
        </button>
      </div>
    </div>
  );
};