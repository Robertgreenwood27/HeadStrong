import React, { useEffect } from 'react';
import client from '../sanity.config';
import Announcement from '../components/Announcement';
import HeroSection from '../components/HeroSection';
import Stylists from '../components/Stylists';
import ServiceCard from '../components/ServiceCard';
import Masonry from 'react-masonry-css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function IndexPage({ announcements, stylists, allServices }) {
  // Define breakpoints for the masonry grid
  const breakpointColumnsObj = {
    default: 4, // Increase default number of columns
    1100: 4,    // Adjust based on actual needs and layout
    700: 3,     // Adjust based on actual needs and layout
    500: 2      // Adjust based on actual needs and layout
  };

  useEffect(() => {
    AOS.init({
      // Global settings like duration, once, etc.
      duration: 1200, // Duration of animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className='text-center'>
      <section data-aos="fade-in">
        <HeroSection />
      </section>
      <br/>
      <br/>
      <section className='py-3.5' data-aos="fade-left">
        <ul>
          {announcements.map(announcement => (
            <li key={announcement._id}>
              <Announcement announcement={announcement} />
            </li>
          ))}
        </ul>
      </section>
      <section className="py-8" data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {allServices.map((service) => (
                <div key={service._key} data-aos="zoom-in"> {/* Apply AOS for individual services */}
                    <ServiceCard service={service} />
                </div>
            ))}
        </Masonry>
      </section>
      <section data-aos="slide-up">
        <Stylists stylists={stylists} />
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
