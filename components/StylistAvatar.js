import React from 'react'
import client from "../sanity.config";
import imageUrlBuilder from '@sanity/image-url'



// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source)
}




export default function StylistAvatar({stylist}) {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <img
          src={urlFor(stylist.picture).height(96).width(96).fit('crop').url()}
          className="rounded-full"
          height={96}
          width={96}
          // @TODO add alternative text to avatar image schema
          alt=""
        />
      </div>
      <div className="text-xl font-bold">{stylist.name}</div>
    </div>
  )
}



export async function getStaticProps() {
  const stylists = await client.fetch(`*[_type == "stylist"]`);

  return {
    props: {
      stylists
    }
  };
}