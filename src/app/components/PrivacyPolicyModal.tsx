/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect } from "react";
import { FaGlobe, FaTimes, FaMapMarkerAlt } from "react-icons/fa";

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
            <p className="text-sm text-white">Effective Date: 06/20/2025</p>
            <p className="text-sm text-white">Last Updated: 06/20/2025</p>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <p className="text-sm leading-relaxed text-white">
                SiteNsight ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the SiteNsight mobile application and website (collectively, the "App"). Please read this policy carefully to understand our views and practices regarding your personal data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                1. Information We Collect
              </h2>
              <p className="text-white text-sm">
                We may collect the following types of data:
              </p>
              
              <h3 className="text-lg font-semibold text-[#c3590e] mt-4">a. Personal Information</h3>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">Name</li>
                <li className="pl-2">Email address</li>
                <li className="pl-2">Phone number</li>
                <li className="pl-2">Company name (optional)</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#c3590e] mt-4">b. Non-Personal Information</h3>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">App usage statistics</li>
                <li className="pl-2">Device information (e.g., operating system, model)</li>
                <li className="pl-2">Location data (only if you allow access)</li>
                <li className="pl-2">Cookies and analytics data (if using web version)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                2. How We Use Your Information
              </h2>
              <p className="text-white text-sm">
                We use your information to:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">Operate and maintain the SiteNsight platform</li>
                <li className="pl-2">Provide user support and respond to inquiries</li>
                <li className="pl-2">Improve app functionality and user experience</li>
                <li className="pl-2">Send updates, alerts, or promotional materials (you can opt out)</li>
                <li className="pl-2">Enforce terms, prevent fraud, and comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                3. Sharing Your Information
              </h2>
              <p className="text-white text-sm">
                We do not sell or rent your personal information. We may share your data with:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">Service providers and partners who support app functionality (e.g., hosting, analytics)</li>
                <li className="pl-2">Law enforcement or government agencies when required by law</li>
                <li className="pl-2">In the event of a business transfer or merger</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                4. Data Retention
              </h2>
              <p className="text-white text-sm">
                We retain your information as long as your account is active or as needed to provide services. You may request deletion at any time by contacting us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                5. Security
              </h2>
              <p className="text-white text-sm">
                We use industry-standard safeguards to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                6. Your Rights and Choices
              </h2>
              <p className="text-white text-sm">You may:</p>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">Access or update your personal information</li>
                <li className="pl-2">Request deletion of your account</li>
                <li className="pl-2">Opt out of marketing communications</li>
                <li className="pl-2">Request a copy of your data</li>
              </ul>
              <p className="text-white text-sm mt-3">
                Please contact us at [Insert your support email] for any of these requests.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                7. Children's Privacy
              </h2>
              <p className="text-white text-sm">
                SiteNsight is not intended for children under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                8. Third-Party Links
              </h2>
              <p className="text-white text-sm">
                Our app may contain links to external websites or services not controlled by us. We are not responsible for their privacy practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-white text-sm">
                We may update this policy from time to time. If we make significant changes, we will notify you through the app or via email.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                10. Contact Us
              </h2>
              <p className="text-white text-sm">
                For any questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 text-sm text-white">
                <p className="font-semibold text-[#c3590e] mb-2">SiteNsight</p>
                <div className="flex flex-col space-y-2">
                  <a
                    href="https://www.sitensight.com"
                    className="flex items-center text-[#c3590e] hover:underline transition-colors"
                  >
                    <FaGlobe className="mr-3" />
                    https://www.sitensight.com
                  </a>
                  <div className="flex items-center text-white">
                    <FaMapMarkerAlt className="mr-3 text-[#c3590e]" />
                    Maryland, United States
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
