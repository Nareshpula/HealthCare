import React from 'react';
import { Phone, Siren } from 'lucide-react';

const StickyButtons = () => {
  const scrollToLocation = () => {
    const locationSection = document.getElementById('location');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmergency = () => {
    window.location.href = 'tel:+911234567890';
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
      <button
        onClick={scrollToLocation}
        className="group flex items-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
      >
        <Phone className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          Contact Us
        </span>
      </button>

      <button
        onClick={handleEmergency}
        className="group flex items-center gap-2 px-4 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 animate-pulse"
      >
        <Siren className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          Emergency
        </span>
      </button>
    </div>
  );
};

export default StickyButtons;