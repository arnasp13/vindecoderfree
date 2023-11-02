import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "VINDecoderFree.com Privacy Policy",
  robots: "noindex, nofollow",
  description: "Welcome to the Privacy Policy for VinoVista: VIN Insight.",
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Privacy Policy for VinoVista: VIN Insight </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-8">
          Privacy Policy for VinoVista: VIN Insight{" "}
        </h1>

        <p className="mb-6">Last Updated: October 24, 2023</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to the Privacy Policy for VinoVista: VIN Insight. This
            policy outlines the types of data we collect from our users, how we
            use it, and the steps we take to protect it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p>
            When you use VinoVista: VIN Insight, we may temporarily access
            certain information related to your usage of the add-on, such as
            Google Workspace account details and spreadsheet data that you input
            or access while using the extension. However, we do not store or
            save any of this data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            3. Data Usage and Storage
          </h2>
          <p>
            Your data is used solely for the purpose of ensuring the
            functionality of VinoVista: VIN Insight. Importantly, we do not
            save, store, or retain any of your data after your session ends. All
            data interactions are transient and are immediately discarded
            post-processing. Furthermore, we do not share, sell, or distribute
            your data with any third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Security</h2>
          <p>
            Even though we do not store your data, we prioritize the security of
            the data during the processing phase. We employ stringent measures
            to guard against unauthorized access or breaches.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            5. Third-Party Services
          </h2>
          <p>
            While VinoVista: VIN Insight may integrate with third-party services
            to enhance its functionalities, we ensure that no data is shared
            with these services unless it&lsquo;s essential for the direct
            functionality of the add-on.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. User Rights</h2>
          <p>
            You possess the right to inquire about how we process your data,
            even though we don&lsquo;t store it. If you have any concerns or
            questions, please feel free to contact us.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            7. Changes to This Policy
          </h2>
          <p>
            We may update our Privacy Policy occasionally. Significant changes
            will be communicated to users, but we recommend reviewing this
            policy periodically for any minor updates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data
            practices, please contact:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Developer: Arnold Puidokas</li>
            <li>Email: arnaspuidokas6@gmail.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
