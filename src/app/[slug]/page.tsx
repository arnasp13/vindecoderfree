import Image from "next/image";
import Data from "../../../data.json";
import { CarMakeDetail } from "@/types";
import { CarModelsList } from "@/components/car-models-list";
import { SearchBlock } from "@/components/search-block";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;

  const extractedMake = slug.split("-")[0].replace("/", "");

  // fetch data
  const car = Data.filter((item) => item.slug === extractedMake)[0];

  return {
    title: `${car?.make} VIN decoder`,
    description: car?.about,
    openGraph: {
      images: [car?.logo],
    },
  };
}

export default function Home({ params }: { params: { slug: string } }) {
  const extractedMake = params?.slug.split("-")[0].replace("/", "");

  const carData = Data.filter(
    (item) => item.slug?.toLowerCase() === extractedMake?.toLowerCase()
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
          <div className="mb-12 flex flex-col md:flex-row gap-1 justify-between">
            {carData?.example_vins?.map((item) => (
              <Link
                key={item.vin}
                href={`/vin/${item.vin}`}
                className="no-underline hover:underline text-primary-1 border p-4 bg-neutral-200"
              >
                {item?.vin}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold">{carData?.make} models:</h4>

          <CarModelsList slug={extractedMake} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const iterable = Data?.map((car: CarMakeDetail) => ({
    slug: `${car?.slug}-vin-decoder`,
  }));

  return iterable;
}
