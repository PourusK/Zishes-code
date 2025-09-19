"use client";
import Link from "next/link";

const FairPlayPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Fair Play Policy
        </h1>

        <div className="prose prose-lg text-white max-w-none">
          <p>
            Zishes exists for fair, skill-based competitions. This Fair Play Policy
            (“Policy”) sets the standards that keep competitions honest and enjoyable
            for everyone. It applies to all members and sellers, and must be read
            together with our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            ,{" "}
            <Link href="/prize-guidelines" className="text-blue-600 hover:underline">
              Prize Competition Guidelines
            </Link>
            ,{" "}
            <Link href="/prohibited-items" className="text-blue-600 hover:underline">
              Prohibited &amp; Restricted Items Policy
            </Link>
            , and{" "}
            <Link href="/aml-kyc" className="text-blue-600 hover:underline">
              AML &amp; KYC Policy
            </Link>
            .
          </p>

          {/* 1. Purpose & Scope */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            1) Purpose &amp; Scope
          </h2>
          <ul>
            <li>
              Ensure all competitions are won by skill, not chance or manipulation.
            </li>
            <li>
              Protect the integrity of leaderboards, gameplay, and prize outcomes.
            </li>
            <li>
              Apply clear, consistent rules and consequences to everyone.
            </li>
          </ul>

          {/* 2. Core Principles */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) Core Principles
          </h2>
          <ul>
            <li><strong>Skill over chance:</strong> outcomes reflect player performance.</li>
            <li><strong>Equal footing:</strong> no unfair advantages from tools, exploits, or inside info.</li>
            <li><strong>Transparency:</strong> scoring rules and tie-breakers are published in each listing.</li>
            <li><strong>Accountability:</strong> violations result in proportionate penalties.</li>
          </ul>

          {/* 3. Definitions */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">3) Definitions</h2>
          <ul>
            <li>
              <strong>Automation:</strong> bots, scripts, macros, or hardware/software that plays or assists
              play beyond normal human capability.
            </li>
            <li>
              <strong>Exploit:</strong> use of bugs/errors, latency manipulation, or unintended mechanics to gain advantage.
            </li>
            <li>
              <strong>Collusion:</strong> coordinated behavior between accounts to manipulate outcomes (feeding wins,
              sharing answers, score boosting).
            </li>
            <li>
              <strong>Multi-accounting:</strong> controlling multiple accounts to gain additional entries or influence results.
            </li>
          </ul>

          {/* 4. Eligibility & Account Integrity */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            4) Eligibility &amp; Account Integrity
          </h2>
          <ul>
            <li>You must be 18+ (or local age of majority) and pass any required KYC checks.</li>
            <li>You may maintain <strong>one</strong> account per person. Account sharing is prohibited.</li>
            <li>Using third-party payment methods or identities without authorization is prohibited.</li>
          </ul>

          {/* 5. Gameplay Integrity – What’s Prohibited */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            5) Gameplay Integrity — Prohibited Conduct
          </h2>
          <ul>
            <li>
              <strong>Automation &amp; Assisted Play:</strong> bots, scripts, macros, auto-clickers, computer vision,
              or any tool that automates inputs or decision-making.
            </li>
            <li>
              <strong>Reverse Engineering &amp; Tampering:</strong> decompiling, injecting code, modifying clients,
              intercepting traffic, or altering local storage to influence results.
            </li>
            <li>
              <strong>Exploits &amp; Glitches:</strong> abusing bugs, desync, or latency to produce impossible scores;
              intentionally causing crashes or desyncs to void others’ scores.
            </li>
            <li>
              <strong>Data Leaks/Inside Info:</strong> obtaining unreleased content, seeds, or solutions to gain advantage.
            </li>
            <li>
              <strong>Collusion:</strong> sharing answers/solutions, timing plays to feed wins, or manipulating matchups.
            </li>
            <li>
              <strong>Multi-accounting:</strong> creating/controlling multiple accounts; proxy accounts; “smurfing”.
            </li>
            <li>
              <strong>Harassment &amp; Abuse:</strong> threats, hate speech, doxxing, or targeted bullying of other users or staff.
            </li>
            <li>
              <strong>Device/Network Spoofing:</strong> masking true location to bypass regional limits or eligibility.
            </li>
          </ul>

          {/* 6. Anti-Cheat & Monitoring (What We Do) */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) Anti-Cheat &amp; Monitoring (What We Do)
          </h2>
          <p className="opacity-90">
            We use a combination of server-side checks, telemetry, device signals, behavioral analytics,
            anomaly detection, and manual reviews. Examples:
          </p>
          <ul>
            <li>Input timing analysis (human vs. automated patterns), impossible action sequences.</li>
            <li>Device fingerprinting, IP/ASN checks, VPN/proxy/Tor detection where permitted by law.</li>
            <li>Score distribution analysis, repeatability checks, replay/seed verification.</li>
            <li>Duplicate identity or payment artifact detection, chargeback correlation.</li>
            <li>Manual audits of top leaderboard entries before confirming winners for high-value prizes.</li>
          </ul>
          <p className="text-sm opacity-80">
            <em>
              Anti-cheat processing respects applicable privacy laws. See our Privacy and AML &amp; KYC Policies
              for lawful bases, data minimization, and retention.
            </em>
          </p>

          {/* 7. Leaderboards, Ties & Voids */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) Leaderboards, Ties &amp; Voids
          </h2>
          <ul>
            <li>Each competition discloses its scoring rules and tie-breakers (e.g., fastest time first).</li>
            <li>
              We may temporarily withhold finalization of results to complete anti-cheat verification for
              top positions and suspicious entries.
            </li>
            <li>
              We may void or adjust scores affected by exploits, service outages, or verified integrity issues.
              Credited entries may be returned where fair.
            </li>
          </ul>

          {/* 8. Evidence & Investigations */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) Evidence &amp; Investigations
          </h2>
          <ul>
            <li>
              We may request proof such as screen recordings, raw input videos, device screenshots, or live
              verification sessions for contested top scores.
            </li>
            <li>
              Failure to provide requested evidence in the stated window may lead to disqualification.
            </li>
            <li>
              Providing falsified evidence results in immediate disqualification and potential account bans.
            </li>
          </ul>

          {/* 9. Penalties (Ladder) */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">9) Penalties</h2>
          <ol>
            <li>
              <strong>Score removal / warning</strong> for minor/first-time issues where intent is unclear.
            </li>
            <li>
              <strong>Entry rollback</strong> (credits returned or voided) and temporary feature restrictions.
            </li>
            <li>
              <strong>Disqualification from competition</strong> and forfeiture of any prize position.
            </li>
            <li>
              <strong>Account suspension</strong> (time-limited) and loss of leaderboard eligibility.
            </li>
            <li>
              <strong>Permanent ban</strong> for egregious cheating, multi-accounting rings, or repeated abuse.
            </li>
            <li>
              <strong>Payout holds/withholding</strong> and recovery of damages for fraud or counterfeit prizes (sellers).
            </li>
          </ol>

          {/* 10. Appeals Process */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">10) Appeals</h2>
          <ul>
            <li>
              You may appeal within <strong>7 days</strong> of notification by contacting{" "}
              <a href="mailto:fairplay@zishes.com" className="text-blue-600 hover:underline">
                fairplay@zishes.com
              </a>{" "}
              with evidence (e.g., unedited screen recording showing inputs and timer/seed).
            </li>
            <li>
              Appeals are reviewed by an independent reviewer where feasible. Decisions are final.
            </li>
          </ul>

          {/* 11. Third-Party Tools & Environment Rules */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            11) Third-Party Tools &amp; Environment
          </h2>
          <ul>
            <li>
              Performance overlays and accessibility tools that <em>do not</em> automate inputs are generally allowed.
            </li>
            <li>
              Debuggers, memory editors, packet injectors, or overlays that alter game logic are prohibited.
            </li>
            <li>
              Excessive network manipulation (e.g., throttling to create lag advantages) is prohibited.
            </li>
          </ul>

          {/* 12. Collusion & Information Sharing */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            12) Collusion &amp; Information Sharing
          </h2>
          <ul>
            <li>
              Sharing answers/solutions during an active competition is prohibited where it confers unfair advantage.
            </li>
            <li>
              Coordinated entry timing, score feeding, or prize splitting agreements are prohibited.
            </li>
          </ul>

          {/* 13. Multi-Accounting & Device Limits */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            13) Multi-Accounting &amp; Device Limits
          </h2>
          <ul>
            <li>Only one account per person; creating or controlling additional accounts is prohibited.</li>
            <li>
              We may enforce device- or payment-instrument limits, and block clusters exhibiting common
              control signals.
            </li>
          </ul>

          {/* 14. Seller Integrity (Listings & Prizes) */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            14) Seller Integrity (Listings &amp; Prizes)
          </h2>
          <ul>
            <li>
              Sellers must not manipulate competitions (e.g., enter to influence outcomes, leak seeds, or
              selectively assist entrants).
            </li>
            <li>
              Counterfeits or misrepresentation trigger penalties under the{" "}
              <Link href="/seller-agreement" className="text-blue-600 hover:underline">
                Seller Agreement
              </Link>
              .
            </li>
          </ul>

          {/* 15. Privacy & Data in Anti-Cheat */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            15) Privacy &amp; Data in Anti-Cheat
          </h2>
          <p>
            Anti-cheat data is processed under legitimate interests and/or contractual necessity, with
            appropriate safeguards. We minimize data, restrict access, and retain only as long as needed
            for investigations and legal requirements. See our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/data-cookie" className="text-blue-600 hover:underline">
              Data &amp; Cookie Policy
            </Link>
            .
          </p>

          {/* 16. Regional & Legal Notes */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">16) Regional &amp; Legal Notes</h2>
          <ul>
            <li>
              We may apply stricter measures for high-value prizes or in jurisdictions with specific
              integrity requirements.
            </li>
            <li>
              Anti-cheat measures are adapted to local law (e.g., privacy, consumer, and platform rules).
            </li>
          </ul>

          {/* 17. Changes to This Policy */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            17) Changes to This Policy
          </h2>
          <p>
            We may update this Policy to reflect new threats, features, and laws. Material changes will be
            highlighted in-app or on our website. Continued use after an update constitutes acceptance.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">Contact</h2>
          <p>
            Report suspected cheating via the in-app report tools or email{" "}
            <a href="mailto:fairplay@zishes.com" className="text-blue-600 hover:underline">
              fairplay@zishes.com
            </a>
            . General questions:{" "}
            <a href="mailto:support@zishes.com" className="text-blue-600 hover:underline">
              support@zishes.com
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

export default FairPlayPolicy;
