"use client";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Privacy Policy
        </h1>

        <div className="prose prose-lg text-white max-w-none">
          <p>
            At Zishes, your privacy is important to us. This Privacy Policy
            (“Policy”) explains what personal data we collect, how we use it,
            how we protect it, and your rights. It applies to all users,
            sellers, winners, and visitors of the Zishes platform globally.
          </p>

          {/* 1. Data We Collect */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            1) Data We Collect
          </h2>
          <ul>
            <li>
              <strong>Account Data:</strong> Name, username, email, phone,
              address, age/date of birth, KYC documentation (ID, utility bill,
              tax ID where required).
            </li>
            <li>
              <strong>Transaction Data:</strong> Payment details (processed
              securely by PSPs like Stripe/Razorpay), coin/membership
              purchases, prize wins, seller payouts, invoices.
            </li>
            <li>
              <strong>Gameplay Data:</strong> Competition entries, scores,
              leaderboards, logs, session IDs, anti-cheat telemetry.
            </li>
            <li>
              <strong>Device &amp; Technical Data:</strong> IP, browser/app
              type, device ID, operating system, crash logs, cookie identifiers,
              approximate location.
            </li>
            <li>
              <strong>Communications:</strong> Support requests, chat, dispute
              evidence, appeals, reports of misconduct.
            </li>
          </ul>

          {/* 2. How We Collect Data */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) How We Collect Data
          </h2>
          <ul>
            <li>
              Directly from you (when registering, playing, selling, or
              contacting support).
            </li>
            <li>
              Automatically (cookies, SDKs, telemetry, anti-cheat, analytics).
            </li>
            <li>
              From third parties (payment processors, KYC providers, fraud
              detection tools, courier tracking).
            </li>
          </ul>

          {/* 3. How We Use Data */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3) How We Use Data
          </h2>
          <ul>
            <li>Provide and operate competitions, memberships, and payouts.</li>
            <li>
              Verify identity (KYC/AML compliance), prevent fraud, enforce fair
              play.
            </li>
            <li>
              Process payments, seller settlements, refunds, and accounting
              obligations.
            </li>
            <li>
              Improve services through analytics, bug fixing, and user
              experience optimization.
            </li>
            <li>
              Send service notifications, competition results, policy updates,
              and marketing (where consented).
            </li>
          </ul>

          {/* 4. Legal Bases */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            4) Legal Bases for Processing
          </h2>
          <ul>
            <li>
              <strong>Contract necessity:</strong> to deliver competitions,
              memberships, payouts.
            </li>
            <li>
              <strong>Legal obligation:</strong> KYC, AML, tax reporting,
              accounting, consumer protection.
            </li>
            <li>
              <strong>Legitimate interests:</strong> fraud prevention,
              platform security, service improvement.
            </li>
            <li>
              <strong>Consent:</strong> marketing communications, cookies, some
              analytics.
            </li>
          </ul>

          {/* 5. Sharing Data */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            5) How We Share Data
          </h2>
          <ul>
            <li>
              <strong>Payment providers:</strong> Stripe, Razorpay, or other PSPs
              to process transactions securely.
            </li>
            <li>
              <strong>KYC/AML providers:</strong> Identity verification,
              sanctions screening.
            </li>
            <li>
              <strong>Logistics providers:</strong> Couriers/shippers for prize
              delivery (address/contact shared).
            </li>
            <li>
              <strong>Vendors &amp; analytics providers:</strong> Anti-cheat
              tools, crash logging, fraud detection.
            </li>
            <li>
              <strong>Legal/government authorities:</strong> Where required by
              law, court order, or fraud/crime investigation.
            </li>
          </ul>

          {/* 6. Retention */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) Data Retention
          </h2>
          <p>
            We retain personal data only as long as necessary for the purposes
            described. For example:
          </p>
          <ul>
            <li>KYC/AML records: up to 5–7 years (legal requirement).</li>
            <li>Transaction &amp; tax records: 7 years minimum.</li>
            <li>
              Gameplay logs/anti-cheat telemetry: typically 12–24 months unless
              under investigation.
            </li>
            <li>
              Marketing preferences: until you withdraw consent or delete your
              account.
            </li>
          </ul>

          {/* 7. Security */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) Security Measures
          </h2>
          <p>
            We apply industry-standard measures: TLS encryption in transit,
            encryption at rest for sensitive fields, restricted access, logging,
            anomaly detection, and vendor due diligence. No system is 100%
            secure, but we continuously improve our safeguards.
          </p>

          {/* 8. International Transfers */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) International Transfers
          </h2>
          <p>
            Zishes operates globally. Where data is transferred outside your
            region (e.g., EU/UK to UAE or India), we use safeguards like EU
            Standard Contractual Clauses (SCCs), UK Addendum, and PDPL/DPDP
            compliant measures.
          </p>

          {/* 9. Children */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            9) Children
          </h2>
          <p>
            Zishes is for adults aged 18+ (or local age of majority). We do not
            knowingly collect data from children. If we discover an underage
            account, it will be terminated, and data deleted.
          </p>

          {/* 10. Your Rights */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            10) Your Rights
          </h2>
          <ul>
            <li>Access your data and request a copy.</li>
            <li>Correct inaccuracies.</li>
            <li>Delete your account and personal data (subject to legal holds).</li>
            <li>Restrict or object to processing in certain cases.</li>
            <li>
              Withdraw consent (e.g., marketing or cookies) at any time without
              affecting prior lawful processing.
            </li>
            <li>
              Portability — request transfer of your data in structured format.
            </li>
          </ul>
          <p>
            To exercise these rights, email{" "}
            <a
              href="mailto:privacy@zishes.com"
              className="text-blue-600 hover:underline"
            >
              privacy@zishes.com
            </a>
            . We respond within required legal timeframes (usually 30 days).
          </p>

          {/* 11. Region-Specific Addenda */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            11) Region-Specific Addenda
          </h2>
          <ul>
            <li>
              <strong>EU/UK GDPR:</strong> Right to lodge complaints with local
              data protection authority (ICO in UK, DPA in EU).
            </li>
            <li>
              <strong>India DPDP Act 2023:</strong> Data Principals may exercise
              consent withdrawal and grievance redressal through our appointed
              Data Protection Officer.
            </li>
            <li>
              <strong>UAE PDPL:</strong> Users may request erasure, correction,
              and object to certain processing.
            </li>
            <li>
              <strong>US (CPRA/CCPA):</strong> Residents may request opt-out of
              sale/sharing of personal info and use the Global Privacy Control
              (GPC) signal.
            </li>
          </ul>

          {/* 12. Changes */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            12) Changes to This Policy
          </h2>
          <p>
            We may update this Policy as laws or practices evolve. Material
            updates will be highlighted in-app and on our website. Continued use
            after an update constitutes acceptance.
          </p>

          {/* 13. Contact */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            13) Contact Us
          </h2>
          <p>
            Questions? Contact our Data Protection Officer at{" "}
            <a
              href="mailto:privacy@zishes.com"
              className="text-blue-600 hover:underline"
            >
              privacy@zishes.com
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

export default PrivacyPolicy;
