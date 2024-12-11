import React from 'react';
import DoctorCard from './DoctorCard';

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Maternity Care Specialist",
    experience: "15+ Years",
    education: "MD Obstetrics & Gynecology, FRCOG",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    contact: {
      email: "sarah.johnson@saiprashanthi.com",
      phone: "+91 98765 43210"
    }
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Orthopedic Surgeon",
    experience: "12+ Years",
    education: "MS Orthopedics, Fellowship in Joint Replacement",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    contact: {
      email: "michael.chen@saiprashanthi.com",
      phone: "+91 98765 43211"
    }
  }
];

const DoctorsPage = () => {
  return (
    <section id="doctors" className="py-20 bg-gradient-to-b from-pink-50 to-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Doctors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced specialists dedicated to providing exceptional healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsPage;