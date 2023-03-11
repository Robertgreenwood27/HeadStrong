import React, { useEffect, useState } from 'react';
import client from '../sanity.config';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Announcement({ announcement }) {
  const { title, description, image, active } = announcement;
  const [screenHeight, setScreenHeight] = useState(null);
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!active) {
    return null;
  }

  const imageUrl = announcement.imageUrl
    ? announcement.imageUrl
    : urlFor(announcement.image)
        .width(1200)
        .height(600)
        .crop('focalpoint')
        .url();

        const sectionStyle = {
          backgroundImage: `url(${imageUrl})`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
 
        };
        
        

  return (
    <section style={sectionStyle}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white">{description}</p>
      </div>
    </section>
  );
}
