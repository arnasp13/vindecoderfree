import Image from "next/image";
import { Dispatch, useEffect } from "react";

export const Modal: React.FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setIsOpen]);

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">How to find my VIN?</h2>

            <div className="mb-4">
              <p className="font-medium">What is a VIN?</p>
              <p className="text-gray-700 text-sm">
                A VIN, or Vehicle Identification Number, is a unique
                17-character code used to identify individual motor vehicles.
              </p>
            </div>
            <div className="mb-4">
              <p className="font-medium">Why do I need my VIN?</p>
              <p className="text-gray-700 text-sm">
                Your VIN is essential for various tasks, including checking
                vehicle history, recalls, and verifying vehicle specifications.
              </p>
            </div>
            <div className="mb-4">
              <p className="font-medium">Where can I locate my VIN?</p>
              <p className="text-gray-700">The VIN is commonly found:</p>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  On the driver&apos;s side dashboard, visible through the
                  windshield.
                </li>
                <li>Inside the driver&apos;s side door frame.</li>
                <li>On vehicle registration documents and insurance cards.</li>
              </ul>
            </div>

            <div className="mb-4">
              <Image
                src="/vin-code.webp"
                alt="VIN Location"
                className="rounded border"
                width={400}
                height={400}
              />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
