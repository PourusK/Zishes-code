"use client";
import Link from "next/link";

const InternationalShippingPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          International Shipping &amp; Customs Policy
        </h1>

        <div className="prose prose-lg text-white max-w-none">
          <p>
            This International Shipping &amp; Customs Policy (“Policy”) explains
            how physical prizes are shipped across borders, how customs duties
            are handled, and who bears responsibility at each stage. It applies
            to all sellers and winners on Zishes and must be read alongside our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            ,{" "}
            <Link href="/failed-delivery" className="text-blue-600 hover:underline">
              Failed Delivery Policy
            </Link>
            , and{" "}
            <Link href="/seller-agreement" className="text-blue-600 hover:underline">
              Seller Agreement
            </Link>
            .
          </p>

          {/* 1. Scope */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">1) Scope</h2>
          <p>
            This Policy governs the shipment of physical prizes across
            international borders. It defines the roles of Sellers, Winners, and
            Zishes in customs, insurance, documentation, and handling failed or
            restricted shipments.
          </p>

          {/* 2. Seller Obligations */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) Seller Obligations
          </h2>
          <ul>
            <li>
              Use reputable international couriers with full tracking and, for
              high-value prizes, delivery confirmation with signature.
            </li>
            <li>
              Provide accurate export documentation, including commercial
              invoice, HS codes, packing list, and certificates of authenticity
              where applicable.
            </li>
            <li>
              Ship within the time specified in the competition listing. Notify
              Zishes immediately of delays.
            </li>
            <li>
              Ensure the item is not on any{" "}
              <Link href="/prohibited-items" className="text-blue-600 hover:underline">
                Prohibited or Restricted Items List
              </Link>{" "}
              and is lawful for export.
            </li>
            <li>
              For high-value items (vehicles, luxury goods, electronics), insure
              shipments for full replacement value.
            </li>
          </ul>

          {/* 3. Winner Obligations */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3) Winner Obligations
          </h2>
          <ul>
            <li>
              Provide a valid delivery address, legal name, and contact details.
            </li>
            <li>
              Pay all import duties, taxes (e.g., VAT, GST), brokerage or
              clearance fees, and comply with local import laws.
            </li>
            <li>
              Respond promptly to customs or courier requests for information.
            </li>
            <li>
              Accept delivery when presented. Failure to pay duties or accept
              delivery may result in forfeiture (see{" "}
              <Link href="/failed-delivery" className="text-blue-600 hover:underline">
                Failed Delivery Policy
              </Link>
              ).
            </li>
          </ul>

          {/* 4. Customs Duties & Taxes */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            4) Customs Duties &amp; Taxes
          </h2>
          <ul>
            <li>
              Duties, VAT/GST, or other import taxes are{" "}
              <strong>the sole responsibility of the Winner</strong>.
            </li>
            <li>
              Zishes and Sellers do not reimburse customs costs or local taxes.
            </li>
            <li>
              Winners should check their local tax and customs rules before
              entering competitions.
            </li>
          </ul>

          {/* 5. Risk Transfer */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            5) Risk Transfer
          </h2>
          <p>
            Risk typically transfers to the Winner once a Seller provides proof
            of shipment with tracking. In some jurisdictions, consumer laws may
            extend Seller responsibility until confirmed delivery. Zishes
            applies the stricter rule where required by law.
          </p>

          {/* 6. Restricted & Prohibited Items */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) Restricted &amp; Prohibited Items
          </h2>
          <p>
            Items banned by international trade law, local customs authorities,
            or Zishes’{" "}
            <Link href="/prohibited-items" className="text-blue-600 hover:underline">
              Prohibited Items Policy
            </Link>{" "}
            cannot be shipped. If a prize is seized by customs due to
            illegality, the competition may be voided and the prize forfeited.
          </p>

          {/* 7. Insurance & High-Value Goods */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) Insurance &amp; High-Value Goods
          </h2>
          <ul>
            <li>
              For vehicles, luxury goods, or electronics exceeding threshold
              values (set by Zishes), Sellers must insure the shipment.
            </li>
            <li>
              Insurance claims must be filed by the Seller if loss or damage
              occurs in transit.
            </li>
            <li>
              Winners will still receive either the insured replacement or a
              re-shipped prize at no extra cost.
            </li>
          </ul>

          {/* 8. Failed Deliveries */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) Failed Deliveries
          </h2>
          <p>
            Failed deliveries are handled under the{" "}
            <Link href="/failed-delivery" className="text-blue-600 hover:underline">
              Failed Delivery &amp; Compensation Policy
            </Link>
            . Generally, if the Winner fails to pay duties or accept delivery,
            the prize may be forfeited. If the Seller fails in their obligations
            (e.g., wrong documentation, prohibited item), they may be required
            to re-ship or replace the prize at their own expense.
          </p>

          {/* 9. Force Majeure */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            9) Force Majeure
          </h2>
          <p>
            Zishes is not liable for delays or failures caused by events outside
            reasonable control, such as natural disasters, strikes, war,
            sanctions, or sudden regulatory changes. Remedies may include prize
            substitution or Zish Credits as goodwill.
          </p>

          {/* 10. Disputes & Evidence */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            10) Disputes &amp; Evidence
          </h2>
          <ul>
            <li>
              Sellers must provide courier receipts, tracking IDs, and export
              documentation.
            </li>
            <li>
              Winners must provide customs notices, refusal slips, or courier
              correspondence if disputing a failed delivery.
            </li>
            <li>
              Zishes will review all evidence and determine remedies fairly and
              consistently.
            </li>
          </ul>

          {/* 11. Changes */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            11) Changes to This Policy
          </h2>
          <p>
            We may update this Policy to reflect changes in law or practice.
            Updates will be published in-app and on the website. Continued use
            of Zishes after updates constitutes acceptance.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">Contact</h2>
          <p>
            Questions about international shipping? Contact{" "}
            <a
              href="mailto:support@zishes.com"
              className="text-blue-600 hover:underline"
            >
              support@zishes.com
            </a>{" "}
            or{" "}
            <a
              href="mailto:compliance@zishes.com"
              className="text-blue-600 hover:underline"
            >
              compliance@zishes.com
            </a>
            .
          </p>

          <p className="text-sm opacity-80">
            <em>Effective date: [Insert Date].</em>
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

export default InternationalShippingPolicy;
