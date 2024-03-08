import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import client from '../sanity.config';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Stylists({ stylists }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-12">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stylists.map((stylist, index) => (
          <li key={stylist._id} data-aos="fade-up" data-aos-delay={index * 200}>
            <Link href={`/stylists/${stylist.slug.current}`} legacyBehavior>
              <a className="block relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="relative pt-[100%]">
                  <img
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-110 transition duration-500"
                    src={urlFor(stylist.picture).width(600).height(600).crop('focalpoint').url()}
                    alt={stylist.name}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{stylist.name}</h3>
                  <p className="text-sm">{stylist.description}</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}