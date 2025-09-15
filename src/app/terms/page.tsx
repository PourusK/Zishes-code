import Link from "next/link";

const Terms = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Terms & Conditions
        </h1>

       {/* Content */}
<div className="prose prose-lg text-white max-w-none">
  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Introduction
  </h2>
  <p>
    These Terms and Conditions (“Terms”) govern access to and use of the
    Zishes platform, apps, websites, features, and related services
    (collectively, the “Platform”), operated by Zishes Technologies (“Zishes”,
    “we”, “us”, “our”). By creating an account, purchasing a membership or
    credits, listing an item, entering a competition, or otherwise using the
    Platform, you agree to be bound by these Terms and related policies. If you
    do not agree, do not use the Platform.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Key Definitions
  </h2>
  <ul>
    <li><strong>Member</strong>: a registered user of Zishes.</li>
    <li><strong>Seller</strong>: a user or business that lists a product/prize on Zishes.</li>
    <li><strong>Competition</strong>: a skill-based event where Members consume Zish Credits (ZC) to participate and winners are determined via leaderboard criteria.</li>
    <li><strong>Zish Credits (ZC)</strong>: non-cash, non-transferable credits used to enter competitions. ZC have no monetary value outside the Platform.</li>
    <li><strong>Membership</strong>: a recurring subscription plan that may include ZC bundles and other perks.</li>
  </ul>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Eligibility
  </h2>
  <p>
    You must be at least 18 years old (or the age of majority in your
    jurisdiction, if higher) to create an account. Identity checks (KYC/AML) will
    be required. You may not use Zishes if prohibited by law or by sanctions.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Accounts & Security
  </h2>
  <p>
    You are responsible for your login credentials and all activity on your
    account. Zishes may suspend or terminate accounts for breaches, suspected
    fraud, or non-compliance.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Memberships, Credits & Coins
  </h2>
  <p>
    In India, Zishes operates as a membership service: Members pay a monthly fee
    (subject to GST) and receive bundled ZC. ZC cannot be purchased separately
    and expire at the end of each billing cycle unless limited rollover is
    offered. In other markets, ZC may be purchased directly (subject to VAT/GST).
    ZC are non-redeemable, non-transferable, and non-refundable.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Fees, Pricing & Taxes
  </h2>
  <p>
    You authorize Zishes to charge applicable fees and taxes. Sellers authorize
    Zishes to deduct its 20% platform fee plus applicable taxes and any
    required withholding (e.g., India TCS) from payouts.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Competitions (Skill-Only)
  </h2>
  <ul>
    <li>Competitions are <strong>skill-based</strong>. Outcomes are determined by performance, not chance.</li>
    <li>Entries consume ZC. Caps and limits apply per competition.</li>
    <li>Leaderboards are final. Tie-break rules are stated in each listing.</li>
    <li>No cash alternatives. Prizes are provided in-kind only.</li>
    <li>Zishes may extend, shorten, or cancel competitions for fairness or legal reasons. Credits may be refunded.</li>
  </ul>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Sellers & Listings
  </h2>
  <p>
    Sellers must comply with the Seller Agreement and Prohibited Items Policy.
    Misrepresentation or counterfeit goods may result in withheld payouts,
    account suspension, and legal action.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Shipping, Customs & High-Value Prizes
  </h2>
  <p>
    Winners outside the Seller’s country are responsible for customs duties and
    import taxes. Sellers must provide proof of shipment. High-value prizes
    (e.g., cars, bikes, luxury goods) are delivered with invoices and warranties
    where possible. No cash alternatives apply.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Refunds & Cancellations
  </h2>
  <p>
    Memberships can be cancelled any time; cancellations take effect at the end
    of the billing cycle. Competition cancellations result in ZC refunds only,
    not cash refunds.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    AML/KYC & Compliance
  </h2>
  <p>
    You must provide requested information to satisfy AML/KYC and sanctions
    checks. Zishes may freeze or terminate accounts if compliance is not met.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Content & IP
  </h2>
  <p>
    You retain ownership of your content but grant Zishes a license to display
    and promote it on the Platform. You warrant your content does not infringe
    on others’ rights.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Dispute Resolution & Governing Law
  </h2>
  <p>
    Disputes will first be mediated with Zishes Support. If unresolved, they
    will be governed by the applicable laws depending on your region (UAE, India,
    UK). Mandatory consumer protections remain unaffected.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Limitation of Liability
  </h2>
  <p>
    To the extent permitted by law, Zishes is not liable for indirect or
    consequential damages, lost profits, or personal injury. Liability is capped
    at the higher of USD 100 or the amount you paid Zishes in the last 12 months.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Changes
  </h2>
  <p>
    We may update these Terms. Continued use of the Platform after changes
    constitutes acceptance.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
    Contact
  </h2>
  <p>
    For any questions, contact us at{" "}
    <a
      href="mailto:legal@zishes.com"
      className="text-blue-600 hover:underline"
    >
      legal@zishes.com
    </a>
    .
  </p>
</div>

        {/* Back Button */}
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

export default Terms;
