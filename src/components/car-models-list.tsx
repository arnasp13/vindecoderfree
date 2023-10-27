"use client";
import { useCarModels } from "@/api/fetchCarModels";
import { FC } from "react";

interface CarModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export const CarModelsList: FC<{ slug: string }> = ({ slug }) => {
  const { data, isLoading } = useCarModels(slug);

  console.log(data);

  return (
    <>
      {/* {/* <h2 className="mt-6 text-2xl font-semibold">Models</h2> */}
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {data ? (
            <>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {data.map((model: CarModel, index: number) => (
                  <div
                    key={index}
                    className="border bg-neutral-200 p-2 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold">
                      Decode {model?.Make_Name} {model?.Model_Name} VIN
                    </h3>
                    {/* You can add more details here, like Model_ID or Make_Name, if needed */}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};
