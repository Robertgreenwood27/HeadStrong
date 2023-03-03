import React from 'react';
import client from '../sanity.config';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Announcement({ announcement }) {
    const { title, slug, description, image, active } = announcement;
    const imageUrl = announcement.imageUrl ? announcement.imageUrl : urlFor(announcement.image).width(600).height(1200).crop('focalpoint').url();
  
    if (!active) {
      return null;
    }

  return (
    <div className="my-40">
    <Link href={`/announcements/${slug.current}`} legacyBehavior>
      <a className="block rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 w-4/5 m-auto mt-2">
        <div className="relative h-60 flex items-center justify-center">
        <img
    src={imageUrl}
    alt={announcement.title}
    className="absolute h-full w-full object-cover z-10"
  />
          <div className="absolute bg-white bg-opacity-80 p-4 z-20 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-lg">{description}</p>
          </div>
        </div>
      </a>
    </Link>
    </div>
  );
}



