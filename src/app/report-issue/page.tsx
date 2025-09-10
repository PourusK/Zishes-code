"use client";
import { useState } from "react";
import Link from "next/link";

const ReportIssue = () => {
  const [form, setForm] = useState({ name: "", email: "", issue: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Issue reported successfully! ✅");
    setForm({ name: "", email: "", issue: "" });
  };

  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Report an Issue
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none"
          />
          <textarea
            name="issue"
            value={form.issue}
            onChange={handleChange}
            placeholder="Describe your issue..."
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
          >
            Submit
          </button>
        </form>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block text-white bg-gray-600 hover:bg-gray-700 px-5 py-2.5 rounded-lg font-medium shadow-md transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
