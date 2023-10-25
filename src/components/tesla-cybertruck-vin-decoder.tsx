import { useState } from "react";

export const VinDecoder: React.FC = () => {
  const [vin, setVin] = useState("7G2CTEBENR5001234");
  const [decodedInfo, setDecodedInfo] = useState<any>({});

  const decodeVin = () => {
    if (vin.length !== 17) {
      alert("Please enter a valid 17-character VIN.");
      return;
    }

    const info = {
      Manufacturer: vin.substring(0, 3) === "7G2" ? "Tesla Inc." : "Unknown",
      "Vehicle Type": vin[3] === "C" ? "Cybertruck" : "Unknown",
      "Chassis Type": vin[4] === "E" ? "Truck - LHD" : "Unknown",
      "Gross vehicle weight rating (GVWR)":
        vin[5] === "E" ? "> 14968 kg" : "Unknown",
      "Fuel Type": vin[6] === "E" ? "Electric" : "Unknown",
      "Motor Type":
        vin[7] === "D"
          ? "Dual Motor - Standard"
          : vin[7] === "E"
          ? "Triple Motor - Performance"
          : "Unknown",
      "Model Year": vin[9] === "R" ? "2024" : "Unknown",
      Plant:
        vin[10] === "N"
          ? "Reno, NV"
          : vin[10] === "A"
          ? "Austin, TX"
          : "Unknown",
      "Serial Number": vin.substring(11, 17),
    };

    setDecodedInfo(info);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        placeholder="Enter Cybertruck VIN"
        className="p-2 border rounded-md min-w-[250px]"
      />
      <button
        onClick={decodeVin}
        className="block mt-2 p-3 bg-blue-500 text-white rounded-md"
      >
        Decode
      </button>

      {Object.keys(decodedInfo).length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Decoded Information:</h2>
          <ul className="list-disc pl-8">
            {Object.entries(decodedInfo).map(([key, value]) => (
              <li key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                {/* @ts-ignore */}
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
