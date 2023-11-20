import { SearchBlock } from "@/components/search-block";
import Image from "next/image";
import { DownloadLink } from "@/components/vin-report";
import { VinDataTable } from "@/components/vin-data-table";
import axios from "axios";
import { VinResult } from "@/types";
import { Metadata } from "next";
import Data from "../../../../public/data.json";
import Link from "next/link";

const importantVariables = [
  "Make",
  "Model",
  "Model Year",
  "Vehicle Type",
  "Body Class",
  "Trim",
  "Drive Type",
  "Vehicle Descriptor",
  "Plant City",
  "Plant Country",
  "Plant State",
  "Doors",
  "Fuel Type - Primary",
  "Battery Energy (kWh) From",
  "Battery Energy (kWh) To",
  "Charger Level",
  "Charger Power (kW)",
  "Steering Location",
  "Electrification Level",
  "Transmission Style",
  "Brake System Type",
  "Adaptive Cruise Control (ACC)",
  "Forward Collision Warning (FCW)",
  "Lane Departure Warning (LDW)",
  "Backup Camera",
  "Parking Assist",
  "Daytime Running Light (DRL)",
  "Manufacturer Name",
  "Seat Belt Type",
  "Plant Company Name",
];

const getTitle = ({ data }: { data: VinResult[] }) => {
  const year = data.find((item) => item.Variable === "Model Year")?.Value || "";
  const make = data.find((item) => item.Variable === "Make")?.Value || "";
  const model = data.find((item) => item.Variable === "Model")?.Value || "";

  return `${year} ${make} ${model} VIN details`;
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const response = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/${params?.slug}?format=json`
  );

  const carTitle = getTitle({ data: response?.data?.Results });

  return {
    openGraph: {
      images: ["/vin-code-on-car.jpg"],
    },
    title: `Decoded VIN - Comprehensive VIN Number Analysis of ${params?.slug}`,
    description: `Unlock detailed information about your ${carTitle}! VIN code ${params?.slug} and its comprehensive breakdown of its history, specifications, and unique manufacturer details.`,
  };
};

export default async function Home({ params }: { params: { slug: string } }) {
  const response = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/${params?.slug}?format=json`
  );

  const data = response?.data?.Results as VinResult[];

  if (!data) {
    return <div>Sorry we have not been able to get data. Try another VIN</div>;
  }

  const filteredResults = data.filter(
    (result) => !result.Variable.includes("Error") && result.Value
  );

  const importantResults = filteredResults.filter((result) =>
    importantVariables.includes(result.Variable)
  );

  const otherResults = filteredResults.filter(
    (result) => !importantVariables.includes(result.Variable)
  );

  const title = getTitle({ data });
  const carMake = data.find((item) => item.Variable === "Make")?.Value || "";

  const filteredMakes = Data.filter(
    (item) => item.make.toUpperCase() === carMake.toUpperCase()
  );

  const carMakeData = filteredMakes?.length > 0 ? filteredMakes[0] : null;

  const sampleVins = Data.map((item) => [...item.example_vins]);

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 p-2 md:p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4 flex gap-2 items-center text-gray-600">
          <Link
            href="/"
            className="hover:text-blue-500 transition duration-200 no-underline hover:underline text-xs"
          >
            Home
          </Link>
          <span>{`>`}</span>
          {carMakeData && (
            <>
              <Link
                href={`/${carMakeData.slug.toLowerCase()}-vin-decoder`}
                className="hover:text-blue-500 transition duration-200 hover:underline no-underline text-xs"
              >
                {carMakeData.make}
              </Link>
              <span>{`>`}</span>
            </>
          )}
          {params?.slug && (
            <p className="text-gray-800 text-xs">{params?.slug} VIN data</p>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex items-center justify-start gap-2 md:gap-4 mb-4">
            <Image src={`/icons/check.svg`} width={40} height={40} alt="" />
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>

          <div>
            <DownloadLink
              otherResults={otherResults}
              importantResults={importantResults}
              title={title}
              slug={params?.slug}
            />
          </div>
        </div>
        <VinDataTable
          importantResults={importantResults}
          otherResults={otherResults}
        />
        <div className="my-8">
          <SearchBlock placeholder="Decode another VIN" />
        </div>
        <div className="mt-12">
          <h4 className="pb-1 text-xl font-semibold">
            Try out other VIN codes:
          </h4>
          <ul>
            {Data.slice(0, 3).map((oneMake) =>
              oneMake?.example_vins?.map((item) => (
                <li key={item?.vin}>
                  <Link href={`/vin/${item?.vin}`}>
                    {item?.vin} ({oneMake?.make} {item?.model} {item?.year})
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
