import React from 'react';
import client from '../sanity.config';
import Announcement from '../components/Announcement';
import HeroSection from '../components/HeroSection';
import Stylists from '../components/Stylists';
import ServiceCard from '../components/ServiceCard';
import Masonry from 'react-masonry-css';


export default function IndexPage({ announcements, stylists, allServices }) {
  // Define breakpoints for the masonry grid
  const breakpointColumnsObj = {
    default: 4, // Increase default number of columns
    1100: 4,    // Adjust based on actual needs and layout
    700: 3,     // Adjust based on actual needs and layout
    500: 2      // Adjust based on actual needs and layout
};


  return (
      <div className='text-center'>
          <section>
              <HeroSection/>
          </section>
          <section className='py-3.5'>
              <ul>
                  {announcements.map(announcement => (
                      <li key={announcement._id}>
                          <Announcement announcement={announcement} />
                      </li>
                  ))}
              </ul>
          </section>
          <br/>
          <br/>
          <br/>
          <section className="py-8">
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              {/* Implement Masonry grid here */}
              <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  {allServices.map((service) => (
                      <div key={service._key}> {/* Removed service-card class for Masonry */}
                          <ServiceCard service={service} />
                      </div>
                  ))}
              </Masonry>
          </section>
          <section>
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
