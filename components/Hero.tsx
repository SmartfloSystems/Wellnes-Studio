import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-6 pb-2 md:py-12 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
      
      <div className="text-center md:text-left md:w-1/2 md:order-1">
        <h1 className="text-plum-deep dark:text-white tracking-tight text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display">
          Find Your Center
        </h1>
        <p className="text-plum-deep/70 dark:text-lavender-mist/70 text-lg md:text-xl max-w-xs md:max-w-md mx-auto md:mx-0 mb-8 font-display">
          A holistic space for yoga, meditation, and mindful movement.
        </p>
        
        <div className="hidden md:flex gap-4">
           <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all cursor-default">
             Start Your Journey
           </button>
           <button className="px-8 py-3 bg-transparent border-2 border-plum-deep/10 dark:border-lavender-mist/20 text-plum-deep dark:text-lavender-mist rounded-xl font-bold text-lg hover:bg-plum-deep/5 transition-all cursor-default">
             View Schedule
           </button>
        </div>
      </div>
      
      <div className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden soft-shadow group cursor-default md:order-2">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
          role="img"
          aria-label="Sun-drenched yoga studio with large windows and mats" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABVcx4tGUsRvgu8nE0Eheah0sq_KNNNcv7rrXzDm5KHc9b9IEGHrsBWNGvLSIRiJ8_CjBCtGn-KIT3cs6gWRK5ONfbXtXkwwSL59mjZ83LoCNX-iB3GEdbDkIOxp6TY94RURdCom5cdCyBP6I5gNKX1XrsiUufRMg-Yy5nLVbEE2HM5LXg6akIdDS5NDUQfSKDoeUMDLMZQseOMBROsPJw86coePjFwt_7ebYBfH3FpNofaLJdzKfGwDLyxuxJ8JarudM-IafJgPw")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/40 to-transparent pointer-events-none md:opacity-50"></div>
      </div>

    </div>
  );
};