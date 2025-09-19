"use client";
import { useState } from "react";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {,
    question: "What is Zishes?",
    answer:"Zishes is a prize competition marketplace where sellers upload items as prizes, and players compete in quick skill-based games to win them. No luck, no lotteries — just skill.",
  },
  {,
    question: "How do I participate in a tournament?",
    answer:"Simply download the Zishes app, browse available prizes, and enter a tournament by paying the entry fee with coins. Play the skill game — the fastest valid player wins.",
  },
  {
    question: "What are “coins” on Zishes?",
    answer:"Coins are your entry tokens for competitions. You can purchase them in-app securely and use them to join tournaments.",
  },
  {
    question: "What payment methods are accepted?",
    answer:"We accept credit/debit cards, UPI, and net banking.",
  },
  {
    question: "Is Zishes legal?",
    answer:"Yes. Zishes runs skill-based competitions only, fully compliant with gaming and e-commerce regulations. In India, GST/TDS is applied where applicable, and KYC is required for withdrawals.",
  },
  {
    question: "How do sellers benefit?",
    answer:"Sellers upload a prize item, set terms, and become the Tournament Master. When the tournament ends, the seller receives the entry pool (minus transparent platform fees).",
  },
  {
    question: "Can anyone sell on Zishes?",
    answer:"Yes, but sellers must complete verification (KYC and item approval) to ensure authenticity and fair play.",
  },
  {
    question: "How do I get my money?",
    answer:"Once we complete a two factor authorization, seller uploads proof of courier/deivery and buyer confirms receipt , the tornament money is transfrred and released into the Tournament wallet which can be accessed through the wallet page",
  },
  {
    question: "What fees does Zishes charge?",
    answer:"We take a transparent 20% platform fee from the seller’s entry pool. No hidden charges, no lowballing.",
  },
  {
    question: "How do you ensure fair play?",
    answer:"Games are microsecond-timed, anti-cheat protected, and fully audited. Only skill determines the outcome.",
  },
  {
    question: "What if there’s a dispute?",
    answer:"Zishes offers 24/7 support and dispute resolution to ensure both sellers and players are protected.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-transparent shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-8 border-b pb-4">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-lg text-white">
                  {faq.question}
                </span>
                <span className="text-white text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-white text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
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

export default FAQs;
