import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VINDecoderFree.com Privacy Policy",
  robots: "noindex, nofollow",
  description: "Welcome to the Privacy Policy for VinoVista: VIN Insight.",
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold mb-4">
            VIN Decoder Extension - Privacy Policy
          </h1>
          <h2 className="text-xl font-bold mt-4">Introduction</h2>
          <p className="mt-4">
            This privacy policy outlines the types of information we might
            collect and our practices for using, maintaining, and protecting it.
            We respect user privacy and are committed to protecting it while
            ensuring a smooth experience.
          </p>

          <h2 className="text-xl font-bold mt-4">Data Collection</h2>
          <p className="mt-4">
            Our extension does not collect any personal or sensitive data from
            users. The sole purpose of the extension is to decode VINs using the
            NHTSA API, and it doesn&apos;t store any user-specific data or VINs
            decoded.
          </p>

          <h2 className="text-xl font-bold mt-4">Permissions</h2>
          <p className="mt-4">
            We only request the minimum necessary permissions for the extension
            to function. These permissions enable the extension to interact with
            the NHTSA API to fetch vehicle data. We do not use permissions for
            any other purposes.
          </p>

          <h2 className="text-xl font-bold mt-4">
            Data Sharing and Third Parties
          </h2>
          <p className="mt-4">
            We do not share, sell, or transmit any user data to third parties.
            The extension does not interact with third-party services,
            advertisers, or networks.
          </p>

          <h2 className="text-xl font-bold mt-4">Security</h2>
          <p className="mt-4">
            While we do not store user data, we prioritize user security. Our
            extension is designed following best practices to ensure data
            security and user privacy.
          </p>

          <h2 className="text-xl font-bold mt-4">Updates to this Policy</h2>
          <p className="mt-4">
            This privacy policy may be updated from time to time. Any changes
            will be communicated to users via the extension&apos;s update notes
            or other appropriate channels.
          </p>

          <h2 className="text-xl font-bold mt-4">Contact Us</h2>
          <p className="mt-4">
            For any questions, concerns, or feedback regarding this privacy
            policy or the extension&apos;s practices, please contact us at
            arnaspuidokas6@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
