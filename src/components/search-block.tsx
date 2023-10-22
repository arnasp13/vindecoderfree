"use client";
import React, { FC, useState } from "react";
import { useRouter } from 'next/navigation'

export const SearchBlock: FC<{ placeholder?: string; maxW?: string }> = ({
  placeholder = "Enter your VIN",
  maxW = "600px",
}) => {
  const [vin, setVin] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store the error message
  const router = useRouter();

  const handleDecodeClick = () => {
    // Validation for VIN length
    if (vin.length < 5 || vin.length > 20) {
      setErrorMessage("VIN should be between 5 and 20 characters.");
      return;
    }

    if (vin) {
      router.push(`/vin/${vin}`);
    } else {
      alert("Please enter a VIN to decode.");
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleDecodeClick();
    }
  };

  return (
    <>
    <div
      className={`relative w-full sm:max-w-[${maxW}] px-2 md:px-4 mt-4 md:pt-0 m-auto`}
    >
      <input
        className="w-full border h-16 rounded-[100px] pl-10 px-2 md:px-4"
        placeholder={placeholder}
        value={vin}
        onChange={(e) => {
          setVin(e.target.value);
          setErrorMessage(""); // Reset the error message on input change
        }}
        onKeyPress={handleKeyPress} // Add the key press listener
      />
      <button
        className="absolute top-1/2 transform right-6 -translate-y-1/2 font-medium bg-primary-1 p-3 text-white rounded-[100px] focus:outline-none"
        onClick={handleDecodeClick}
      >
        Decode
      </button>
      {/* Conditionally render the error message */}
    </div>
      {errorMessage && <p className="text-red-500 mt-2 ml-5 text-sm">{errorMessage}</p>}
          </>

  );
};
