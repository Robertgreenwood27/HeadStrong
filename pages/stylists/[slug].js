import client from "../../sanity.config";
import Head from "next/head";
import StylistPicture from "../../components/StylistPicture";
import ServiceCard from "../../components/ServiceCard";
import Masonry from "react-masonry-css";
import AnnouncementBanner from "../../components/StylistAnnouncement";
import SectionDivider from "../../components/Divider";
import Gallery from "../../components/Gallery";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function StylistPage({ stylist }) {
  const { name, imageUrl } = stylist;
  const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1 };

  return (
    <div className="bg-zinc-900 min-h-screen text-white py-20">
      <Head><title>{name} - Headstrong</title></Head>
      <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h1 className="text-4xl md:text-6xl mb-4 text-center">{name}</h1>
          <StylistPicture imageUrl={imageUrl} name={name} />
     

        <div className="flex justify-center mb-4">
        {stylist.facebook && (
  <Link href={stylist.facebook} legacyBehavior>
    <a target="_blank" rel="noopener noreferrer" className="mr-4">
    <FaFacebookF size={36} style={{ color: '#3b5998' }} />
    </a>
  </Link>
)}
{stylist.instagram && (
  <Link href={stylist.instagram} legacyBehavior>
    <a target="_blank" rel="noopener noreferrer">
    <FaInstagram size={36} style={{ color: '#E1306C' }} />
    </a>
  </Link>
)}

</div>

</div>
        <div>
  {stylist.announcements && stylist.announcements.length > 0 && stylist.announcements.map((announcement) => (
    <AnnouncementBanner announcement={announcement} key={announcement._key} />
  ))}
</div>

          <div className="my-32"><SectionDivider bgColor="bg-purple-300" orientation="horizontal"/></div>

          <div className="mb-10">
  <h2 className="text-xl font-bold mb-4">Services</h2>
  {stylist.services && stylist.services.length > 0 && (
    <Masonry breakpointCols={breakpointColumnsObj} className="flex w-full" columnClassName="px-4">
      {stylist.services.map((service) => (
        <div key={service._key} className="mb-8 w-full md:w-auto">
          <ServiceCard service={service} />
        </div>
      ))}
    </Masonry>
  )}
</div>

        <div className="my-32"><SectionDivider bgColor="bg-purple-300" orientation="horizontal"/></div>

        {stylist && stylist.gallery && stylist.gallery.length > 0 && (
  <div className="mb-10">
    <h2 className="text-xl font-bold mb-4">Gallery</h2>
    <Gallery images={stylist.gallery} />
  </div>
)}

      </div>
    </div>
  );
}




export async function getStaticProps({ params }) {
  const { slug } = params;

  const stylist = await client.fetch(`
  *[_type == "stylist" && slug.current == $slug][0] {
    name,
    picture,
    "imageUrl": picture.asset->url,
    services[] {
      name,
      picture,
      "imageUrl": picture.asset->url,
      description,
    },
    announcements[] {
      title,
      body,
      picture,
      "imageUrl": picture.asset->url,
      active,
    },
    gallery[] {
      asset-> {
        _id,
        url,
      },
      description,
    },
    facebook,
    instagram
  }
  
  `, { slug });

  return {
    props: { stylist },
  };
}






export async function getStaticPaths() {
  const stylists = await client.fetch(`
    *[_type == "stylist"] {
      slug {
        current
      }
    }
  `);

  const paths = stylists.map(({ slug }) => ({ params: { slug: slug.current } }));

  return {
    paths,
    fallback: false,
  };
}
