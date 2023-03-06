import React from 'react';
import client from '../sanity.config';
import Announcement from '../components/Announcement';
import HeroSection from '../components/HeroSection';
import Stylists from '../components/Stylists';

export default function IndexPage({ announcements, stylists }) {
  return (
    <div>
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
     <section>
     <Stylists stylists={stylists} />
     </section>
     {/* 
     I need to show services here
     */}
     </div>
  );
}

export async function getStaticProps() {
  const stylists = await client.fetch('*[_type == "stylist"]');
  const announcements = await client.fetch('*[_type == "announcement"]');

  return {
    props: {
      stylists,
      announcements,
    },
    revalidate: 600,
  };
}