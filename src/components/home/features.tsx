import Image from "next/image";
import { FC } from "react";

const features = [
  {
    icon: "/icons/book.svg",
    title: "VIN Decoder Essentials",
    description: "Let us provide the best data sources for you.",
  },
  {
    icon: "/icons/details.svg",
    title: "Vehicle Details",
    description:
      "Input a VIN and retrieve the vehicle's Year, Make, Model, and Trims directly from the manufacturer.",
  },
  {
    icon: "/icons/car.svg",
    title: "Vehicle Options",
    description:
      "Obtain comprehensive descriptions and codes of vehicle features as provided by the original equipment manufacturer (OEM).",
  },
  {
    icon: "/icons/color.svg",
    title: "Color Specifications",
    description:
      "Discover the vehicle's interior and exterior colors as per the manufacturer's standards.",
  },
  {
    icon: "/icons/vehicle-services.svg",
    title: "Vehicle Specs",
    description:
      "Access a full breakdown of the vehicle's specifications as given by the manufacturer.",
  },
  {
    icon: "/icons/speedometer.svg",
    title: "Powertrain Details",
    description:
      "Dive into in-depth information about the vehicle's engine and transmission, sourced from OEM databases.",
  },
];

export const Features: FC = () => {
  return (
    <div className="py-12">
      <div>
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="max-w-screen-md mx-auto text-center">
              <p className="text-primary-1 font-medium">Features</p>
              <h2 className="mb-2 text-2 tracking-tight font-extrabold text-gray-900 ">
                Everything you need in a VIN Decoder
              </h2>
              <p className="text-gray-500 text-md">
                At VinDecoderFree.com, we specialize in areas where technology,
                innovation, and resources can reveal lasting value and propel
                automotive insights.
              </p>
            </div>
          </div>
          <div className="px-4 mx-auto max-w-screen-xl sm:py-2 lg:px-6 text-center">
            <div className="mb-4">{/* ... */}</div>
            <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 mx-auto">
                    <Image
                      src={feature.icon}
                      width={30}
                      height={30}
                      alt={feature.title + " Icon"}
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">{feature.title}</h3>
                  <p className="text-gray-500 ">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
