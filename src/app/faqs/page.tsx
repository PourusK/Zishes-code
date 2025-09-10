"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click on the signup button and fill in your details to create an account instantly.",
  },
  {
    question: "Can I cancel an order?",
    answer:
      "Yes, orders can be cancelled within 24 hours if they have not been shipped.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery typically takes 3-7 business days depending on your location.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, UPI, and net banking.",
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
