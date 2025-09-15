import Link from "next/link";

const AmlKycPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          AML & KYC Policy
        </h1>

        <div className="prose prose-lg text-white max-w-none">
          <p className="text-white">
            This Anti–Money Laundering (AML), Counter-Terrorist Financing (CTF),
            Sanctions, and Know Your Customer (KYC) Policy (“Policy”) sets out how
            Zishes (“we”, “us”, “our”) prevents the Platform from being used for
            illicit purposes. It applies to all users and sellers worldwide and
            must be read together with our Terms & Conditions, Privacy Policy,
            Prohibited & Restricted Items Policy, Seller Agreement, and Fair Play
            Policy. By using Zishes, you agree to comply with this Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            1) Purpose, Scope & Principles
          </h2>
          <ul>
            <li>
              <strong>Purpose:</strong> Detect, prevent and report money laundering,
              terrorist financing, fraud, sanctions violations, and other financial crime.
            </li>
            <li>
              <strong>Scope:</strong> All users (members), sellers, ultimate beneficial
              owners (UBOs), authorized representatives, and relevant transactions/payouts.
            </li>
            <li>
              <strong>Principles:</strong> Risk-based approach, proportionality,
              data minimization, confidentiality, regulatory cooperation, and
              continuous improvement.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) Key Definitions
          </h2>
          <ul>
            <li>
              <strong>KYC:</strong> Identifying and verifying a customer’s identity.
            </li>
            <li>
              <strong>KYB:</strong> Identifying and verifying a business, its officers,
              and UBOs (≥ 25% ownership or control, or lower threshold if required by law).
            </li>
            <li>
              <strong>EDD:</strong> Enhanced Due Diligence for higher-risk customers, geographies,
              products, or behaviors.
            </li>
            <li>
              <strong>PEP:</strong> Politically Exposed Person, including close associates and family members.
            </li>
            <li>
              <strong>SAR/STR:</strong> Suspicious Activity/Transaction Report to competent authorities
              where legally mandated.
            </li>
            <li>
              <strong>Sanctions Lists:</strong> UN, OFAC (US), HMT (UK), EU Consolidated, and local lists
              (including UAE, India) and any other applicable regime.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            3) Risk-Based Approach
          </h2>
          <p>
            We categorize risk across <em>customer</em>, <em>geographic</em>, <em>product</em>, and
            <em>behavioral</em> dimensions. Controls scale with risk:
          </p>
          <ul>
            <li>
              <strong>Customer risk:</strong> individual vs. seller; PEP; adverse media; prior violations.
            </li>
            <li>
              <strong>Geographic risk:</strong> sanctioned/embargoed countries; high-risk jurisdictions
              (per FATF or local regulators).
            </li>
            <li>
              <strong>Product risk:</strong> large payouts, cross-border shipments, high-value prizes.
            </li>
            <li>
              <strong>Behavioral risk:</strong> unusual transaction patterns, rapid cycles, third-party payments.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            4) Customer Onboarding & Verification (KYC/KYB)
          </h2>
          <p>
            We use approved identity verification partners and internal checks. Access may be limited
            until KYC/KYB is complete. We may refuse, suspend, or terminate accounts that fail verification.
          </p>
          <ul>
            <li>
              <strong>Members (Individuals):</strong> full name, date of birth, country, address,
              email/phone verification; government-issued photo ID; biometric liveness where required.
            </li>
            <li>
              <strong>Sellers (Individuals):</strong> all the above plus proof of address, tax ID where applicable.
            </li>
            <li>
              <strong>Businesses (KYB):</strong> legal name, registration number, incorporation documents,
              registered address, directors; identification of UBOs (≥ 25% or lower if required),
              KYC on UBOs/signatories; local tax/VAT/GST numbers; trade licenses where applicable.
            </li>
            <li>
              <strong>Sanctions & PEP screening:</strong> at onboarding and periodically thereafter;
              adverse media checks for higher-risk profiles.
            </li>
          </ul>
          <p>
            <strong>Timelines:</strong> Standard KYC is typically completed within 24–72 hours; EDD may
            require additional time. Access to payouts and high-value prize listings is restricted until
            verification is complete.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            5) Enhanced Due Diligence (EDD)
          </h2>
          <p>EDD is triggered by any of the following (non-exhaustive):</p>
          <ul>
            <li>PEP matches or adverse media related to financial crime.</li>
            <li>High-risk jurisdictions or cross-border flows with opaque rationale.</li>
            <li>Unusual activity (rapid funding, high velocity of prize wins, circular flows).</li>
            <li>Inconsistent source of funds (SoF) or source of wealth (SoW).</li>
          </ul>
          <p>
            <strong>EDD Measures:</strong> additional documentary evidence (bank statements, invoices,
            SoF/SoW declaration), independent verification, tighter limits, manual approval for payouts,
            and more frequent monitoring.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) Source of Funds / Source of Wealth
          </h2>
          <p>
            We may request evidence of the origin of funds and overall wealth where risk indicates.
            Acceptable documents include recent bank statements, pay slips, sale contracts, audited accounts,
            tax returns, or other credible documentation linking funds to legitimate activities.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) Ongoing Monitoring & Transaction Controls
          </h2>
          <p>We employ automated and manual monitoring. Examples of red flags include:</p>
          <ul>
            <li>Multiple accounts controlled by the same person or device fingerprint.</li>
            <li>Use of VPN/proxies to obfuscate location, especially from restricted regions.</li>
            <li>Frequent payment failures, chargebacks, or identity mismatch.</li>
            <li>Rapid accumulation or unusual spending patterns unrelated to normal platform use.</li>
            <li>Attempts to convert Zish Credits into cash or off-platform value.</li>
          </ul>
          <p>
            <strong>Thresholds & Limits (illustrative, jurisdiction-dependent):</strong> we may apply daily/monthly
            participation caps, payout review thresholds (e.g., AED 10,000 / ₹200,000 / £2,500 equivalents),
            and cumulative risk scoring to trigger EDD or freezes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) Sanctions, PEP & Adverse Media Screening
          </h2>
          <ul>
            <li>
              We screen customers, UBOs, counterparties, and (where relevant) payees against
              <em> UN, OFAC, HMT (UK), EU</em> and applicable local lists (e.g., UAE, India).
            </li>
            <li>
              Positive/possible matches lead to denial, suspension, or EDD as legally required.
            </li>
            <li>
              We also use adverse media checks to identify financial-crime exposure.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            9) Geographic Restrictions & Prohibited Use
          </h2>
          <ul>
            <li>No access from sanctioned/embargoed countries or to sanctioned persons/entities.</li>
            <li>No use for illegal activity, third-party payments, or cash-like withdrawals.</li>
            <li>
              We may geoblock categories or features based on local law (see Prohibited & Restricted Items Policy).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            10) Account Freezes, Holds & Termination
          </h2>
          <p>
            We may place temporary holds, suspend features, or terminate accounts if we suspect
            policy breaches, identity fraud, sanctions concerns, or financial crime risk. We may also
            withhold payouts while investigations are ongoing and reverse allocations obtained through
            fraud or chargeback abuse.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            11) Reporting Suspicious Activity (SAR/STR)
          </h2>
          <p>
            Where required by law, we will file SAR/STR with competent authorities in relevant jurisdictions
            based on risk, location of the entity, and activity patterns. We are generally prohibited from
            “tipping off” users about such reports. Cooperation with lawful requests (e.g., subpoenas, court
            orders) is provided as required.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            12) Recordkeeping & Retention
          </h2>
          <ul>
            <li>
              KYC/KYB, transactional, and monitoring records are retained for at least{" "}
              <strong>5 years</strong> from the end of the relationship or longer if required by law.
            </li>
            <li>
              Records include identity data, verification results, screening logs, risk assessments,
              transaction histories, and any SAR/STR filings (where allowed).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            13) Data Protection & Security
          </h2>
          <ul>
            <li>
              KYC/KYB data is stored securely with access restricted to authorized personnel
              on a need-to-know basis.
            </li>
            <li>
              We use encryption in transit, secure key management, vendor due diligence, and
              breach response procedures.
            </li>
            <li>
              See our Privacy Policy and Data & Cookie Policy for details on processing, lawful bases,
              international transfers, and user rights.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            14) Third-Party Vendors & Outsourcing
          </h2>
          <p>
            We may use reputable third-party providers for identity verification, sanctions/PEP screening,
            device intelligence, fraud prevention, payments, and analytics. Vendors are subject to due diligence,
            data-processing agreements, and ongoing oversight. We remain responsible for compliance outcomes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            15) Organization, Roles & Training
          </h2>
          <ul>
            <li>
              <strong>Compliance Lead / MLRO:</strong> Oversees AML/CTF program, approves EDD decisions,
              manages SAR/STR filings where required, and liaises with regulators/law enforcement.
            </li>
            <li>
              <strong>Operations & Support:</strong> Frontline controls; escalate red flags promptly.
            </li>
            <li>
              <strong>Engineering & Data:</strong> Maintain monitoring systems, alerting, logging, and secure storage.
            </li>
            <li>
              <strong>Training:</strong> Mandatory annual AML/CTF training; role-based refreshers;
              updates following regulatory changes or audit findings.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            16) Audits, Quality Assurance & Continuous Improvement
          </h2>
          <ul>
            <li>Periodic internal QA and independent audits of AML controls.</li>
            <li>Model and rule tuning for monitoring effectiveness; false-positive reduction.</li>
            <li>Remediation plans for identified gaps, tracked to closure.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            17) Consequences of Non-Compliance & False Representation
          </h2>
          <ul>
            <li>
              Providing false or misleading information during KYC/KYB, SoF/SoW, or at any point may lead to
              immediate suspension or termination, forfeiture of benefits, withholding of payouts, recovery of
              losses, and notification to competent authorities.
            </li>
            <li>
              Sellers listing counterfeit or misrepresented items face penalties set out in the Seller Agreement.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            18) Jurisdictional Notes (Illustrative, Not Exhaustive)
          </h2>
          <ul>
            <li>
              <strong>UAE:</strong> Compliance with applicable UAE AML/CTF laws and Central Bank guidance.
              VAT (5%) and corporate tax rules apply to eligible entities. We may file reports via the
              competent UAE FIU systems where required by law.
            </li>
            <li>
              <strong>India:</strong> Compliance with applicable AML/CTF requirements. Real-money gaming taxes
              do not apply to Zishes’ <em>membership</em> model; however, AML screening and suspicious activity
              reporting obligations are observed where applicable.
            </li>
            <li>
              <strong>UK/EU:</strong> Compliance with UK Money Laundering Regulations and EU AMLDs as applicable,
              including sanctions (HMT/EU) and data protection (UK GDPR/GDPR).
            </li>
          </ul>
          <p>
            We reserve the right to apply more stringent controls than the local minimum where our risk assessment
            indicates heightened exposure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            19) Member & Seller Responsibilities
          </h2>
          <ul>
            <li>Provide accurate, current information and promptly update changes (name, address, ownership).</li>
            <li>Respond to KYC/KYB or EDD requests in a timely manner; failure may result in restrictions or closure.</li>
            <li>Use your own payment methods; third-party payments are prohibited unless expressly approved.</li>
            <li>
              Do not attempt to circumvent geoblocks, sanctions, or this Policy. Report suspected abuse to{" "}
              <a href="mailto:compliance@zishes.com" className="text-blue-600 hover:underline">
                compliance@zishes.com
              </a>.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            20) Policy Governance, Updates & Contact
          </h2>
          <p>
            We review this Policy at least annually and after material regulatory or business changes.
            We may update it without prior notice; material updates will be highlighted on our site/app.
            Questions or requests relating to this Policy can be sent to{" "}
            <a href="mailto:compliance@zishes.com" className="text-blue-600 hover:underline">
              compliance@zishes.com
            </a>.
          </p>

          <p className="text-sm opacity-80">
            <em>
              Effective date: [Insert Date]. This Policy is a global framework and may be supplemented by
              jurisdiction-specific addenda where required by local law.
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

export default AmlKycPolicy;
