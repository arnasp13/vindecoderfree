import { VinResult } from "@/types";

export const VinDataTable = ({
  otherResults,
  importantResults,
}: {
  otherResults: VinResult[];
  importantResults: VinResult[];
}) => {

  return (
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
  );
};
