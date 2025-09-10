import Link from "next/link";

const DataCookiePolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Data & Cookie Policy
        </h1>
        <div className="prose prose-lg text-white max-w-none">
          <p>
            We use cookies and other technologies to improve your browsing
            experience, personalize content, and analyze traffic.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Cookies We Use
          </h2>
          <p>
            Essential, functional, and analytics cookies are used to provide a
            smooth experience.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Managing Cookies
          </h2>
          <p>
            You can disable cookies through your browser settings, but some
            features may stop working properly.
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

export default DataCookiePolicy;
