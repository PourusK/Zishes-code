"use client";
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
            This Failed Delivery & Compensation Policy (“Policy”) explains what
            happens if a prize cannot be delivered to a Winner after a
            competition ends. It should be read together with our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            ,{" "}
            <Link href="/shipping-customs" className="text-blue-600 hover:underline">
              International Shipping &amp; Customs Policy
            </Link>
            ,{" "}
            <Link href="/seller-agreement" className="text-blue-600 hover:underline">
              Seller Agreement
            </Link>{" "}
            and{" "}
            <Link href="/prohibited-items" className="text-blue-600 hover:underline">
              Prohibited &amp; Restricted Items Policy
            </Link>
            .
          </p>

          {/* 1. Scope */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">1) Scope</h2>
          <p>
            This Policy covers failed deliveries of physical prizes listed on
            Zishes, including high-value items (vehicles, luxury goods, premium
            electronics). It also sets expectations for documentation,
            timelines, and remedies when delivery issues occur.
          </p>

          {/* 2. Responsibilities */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) Responsibilities
          </h2>
          <ul>
            <li>
              <strong>Seller:</strong> Ship the prize as described, on time, using a reputable
              carrier with tracking; provide complete and accurate shipping documents; respond to
              courier queries; cooperate with reshipment or replacement if at fault.
            </li>
            <li>
              <strong>Winner:</strong> Provide a valid, complete delivery address and contact
              details; be available to receive; comply with import laws; pay any customs duties,
              VAT/GST on import, brokerage or clearance fees; promptly respond to courier and
              customs requests.
            </li>
            <li>
              <strong>Zishes:</strong> Coordinate communications, verify evidence, apply this Policy
              fairly, and authorize remedies (re-ship, replacement, credits, or goodwill refund
              where applicable).
            </li>
          </ul>

          {/* 3. Proof of Shipment & Risk Transfer */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3) Proof of Shipment & Risk Transfer
          </h2>
          <p>
            A Seller’s dispatch obligation is met when they provide verifiable proof of shipment
            (courier receipt and trackable number). In most cases, risk transfers to the Winner at
            the point of shipment unless local consumer law states otherwise. High-value items must
            be shipped with tracking and signature on delivery; insurance is strongly recommended and
            may be required by Zishes for certain categories or geographies.
          </p>

          {/* 4. Customs, Duties & Local Restrictions */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            4) Customs, Duties & Local Restrictions
          </h2>
          <p>
            For international deliveries, the Winner is solely responsible for any import duties,
            VAT/GST on import, clearance or brokerage fees, and compliance with local import rules.
            If customs refuses entry or the Winner fails to complete clearance, the delivery may be
            deemed failed due to Winner actions (see Section 6).
          </p>

          {/* 5. When Is a Delivery Considered “Failed”? */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            5) When Is Delivery Considered “Failed”?
          </h2>
          <ul>
            <li>
              <strong>Undeliverable:</strong> Carrier confirms repeated unsuccessful attempts or invalid address.
            </li>
            <li>
              <strong>Refused/Unclaimed:</strong> Winner refuses to accept or does not collect from depot/customs within the required window.
            </li>
            <li>
              <strong>Seized/Rejected:</strong> Item seized or rejected due to import restrictions or unpaid duties.
            </li>
            <li>
              <strong>Lost/Damaged in Transit:</strong> Carrier confirms loss or damage before delivery is completed.
            </li>
          </ul>

          {/* 6. Allocation of Fault & Remedies */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) Allocation of Fault & Remedies
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-white">A) Winner Fault</h3>
          <p className="opacity-90">
            Examples: wrong/incomplete address, refusal to accept, failure to pay duties, failure
            to clear customs, failure to respond to courier/customs within deadlines.
          </p>
          <ul>
            <li>
              <strong>Outcome:</strong> Prize may be <em>forfeited</em>. No cash alternative.
            </li>
            <li>
              <strong>Discretionary goodwill:</strong> Zishes may offer{" "}
              <strong>Zish Credits</strong> (non-cash, platform-only) as a one-time goodwill gesture.
            </li>
            <li>
              <strong>Re-ship:</strong> Only if Winner prepays all incremental costs (return shipping,
              re-shipping, storage, customs) and Zishes approves.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-white">B) Seller Fault</h3>
          <p className="opacity-90">
            Examples: wrong item, defective, incorrectly documented export, shipping prohibited goods,
            late dispatch without notice, inadequate packaging causing damage, shipping without required
            tracking/signature where mandated.
          </p>
          <ul>
            <li>
              <strong>Outcome:</strong> Seller must <strong>re-ship</strong> with corrected documentation{" "}
              or <strong>replace</strong> with an item of equal or higher value at no additional cost to the Winner.
            </li>
            <li>
              <strong>Enforcement:</strong> Zishes may withhold Seller payout, apply penalties per the Seller
              Agreement, or cancel the competition with participant credit refunds in severe cases.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-white">
            C) Carrier Fault (Loss/Damage Confirmed)
          </h3>
          <ul>
            <li>
              Seller must file the carrier/insurance claim. Upon confirmation, Seller shall{" "}
              <strong>re-ship</strong> or <strong>replace</strong> the prize. Insurance proceeds are between
              Seller and carrier; Winner must not be left without a prize.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-white">
            D) Force Majeure / Legal Impossibility
          </h3>
          <p className="opacity-90">
            Examples: natural disasters, war, strikes, sudden legal prohibitions, sanctions.
          </p>
          <ul>
            <li>
              <strong>Outcome:</strong> Zishes may offer an <strong>alternative prize</strong> of equal or
              higher value or <strong>Zish Credits</strong> equivalent to the prize value. In rare cases and at
              Zishes’ sole discretion, a <strong>goodwill refund</strong> may be issued by Zishes (never by the Seller).
            </li>
          </ul>

          {/* 7. Remedies Hierarchy */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) Remedies Hierarchy (No Cash Alternative Rule)
          </h2>
          <ol>
            <li>Re-ship the same prize (preferred).</li>
            <li>Replace with equal or higher-value prize.</li>
            <li>Issue platform-only <strong>Zish Credits</strong> of equivalent value.</li>
            <li>
              Limited, case-by-case <strong>goodwill refund by Zishes</strong> if delivery is impossible despite
              best efforts. Sellers must <strong>not</strong> pay Winners in cash directly.
            </li>
          </ol>

          {/* 8. High-Value Items, DOA & Inspection */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) High-Value Items, DOA & Inspection
          </h2>
          <ul>
            <li>
              For vehicles and luxury goods, delivery must include documentation (invoice, warranty card,
              authenticity papers where applicable). Where possible, invoice should name the Winner.
            </li>
            <li>
              <strong>Dead on Arrival (DOA):</strong> Winner must notify Zishes and Seller within{" "}
              <strong>48 hours</strong> of delivery with photos/videos. Seller must arrange collection and
              replacement or repair per manufacturer warranty.
            </li>
            <li>
              <strong>Insurance:</strong> High-value shipments should be insured for full replacement value.
            </li>
          </ul>

          {/* 9. Documentation & Timelines */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            9) Documentation & Timelines
          </h2>
          <ul>
            <li>
              <strong>Seller must provide:</strong> tracking ID, courier receipt, export/commercial invoice,
              packing list, any certificates needed (e.g., CE/UKCA where applicable).
            </li>
            <li>
              <strong>Winner must provide:</strong> accurate address/contact info, any customs IDs required
              (e.g., tax ID), and timely responses to courier/customs queries.
            </li>
            <li>
              <strong>Issue reporting windows:</strong> Non-receipt or delivery disputes should be raised within{" "}
              <strong>7 days</strong> of the last tracking update or expected delivery date; damage/DOA within{" "}
              <strong>48 hours</strong> of receipt.
            </li>
          </ul>

          {/* 10. Address & Recipient Changes */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            10) Address & Recipient Changes
          </h2>
          <p>
            After dispatch, address or recipient changes require Seller and carrier approval and may incur
            extra costs payable by the Winner. Third-party pick-up is not permitted unless expressly approved
            by Zishes with enhanced verification.
          </p>

          {/* 11. Returns, RTO & Storage */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            11) Returns, RTO (Return to Origin) & Storage
          </h2>
          <ul>
            <li>
              If a package is returned due to Winner actions, the item may be deemed forfeited unless the
              Winner prepays re-shipping and associated costs and Zishes approves re-dispatch.
            </li>
            <li>
              Storage or demurrage fees incurred due to Winner delays are the Winner’s responsibility.
            </li>
          </ul>

          {/* 12. Fraud Prevention & Misuse */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            12) Fraud Prevention & Misuse
          </h2>
          <p>
            Zishes may suspend payouts, withhold prizes, or freeze accounts where we suspect fraud, identity
            manipulation, multi-accounting, chargeback abuse, or collusion. Evidence of misuse may result in
            permanent bans and forfeiture consistent with our{" "}
            <Link href="/fair-play" className="text-blue-600 hover:underline">
              Fair Play Policy
            </Link>
            .
          </p>

          {/* 13. Disputes & Escalation */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">13) Disputes & Escalation</h2>
          <ul>
            <li>
              <strong>Step 1:</strong> Contact the Seller via the Zishes support channel with tracking evidence.
            </li>
            <li>
              <strong>Step 2:</strong> If unresolved within <strong>5 business days</strong>, escalate to Zishes Support
              with documents/photos. We may request additional verification.
            </li>
            <li>
              <strong>Step 3:</strong> Zishes will determine the applicable remedy per Sections 6–7 and inform both parties.
            </li>
          </ul>

          {/* 14. No Seller Cash Payments */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            14) No Seller Cash Payments to Winners
          </h2>
          <p>
            To avoid gambling and financial-services reclassification, Sellers must not make direct cash
            payments to Winners. Any cash-equivalent remedy, where permitted, is issued solely by Zishes
            as a <strong>goodwill refund</strong> in rare cases.
          </p>

          {/* 15. Digital Goods & Split Shipments */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            15) Digital Goods & Split Shipments
          </h2>
          <ul>
            <li>
              For digital entitlements (e.g., activation keys, warranties, ownership transfer documents),
              delivery is deemed complete when evidence of successful activation/transfer is provided.
            </li>
            <li>
              Split shipments may be used where necessary. Each part will have its own tracking and acceptance.
            </li>
          </ul>

          {/* 16. Jurisdiction & Consumer Rights */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            16) Jurisdiction & Consumer Rights
          </h2>
          <p>
            This Policy is applied alongside mandatory consumer protections in applicable jurisdictions. Where
            local law offers non-waivable rights that conflict with this Policy, local law will prevail to the
            extent required. Governing law and venue follow our Terms &amp; Conditions.
          </p>

          {/* 17. Changes to This Policy */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            17) Changes to This Policy
          </h2>
          <p>
            We review and update this Policy periodically. Material changes will be highlighted in the app and/or
            website. Continued use of Zishes after an update constitutes acceptance of the revised Policy.
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

export default FailedDeliveryPolicy;
