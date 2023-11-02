import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VINDecoderFree.com Privacy Policy",
  robots: "noindex, nofollow",
  description: "Welcome to the Privacy Policy for VinoVista: VIN Insight.",
};
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold">
            VIN Decoder Extension - Privacy Policy
          </h1>
          <div className="divide-y divide-gray-200">
            <p className="mt-4">
              We respect your privacy and do not collect or share any personal
              data. This extension interacts with the NHTSA API to decode VINs
              and does not store any user-specific data.
            </p>
            <p className="mt-4 pt-4">
              We only request necessary permissions to fetch vehicle data and
              ensure the extension functions correctly.
            </p>
            <p className="mt-4 pt-4">
              For any queries or concerns, please contact the developer Arnold
              Puidokas at arnaspuidokas6@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
