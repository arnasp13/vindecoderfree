"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: JSX.Element;
};

const FAQ_items: FAQItem[] = [
  {
    question: "What is a VIN decoder?",
    answer: (
      <>
        <p>
          A VIN (Vehicle Identification Number) decoder is a tool that
          translates a VIN into detailed information about the vehicle it
          corresponds to, such as the make, model, production year, and more.
        </p>
      </>
    ),
  },
  {
    question: "Can I decode any car's VIN using your tool?",
    answer: (
      <>
        <p>
          Yes, our VIN decoder is designed to decode the VIN of a wide range of
          vehicles from various manufacturers and production years. However,
          it's essential to ensure the VIN is accurate and valid for successful
          decoding.
        </p>
      </>
    ),
  },
  {
    question: "Is using the VIN decoder free?",
    answer: (
      <>
        <p>
          We offer both free and premium VIN decoding options. The free version
          provides basic vehicle details, while the premium version offers more
          in-depth information and additional features.
        </p>
      </>
    ),
  },
  {
    question: "How can I integrate the VIN decoder into Google Sheets?",
    answer: (
      <>
        <p>
          You can integrate our VIN decoder with Google Sheets using our
          provided API. Once set up, you can easily decode VINs directly within
          your spreadsheets, streamlining the process for bulk decodings.
        </p>
      </>
    ),
  },
  {
    question: "Is the data from the VIN decoder accurate?",
    answer: (
      <>
        <p>
          Our VIN decoder sources data from reputable and official databases,
          ensuring that the information provided is accurate and up-to-date.
          However, always cross-check critical details when making decisions
          based on the decoded data.
        </p>
      </>
    ),
  },
  {
    question: "How does the VIN decoder work?",
    answer: (
      <>
        <p>
          The VIN decoder interprets each segment of the 17-character VIN,
          extracting specific details about the vehicle, such as its
          manufacturer, model, engine type, and other essential attributes.
        </p>
      </>
    ),
  },
  {
    question: "Do you store the VINs I decode?",
    answer: (
      <>
        <p>
          No, we prioritize user privacy. We do not store or retain the VINs you
          input for decoding purposes. Each decoding session is independent and
          secure.
        </p>
      </>
    ),
  },
  {
    question: "Can I use the VIN decoder for commercial purposes?",
    answer: (
      <>
        <p>
          Yes, you can use our VIN decoder for commercial purposes, especially
          if you're in the automotive industry. For bulk decoding or API access
          for commercial use, please refer to our pricing and licensing options.
        </p>
      </>
    ),
  },
  {
    question: "How often is your database updated?",
    answer: (
      <>
        <p>
          Our database is updated regularly to include new vehicle models and
          ensure that the information provided is current and accurate.
        </p>
      </>
    ),
  },
  {
    question:
      "Who can I contact if I have issues or questions about the VIN decoder?",
    answer: (
      <>
        <p>
          For any inquiries or concerns regarding the VIN decoder, you can reach
          out to our dedicated support team via the contact details provided on
          our website.
        </p>
      </>
    ),
  },
  {
    question: "Can I decode VINs for Chevy vehicles?",
    answer: (
      <>
        <p>
          Absolutely! Our VIN decoder supports Chevy vehicles, among many other
          brands. Simply input the Chevy VIN, and you'll receive detailed
          information specific to that vehicle.
        </p>
      </>
    ),
  },
  {
    question: "Is Ford VIN decoding supported on your platform?",
    answer: (
      <>
        <p>
          Yes, Ford VINs can be decoded using our tool. We provide comprehensive
          data for Ford vehicles, ensuring you receive accurate details about
          the specific model, production year, and other pertinent attributes.
        </p>
      </>
    ),
  },
  {
    question: "Are there any car brands that the VIN decoder does not support?",
    answer: (
      <>
        <p>
          Our VIN decoder is designed to support a vast range of car brands,
          including major manufacturers like Chevy, Ford, Toyota, and many more.
          However, if you encounter a brand or specific vehicle model that isn't
          supported, please contact our support team for assistance.
        </p>
      </>
    ),
  },
];

type FAQItemProps = {
  question: string;
  answer: JSX.Element;
};

const FAQInnerItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`border  text-left p-8 rounded-2xl ${
        isOpen ? "border-primary-1" : "hover:border-primary-1"
      } cursor-pointer`}
    >
      <div className="flex justify-between sm:justify-start gap-4 items-center">
        <div
          className={`border rounded-[100px] p-2 ${
            isOpen ? "bg-primary-1" : "bg-neutral-300"
          }`}
        >
          <Image
            src={
              isOpen
                ? "/icons/white-chevron-down.svg"
                : "/icons/chevron-right.svg"
            }
            width={30}
            height={30}
            alt=""
          />
        </div>
        <h5 className="font-medium text-2xl">{question}</h5>
      </div>
      {isOpen && (
        <div className="ml-8 mt-4 text-lg transition-all ease-in-out duration-300 text-neutral-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-16 text-center px-2">
      <h3 className="text-4xl font-semibold">Frequently Asked Questions</h3>
      <p className="mt-2 text-neutral-600 text-lg">
        Your answers, simplified for convenience.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {FAQ_items.map((item, i) => (
          <FAQInnerItem key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};
