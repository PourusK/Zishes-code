import Link from "next/link";

const AmlKycPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          AML & KYC Policy
        </h1>
        <div className="prose prose-lg text-white max-w-none">
          <p>
            This policy ensures compliance with Anti-Money Laundering (AML) and
            Know Your Customer (KYC) regulations.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Verification Process
          </h2>
          <p>
            Users may be required to provide identification documents before
            participating in transactions.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Compliance
          </h2>
          <p>
            Any suspicious activity may be reported to the relevant authorities
            to ensure legal compliance.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium shadow-md transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AmlKycPolicy;
