"use client";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="prose prose-lg text-white max-w-none">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information while you use
            our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            1. Data We Collect
          </h2>
          <p>
            We may collect personal details such as your name, email, phone
            number, and usage activity when you interact with our platform.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2. How We Use Information
          </h2>
          <p>
            The collected data is used to provide better services, improve user
            experience, and ensure secure transactions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3. Security of Data
          </h2>
          <p>
            We implement industry-standard practices to keep your information
            safe. However, no system can guarantee 100% security.
          </p>

          <p>
            For questions about this Privacy Policy, contact us at{" "}
            <a
              href="mailto:privacy@example.com"
              className="text-blue-600 hover:underline"
            >
              privacy@example.com
            </a>
            .
          </p>
        </div>

        {/* Back Button */}
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

export default PrivacyPolicy;
