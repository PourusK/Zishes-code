"use client";
import Link from "next/link";

const ProhibitedItemsPolicy = () => {
  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Prohibited &amp; Restricted Items Policy
        </h1>

        <div className="prose prose-lg text-white max-w-none">
          <p>
            To protect users, comply with law, and maintain the integrity of our
            platform, the following categories of goods and services may not be
            listed, sold, or offered as prizes on Zishes. Attempting to list or
            distribute these items will result in removal, forfeiture of funds,
            penalties, and possible referral to authorities.
          </p>

          {/* Weapons */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">1) Weapons &amp; Ammunition</h2>
          <ul>
            <li>Firearms, ammunition, silencers, tasers, explosives.</li>
            <li>Switchblades, martial arts weapons, disguised or undetectable knives.</li>
            <li>Military-grade equipment not lawfully available to civilians.</li>
          </ul>

          {/* Pyrotechnics & Hazardous Materials */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            2) Pyrotechnics &amp; Hazardous Materials
          </h2>
          <ul>
            <li>Fireworks, gunpowder, flares.</li>
            <li>Toxic, flammable, radioactive, or explosive substances.</li>
            <li>Chemical and industrial solvents restricted by law.</li>
          </ul>

          {/* Drugs & Controlled Substances */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">3) Drugs &amp; Paraphernalia</h2>
          <ul>
            <li>Illegal drugs, psychoactive substances, plant-based highs (salvia, magic mushrooms).</li>
            <li>Prescription drugs, anabolic steroids, veterinary drugs without authorization.</li>
            <li>Drug paraphernalia: bongs, pipes, injection kits, test-masking products.</li>
          </ul>

          {/* Pornography & Adult Services */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">4) Pornography &amp; Adult Services</h2>
          <ul>
            <li>Pornographic content involving minors (strictly illegal).</li>
            <li>Escort or dating services, prostitution-related content.</li>
            <li>Obscene material violating local obscenity laws.</li>
          </ul>

          {/* Gambling & E-money */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">5) Gambling &amp; Financial Products</h2>
          <ul>
            <li>Lotteries, sports betting, unlicensed gambling.</li>
            <li>E-money cards, unlicensed payment instruments, crowdfunding securities.</li>
            <li>Cryptocurrencies, NFTs, or tokens marketed as investments.</li>
          </ul>

          {/* Endangered Animals & Products */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            6) Animals, Wildlife &amp; Endangered Products
          </h2>
          <ul>
            <li>Live animals or animal parts (fur, ivory, rhino horn, tiger bone, shark fins).</li>
            <li>Endangered plants/seeds covered by CITES conventions.</li>
            <li>Animal blood, fluids, or toxic weeds.</li>
          </ul>

          {/* Counterfeits & Intellectual Property */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            7) Counterfeits &amp; Intellectual Property
          </h2>
          <ul>
            <li>Fake designer goods, counterfeit luxury items, imitation watches.</li>
            <li>Unlicensed copies of music, movies, books, games, or software.</li>
            <li>Unverified celebrity autographs or memorabilia.</li>
          </ul>

          {/* Hacking, Cracking & Illegal Telecoms */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            8) Hacking, Cracking &amp; Illegal Telecoms
          </h2>
          <ul>
            <li>Manuals, exploits, malware, phishing kits, hacking guides.</li>
            <li>Black boxes, card skimmers, SIM unlock tools, signal jammers.</li>
            <li>Illegal satellite/cable descramblers or interception devices.</li>
          </ul>

          {/* Human Parts & Sensitive Materials */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            9) Human Parts &amp; Sensitive Materials
          </h2>
          <ul>
            <li>Organs, embryos, stem cells, body fluids.</li>
            <li>Government IDs, passports, licenses, or official uniforms.</li>
            <li>Diplomas, academic papers, or cheating services.</li>
          </ul>

          {/* Cultural, Financial & Other Prohibited Goods */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            10) Cultural, Financial &amp; Miscellaneous
          </h2>
          <ul>
            <li>Artefacts, tomb items, or speleothems protected by law.</li>
            <li>Ponzi schemes, MLM, or wealth-creation scams.</li>
            <li>Offensive goods promoting hate, violence, or terrorism.</li>
            <li>Miracle cures, unproven health treatments, or fraudulent devices.</li>
            <li>Stolen goods, contraband, or products without proof of ownership.</li>
          </ul>

          <p className="mt-6">
            <strong>Important:</strong> This list is non-exhaustive. Zishes may
            remove or restrict any item deemed unsafe, unlawful, offensive, or
            damaging to the integrity of our platform, even if not explicitly
            listed here.
          </p>

          {/* Reporting */}
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">Reporting Policy Breaches</h2>
          <p>
            If you see a competition violating these rules, please report it
            immediately using the in-app “Report” button or email{" "}
            <a
              href="mailto:report@zishes.com"
              className="text-blue-600 hover:underline"
            >
              report@zishes.com
            </a>
            . Competitions breaching this Policy will be removed, and entrants
            will have entries refunded to their Zish Coin accounts where
            appropriate.
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

export default ProhibitedItemsPolicy;
