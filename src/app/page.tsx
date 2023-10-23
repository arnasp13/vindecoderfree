import { FAQ } from "@/components/faq";
import Head from "next/head";
import Image from "next/image";
import CarData from "../../data.json";
import Link from "next/link";
import { SearchBlock } from "@/components/search-block";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIN Decoder: Instantly Decode Vehicle Identification Numbers",
  openGraph: { images: ["https://i.imgur.com/xSMr2ff.png"] },
  description:
    "Unlock detailed information about any vehicle with our VIN Decoder. Enter a Vehicle Identification Number (VIN) to get a comprehensive report on its make, model, year, and more. Discover the history and specs of your vehicle in seconds.",
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans ">
      <Head>
        <title>VIN Decoder</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* First Block */}
      <section className="bg-white py-20 px-4 max-w-[1000px] m-auto">
        <h1 className="text-5xl font-bold text-center">VIN Decoder</h1>
        <p className="text-xl text-center text-gray-600 mt-4 mb-8">
          Enter your Vehicle Identification Number to get details
        </p>

        <SearchBlock />

        <div className="py-12 flex flex-col sm:flex-row justify-between max-w-[800px] m-auto gap-2">
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
                    <Link
                      key={index}
                      href={`/vin/${vin.vin}`}
                      className="no-underline text-black"
                    >
                      <li className="text-sm">
                        {vin.model} ({vin.year}):{" "}
                        <span className="text-primary-1 hover:underline">
                          {vin.vin}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>

              {/* Link to Make Page */}
              <div className="mt-4">
                <Link
                  href={`/${item.slug}-vin-decoder`}
                  className="text-blue-500 no-underline hover:underline"
                >
                  {item.make} VIN decoder
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12 m-auto flex flex-col items-center px-4">
        <h2 className="font-semibold text-3xl">
          Install Google Sheets Add-On for VIN decoding
        </h2>

        <Image
          src="/google-sheet.gif"
          className="mt-4 mb-8"
          width={800}
          height={800}
          alt="Video representation"
        />
        <Link
          href="https://tally.so/r/w2AVZV"
          target="_blank"
          className="no-underline bg-primary-1 px-5 py-4 rounded-[50px] text-white font-semibold"
        >
          Install Google Sheet Add-On
        </Link>
      </div>
      <FAQ />
    </div>
  );
}
