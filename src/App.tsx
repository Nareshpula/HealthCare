import React from 'react';
import Navbar from './components/layout/Navbar';
import BackgroundVideo from './components/home/BackgroundVideo';
import ImageCarousel from './components/home/ImageCarousel';
import Services from './components/home/Services';
import PregnancyCalculator from './components/calculators/PregnancyCalculator';
import DoctorsPage from './components/doctors/DoctorsPage';
import LocationSection from './components/location/LocationSection';
import StickyButtons from './components/common/StickyButtons';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BackgroundVideo />
      <ImageCarousel />
      <Services />
      <DoctorsPage />
      <PregnancyCalculator />
      <LocationSection />
      <StickyButtons />
    </div>
  );
}

export default App;