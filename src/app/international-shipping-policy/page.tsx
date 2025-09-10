import Link from "next/link";

const InternationalShippingPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          International Shipping & Customs Policy
        </h1>
        <div className="prose prose-lg text-white max-w-none">
          <p>
            This policy explains how we handle international shipments,
            including customs clearance and additional charges.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Customs & Duties
          </h2>
          <p>
            Customers are responsible for any applicable customs duties, taxes,
            or import fees imposed by their country.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Delivery Times
          </h2>
          <p>
            International delivery times vary depending on the destination and
            local postal services.
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

export default InternationalShippingPolicy;
