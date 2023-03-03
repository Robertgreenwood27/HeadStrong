import client from "../sanity.config";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export default function StylistPicture({ imageUrl, name}) {
  return (
    <>
      <img 
        src={builder.image(imageUrl).fit('crop').url()} 
        alt={name} 
        className="w-1/4 rounded-full"
      />
    </>
  );
}

