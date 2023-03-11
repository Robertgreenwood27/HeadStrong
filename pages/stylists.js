import React from 'react';
import client from '../sanity.config';
import Stylists from '../components/Stylists';

export default function StylistPage({ stylists }) {
  return (
    <div className="py-12 text-center">
      <Stylists stylists={stylists} />
    </div>
  );
}

export async function getStaticProps() {
  const stylists = await client.fetch('*[_type == "stylist"]');
  return {
    props: {
      stylists,
    },
    revalidate: 600,
  };
}
