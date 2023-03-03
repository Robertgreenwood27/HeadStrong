import client from '../sanity.config';
import imageUrlBuilder from '@sanity/image-url';
import { useState } from 'react';

const builder = imageUrlBuilder(client);

export default function ServiceCard({ service }) {
  const { name, imageUrl, description } = service;

  const imgUrl = builder.image(imageUrl).width(1024).height(1024).auto('format').fit('crop').url();

  const [hovered, setHovered] = useState(false);

  const cardClasses = `bg-zinc-800 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:-translate-y-1 ${hovered ? 'scale-105' : ''}`;

  return (
    <div
      className={cardClasses}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imgUrl} alt={name} className="rounded-lg mb-4" />
      <h2 className="text-xl font-bold mb-2 text-white">{name}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
