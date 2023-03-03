import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../sanity.config';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const AnnouncementBanner = ({ announcement }) => {
    if (!announcement.active) {
      return null;
    }
  
    const { title, body, picture } = announcement;
    const imageUrl = urlFor(picture).url();
  
    return (
      <div
        className={`bg-cover bg-center text-white py-24 px-8 ${
          !title && !body ? 'bg-opacity-0' : ''
        }`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {title || body ? (
          <div className="bg-black bg-opacity-50 flex items-center justify-center py-24 px-8">
            <div className="max-w-2xl mx-auto">
              {title && (
                <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>
              )}
              {body && (
                <p className="text-xl mb-8 text-white">{body}</p>
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  };
  

export default AnnouncementBanner;
