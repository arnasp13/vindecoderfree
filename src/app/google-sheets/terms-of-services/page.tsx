import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: 'VINDecoderFree.com Terms of Service',
  robots: 'noindex, nofollow',
  description: 'Welcome to the Terms of Service for VinoVista: VIN Insight.',
}

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Terms of Service for VinoVista: VIN Insight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-8">
          Terms of Service for VinoVista: VIN Insight
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By using VinoVista: VIN Insight, you agree to be bound by these
            terms. If you do not agree with these terms, please do not use the
            add-on.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these terms at any time.
            Any changes will be posted here, and by continuing to use the add-on
            after changes are made, you agree to be bound by the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Use of the Add-on</h2>
          <p>
            You agree not to misuse the add-on or help anyone else to do so. You
            also agree to use the add-on only for lawful purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the
            add-on without prior notice if you violate any of the terms outlined
            here.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Disclaimers</h2>
          <p>
            The add-on is provided &quot;as is&quot; without any warranties,
            express or implied. We do not guarantee that the add-on will be
            available at all times or that it will function without errors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            We shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss arising from the use
            of the add-on.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Governing Law</h2>
          <p>
            These terms are governed by the laws of Lithuania. Any disputes
            arising from these terms will be resolved in the courts of
            Lithuania.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
          <p>
            For any questions or concerns regarding these terms, please contact
            Arnold Puidokas at arnaspuidokas6@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
