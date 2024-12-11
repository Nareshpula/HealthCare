import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onCalculatorClick: () => void;
  onSectionClick: (sectionId: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onCalculatorClick, onSectionClick }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white/90 backdrop-blur-sm">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <button onClick={() => onSectionClick('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-600">
          Home
        </button>
        <button onClick={() => onSectionClick('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-600">
          About Us
        </button>
        <button onClick={() => onSectionClick('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-600">
          Services
        </button>
        <button onClick={() => onSectionClick('doctors')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-600">
          Doctors
        </button>
        <button 
          onClick={onCalculatorClick}
          className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-600"
        >
          Pregnancy Calculator
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;