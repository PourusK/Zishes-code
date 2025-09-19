"use client";
import Link from "next/link";

const RefundsCancellationPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Refunds &amp; Cancellation Policy
        </h1>

        <div className="prose prose-lg text-white max-w-none">
          <p>
            This Refunds &amp; Cancellation Policy (“Policy”) explains when
            Zish Coins (ZC), membership credits, or payments may be re-credited
            and under what circumstances refunds are permitted. It applies to
            all Entrants, Sellers, and competitions hosted on Zishes.
          </p>

          {/* 1. General Rule */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            1) General Rule — No Cash Refunds
          </h2>
          <ul>
            <li>
              All entries are final once submitted.{" "}
              <strong>No cash refunds or cancellations</strong> are permitted.
            </li>
            <li>
              Zish Coins (ZC) are non-redeemable for cash or withdrawal under
              any circumstance.
            </li>
          </ul>

          {/* 2. Incomplete Competitions */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) Incomplete or Cancelled Competitions
          </h2>
          <ul>
            <li>
              If a competition cannot be completed (e.g., insufficient entries,
              technical failure, legal restriction),{" "}
              <strong>all ZC spent will be re-credited</strong> to participant
              wallets.
            </li>
            <li>
              No cash alternative is offered. Re-credited ZC may be used in
              future competitions.
            </li>
          </ul>

          {/* 3. Seller Non-Delivery */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3) Seller Non-Delivery or Breach
          </h2>
          <ul>
            <li>
              If a Seller fails to deliver a prize within the required
              timeframe or delivers counterfeit/false goods, Zishes may:
              <ul>
                <li>
                  Refund affected Winners in{" "}
                  <strong>Zish Coins (ZC only)</strong>.
                </li>
                <li>
                  Withhold or claw back Seller payouts.
                </li>
                <li>
                  Suspend or permanently remove the Seller from the platform.
                </li>
              </ul>
            </li>
            <li>
              Sellers are solely responsible for authenticity and lawful
              shipment of their goods (see{" "}
              <Link href="/seller-agreement" className="text-blue-600 hover:underline">
                Seller Agreement
              </Link>
              ).
            </li>
          </ul>

          {/* 4. Tie Situations */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            4) Tie Situations
          </h2>
          <ul>
            <li>
              In the event of a tie on the leaderboard where multiple Entrants
              achieve the winning score:
            </li>
            <ul>
              <li>
                Each tied Winner will receive{" "}
                <strong>Zish Coins (ZC) equivalent to the value of the prize</strong>.
              </li>
              <li>
                The physical product will be retained by Zishes.
              </li>
              <li>
                The Seller will still receive their agreed payout in full.
              </li>
            </ul>
          </ul>

          {/* 5. Fraud, Abuse & Chargebacks */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            5) Fraud, Abuse &amp; Chargebacks
          </h2>
          <ul>
            <li>
              Zishes may refuse or revoke refunds if fraud, chargeback abuse, or
              violation of the{" "}
              <Link href="/fair-play" className="text-blue-600 hover:underline">
                Fair Play Policy
              </Link>{" "}
              is suspected.
            </li>
            <li>
              Accounts flagged for fraudulent activity may be suspended, banned,
              or reported to relevant authorities.
            </li>
          </ul>

          {/* 6. Force Majeure */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) Force Majeure
          </h2>
          <p>
            If competitions cannot be completed due to natural disasters, war,
            regulatory restrictions, or other events beyond control, Zishes may
            issue refunds in Zish Coins or substitute prizes at its discretion.
          </p>

          {/* 7. Consumer Rights */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) Consumer Rights
          </h2>
          <p>
            This Policy does not override any non-waivable consumer protection
            rights available in your jurisdiction. Where law requires a refund,
            Zishes will comply — but refunds will be processed in{" "}
            <strong>Zish Coins</strong> wherever legally permissible.
          </p>

          {/* 8. Changes */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) Changes to This Policy
          </h2>
          <p>
            We may update this Policy to reflect platform rules, business needs,
            or legal requirements. Updates will be highlighted in-app and on our
            website. Continued participation after updates means acceptance.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">Contact</h2>
          <p>
            Questions about refunds or cancellations? Contact{" "}
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

export default RefundsCancellationPolicy;
