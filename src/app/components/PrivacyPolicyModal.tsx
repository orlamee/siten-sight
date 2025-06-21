/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect } from "react";
import { FaEnvelope, FaGlobe, FaTimes } from "react-icons/fa";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-start p-4 overflow-y-auto">
      <div className="relative bg-gray-800 w-full max-w-4xl mx-auto my-8 p-8 rounded-2xl shadow-2xl border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white dark:hover:text-white transition-colors duration-200 cursor-pointer"
          aria-label="Close privacy policy"
        >
          <FaTimes size={24} className="hover:scale-110 transition-transform" />
        </button>

        <div className="prose dark:prose-invert max-w-none">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#c3590e] mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-white">Effective Date: June 19, 2025</p>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <p className="text-sm leading-relaxed text-white">
                Sitensight ("we", "our", or "us") values your privacy. This
                Privacy Policy explains how we collect, use, and protect your
                information when you visit our website
                https://www.sitensight.com (the "Site").
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                Information We Collect
              </h2>
              <p className="text-white text-sm">
                We may collect the following types of personal information:
              </p>
              <ul className="space-y-3 pl-5 list-disc marker:text-[#c3590e] text-xs text-white">
                <li className="pl-2">
                  <strong className="text-white">Contact Information:</strong>{" "}
                  such as your name and email address when you submit forms or
                  contact us.
                </li>
                <li className="pl-2">
                  <strong className="text-white">Usage Data:</strong> such as IP
                  address, browser type, device info, and pages visited via
                  analytics tools (e.g., Google Analytics).
                </li>
                <li className="pl-2">
                  <strong className="text-white">Cookies:</strong> small data
                  files used to enhance your experience and understand usage
                  patterns.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                How We Use Your Information
              </h2>
              <p className="text-white text-sm">
                We use the information we collect to:
              </p>
              <ul className="space-y-3 pl-5 list-disc marker:text-[#c3590e] text-xs text-white">
                <li className="pl-2">Respond to your inquiries or requests</li>
                <li className="pl-2">
                  Send updates, newsletters, or promotional materials (if you
                  opt in)
                </li>
                <li className="pl-2">Improve our website and services</li>
                <li className="pl-2">
                  Analyze website traffic and usage patterns
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                Sharing Your Information
              </h2>
              <p className="text-white text-sm">
                We do not sell or rent your personal information. We may share
                it with:
              </p>
              <ul className="space-y-3 pl-5 list-disc marker:text-[#c3590e] text-xs text-white">
                <li className="pl-2">
                  <strong className="text-white">Service providers:</strong>{" "}
                  like web hosting platforms or analytics providers
                </li>
                <li className="pl-2">
                  <strong className="text-white">Legal authorities:</strong> if
                  required to comply with applicable laws, regulations, or legal
                  processes
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-white text-sm">We may use cookies to:</p>
              <ul className="space-y-3 pl-5 list-disc marker:text-[#c3590e] text-xs text-white">
                <li className="pl-2">Remember your preferences</li>
                <li className="pl-2">
                  Analyze traffic to improve user experience
                </li>
              </ul>
              <p className="text-white text-sm">
                You can disable cookies via your browser settings, but doing so
                may affect the functionality of the Site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                Data Security
              </h2>
              <p className="text-white text-sm">
                We implement industry-standard security measures to protect your
                data from unauthorized access, disclosure, or misuse. However,
                no method of transmission over the internet is 100% secure. We
                cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                Your Rights
              </h2>
              <p className="text-white text-sm">
                Depending on your location, you may have rights to:
              </p>
              <ul className="space-y-3 pl-5 list-disc marker:text-[#c3590e] text-xs text-white">
                <li className="pl-2">
                  Access the personal information we hold about you
                </li>
                <li className="pl-2">Request corrections or deletion</li>
                <li className="pl-2">Opt out of marketing communications</li>
              </ul>
              <p className="text-white">
                To exercise these rights, contact us at support@sitensight.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                Third-Party Links
              </h2>
              <p className="text-white text-sm">
                Our website may contain links to third-party websites. We are
                not responsible for their privacy practices. Please review their
                policies before sharing any personal data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                Updates to This Policy
              </h2>
              <p className="text-white text-sm">
                We may update this Privacy Policy periodically. The revised
                version will be posted on this page with a new effective date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                Contact Us
              </h2>
              <p className="text-white text-sm">
                If you have questions about this policy or your data, please
                contact us:
              </p>
              <div className="flex flex-col space-y-3 mt-3 text-sm">
                <a
                  href="mailto:support@sitensight.com"
                  className="flex items-center text-[#c3590e] hover:underline transition-colors"
                >
                  <FaEnvelope className="mr-3" />
                  support@sitensight.com
                </a>
                <a
                  href="https://www.sitensight.com"
                  className="flex items-center text-[#c3590e] hover:underline transition-colors"
                >
                  <FaGlobe className="mr-3" />
                  https://www.sitensight.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
