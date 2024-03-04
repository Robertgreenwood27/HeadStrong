import Head from "next/head";
import Link from "next/link";
import ServiceCard from "./ServiceCard"; // Ensure this path is correct

const ServicesSection = ({ stylists }) => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white py-12 text-center">
      <Head>
        <title>Services - Headstrong</title>
      </Head>
      <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl mb-4 text-center">Services</h1>
        {stylists.map((stylist) => (
          <div key={stylist._id} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{stylist.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stylist.services.map((service) => (
                <div key={service._key}>
                  <ServiceCard service={service} />
                  <div className="flex justify-between items-center mt-2">
                    <Link href={`/stylists/${stylist.slug.current}`} legacyBehavior>
                      <a className="text-blue-400 hover:underline">
                        View stylist
                      </a>
                    </Link>
                    <a
                      href="https://www.fresha.com/a/headstrong-hair-and-nail-studio-pueblo-west-154-tiffany-drive-j7kcd6r0/booking?menu=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
