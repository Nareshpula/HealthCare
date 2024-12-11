import React from 'react';
import { Calendar, Phone, Siren } from 'lucide-react';
import ServiceCard from './ServiceCard';

const AppointmentSection = () => {
  const handleSchedule = () => {
    // Implement appointment scheduling logic
    console.log('Schedule appointment');
  };

  const handleConsult = () => {
    // Implement online consultation logic
    console.log('Start consultation');
  };

  const handleEmergency = () => {
    // Implement emergency service logic
    window.location.href = 'tel:+911234567890';
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Calendar}
            title="Book an Appointment"
            description="(Schedule a visit to our hospital)"
            buttonText="Schedule Now"
            onClick={handleSchedule}
            iconColor="bg-pink-600"
            buttonColor="bg-pink-600 hover:bg-pink-700"
          />
          
          <ServiceCard
            icon={Phone}
            title="Consult Online"
            description="(Get expert advice from home)"
            buttonText="Start Consultation"
            onClick={handleConsult}
            iconColor="bg-purple-600"
            buttonColor="bg-purple-600 hover:bg-purple-700"
          />

          <ServiceCard
            icon={Siren}
            title="Emergency Services"
            description="(24/7 immediate medical assistance)"
            buttonText="Call Emergency"
            onClick={handleEmergency}
            iconColor="bg-red-600"
            buttonColor="bg-red-600 hover:bg-red-700"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;