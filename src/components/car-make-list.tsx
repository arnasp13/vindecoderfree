import { CarMakeDetail } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const CarMakeList = ({ carData }: { carData: CarMakeDetail[] }) => {
  return (
    <div className="py-12 bg-secondary-2">
      <h3 className="text-4xl text-center font-semibold">
        Check out all car makes
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 m-auto px-4 sm:px-12">
        {carData.map((item, i) => (
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
            <h3 className="text-xl font-bold mb-2 text-center">{item.make}</h3>

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
  );
};
