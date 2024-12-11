import React from 'react';
import { Baby, Bone, Stethoscope, Heart, Activity, Siren } from 'lucide-react';

const services = [
  {
    icon: Baby,
    title: 'Maternity Care',
    description: 'Comprehensive care for mother and child throughout pregnancy and delivery.',
    color: 'text-pink-500',
    image: 'https://images.unsplash.com/photo-1531906484293-a8e7c11b9799?auto=format&fit=crop&q=80&w=600',
    hoverImage: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: Bone,
    title: 'Orthopedic Surgery',
    description: 'Advanced surgical procedures for bone and joint conditions.',
    color: 'text-gray-600',
    image: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=80&w=600',
    hoverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: Stethoscope,
    title: 'Pediatrics',
    description: 'Specialized healthcare for infants, children, and adolescents.',
    color: 'text-pink-400',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=600',
    hoverImage: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: Activity,
    title: 'Physiotherapy',
    description: 'Expert rehabilitation services for optimal recovery.',
    color: 'text-gray-500',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    hoverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: Siren,
    title: 'Emergency Services',
    description: '24/7 emergency care with rapid response teams.',
    color: 'text-pink-500',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=600',
    hoverImage: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: Heart,
    title: 'General Healthcare',
    description: 'Comprehensive medical services for all your healthcare needs.',
    color: 'text-gray-600',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600',
    hoverImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-pink-50 to-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services delivered with expertise and compassion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <img
                  src={service.hoverImage}
                  alt={`${service.title} alternative`}
                  className="absolute inset-0 w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <service.icon className={`absolute bottom-4 right-4 w-8 h-8 ${service.color} transform group-hover:scale-125 transition-transform duration-500`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;