import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const AddressCard = () => {
  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=14.0168,78.7134&travelmode=driving`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="p-8 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p className="text-pink-100">
              SaiPrashanthi Hospital<br />
              516269, Opposite Water Tank<br />
              Near Check Post, S.N Colony<br />
              Rayachoty, Andhra Pradesh
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-pink-100">
              Emergency: +91 1234567890<br />
              Reception: +91 1234567891
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
            <p className="text-pink-100">
              24/7 Emergency Services<br />
              OPD: 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        <button
          onClick={handleGetDirections}
          className="w-full mt-6 px-6 py-3 bg-white text-pink-600 rounded-lg hover:bg-pink-50 transition-colors duration-300 font-semibold"
        >
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default AddressCard;