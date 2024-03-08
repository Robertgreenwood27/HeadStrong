import React, { useEffect } from 'react';
import client from '../sanity.config';
import Announcement from '../components/Announcement';
import HeroSection from '../components/HeroSection';
import Stylists from '../components/Stylists';
import ServiceCard from '../components/ServiceCard';
import Masonry from 'react-masonry-css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function IndexPage({ announcements, stylists, allServices }) {
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="text-center">
      <section data-aos="fade-in">
        <HeroSection />
      </section>

      <section className="py-12" data-aos="fade-left">
        <ul>
          {announcements.map(announcement => (
            <li key={announcement._id}>
              <Announcement announcement={announcement} />
            </li>
          ))}
        </ul>
      </section>

      <section className="py-12" data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-6">Our Stylists</h2>
        <Stylists stylists={stylists} />
      </section>

      <section className="py-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {allServices.map((service) => (
            <div key={service._key} data-aos="zoom-in">
              <ServiceCard service={service} />
            </div>
          ))}
        </Masonry>
      </section>
    </div>
  );
}

export async function getStaticProps() {
    const stylists = await client.fetch('*[_type == "stylist"]{ ..., services[]{ ..., "imageUrl": picture.asset->url }}');
    const announcements = await client.fetch('*[_type == "announcement"] | order(_createdAt asc)');
    
    // Construct allServices array
    const allServices = stylists.flatMap(stylist => stylist.services.map(service => ({...service, stylistName: stylist.name})));

    return {
        props: {
            stylists,
            announcements,
            allServices, // Ensure this is passed as a prop
        },
        revalidate: 600,
    };
}
