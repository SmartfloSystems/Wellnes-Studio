import React from 'react';

export const CommunitySection: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div 
        className="w-full h-[200px] md:h-auto md:flex-grow rounded-2xl overflow-hidden mb-4 soft-shadow group relative min-h-[250px] cursor-default"
        role="img"
        aria-label="Peaceful woman meditating in a bright room"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8d89NZ5MKSs6Xypb0WSYQAJlfsjD0L9g1P8ypEIGjPCUpEsRPLI8LyVOx3wSUu3svIBW2ZTiC3p5SYz-wSDIK8UYNYVkzzZYyN4SVIWOJ01r1qxD2xO-lrNOlOtJf0icVSah6JHrnqMpJRFGrlxKph-oJn18Nkuct0lVyTHDQeJknBL2mz5u36_7dS4KczSZJo3sdkZ0iivlzZV9uZbrJ5aXxmiFBcNk6xdODFkjeCx06f4BhYvBw4R4GiyKDfQRaeXx18-_JlFA")' }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        
        {/* Overlay Content for Desktop feel */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-left">
           <h3 className="text-xl font-bold font-display mb-1">Our Community</h3>
           <p className="text-sm opacity-90 font-display">
             A supportive circle for personal growth.
           </p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-primary/10 soft-shadow md:hidden">
        <h3 className="text-xl font-bold font-display mb-2 text-plum-deep dark:text-white">Our Community</h3>
        <p className="text-sm opacity-70 mb-6 text-plum-deep dark:text-lavender-mist font-display">
            Join a supportive circle of practitioners dedicated to mindfulness and personal growth.
        </p>
        <button className="text-primary font-bold flex items-center justify-center gap-2 mx-auto hover:gap-3 transition-all cursor-default">
            Learn About Our Studio <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>

       <div className="hidden md:flex bg-white dark:bg-white/5 p-8 rounded-2xl border border-primary/10 soft-shadow items-center justify-between">
         <div>
            <h3 className="text-lg font-bold text-plum-deep dark:text-white">New to the studio?</h3>
            <p className="text-sm text-plum-deep/60 dark:text-lavender-mist/60">Read our guide for first-timers.</p>
         </div>
         <button className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-default">
            <span className="material-symbols-outlined">arrow_forward</span>
         </button>
      </div>
    </div>
  );
};