import { useQuery } from "react-query";
import axios from "axios";

const fetchCarModels = async (slug: string) => {
  const { data } = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${slug}?format=json`
  );
  return data.Results;
};

export const useCarModels = (slug: string) => {
  return useQuery(["carModels", slug], () => fetchCarModels(slug));
};
