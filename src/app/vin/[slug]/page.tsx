"use client";
import { useVinDecoder } from "@/api/fetchCarModels";
import { SearchBlock } from "@/components/search-block";
import Image from "next/image";

export default function Home() {
  const { data, isLoading } = useVinDecoder("KNDRKDLG6P5178154");

  if (isLoading) {
    return <>Loading ...</>;
  }

  const getTitle = () => {
    const year = data.find((item) => item.Variable === "Model Year")?.Value;
    const make = data.find((item) => item.Variable === "Make")?.Value;
    const model = data.find((item) => item.Variable === "Model")?.Value;

    return `${year} ${make} ${model} VIN details`;
  };

  // Prioritize and categorize the items
  const importantVariables = [
    "Make",
    "Model",
    "Model Year",
    "Vehicle Type",
    "Body Class",
    "Transmission Style",
    "Drive Type",
    // Add more important variables here
  ];

  const filteredResults = data.filter(
    (result) => !result.Variable.includes("Error") && result.Value
  );

  const importantResults = filteredResults.filter((result) =>
    importantVariables.includes(result.Variable)
  );

  const otherResults = filteredResults.filter(
    (result) => !importantVariables.includes(result.Variable)
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <div className="flex items-center justify-start gap-4 mb-4">
          <Image src={`/icons/check.svg`} width={40} height={40} alt="" />
          <h1 className="text-2xl font-bold">{getTitle()}</h1>
        </div>

        <div>
          <button className="bg-neutral-400 font-semibold p-4 border rounded-[50px] text-white">
            Download PDF report
          </button>
        </div>
      </div>{" "}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-4 uppercase font-semibold text-sm text-left border">
              Attribute
            </th>
            <th className="p-4 uppercase font-semibold text-sm text-left">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {importantResults.map((result, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-4 font-medium">{result.Variable}</td>
              <td className="p-4">{result.Value}</td>
            </tr>
          ))}
          {otherResults.map((result, index) => (
            <tr
              key={index + importantResults.length}
              className="border-b border-gray-200"
            >
              <td className="p-4 font-medium">{result.Variable}</td>
              <td className="p-4">{result.Value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-8">
        <SearchBlock placeholder="Decode another VIN" />
      </div>
    </div>
  );
}
