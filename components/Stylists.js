import React from 'react';
import Link from 'next/link';
import client from '../sanity.config';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Stylists({ stylists }) {
  return (
    <div className="container mx-auto my-12 px-4 lg:px-12">
      <h1 className="text-4xl font-bold mb-12">Meet The Stylists</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stylists.map((stylist) => (
          <li key={stylist._id}>
            <Link href={`/stylists/${stylist.slug.current}`} legacyBehavior>
              <a className="block hover:opacity-75 bg-white text-black rounded-lg border-2 border-gray-300" aria-label={`Learn more about ${stylist.name}`}>
                <img
                  className="object-cover w-full h-full rounded-t-lg"
                  src={urlFor(stylist.picture).width(600).height(1200).crop('entropy').url()}
                  alt={stylist.name}
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">{stylist.name}</h2>
                  <p className="text-gray-600">{stylist.description}</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
