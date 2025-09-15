import Link from "next/link";

const DataCookiePolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Data & Cookie Policy
        </h1>

        <div className="prose prose-lg text-white max-w-none">
          <p>
            This Data & Cookie Policy explains how Zishes (“we”, “us”, “our”)
            uses cookies and similar technologies (collectively, “cookies”) and
            how we process related data. It should be read together with our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            . By using Zishes, you agree to the practices described here, subject
            to your preferences and regional consent requirements.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            1) What Are Cookies & Similar Technologies?
          </h2>
          <p>
            Cookies are small text files placed on your device when you visit a
            site or use an app. We also use SDKs, pixels, local storage,
            session storage, device identifiers, and similar technologies to
            keep you logged in, remember preferences, measure performance,
            prevent fraud, and personalize experiences.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) Why We Use Them (Purposes)
          </h2>
          <ul>
            <li>
              <strong>Essential (Strictly Necessary):</strong> Authentication,
              session management, load balancing, security, fraud prevention,
              consent storage. These are required for core functionality and
              cannot be turned off in our systems.
            </li>
            <li>
              <strong>Performance & Analytics:</strong> Understanding usage,
              crash diagnostics, improving features, measuring campaign
              effectiveness in aggregate.
            </li>
            <li>
              <strong>Functional:</strong> Preferences (language, theme),
              saved settings, remembering device/App behaviors.
            </li>
            <li>
              <strong>Advertising & Attribution (where permitted):</strong>{" "}
              Measuring conversions, capping frequency, and showing relevant
              promotions. We do not sell personal data; where law requires
              consent, we obtain it before setting these cookies.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3) Categories of Cookies We Set
          </h2>
          <ul>
            <li>
              <strong>Session cookies:</strong> expire when you close your
              browser or app instance.
            </li>
            <li>
              <strong>Persistent cookies:</strong> remain until expiry or manual
              deletion; used for preferences, analytics, and consent state.
            </li>
            <li>
              <strong>First-party cookies:</strong> set by Zishes.
            </li>
            <li>
              <strong>Third-party cookies/SDKs:</strong> set by service
              providers (e.g., analytics, payments, fraud tools). We contract
              them to process data only for our purposes and under strict
              safeguards.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            4) Examples of Technologies We May Use
          </h2>
          <p className="opacity-90">
            (Exact vendors can change; we keep this list reasonably up-to-date.)
          </p>
          <ul>
            <li>
              <strong>Analytics/Performance:</strong> product analytics, crash
              logging, A/B testing tools.
            </li>
            <li>
              <strong>Security/Fraud:</strong> device fingerprinting, bot
              detection, anti-abuse tools to protect competitions and payments.
            </li>
            <li>
              <strong>Payments:</strong> payment gateways and PSP SDKs may set
              cookies to prevent fraud and comply with regulatory checks.
            </li>
            <li>
              <strong>Attribution/Advertising (where applicable):</strong>{" "}
              ad-attribution pixels and mobile install measurement tools; used
              only with consent in regions that require it.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            5) Legal Bases & Regional Rules
          </h2>
          <ul>
            <li>
              <strong>EU/UK (GDPR + ePrivacy):</strong> We obtain your{" "}
              <em>consent</em> for non-essential cookies via a Consent
              Management Platform (CMP). Essential cookies rely on{" "}
              <em>legitimate interests</em> or necessity to perform a contract.
              You can change your settings anytime via the{" "}
              <button
                type="button"
                className="underline text-blue-600"
                onClick={() =>
                  window.dispatchEvent(new Event("open-cookie-preferences"))
                }
              >
                Cookie Preferences
              </button>{" "}
              control.
            </li>
            <li>
              <strong>UAE (PDPL):</strong> We use a consent or legitimate-interest
              approach consistent with PDPL guidance; you may manage preferences
              and object where applicable.
            </li>
            <li>
              <strong>India (DPDP):</strong> We follow consent and notice
              standards for non-essential tracking and minimize data collection.
            </li>
            <li>
              <strong>US (CPRA/State Laws):</strong> We honor “Limit/Opt-Out of
              Sale/Sharing” where required and recognize Global Privacy Control
              (GPC) signals where feasible.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) How to Manage Your Preferences
          </h2>
          <ul>
            <li>
              Use our in-product{" "}
              <button
                type="button"
                className="underline text-blue-600"
                onClick={() =>
                  window.dispatchEvent(new Event("open-cookie-preferences"))
                }
              >
                Cookie Preferences
              </button>{" "}
              to accept/decline categories (where required).
            </li>
            <li>
              Browser settings allow you to block or delete cookies. Note that
              disabling essential cookies may break core features (login,
              payments, competitions).
            </li>
            <li>
              Mobile OS settings can reset advertising IDs and control app
              tracking permissions.
            </li>
            <li>
              We reasonably honor supported browser signals (e.g.,{" "}
              <em>Global Privacy Control</em>) where applicable.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) Data Collected Through Cookies
          </h2>
          <p>
            Depending on your settings and region, cookies may collect device
            identifiers, IP address, app/browser type, language, referrer URLs,
            session timestamps, feature usage, crash logs, coarse location, and
            consent choices. We do not collect sensitive categories via cookies.
            We minimize and aggregate analytics wherever feasible.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) Retention & Expiry
          </h2>
          <ul>
            <li>
              Essential cookies typically last only for the session or a short
              period (e.g., up to 12 months) to remember security and
              preferences.
            </li>
            <li>
              Analytics/functional cookies may persist up to{" "}
              <strong>24 months</strong> unless you delete them or withdraw
              consent; we review lifetimes periodically to ensure necessity.
            </li>
            <li>
              We store consent records to demonstrate compliance for as long as
              legally required.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            9) Third Parties & International Transfers
          </h2>
          <p>
            Service providers acting on our behalf may process cookie data under
            data-processing agreements and security obligations. Where data is
            transferred internationally, we use appropriate safeguards (e.g.,
            SCCs for EU/UK, contractual and technical measures). We require
            vendors to limit use to our instructions and purposes only.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            10) Children
          </h2>
          <p>
            Zishes is intended for adults (18+). We do not knowingly set
            non-essential cookies for users identified as under the age of
            majority in their jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            11) Your Rights
          </h2>
          <ul>
            <li>
              Depending on your region, you may have rights to access, correct,
              delete, port, or object/restrict processing of personal data
              collected via cookies.
            </li>
            <li>
              You can withdraw consent to non-essential cookies at any time via{" "}
              <button
                type="button"
                className="underline text-blue-600"
                onClick={() =>
                  window.dispatchEvent(new Event("open-cookie-preferences"))
                }
              >
                Cookie Preferences
              </button>
              .
            </li>
            <li>
              Contact{" "}
              <a
                href="mailto:privacy@zishes.com"
                className="text-blue-600 hover:underline"
              >
                privacy@zishes.com
              </a>{" "}
              to exercise rights; we’ll respond within applicable legal
              timeframes.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            12) Do Not Track & Global Privacy Control
          </h2>
          <p>
            Some browsers offer “Do Not Track” and GPC signals. Industry
            standards are evolving; we endeavor to respect recognized signals in
            jurisdictions where required and will update this Policy as
            standards mature.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            13) Security
          </h2>
          <p>
            We implement technical and organizational measures to protect cookie
            data, including encryption in transit, strict access controls,
            logging, and vendor due diligence. No method is 100% secure; we
            continuously improve our safeguards.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            14) Changes to This Policy
          </h2>
          <p>
            We review this Policy regularly and update it to reflect technology,
            legal, and business changes. Material updates will be highlighted in
            the app/website. Continued use of Zishes after an update constitutes
            acceptance of the revised Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            15) Contact Us
          </h2>
          <p>
            Questions or requests can be sent to{" "}
            <a
              href="mailto:privacy@zishes.com"
              className="text-blue-600 hover:underline"
            >
              privacy@zishes.com
            </a>
            . For cookie-specific concerns, you can also reach{" "}
            <a
              href="mailto:compliance@zishes.com"
              className="text-blue-600 hover:underline"
            >
              compliance@zishes.com
            </a>
            .
          </p>

          <p className="text-sm opacity-80">
            <em>
              Effective date: [Insert Date]. Regional addenda may supplement
              this Policy to meet local legal requirements.
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

export default DataCookiePolicy;
