import React from 'react';

export const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-lavender-mist to-primary/20 dark:from-primary/20 dark:to-plum-deep px-4 py-3 text-center shadow-sm">
      <p className="text-primary dark:text-lavender-mist text-sm font-bold tracking-wide uppercase">
        New Student Special: $30 for 30 Days
      </p>
    </div>
  );
};