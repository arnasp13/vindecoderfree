"use client";
import { VinDecoder } from "@/components/tesla-cybertruck-vin-decoder";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md space-y-8">
        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p>
            Welcome to the definitive guide for decoding the Vehicle
            Identification Number (VIN) of your 2024 Tesla Cybertruck. Each VIN
            is a unique identifier that provides important details about your
            vehicle. Using this guide, you can decipher the meaning behind each
            segment of the VIN and gain a deeper understanding of your
            Cybertruck&apos;s specifications.
            <br />
            <br />
            <Link
              href="https://vpic.nhtsa.dot.gov/mid/home/displayfile/fbec7f77-5e2b-4d06-b46c-267e7327c2ff"
              target="_blank"
            >
              Read more on NHTSA guide
            </Link>
          </p>
        </section>

        {/* VIN Structure */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Understanding the VIN Structure
          </h2>
          <p>
            A VIN typically consists of 17 characters, with each segment or
            character conveying specific information about the vehicle. For the
            2024 Tesla Cybertruck, the VIN structure is detailed as follows:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              <strong>Digits 1 - 3:</strong> World Manufacturing Identifier
              (e.g., 7G2 means Manufacturer: Tesla Inc., Vehicle Type: Truck)
            </li>
            <li>
              <strong>Digit 4:</strong> Make/Line/Series (e.g., C indicates the
              vehicle is a Cybertruck)
            </li>
            <li>
              <strong>Digit 5:</strong> Chassis/Cab Type (e.g., B = Day Cab, E =
              Truck - LHD)
            </li>
            <li>
              <strong>Digit 6:</strong> Gross Vehicle Weight Rating (GVWR)
              (e.g., G = 8,001-9,000 lbs., H = 9,001-10,000 lbs.)
            </li>
            <li>
              <strong>Digit 7:</strong> Fuel Type (e.g., E indicates Electric
              fuel type)
            </li>
            <li>
              <strong>Digit 8:</strong> Motor/Drive Unit/Braking System (e.g., D
              = Dual Motor — Standard, E = Triple Motor — Performance)
            </li>
            <li>
              <strong>Digit 9:</strong> Check Digit (Assigned by the
              manufacturer pursuant to 49 CFR § 565.15(c))
            </li>
            <li>
              <strong>Digit 10:</strong> Model Year (e.g., R signifies the model
              year 2024)
            </li>
            <li>
              <strong>Digit 11:</strong> Plant of Manufacture (e.g., N = Reno,
              NV, A = Austin, TX)
            </li>
            <li>
              <strong>Digits 12-17:</strong> Unique serial number (e.g., ranging
              from 000001 to 999999)
            </li>
          </ul>

          <Image
            src="/tesla-vin-decoder.webp"
            width={500}
            height={500}
            alt=""
            className="my-3 rounded border"
          />
        </section>

        {/* Detailed Breakdown */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Detailed Breakdown for Cybertruck
          </h2>
          <ul className="list-decimal pl-8 space-y-2">
            <li>
              <strong>7G2:</strong> This signifies that the manufacturer is
              Tesla Inc., and the vehicle type is a truck.
            </li>
            <li>
              <strong>C:</strong> Indicates the vehicle is a Cybertruck.
            </li>
            <li>
              <strong>T:</strong> Represents the Tesla Semi series. (This was
              not provided in the initial information, but I&apos;m using the
              details from the screenshot for context)
            </li>
            <li>
              <strong>E:</strong> This represents a Truck with a Left Hand Drive
              (LHD) configuration.
            </li>
            <li>
              <strong>B:</strong> Represents a Day Cab type.
            </li>
            <li>
              <strong>E (in GVWR):</strong> Classifies the vehicle as Class 8,
              which is greater than 14968 kg. (33,001 lbs. and over)
            </li>
            <li>
              <strong>E (in Fuel Type):</strong> Indicates the vehicle is
              powered by electricity.
            </li>
            <li>
              <strong>N (in Motor/Drive Unit):</strong> Represents a Dual Drive
              Rear Axle with Air Brakes, designated for the Tesla Semi.
            </li>
            <li>
              <strong>D:</strong> Indicates a Dual Motor — Standard
              configuration, designated for the Cybertruck.
            </li>
            <li>
              <strong>E (in Motor/Drive Unit):</strong> Represents a Triple
              Motor — Performance configuration, designated for the Cybertruck.
            </li>
            <li>
              <strong>Digit 9:</strong> This is a check digit, which is assigned
              by the manufacturer pursuant to 49 CFR § 565.15(c).
            </li>
            <li>
              <strong>R:</strong> Signifies the model year 2024.
            </li>
            <li>
              <strong>N:</strong> Indicates the vehicle was manufactured in
              Reno, NV. Conversely, &quot;A&quot; would signify Austin, TX.
            </li>
            <li>
              <strong>Digits 12-17:</strong> A unique serial number for the
              vehicle, ranging from 000001 to 999999.
            </li>
          </ul>
        </section>

        {/* Sample VIN Decoding */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Sample VIN Decoding</h2>
          <VinDecoder />
        </section>

        {/* Conclusion */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Conclusion & Further Resources
          </h2>
          <p>
            With this guide, you&apos;re now equipped to decode the VIN of your
            2024 Tesla Cybertruck. Understanding your VIN can provide valuable
            insights into your vehicle&apos;s specifications, origin, and unique
            features. If you have further questions or need assistance with
            other Tesla models, please refer to the official Tesla documentation
            or reach out to Tesla customer support.
          </p>
        </section>
      </div>
    </div>
  );
}
