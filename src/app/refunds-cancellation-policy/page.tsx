"use client";
import Link from "next/link";

const RefundsCancellationPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Refunds and Cancellation Policy
        </h1>
        <div className="prose prose-lg text-white max-w-none">
          <p>
            This policy outlines the conditions under which refunds and
            cancellations are accepted.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Refund Eligibility
          </h2>
          <p>
            Refunds are processed only for valid claims, such as defective
            products or service issues.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Cancellations
          </h2>
          <p>
            Orders may be cancelled within 24 hours of purchase unless already
            shipped or processed.
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

export default RefundsCancellationPolicy;
