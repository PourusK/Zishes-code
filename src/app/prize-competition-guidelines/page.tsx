import Link from "next/link";

const PrizeCompetitionGuidelines = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Prize Competition Guidelines
        </h1>
        <div className="prose prose-lg text-white max-w-none">
          <p>
            These guidelines outline how competitions are conducted on our
            platform to ensure fairness and transparency.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Eligibility
          </h2>
          <p>
            Participants must meet minimum age requirements and comply with
            local laws to join any competition.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Prize Distribution
          </h2>
          <p>
            All prizes are delivered to winners within the specified timeframe
            and are non-transferable.
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

export default PrizeCompetitionGuidelines;
