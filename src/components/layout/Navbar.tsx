import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavbarLink from './NavbarLink';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-purple-900/80 to-purple-800/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavbarLink onClick={() => scrollToSection('home')} href="#home">Home</NavbarLink>
            <NavbarLink onClick={() => scrollToSection('about')} href="#about">About Us</NavbarLink>
            <NavbarLink onClick={() => scrollToSection('services')} href="#services">Services</NavbarLink>
            <NavbarLink onClick={() => scrollToSection('doctors')} href="#doctors">Doctors</NavbarLink>
            <button 
              onClick={() => scrollToSection('pregnancy-calculator')}
              className="text-white hover:text-pink-200 transition-colors duration-200"
            >
              Pregnancy Calculator
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-pink-200 transition-colors duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen} 
        onCalculatorClick={() => scrollToSection('pregnancy-calculator')}
        onSectionClick={scrollToSection}
      />
    </nav>
  );
};

export default Navbar;