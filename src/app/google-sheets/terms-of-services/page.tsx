import Head from 'next/head';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Privacy Policy for VinoVista: VIN Insight 🚗✨</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-8">Privacy Policy for VinoVista: VIN Insight 🚗✨</h1>

                <p className="mb-6">Last Updated: [Insert Date]</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                    <p>Welcome to the Privacy Policy for VinoVista: VIN Insight 🚗✨. This policy outlines the types of data we collect from our users, how we use it, and the steps we take to protect it.</p>
                </section>

                {/* ... Add other sections similarly ... */}

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy or our data practices, please contact:</p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Developer: Arnold Puidokas</li>
                        <li>Email: arnaspuidokas6@gmail.com</li>
                    </ul>
                </section>

            </div>
        </div>
    );
}

export default PrivacyPolicy;
