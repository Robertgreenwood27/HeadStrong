import React, { useEffect, useRef } from 'react';

function AboutPage() {
  const mapRef = useRef(null);

  useEffect(() => {
    const geocoder = new window.google.maps.Geocoder();
    const address = 'Headstrong Hair and Nail Studio, 154 Tiffany Dr, Pueblo West, CO 81007';

    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const lat = 38.3218867;
        const lng = -104.7043012;
        
        const mapOptions = {
          center: { lat: parseFloat(lat), lng: parseFloat(lng) },
          zoom: 15,
          styles: [ {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ffffff' }],
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#000000' }, { lightness: 13 }],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ color: '#000000' }],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#144b53' }, { lightness: 14 }, { weight: 1.4 }],
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{ color: '#08304b' }],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#0c4152' }, { lightness: 5 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#000000' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#0b434f' }, { lightness: 25 }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry.fill',
            stylers: [{ color: '#000000' }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#0b3d51' }, { lightness: 16 }],
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }],
          },
          {
            featureType: 'transit',
            elementType: 'all',
            stylers: [{ color: '#146474' }],
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#021019' }],
          },]
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        const marker = new window.google.maps.Marker({
          position: { lat: parseFloat(lat), lng: parseFloat(lng) },
          map: map,
          title: 'Headstrong Hair and Nail Studio'
        });
      }
    });
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-8 py-24 sm:flex sm:justify-between sm:max-w-6xl">
  <div className="mb-16 sm:mb-0 sm:pr-8">
        <h2 className="text-3xl font-bold mb-4">Business Hours</h2>
        <ul className="list-disc ml-4 mb-8">
          <li className="mb-2">Monday: 10 AM - 5 PM</li>
          <li className="mb-2">Tuesday: 10:30 AM - 5 PM</li>
          <li className="mb-2">Wednesday: 10:30 AM - 5 PM</li>
          <li className="mb-2">Thursday: 10:30 AM - 5 PM</li>
          <li className="mb-2">Friday: 10 AM - 5 PM</li>
          <li className="mb-2">Saturday: 10 AM - 5 PM</li>
          <li className="mb-2">Sunday: CLOSED</li>
        </ul>
        <h2 className="text-3xl font-bold mb-4">Cancellation Policy</h2>
        <p className="text-lg mb-4">
          A 50% cancellation fee will be charged for all cancellations or no-shows with less than 24 hours notice of the scheduled appointment time.
        </p>
      </div>
      <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
  <div className="mt-16 sm:hidden">
        <h2 className="text-3xl font-bold mb-4">Address</h2>
        <p className="text-lg mb-4">154 Tiffany Dr Pueblo West, CO 81007</p>
      </div>
    </div>
  );
}

export default AboutPage;







             




  

  
