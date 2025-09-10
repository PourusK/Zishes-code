import Link from "next/link";

const FailedDeliveryPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Failed Delivery & Compensation Policy
        </h1>
        <div className="prose prose-lg text-white max-w-none">
          <p>
            We strive to ensure that all items and prizes are delivered safely
            and on time. This policy explains what happens when deliveries fail.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Delivery Failures
          </h2>
          <p>
            If delivery attempts are unsuccessful, our team will contact you
            within 48 hours to arrange redelivery or pickup.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Compensation
          </h2>
          <p>
            In rare cases where delivery is impossible, compensation may be
            provided as per company policy.
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

export default FailedDeliveryPolicy;
