"use client";
import { useVinDecoder } from "@/api/fetchCarModels";
import { SearchBlock } from "@/components/search-block";
import Image from "next/image";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

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

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function Home({ params }: { params: { slug: string } }) {
  const { data, isLoading } = useVinDecoder(params?.slug);

  if (isLoading) {
    return <>Loading ...</>;
  }

  if (!data && !isLoading) {
    return <div>Sorry we have not been able to get data. Try another VIN</div>;
  }

  const getTitle = () => {
    const year = data.find((item) => item.Variable === "Model Year")?.Value;
    const make = data.find((item) => item.Variable === "Make")?.Value;
    const model = data.find((item) => item.Variable === "Model")?.Value;

    return `${year} ${make} ${model} VIN details`;
  };

  const filteredResults = data.filter(
    (result) => !result.Variable.includes("Error") && result.Value
  );

  const importantResults = filteredResults.filter((result) =>
    importantVariables.includes(result.Variable)
  );

  const otherResults = filteredResults.filter(
    (result) => !importantVariables.includes(result.Variable)
  );

  const VINReport = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{getTitle()}</Text>
          {importantResults.map((result, index) => (
            <Text key={index}>
              {result.Variable}: {result.Value}
            </Text>
          ))}
          {otherResults.map((result, index) => (
            <Text key={index}>
              {result.Variable}: {result.Value}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <div className="flex items-center justify-start gap-4 mb-4">
          <Image src={`/icons/check.svg`} width={40} height={40} alt="" />
          <h1 className="text-2xl font-bold">{getTitle()}</h1>
        </div>

        <div>
          <PDFDownloadLink document={<VINReport />} fileName={`${params?.slug}-report.pdf`}>
            {({ loading }) =>
              loading ? (
                <button className="bg-neutral-500 font-semibold p-4 border rounded-[50px] text-white">
                  Loading...
                </button>
              ) : (
                <button className="bg-neutral-500 font-semibold p-4 border rounded-[50px] text-white">
                  Download PDF report
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
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
