import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const HOSPITAL_LOCATION = {
  lat: 14.0168,
  lng: 78.7134
};

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyDHwbVpNgh3G5yG1cmT9_zjqwJO_902YXI',
        version: 'weekly'
      });

      try {
        const google = await loader.load();
        if (!mapRef.current) return;

        const map = new google.maps.Map(mapRef.current, {
          center: HOSPITAL_LOCATION,
          zoom: 15,
          mapTypeControl: false,
          fullscreenControl: true,
          streetViewControl: true,
          zoomControl: true
        });

        new google.maps.Marker({
          position: HOSPITAL_LOCATION,
          map,
          title: 'SaiPrashanthi Hospital',
          animation: google.maps.Animation.DROP
        });

      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    initMap();
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full min-h-[400px]"
      aria-label="Map showing hospital location"
    />
  );
};

export default LocationMap;