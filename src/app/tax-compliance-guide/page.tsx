"use client";
import Link from "next/link";

const TaxComplianceGuide = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Tax and Compliance Guide
        </h1>
        <div className="prose prose-lg text-white max-w-none">
          <p>
            This guide explains your tax responsibilities when participating in
            competitions or selling items on our platform.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Tax Obligations
          </h2>
          <p>
            Participants and sellers are responsible for reporting their own
            winnings or income to local authorities.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Compliance
          </h2>
          <p>
            We cooperate with government regulations to ensure transparency and
            compliance across all transactions.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/#footer"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium shadow-md transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaxComplianceGuide;
