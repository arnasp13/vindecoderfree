import { FAQ } from "@/components/faq";
import Head from "next/head";
import Image from "next/image";
import CarData from "../../public/data.json";
import Link from "next/link";
import { SearchBlock } from "@/components/search-block";
import { Metadata } from "next";
import { CarMakeList } from "@/components/car-make-list";

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

      <div className="bg-secondary-2 py-12">
        <div>
          <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                  What are we offering
                </h2>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
                <div>
                  <div className="flex justify-left items-center mb-2 w-14 h-14 rounded-full bg-primary-100">
                    <Image
                      src="/icons/computer.svg"
                      width={30}
                      height={30}
                      alt="Computer Icon"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    VIN Decoder Website
                  </h3>
                  <p className="text-gray-500 ">
                    Access our free website for comprehensive vehicle details
                    with just a VIN.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-left items-center mb-2 w-14 h-14 rounded-full bg-primary-100">
                    <Image
                      src="/icons/google-sheets.svg"
                      width={30}
                      height={30}
                      alt="Google Sheets Icon"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">
                    Google Sheets Add-On
                  </h3>
                  <p className="text-gray-500 mb-3">
                    Integrate directly into your spreadsheets to fetch the
                    vehicle&apos;s Year, Make, Model, and Trims from the
                    manufacturer.
                  </p>
                  <Link href="/google-sheets">Get Google Sheets Add-on</Link>
                </div>
                <div>
                  <div className="flex justify-left items-center mb-2 w-14 h-14 rounded-full bg-primary-100">
                    <Image
                      src="/icons/chrome.svg"
                      width={30}
                      height={30}
                      alt="Chrome Icon"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">
                    Chrome Extension
                  </h3>
                  <p className="text-gray-500 mb-3">
                    Enhance your browser to access comprehensive vehicle
                    details, from descriptions and codes of features to general
                    information, all sourced directly from the original
                    equipment manufacturer (OEM).
                  </p>
                  <Link href="https://chrome.google.com/webstore/detail/vindecoderfreecom/ckghkkfgljadklgemfelfckaiimbnjki">
                    Get Chrome Extension
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="py-12">
        <div>
          <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                  Everything you need in a VIN Decoder
                </h2>
                <p className="text-gray-500 sm:text-xl ">
                  At VinDecoderFree.com, we specialize in areas where
                  technology, innovation, and resources can reveal lasting value
                  and propel automotive insights.
                </p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                    <Image
                      src="/icons/book.svg"
                      width={30}
                      height={30}
                      alt="Book Icon"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">
                    VIN Decoder Essentials
                  </h3>
                  <p className="text-gray-500 ">
                    Let us provide the best data sources for you.
                  </p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                    <Image
                      src="/icons/details.svg"
                      width={30}
                      height={30}
                      alt="Details Icon"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">
                    Vehicle Details
                  </h3>
                  <p className="text-gray-500 ">
                    Input a VIN and retrieve the vehicle&apos;s Year, Make,
                    Model, and Trims directly from the manufacturer.
                  </p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                    <Image
                      src="/icons/car.svg"
                      width={30}
                      height={30}
                      alt="Car Icon"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">
                    Vehicle Options
                  </h3>
                  <p className="text-gray-500 ">
                    Obtain comprehensive descriptions and codes of vehicle
                    features as provided by the original equipment manufacturer
                    (OEM).
                  </p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                    <Image
                      src="/icons/color.svg"
                      width={30}
                      height={30}
                      alt="Color Icon"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">
                    Color Specifications
                  </h3>
                  <p className="text-gray-500 ">
                    Discover the vehicle&apos;s interior and exterior colors as
                    per the manufacturer&apos;s standards.
                  </p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                    <Image
                      src="/icons/vehicle-services.svg"
                      width={30}
                      height={30}
                      alt="Book Icon"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">
                    Vehicle Specs
                  </h3>
                  <p className="text-gray-500 ">
                    Access a full breakdown of the vehicle&apos;s specifications
                    as given by the manufacturer.
                  </p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                    <Image
                      src="/icons/speedometer.svg"
                      width={30}
                      height={30}
                      alt="Speedometer Icon"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">
                    Powertrain Details
                  </h3>
                  <p className="text-gray-500 ">
                    Dive into in-depth information about the vehicle&apos;s
                    engine and transmission, sourced from OEM databases.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <CarMakeList carData={CarData} />

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
          href="/google-sheets"
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
