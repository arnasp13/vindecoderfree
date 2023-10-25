import { useQuery } from "react-query";
import axios from "axios";
import { VinResult } from "@/types";

const fetchCarModels = async (slug: string) => {
  const { data } = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${slug}?format=json`
  );
  return data.Results;
};

export const useCarModels = (slug: string) => {
  return useQuery(["carModels", slug], () => fetchCarModels(slug));
};

const fetchVinData = async (vin: string) => {
  const { data } = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/${vin}?format=json`
  );
  return data.Results as VinResult[];
};

export const useVinDecoder = (vin: string) => {
  return useQuery(["vinData", vin], () => fetchVinData(vin));
};
