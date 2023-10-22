import { FAQ } from "@/components/faq";
import Head from "next/head";
import Image from "next/image";
import CarData from "../../data.json";
import Link from "next/link";
import { SearchBlock } from "@/components/search-block";

export default function Home() {
  return (
    <div className="min-h-screen font-sans ">
      <Head>
        <title>VIN Decoder</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* First Block */}
      <section className="bg-white py-20 px-4">
        <h1 className="text-5xl font-bold text-center">VIN Decoder</h1>
        <p className="text-xl text-center text-gray-600 mt-4 mb-8">
          Enter your Vehicle Identification Number to get details
        </p>

<SearchBlock />

        <div className="py-12 flex justify-between max-w-[800px] m-auto gap-2">
          {[
            "Latest NHTSA-endorsed data",
            "Up-to-date information",
            "No cost involved",
          ].map((item) => (
            <div className="flex items-center gap-3" key={item}>
              <Image src="/icons/check.svg" width={35} height={35} alt="" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <div className="py-12 bg-secondary-2">
        <h3 className="text-4xl text-center font-semibold">
          Check out all car makes
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 m-auto px-4 sm:px-12">
          {CarData.map((item, i) => (
            <div
              key={i}
              className="border p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Logo */}
              <div className="mb-4 flex justify-center items-center">
                <Image
                  src={item.logo}
                  alt={item.make}
                  width={80}
                  height={80}
                  className="object-contain h-20"
                />
              </div>

              {/* Make Name */}
              <h3 className="text-xl font-bold mb-2 text-center">
                {item.make}
              </h3>

              {/* About */}
              <p className="text-sm mb-4">{item.about}</p>

              {/* Example VINs */}
              <div className="mb-2">
                <strong className="block mb-1">Example VINs:</strong>
                <ul className="list-disc pl-5">
                  {item.example_vins.map((vin, index) => (
                    <li key={index} className="text-xs">
                      {vin.model} ({vin.year}): {vin.vin}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link to Make Page */}
              <div className="mt-4">
                <Link
                  href={`/make/${item.slug}`}
                  className="text-blue-500 no-underline hover:underline"
                >
                  {item.make} VIN decoder
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQ />
    </div>
  );
}
