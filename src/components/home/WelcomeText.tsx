import React from 'react';

const WelcomeText = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
      <h1 className="welcome-text text-4xl md:text-6xl font-bold text-center mb-6 opacity-0 animate-fade-in">
        Welcome to SaiPrashanthi Hospital
      </h1>
      <p className="sub-text text-xl md:text-2xl text-center mb-8 max-w-3xl opacity-0 animate-fade-in-delayed">
        Where Exceptional Maternity & Orthopedic Care Meets Compassion
      </p>
    </div>
  );
};

export default WelcomeText;