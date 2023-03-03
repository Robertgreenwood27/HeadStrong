import client from "../../sanity.config";
import { useEffect, useState } from "react";
import Head from "next/head";
import ServiceCard from "../../components/ServiceCard";
import StylistPicture from "../../components/StylistPicure";
import Gallery from "../../components/Gallery";

export default function StylistPage({ stylist }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  let services = null;

  if (stylist.services && stylist.services.length) {
    services = stylist.services.map((service) => {
      return <ServiceCard key={service._key} service={service} />;
    });
  }

  return (
    <div className="mx-auto px-4 mt-24">
      <Head>
        <title>{stylist.name} - Our Stylists</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {isLoading ? (
            <div className="animate-pulse flex space-x-4">
              <div
                className="rounded-full bg-zinc-200 h-48 w-48"
                aria-label="Loading"
              ></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-zinc-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-zinc-200 rounded"></div>
                  <div className="h-4 bg-zinc-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <StylistPicture picture={stylist.picture} name={stylist.name}/>
              <Gallery images={stylist.gallery} />
            </>
          )}
        </div>
        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold mb-4">{stylist.name}</h1>

          <h2 className="text-xl font-semibold mb-2">Services Offered:</h2>
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {services || (
              <p className="text-zinc-600">
                This stylist doesn't offer any services at the moment.
              </p>
            )}
          </div>
          <div className="hidden md:block">
            {services || (
              <p className="text-zinc-600">
                This stylist doesn't offer any services at the moment.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export async function getStaticPaths() {
  const stylists = await client.fetch(`*[_type == "stylist"]`);

  const paths = stylists.map(stylist => ({
    params: { slug: stylist.slug.current }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const stylist = await client.fetch(`*[_type == "stylist" && slug.current == $slug][0]{
    name,
    picture,
    bio,
    "services": services[]->{
      _key,
      title,
      picture,
      description,
      deposit,
      serviceCost,
      timeRequired
    },
    "gallery": gallery[]{
      ...,
      asset-> {
        ...
      }
    }
  }`, { slug });

  return {
    props: {
      stylist
    }
  };
}

  