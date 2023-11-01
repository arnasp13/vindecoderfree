import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Google Sheets VIN Decoder Add-On",
  openGraph: { images: ["https://i.imgur.com/xSMr2ff.png"] },
  description:
    "Unlock detailed information about any vehicle with our VIN Decoder. Enter a Vehicle Identification Number (VIN) to get a comprehensive report on its make, model, year, and more. Discover the history and specs of your vehicle in seconds.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">
          VinoVista: Uncover The Secrets Behind Any Vehicle.
        </h1>
        <p className="text-xl mb-8">
          Decode any Vehicle Identification Number (VIN) to reveal in-depth
          details.
        </p>
        <Image
          src="/google-sheet.gif"
          className="mt-4 mb-8"
          width={800}
          height={800}
          alt="Video representation"
        />
        <Link
          href="https://tally.so/r/w2AVZV"
          className="bg-white text-blue-600 font-semibold text-2xl px-6 py-3 rounded-full hover:bg-gray-100"
        >
          Join the Waiting List
        </Link>
      </section>

      <section className="py-20 space-y-12">
        <h2 className="text-4xl font-bold text-center">Why VinoVista?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Feature Card 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-6 w-20 h-20 flex items-center justify-center bg-white text-blue-600 rounded-full">
              <p className="text-2xl">1</p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Detailed Vehicle Information
            </h3>
            <p className="text-center">
              Discover make, model, year, engine type, and more.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-6 w-20 h-20 flex items-center justify-center bg-white text-blue-600 rounded-full">
              <p className="text-2xl">2</p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              For Enthusiasts & Dealerships
            </h3>
            <p className="text-center">
              Perfect for managing inventories and diving into car specifics.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-6 w-20 h-20 flex items-center justify-center bg-white text-blue-600 rounded-full">
              <p className="text-2xl">3</p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Quick & Efficient</h3>
            <p className="text-center">
              Get instant results with a simple formula.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
