import Link from "next/link";

const FairPlayPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Fair Play Policy
        </h1>
        <div className="prose prose-lg text-white max-w-none">
          <p>
            Our Fair Play Policy ensures every participant enjoys a safe,
            honest, and transparent experience.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Prohibited Behavior
          </h2>
          <p>
            Cheating, multiple account usage, or manipulation of results will
            result in disqualification and account suspension.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Community Standards
          </h2>
          <p>
            We expect all users to maintain respect, integrity, and fair play
            while engaging on the platform.
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

export default FairPlayPolicy;
