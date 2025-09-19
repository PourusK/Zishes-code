"use client";
import Link from "next/link";

const SellerAgreement = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Seller Agreement
        </h1>

        <div className="prose prose-lg text-white max-w-none">
          <p>
            This Seller Agreement (“Agreement”) governs how individuals and
            businesses (“Seller”, “you”) list and fulfill prizes on the Zishes
            platform (“Zishes”, “we”, “our”, “Platform”). By listing any item,
            you accept this Agreement and all linked policies, including{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            ,{" "}
            <Link href="/prohibited-items" className="text-blue-600 hover:underline">
              Prohibited &amp; Restricted Items Policy
            </Link>
            ,{" "}
            <Link href="/prize-guidelines" className="text-blue-600 hover:underline">
              Prize Competition Guidelines
            </Link>
            ,{" "}
            <Link href="/failed-delivery" className="text-blue-600 hover:underline">
              Failed Delivery Policy
            </Link>
            ,{" "}
            <Link href="/international-shipping" className="text-blue-600 hover:underline">
              International Shipping &amp; Customs Policy
            </Link>
            ,{" "}
            <Link href="/fair-play" className="text-blue-600 hover:underline">
              Fair Play Policy
            </Link>
            , and{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          {/* 1. Eligibility & Onboarding */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            1) Eligibility &amp; Onboarding (KYC/KYB)
          </h2>
          <ul>
            <li>
              You must be 18+ (or local age of majority) and pass identity and
              business verification (KYC/KYB). We may request company formation
              docs, trade license, tax IDs (e.g., TRN/GSTIN/VAT), UBO details,
              and proof of address.
            </li>
            <li>
              We may refuse, suspend, or terminate Seller access at our
              discretion where compliance or risk thresholds are not met.
            </li>
          </ul>

          {/* 2. Seller Representations & Warranties */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) Seller Representations &amp; Warranties
          </h2>
          <ul>
            <li>
              Listed prizes are{" "}
              <strong>authentic, lawful, accurately described, and owned</strong>{" "}
              by you with full rights to transfer.
            </li>
            <li>
              Listings do not infringe any third-party IP, brand, or privacy
              rights; you are authorized to use brand names, logos, and images
              where shown.
            </li>
            <li>
              You will comply with sanctions/export controls and applicable
              consumer, customs, tax, and e-commerce laws in origin and
              destination countries.
            </li>
          </ul>

          {/* 3. Listing Standards & Prohibited Items */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3) Listing Standards &amp; Prohibited Items
          </h2>
          <ul>
            <li>
              Provide complete details: product name, condition, accurate
              description, retail value, images, serial/model numbers (if
              applicable), documentation included (invoice, warranty, COA).
            </li>
            <li>
              Strictly comply with{" "}
              <Link href="/prohibited-items" className="text-blue-600 hover:underline">
                Prohibited &amp; Restricted Items Policy
              </Link>{" "}
              (weapons, drugs, counterfeits, endangered species, hacking tools,
              etc. are prohibited).
            </li>
            <li>
              High-value or regulated items may require pre-approval and extra
              documentation (see{" "}
              <Link href="/high-value-prizes" className="text-blue-600 hover:underline">
                High-Value Prizes Clause
              </Link>
              ).
            </li>
          </ul>

          {/* 4. Pricing, Entries & Competition Parameters */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            4) Pricing, Entries &amp; Competition Parameters
          </h2>
          <ul>
            <li>
              You set the prize value and required entries; once a competition
              is live, entry cost and prize value cannot be increased.
            </li>
            <li>
              Closing dates are fixed unless the listing transparently discloses
              conditional extension/early close permissible by law and Platform
              rules.
            </li>
          </ul>

          {/* 5. Fees, Taxes, Invoicing & Payouts */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            5) Fees, Taxes, Invoicing &amp; Payouts
          </h2>
          <ul>
            <li>
              Zishes charges a <strong>15% service fee</strong> on the Seller
              payout. Applicable VAT/GST is charged on this fee where required,
              and we issue a tax invoice for our fee.
            </li>
            <li>
              <strong>India:</strong> where applicable, Zishes will deduct{" "}
              <strong>1% TCS</strong> on consideration for goods under Indian
              rules. GST-registered Sellers must issue GST invoices to the
              Winner (or to Zishes if we buy on Winner’s behalf); non-registered
              Sellers acknowledge TCS may be non-creditable to them.
            </li>
            <li>
              <strong>UAE/UK/EU/SG/other:</strong> Sellers are responsible for
              VAT/GST on their goods where registered/liable. Provide your TRN/
              VAT number where applicable.
            </li>
            <li>
              <strong>Payout timing:</strong> Unless otherwise stated, payouts
              are released after (i) winner verification (KYC), (ii) valid proof
              of shipment (tracked), and (iii) no material dispute. We may hold
              payouts until delivery confirmation for high-value items.
            </li>
            <li>
              <strong>Reserves &amp; withholdings:</strong> We may impose a
              rolling reserve, delay, or withhold payouts to cover risk of
              chargebacks, fraud, counterfeits, legal claims, or fines.
            </li>
            <li>
              We may offset any amounts you owe us (fees, penalties, refunds)
              against your current or future payouts.
            </li>
          </ul>

          {/* 6. Shipping, Delivery & Documentation */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) Shipping, Delivery &amp; Documentation
          </h2>
          <ul>
            <li>
              Ship within the timeframe stated in your listing using reputable
              carriers with tracking; signature on delivery is required for
              high-value prizes.
            </li>
            <li>
              Provide documentation: commercial/export invoice, packing list, HS
              codes, authenticity certificates, warranty cards, and serial
              numbers (where applicable).
            </li>
            <li>
              International: comply with{" "}
              <Link href="/international-shipping" className="text-blue-600 hover:underline">
                International Shipping &amp; Customs Policy
              </Link>
              . Unless otherwise stated, shipments are DAP/DDU; Winners pay
              import duties, VAT/GST, brokerage.
            </li>
            <li>
              Insurance is strongly recommended and may be mandated by Zishes
              for high-value shipments. You remain responsible to re-ship or
              replace items lost/damaged in transit where carrier liability or
              insurance is available.
            </li>
          </ul>

          {/* 7. High-Value Prizes, DOA & Warranty */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) High-Value Prizes, DOA &amp; Warranty
          </h2>
          <ul>
            <li>
              Follow the{" "}
              <Link href="/high-value-prizes" className="text-blue-600 hover:underline">
                High-Value Prizes Clause
              </Link>
              : include invoice in Winner’s name where possible; transfer
              warranties/guarantees; no cash alternatives.
            </li>
            <li>
              <strong>DOA/defects:</strong> If reported within 48 hours of
              delivery with evidence, you must collect and replace/repair per
              manufacturer warranty or your return policy; the Winner must not
              be left without a functioning prize.
            </li>
          </ul>

          {/* 8. No Cash to Winners / No Off-Platform Deals */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) No Cash to Winners / No Off-Platform Deals
          </h2>
          <ul>
            <li>
              You must <strong>not</strong> pay cash or cash equivalents to
              Winners. Remedies are managed under Zishes policies (e.g., Zish
              Credits, replacement).
            </li>
            <li>
              You must not solicit or complete prize fulfillment, payments, or
              refunds off-platform to avoid fees or controls. Non-circumvention
              applies during and 12 months after your last listing.
            </li>
          </ul>

          {/* 9. Counterfeits, Misrepresentation & Penalties */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            9) Counterfeits, Misrepresentation &amp; Penalties
          </h2>
          <ul>
            <li>
              Counterfeit, fake, or misdescribed items are strictly prohibited.
            </li>
            <li>
              If you falsely represent authenticity, brand, or condition, we
              may immediately cancel the competition,{" "}
              <strong>withhold all payouts</strong>, charge penalties up to the
              full prize value plus costs, permanently terminate your account,
              and report you to brand protection and law enforcement.
            </li>
            <li>
              We may require lab/brand verification or chain-of-custody for
              luxury goods and collectibles.
            </li>
          </ul>

          {/* 10. Cancellations, Failed Delivery & Ties */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            10) Cancellations, Failed Delivery &amp; Ties
          </h2>
          <ul>
            <li>
              If a competition cannot complete, entrant ZC are re-credited per{" "}
              <Link href="/refunds" className="text-blue-600 hover:underline">
                Refunds &amp; Cancellation Policy
              </Link>
              . No cash refunds.
            </li>
            <li>
              If you fail to deliver or deliver prohibited/counterfeit goods,
              Zishes will re-credit Winners in ZC and may remove or ban you. We
              may claw back payouts or apply reserves.
            </li>
            <li>
              In a tie, Zishes may award ZC of prize value to tied Winners; the
              physical product may be retained by Zishes and you still receive
              the agreed payout.
            </li>
          </ul>

          {/* 11. Chargebacks, Clawbacks & Reserves */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            11) Chargebacks, Clawbacks &amp; Reserves
          </h2>
          <ul>
            <li>
              If we incur chargebacks, fraud losses, penalties, or refunds
              related to your listings, we may deduct from current/future
              payouts, hold a reserve, or invoice you for the shortfall.
            </li>
            <li>
              You must cooperate in disputes (timely documents, tracking, proof
              of authenticity).
            </li>
          </ul>

          {/* 12. Data, Privacy & Communications */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            12) Data, Privacy &amp; Communications
          </h2>
          <ul>
            <li>
              You may use Winner data solely to fulfill the prize; no marketing
              or reuse without explicit consent and compliance with privacy laws.
            </li>
            <li>
              You must implement reasonable security to protect any personal
              data you process.
            </li>
          </ul>

          {/* 13. Anti-Bribery, AML & Sanctions */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            13) Anti-Bribery, AML &amp; Sanctions
          </h2>
          <ul>
            <li>
              You must comply with anti-bribery/anti-corruption, AML/CTF, and
              sanctions laws. We may request information (including source of
              goods) and restrict activity based on risk.
            </li>
          </ul>

          {/* 14. Intellectual Property & Content License */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            14) Intellectual Property &amp; Content License
          </h2>
          <ul>
            <li>
              You grant Zishes a worldwide, royalty-free, sub-licensable
              license to host, display, and promote your listing content for
              Platform operations and marketing.
            </li>
            <li>
              You warrant your content is lawful and non-infringing; you will
              respond promptly to rights-holder notices.
            </li>
          </ul>

          {/* 15. Indemnity & Liability */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            15) Indemnity &amp; Liability
          </h2>
          <ul>
            <li>
              You will indemnify, defend, and hold harmless Zishes and its
              affiliates against claims, damages, costs (including legal fees)
              arising from your listings, goods, counterfeits, IP infringement,
              product liability, tax failures, or legal breaches.
            </li>
            <li>
              To the maximum extent permitted by law, Zishes’ total liability to
              you is limited to the fees paid by you to Zishes in the 12 months
              preceding the claim or USD 100, whichever is higher.
            </li>
          </ul>

          {/* 16. Audit, Records & Compliance Checks */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            16) Audit, Records &amp; Compliance Checks
          </h2>
          <ul>
            <li>
              Maintain accurate records (invoices, proof of purchase, shipping
              docs) for at least 5 years and provide copies upon request.
            </li>
            <li>
              We may conduct compliance reviews and request additional evidence
              for authenticity or lawful sourcing.
            </li>
          </ul>

          {/* 17. Suspension, Termination & Survival */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            17) Suspension, Termination &amp; Survival
          </h2>
          <ul>
            <li>
              We may suspend or terminate your access immediately for policy
              breaches, legal risk, fraud, or repeated poor performance.
            </li>
            <li>
              Sections relating to fees, taxes, indemnity, IP, data, records,
              penalties, and dispute resolution survive termination.
            </li>
          </ul>

          {/* 18. Dispute Resolution & Governing Law */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            18) Dispute Resolution &amp; Governing Law
          </h2>
          <p>
            Disputes should first be raised with Zishes Support. If unresolved,
            governing law and venue follow our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            . Mandatory consumer protection laws remain unaffected.
          </p>

          {/* 19. Changes & Notices */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            19) Changes &amp; Notices
          </h2>
          <p>
            We may update this Agreement to reflect legal, risk, or product
            changes. Updates take effect when posted in-app/on site. Continued
            listing constitutes acceptance. Notices may be delivered in-app or
            via email to your registered address.
          </p>

          <p className="text-sm opacity-80">
            <em>
              Effective date: [Insert Date]. This Agreement forms part of the
              Zishes Legal Pack and must be read with linked policies.
            </em>
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

export default SellerAgreement;
