import React from 'react';
import { Baby, Bone } from 'lucide-react';

const Logo = () => {
  const handleClick = () => {
    // Scroll to top with smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Trigger welcome text animation using the global function
    if ((window as any).triggerWelcomeAnimation) {
      (window as any).triggerWelcomeAnimation();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 focus:outline-none"
      aria-label="Return to home"
    >
      <div className="flex -space-x-1">
        <Baby className="w-6 h-6 text-purple-200" />
        <Bone className="w-6 h-6 text-white" />
      </div>
      <div className="font-serif">
        <span className="text-purple-200 text-2xl font-bold">
          Sai
        </span>
        <span className="text-white text-2xl font-bold">
          Prashanthi
        </span>
      </div>
    </button>
  );
};

export default Logo;