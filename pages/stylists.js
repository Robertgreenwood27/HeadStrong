import React from 'react';
import client from '../sanity.config';
import Stylists from '../components/Stylists';

export default function IndexPage({ stylists }) {
  return (
    <div>
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
  };
}
