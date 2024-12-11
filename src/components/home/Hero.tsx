import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-pink-600 min-h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559721853-0da6e4b92d8e?auto=format&fit=crop&q=80"
          alt="Mother and Baby"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Exceptional Maternity & Orthopedic Care
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Experience world-class healthcare with compassionate medical professionals dedicated to your well-being.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-white text-pink-600 rounded-md hover:bg-pink-50 transition-colors">
              <Calendar className="mr-2" size={20} />
              Book an Appointment
            </button>
            <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-pink-600 transition-colors">
              <Phone className="mr-2" size={20} />
              Consult Online
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Maternity Care</h3>
            <p>Comprehensive care throughout your pregnancy journey</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Orthopedic Care</h3>
            <p>Expert treatment for bone and joint conditions</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>Round-the-clock care for emergencies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;