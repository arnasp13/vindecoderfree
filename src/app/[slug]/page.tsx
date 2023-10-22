import Image from "next/image";
import Data from "../../../data.json";
import { CarMakeDetail } from "@/types";
import { CarModelsList } from "@/components/car-models-list";
import { SearchBlock } from "@/components/search-block";
import Link from "next/link";

export default function Home({ params }: { params: { slug: string } }) {
  const carData = Data.filter(
    (item) => item.slug?.toLowerCase() === params?.slug?.toLowerCase()
  )[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-4">
      <div className="w-full max-w-3xl p-6 bg-white rounded shadow-md">
        <div className="flex items-center space-x-4">
          <Image
            src={carData?.logo}
            alt={carData?.make}
            width={100}
            height={100}
          />
          <h1 className="text-3xl font-bold">{carData.make} VIN decoder</h1>
        </div>
        <p className="my-4 text-gray-600 ">{carData.description}</p>
        <Link href={carData?.website || "/"}>
          Check out official {carData?.make}&lsquo;s website
        </Link>
        <SearchBlock
          placeholder={`Enter your ${carData?.make} VIN`}
          maxW="800px"
        />

        <div className="my-8">
          <h4 className="font-semibold mb-4">Try example VINs:</h4>
          <div className="mb-12 flex justify-between">
            {carData?.example_vins?.map((item) => (
              <div
                key={item?.model}
                className="bg-neutral-400 text-white p-4 gap-3"
              >
                {item?.vin}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold">{carData?.make} models:</h4>

          <CarModelsList slug={params?.slug} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const iterable = Data?.map((car: CarMakeDetail) => ({
    slug: car?.slug,
  }));

  return iterable;
}
