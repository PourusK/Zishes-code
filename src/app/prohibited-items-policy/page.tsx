"use client";
import Link from "next/link";

const ProhibitedItemsPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Prohibited & Restricted Items Policy
        </h1>
        <div className="prose prose-lg text-white max-w-none">
          <p>
            For safety and legal reasons, certain items cannot be sold, shipped,
            or offered as prizes on our platform.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Prohibited Items
          </h2>
          <p>
            Items such as weapons, explosives, illegal substances, and harmful
            materials are strictly banned.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Restricted Items
          </h2>
          <p>
            Certain goods may require special permits or approval before being
            listed or shipped.
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

export default ProhibitedItemsPolicy;
