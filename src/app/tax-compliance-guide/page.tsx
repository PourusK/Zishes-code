"use client";
import Link from "next/link";

const TaxComplianceGuide = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Tax &amp; Compliance Guide
        </h1>

        <div className="prose prose-lg text-white max-w-none">
          <p>
            This guide explains how taxes apply to{" "}
            <strong>Memberships / Coin Packs</strong>,{" "}
            <strong>Sellers</strong>, and{" "}
            <strong>Zishes’ 15% Platform Fee</strong> in each supported country.
            It is provided for transparency only and does not replace formal tax
            advice. Sellers remain responsible for compliance in their own
            jurisdictions.
          </p>

          <div className="overflow-x-auto mt-6">
            <table className="table-auto border-collapse border border-gray-700 w-full text-sm text-white">
              <thead>
                <tr className="bg-gray-900">
                  <th className="border border-gray-700 px-4 py-2 text-left">
                    Country
                  </th>
                  <th className="border border-gray-700 px-4 py-2 text-left">
                    Membership / Coin Pack Tax
                  </th>
                  <th className="border border-gray-700 px-4 py-2 text-left">
                    Seller Tax Obligations
                  </th>
                  <th className="border border-gray-700 px-4 py-2 text-left">
                    Zishes 15% Fee Tax
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* India */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">India</td>
                  <td className="border border-gray-700 px-4 py-2">
                    18% GST on memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Seller must issue GST invoice if registered; Zishes deducts{" "}
                    <strong>1% TCS</strong> on sales. Non-GST sellers still
                    subject to TCS collection.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    18% GST on platform fee.
                  </td>
                </tr>

                {/* UK (incl. Scotland) */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">
                    UK (incl. Scotland)
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    20% VAT on memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Seller must register if exceeding VAT threshold (£90k/year);
                    otherwise no VAT.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    20% VAT on platform fee.
                  </td>
                </tr>

                {/* Ireland */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Ireland</td>
                  <td className="border border-gray-700 px-4 py-2">
                    23% VAT on memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Seller VAT applies if registered above €37,500 threshold.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    23% VAT on platform fee.
                  </td>
                </tr>

                {/* USA */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">United States</td>
                  <td className="border border-gray-700 px-4 py-2">
                    No federal VAT/GST. State sales tax may apply depending on
                    user’s state (subscription taxable in ~30 states).
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Seller must comply with state sales tax if nexus/threshold
                    met. Responsibility varies by state.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Platform fee not subject to federal VAT/GST; may incur state
                    sales tax.
                  </td>
                </tr>

                {/* Canada */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Canada</td>
                  <td className="border border-gray-700 px-4 py-2">
                    5% GST federally; HST up to 15% depending on province for
                    memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Sellers must register if {">"}CAD 30k/year sales.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    GST/HST applies to platform fee.
                  </td>
                </tr>

                {/* Australia */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Australia</td>
                  <td className="border border-gray-700 px-4 py-2">
                    10% GST on memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Sellers must charge GST if annual turnover {">"} AUD 75k.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    10% GST on platform fee.
                  </td>
                </tr>

                {/* Germany */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Germany</td>
                  <td className="border border-gray-700 px-4 py-2">
                    19% VAT on memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Sellers VAT-registered above €22,000 turnover/year.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    19% VAT on platform fee.
                  </td>
                </tr>

                {/* Italy */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Italy</td>
                  <td className="border border-gray-700 px-4 py-2">
                    22% VAT on memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Seller must comply with IVA obligations if registered.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    22% VAT on platform fee.
                  </td>
                </tr>

                {/* Netherlands */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Netherlands</td>
                  <td className="border border-gray-700 px-4 py-2">
                    21% VAT on memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Seller must comply with VAT if above €20,000 turnover/year.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    21% VAT on platform fee.
                  </td>
                </tr>

                {/* Singapore */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Singapore</td>
                  <td className="border border-gray-700 px-4 py-2">
                    9% GST on memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Seller GST applies if annual turnover {">"} SGD 1M.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    9% GST on platform fee.
                  </td>
                </tr>

                {/* UAE */}
                <tr>
                  <td className="border border-gray-700 px-4 py-2">UAE</td>
                  <td className="border border-gray-700 px-4 py-2">
                    5% VAT on memberships/coin packs.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Seller VAT applies if annual turnover {">"} AED 375k. TRN
                    required for compliance.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    5% VAT on platform fee.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            <strong>Important:</strong> Tax laws change frequently. Zishes will
            update this Guide periodically, but Sellers are responsible for
            consulting their own advisors to confirm obligations in their
            jurisdiction.
          </p>

          <p className="text-sm opacity-80 mt-2">
            <em>Effective date: [Insert Date]</em>
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

export default TaxComplianceGuide;
