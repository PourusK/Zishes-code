"use client";
import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Feedback",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Message sent successfully! ✅");
          setForm({ name: "", email: "", subject: "Feedback", message: "" });
          console.log("Email sent!", response.status, response.text);
        },
        (err) => {
          alert("Oops! Something went wrong. ❌");
          console.error(err);
        }
      );
  };

  return (
    <div className="relative bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-white mb-6 border-b pb-4">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-black text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-black text-white focus:outline-none"
            required
          />
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-black text-white focus:outline-none"
          >
            <option value="Feedback">Feedback</option>
            <option value="Report Issue">Report Issue</option>
            <option value="Connect with Us">Connect with Us</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-black text-white focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10">
          <Link
            href="/#footer"
            className="inline-block text-white bg-gray-600 hover:bg-gray-700 px-5 py-2.5 rounded-lg font-medium shadow-md transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
