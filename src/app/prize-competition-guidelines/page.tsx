"use client";
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
            These Prize Competition Guidelines (“Guidelines”) outline the rules,
            responsibilities, and conditions governing all competitions hosted
            on Zishes. They apply equally to Sellers, Entrants, and Winners, and
            should be read together with our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            ,{" "}
            <Link href="/fair-play" className="text-blue-600 hover:underline">
              Fair Play Policy
            </Link>
            , and{" "}
            <Link href="/seller-agreement" className="text-blue-600 hover:underline">
              Seller Agreement
            </Link>
            .
          </p>

          {/* 1. Nature of Competitions */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            1) Nature of Competitions
          </h2>
          <ul>
            <li>
              Zishes hosts only <strong>games of skill</strong>. Chance or
              lottery-style competitions are prohibited.
            </li>
            <li>
              Winners are determined by performance on skill-based leaderboards
              (time, accuracy, score, or other defined metrics).
            </li>
            <li>
              Entry fees are structured as <strong>Zish Coins</strong> or{" "}
              <strong>Membership Credits</strong>, consumable within the
              platform only and never redeemable for cash.
            </li>
          </ul>

          {/* 2. Entry Conditions */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) Entry Conditions
          </h2>
          <ul>
            <li>Entrants must be 18+ or the local age of majority.</li>
            <li>
              Each competition has a clearly stated entry cost, prize details,
              maximum number of entries, and closing date.
            </li>
            <li>
              Entry is only confirmed once payment/coin deduction is successful
              and acknowledged by the system.
            </li>
            <li>
              Entries are final; cancellations or refunds are not permitted
              unless required by law (see Refund Policy).
            </li>
          </ul>

          {/* 3. Competition Setup by Sellers */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3) Competition Setup by Sellers
          </h2>
          <ul>
            <li>
              Sellers must specify: prize details, retail value, number of
              entries required, entry fee, competition start/end dates, and
              delivery conditions.
            </li>
            <li>
              Once a competition is live, changes to entry fees or prize value
              are not permitted.
            </li>
            <li>
              End dates may be extended or competitions closed early only if
              disclosed in advance and permitted by law.
            </li>
            <li>
              Sellers must guarantee authenticity of prizes and comply with{" "}
              <Link href="/prohibited-items" className="text-blue-600 hover:underline">
                Prohibited &amp; Restricted Items Policy
              </Link>
              .
            </li>
          </ul>

          {/* 4. Leaderboards & Scoring */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            4) Leaderboards &amp; Scoring
          </h2>
          <ul>
            <li>
              Scoring rules are published in each competition listing (e.g.,
              fastest completion time, highest score).
            </li>
            <li>
              Tie-breakers are applied as disclosed (e.g., earliest time
              achieved, secondary metric).
            </li>
            <li>
              Zishes may audit or void suspicious results under the{" "}
              <Link href="/fair-play" className="text-blue-600 hover:underline">
                Fair Play Policy
              </Link>
              .
            </li>
            <li>
              Winners are confirmed only after anti-cheat and KYC verification.
            </li>
          </ul>

          {/* 5. Prize Delivery */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            5) Prize Delivery
          </h2>
          <ul>
            <li>
              Sellers are responsible for shipping/delivering the prize to the
              Winner within the stated timeframe.
            </li>
            <li>
              For international deliveries, Winners must pay customs duties and
              taxes (see{" "}
              <Link href="/international-shipping" className="text-blue-600 hover:underline">
                International Shipping Policy
              </Link>
              ).
            </li>
            <li>
              Sellers must provide tracking, invoices, and authenticity
              certificates where applicable.
            </li>
            <li>
              Failed deliveries are managed under the{" "}
              <Link href="/failed-delivery" className="text-blue-600 hover:underline">
                Failed Delivery Policy
              </Link>
              .
            </li>
          </ul>

          {/* 6. Closing Dates & Extensions */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) Closing Dates &amp; Extensions
          </h2>
          <ul>
            <li>
              Each competition lists a clear end date. Competitions cannot
              extend beyond that unless explicitly stated upfront.
            </li>
            <li>
              If a Seller wishes to close early (e.g., all entries filled), this
              must be disclosed in the listing.
            </li>
            <li>
              Zishes may close or void competitions early in cases of fraud,
              technical failure, or legal obligations.
            </li>
          </ul>

          {/* 7. Disqualification */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) Disqualification
          </h2>
          <ul>
            <li>
              Entries violating{" "}
              <Link href="/fair-play" className="text-blue-600 hover:underline">
                Fair Play Policy
              </Link>{" "}
              may be disqualified without refund.
            </li>
            <li>
              Fake accounts, multi-accounting, or misrepresentation may result
              in permanent bans and forfeiture of prizes.
            </li>
          </ul>

          {/* 8. Disputes & Appeals */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) Disputes &amp; Appeals
          </h2>
          <ul>
            <li>
              Disputes regarding results must be raised within 7 days of the
              competition closing.
            </li>
            <li>
              Appeals may be submitted with evidence (screenshots, recordings,
              courier documents).
            </li>
            <li>
              Zishes’ decision after review is final and binding.
            </li>
          </ul>

          {/* 9. Legal Compliance */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            9) Legal Compliance
          </h2>
          <p>
            Competitions must comply with all applicable consumer protection,
            gaming, and e-commerce laws in both the Seller’s and Winner’s
            jurisdiction. Zishes may suspend or void competitions if required by
            law.
          </p>

          {/* 10. Changes */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            10) Changes to Guidelines
          </h2>
          <p>
            These Guidelines may be updated as laws, platform features, or risk
            factors evolve. Updates will be highlighted in-app and on our
            website.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">Contact</h2>
          <p>
            Questions? Contact{" "}
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

export default PrizeCompetitionGuidelines;
