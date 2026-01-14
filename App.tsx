import React from 'react';
import { TopNav } from './components/TopNav';
import { PromoBanner } from './components/PromoBanner';
import { Hero } from './components/Hero';
import { FeaturedPractices } from './components/FeaturedPractices';
import { BookingCard } from './components/BookingCard';
import { CommunitySection } from './components/CommunitySection';
import { BottomNav } from './components/BottomNav';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24 md:pb-0">
      <TopNav />
      
      {/* Main Content Wrapper */}
      <div className="pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto md:max-w-none">
          <PromoBanner />
          
          <main className="flex flex-col gap-8 mt-8 animate-in fade-in duration-700">
            <Hero />
            
            <div className="my-4">
              <FeaturedPractices />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-stretch">
              <BookingCard />
              <CommunitySection />
            </div>
          </main>
          
          {/* Footer for Desktop */}
          <footer className="hidden md:block border-t border-primary/10 mt-20 py-12 text-center text-plum-deep/40 dark:text-lavender-mist/40 text-sm font-display">
            <p>© 2024 Wellness Studio. Find your center.</p>
          </footer>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default App;