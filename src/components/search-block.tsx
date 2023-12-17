"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "./how-to-find-vin-modal";

export const SearchBlock: FC<{ placeholder?: string }> = ({
  placeholder = "Enter your VIN",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [vin, setVin] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store the error message
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDecodeClick = () => {
    setIsLoading(true);

    // Validation for VIN length
    if (vin.length < 5 || vin.length > 20) {
      setErrorMessage("VIN should be between 5 and 20 characters.");
      setIsLoading(false);
      return;
    }

    if (vin) {
      router.push(`/vin/${vin}`);
    } else {
      alert("Please enter a VIN to decode.");
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleDecodeClick();
    }
  };

  return (
    <div className={`max-w-[500px] mx-auto`}>
      <div className={`relative w-full mt-4 md:pt-0 m-auto`}>
        <input
          className="w-full border h-12 rounded-md px-2 md:px-4"
          placeholder={placeholder}
          value={vin}
          onChange={(e) => {
            setVin(e.target.value);
            setErrorMessage(""); // Reset the error message on input change
          }}
          onKeyPress={handleKeyPress} // Add the key press listener
        />

        <button
          className="absolute top-1/2 h-10 transform right-2 -translate-y-1/2 font-medium bg-primary-1 px-4 text-white rounded-md focus:outline-none"
          onClick={handleDecodeClick}
        >
          {isLoading ? "Loading..." : "Decode"}
        </button>
      </div>
      <div className="pl-1 flex gap-1 items-center mt-1">
        {/* <Image src="/icons/info.svg" width={16} height={16} alt="Info" /> */}
        <span className="text-xs text-neutral-2">
          It&apos;s free - no credit card required!
        </span>
      </div>
      {errorMessage && (
        <p className="text-red-500 mt-2 ml-5 text-sm">{errorMessage}</p>
      )}

      <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen} />
    </div>
  );
};
