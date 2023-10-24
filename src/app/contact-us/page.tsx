import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-10 text-center bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>

      <main className="max-w-lg mx-auto mt-20 p-10 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-3 mb-5">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-xl"
          />
          <span className="text-xl font-semibold">Arnold Puidokas</span>
        </div>

        <a
          href="https://www.linkedin.com/in/puidokas/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 mb-5 hover:text-blue-600 transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="w-8 h-8" />
          <span>LinkedIn Profile</span>
        </a>

        <a
          href="https://twitter.com/arnaspdk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 mb-5 hover:text-blue-400 transition-colors"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" className="w-8 h-8" />
          <span>X Profile</span>
        </a>

        <div className="flex items-center space-x-3">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="text-red-600 h-8 w-8"
          />
          <span>arnaspuidokas6@gmail.com</span>
        </div>
      </main>
    </div>
  );
}
