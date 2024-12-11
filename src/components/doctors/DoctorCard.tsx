import React from 'react';
import { User, Star, Phone, Mail } from 'lucide-react';

interface DoctorProps {
  name: string;
  specialty: string;
  experience: string;
  education: string;
  image: string;
  rating: number;
  contact: {
    email: string;
    phone: string;
  };
}

const DoctorCard: React.FC<DoctorProps> = ({
  name,
  specialty,
  experience,
  education,
  image,
  rating,
  contact
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center space-x-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-pink-600 font-semibold mb-4">{specialty}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <User className="w-5 h-5 mr-2" />
            <span>{experience} Experience</span>
          </div>
          <p className="text-gray-600">{education}</p>
        </div>

        <div className="space-y-2">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            {contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;