"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const legalPolicies = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Prize Competition Guidelines", href: "/prize-competition-guidelines" },
    { name: "Fair Play Policy", href: "/fair-play-policy" },
    { name: "Tax and Compliance Guide", href: "/tax-compliance-guide" },
    { name: "Failed Delivery & Compensation Policy", href: "/failed-delivery-policy" },
    { name: "International Shipping & Customs Policy", href: "/international-shipping-policy" },
    { name: "Prohibited & Restricted Items Policy", href: "/prohibited-items-policy" },
    { name: "Refunds and Cancellation Policy", href: "/refunds-cancellation-policy" },
    { name: "Seller Agreement", href: "/seller-agreement" },
    { name: "Data and Cookie Policy", href: "/data-cookie-policy" },
    { name: "Anti Money Laundering (AML) & KYC Policy", href: "/aml-kyc-policy" },
  ];

  const supportLinks = [
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
  ];

  const [showAll, setShowAll] = useState(false);

  // On small screens show only first 5 unless toggled
  const visiblePolicies =
    typeof window !== "undefined" && window.innerWidth < 768 && !showAll
      ? legalPolicies.slice(0, 5)
      : legalPolicies;

  return (
    <footer className="z-100 text-white mt-20 px-2">
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 z-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 z-100">
          {/* Logo Section */}
          <div className="col-span-1">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="Company Logo"
                width={200}
                height={200}
                className="md:w-auto cursor-pointer relative bottom-10"
              />
            </Link>
            <p className="mt-4 text-gray-300 text-xl relative ">
              Your trusted platform for competitions and prizes. Join our community of enthusiasts!
            </p>
          </div>

          {/* Legal & Policies */}
          <div className="col-span-1 z-100 md:ml-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal & Policies</h3>
            <ul className="mt-4 space-y-2">
              {visiblePolicies.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Toggle only on mobile */}
            <div className="mt-3 md:hidden">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none"
              >
                {showAll ? "See Less" : "See More"}
              </button>
            </div>
          </div>

          {/* Support & Community */}
          <div className="col-span-1 z-100">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support & Community</h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-300">support@example.com</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
              <li className="text-gray-300">
                123 Business Ave, Suite 100
                <br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Icons */}
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 
                     4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797
                     c0-2.506 1.492-3.89 3.777-3.89 
                     1.094 0 2.238.195 2.238.195v2.46h-1.26
                     c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 
                     2.89h-2.33v6.988C18.343 21.128 
                     22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 
                     1.064.049 1.791.218 2.427.465a4.902 
                     4.902 0 011.772 1.153 4.902 4.902 
                     0 011.153 1.772c.247.636.416 
                     1.363.465 2.427.048 1.067.06 
                     1.407.06 4.123v.08c0 2.643-.012 
                     2.987-.06 4.043-.049 1.064-.218 
                     1.791-.465 2.427a4.902 4.902 
                     0 01-1.153 1.772 4.902 4.902 
                     0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08
                     c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 
                     4.902 0 01-1.772-1.153 4.902 
                     4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63
                     c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 
                     4.902 0 011.153-1.772A4.902 4.902 
                     0 015.45 2.525c.636-.247 1.363-.416 
                     2.427-.465C8.901 2.013 9.256 2 
                     11.685 2h.63z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 
                  11.675-6.253 
                  11.675-11.675 0-.178 0-.355-.012-.53A8.348 
                  8.348 0 0022 5.92a8.19 8.19 
                  0 01-2.357.646 4.118 4.118 
                  0 001.804-2.27 8.224 8.224 
                  0 01-2.605.996 4.107 4.107 
                  0 00-6.993 3.743 11.65 11.65 
                  0 01-8.457-4.287 4.106 
                  4.106 0 001.27 5.477A4.072 
                  4.072 0 012.8 9.713v.052a4.105 
                  4.105 0 003.292 4.022 4.095 
                  4.095 0 01-1.853.07 4.108 
                  4.108 0 003.834 2.85A8.233 
                  8.233 0 012 18.407a11.616 
                  11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
