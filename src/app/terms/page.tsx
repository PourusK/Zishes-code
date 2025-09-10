import Link from "next/link";

const Terms = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Terms & Conditions
        </h1>

        {/* Content */}
        <div className="prose prose-lg text-white max-w-none">
          <p>
            Welcome to our platform. These terms and conditions outline the rules
            and regulations for the use of our website and services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use our website if you do not agree
            to all the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2. Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise stated, we or our licensors own the intellectual
            property rights for all material on this website. All intellectual
            property rights are reserved.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3. Restrictions
          </h2>
          <p>
            You are specifically restricted from: publishing any website
            material in any other media; selling, sublicensing, and/or otherwise
            commercializing any website material; publicly performing and/or
            showing any website material.
          </p>

          <p>
            For the complete terms and conditions, please contact our support
            team at{" "}
            <a
              href="mailto:legal@example.com"
              className="text-blue-600 hover:underline"
            >
              legal@example.com
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

export default Terms;
