"use client";

import { useEffect } from "react";
import { FaEnvelope, FaClock, FaCalendarAlt, FaTimes } from "react-icons/fa";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal = ({ isOpen, onClose }: SupportModalProps) => {
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
          aria-label="Close support modal"
        >
          <FaTimes size={24} className="hover:scale-110 transition-transform" />
        </button>

        <div className="prose dark:prose-invert max-w-none">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#c3590e] mb-4">Support</h1>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              {" "}
              <p className="text-sm leading-relaxed text-white">
                Welcome to the Sitensight Support Center. We&apos;re here to
                help you get the most out of our services. If you need
                assistance, please reach out — we&apos;re just a message away.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                Contact Us
              </h2>
              <p className="text-white text-sm">
                For support inquiries, feedback, or technical issues, contact us
                at:
              </p>
              <div className="flex flex-col space-y-3 mt-3">
                <a
                  href="mailto:support@sitensight.com"
                  className="flex items-center text-[#c3590e] hover:underline transition-colors text-sm"
                >
                  <FaEnvelope className="mr-3" />
                  support@sitensight.com
                </a>
                <div className="flex items-center text-white text-sm">
                  <FaClock className="mr-3 text-[#c3590e]" />
                  Response Time: Within 24–48 business hours
                </div>
                <div className="flex items-center text-white text-sm">
                  <FaCalendarAlt className="mr-3 text-[#c3590e]" />
                  Business Hours: Monday to Friday, 9:00 AM – 5:00 PM EST
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
