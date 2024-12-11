import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  iconColor: string;
  buttonColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onClick,
  iconColor,
  buttonColor
}) => {
  return (
    <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 group hover:bg-white/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      {/* Animated background glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${iconColor} blur-2xl`} />
      
      <div className="relative flex items-start space-x-4">
        <div className={`p-3 rounded-full ${iconColor} transform group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-white/20`}>
          <Icon className="w-8 h-8 text-white animate-pulse" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-white/90 mb-4 transform group-hover:-translate-y-1 transition-all duration-300 delay-75">
            {description}
          </p>
          <button 
            onClick={onClick}
            className={`${buttonColor} text-white px-6 py-2 rounded-md transform transition-all duration-300 
              hover:scale-105 hover:shadow-lg hover:shadow-white/10 
              active:scale-95 active:shadow-none
              group-hover:translate-y-0 relative overflow-hidden`}
          >
            <span className="relative z-10">{buttonText}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Corner accent */}
      <div className={`absolute -top-10 -right-10 w-20 h-20 ${iconColor} opacity-20 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-500`} />
    </div>
  );
};

export default ServiceCard;