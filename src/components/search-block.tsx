"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import navigation from "next/navigation"; // Import useRouter for navigation

export const SearchBlock: FC<{ placeholder?: string; maxW?: string }> = ({
  placeholder = "Enter your VIN",
  maxW = "600px",
}) => {
  const [vin, setVin] = useState(""); // State to store the VIN value

  const handleDecodeClick = () => {
    if (vin) {
      navigation.useRouter().push(`/vin/${vin}`); // Navigate to the /vin/{vin} page
    } else {
      alert("Please enter a VIN to decode.");
    }
  };
  return (
    <div
      className={`relative w-full sm:max-w-[${maxW}] px-2 md:px-4 mt-4 md:pt-0 m-auto`}
    >
      <input
        className="w-full border h-16 rounded-[100px] pl-10 px-2 md:px-4"
        placeholder={placeholder}
        value={vin} // Bind the value of the input to the vin state
        onChange={(e) => setVin(e.target.value)} // Update the vin state when the input changes
      />
      {/* <Image
        width={12}
        height={12}
        src="/icons/search.svg"
        alt="search icon"
        className="absolute top-1/2 transform left-6 -translate-y-1/2  h-6 w-6"
      /> */}
      <button
        className="absolute top-1/2 transform right-6 -translate-y-1/2 font-medium bg-primary-1 p-3 text-white rounded-[100px] focus:outline-none"
        onClick={handleDecodeClick} // Add the onClick handler to the button
      >
        Decode
      </button>
    </div>
  );
};
