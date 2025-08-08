'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import SupportModal from './SupportModal';

export default function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(true);
  };

  const closePrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(false);
  };

  const openSupport = () => {
    setIsSupportOpen(true);
  };

  const closeSupport = () => {
    setIsSupportOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        <div className="p-20 rounded-4xl text-center shadow-2xl">
          <Image
            src="/images/ss.png"
            alt="Business Thrve"
            width={150}
            height={50}
            className="mx-auto mb-4"
          />
          <p className="text-xs mb-10 max-w-xl mx-auto font-[500]">
            SiteNsight is a modern application built for students,
            professionals, and industry guests in the construction and education
            space.
          </p>

          <hr className="border-[#c3590e] my-6" />          <div className="flex justify-between items-center mt-10 flex-col md:flex-row gap-4">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} SiteNsight. All rights reserved.
            </p>
            
            {/* Footer Links */}
            <div className="flex gap-4">
              {/* Privacy Policy Link */}
              <button
                onClick={openPrivacyPolicy}
                className="text-xs text-[#c3590e] hover:text-[#bd5f23] hover:underline transition cursor-pointer"
                aria-label="View Privacy Policy"
              >
                Privacy Policy
              </button>
              
              {/* Support Link */}
              <button
                onClick={openSupport}
                className="text-xs text-[#c3590e] hover:text-[#bd5f23] hover:underline transition cursor-pointer"
                aria-label="View Support Information"
              >
                Support
              </button>
              
              {/* Delete Account Link */}
              <Link
                href="/delete-account"
                className="text-xs text-[#c3590e] hover:text-[#bd5f23] hover:underline transition cursor-pointer"
                aria-label="Delete Account Instructions"
              >
                Delete Account
              </Link>
            </div>
            
            <div className="flex gap-4 text-white">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://www.instagram.com/sitensight_?igsh=MXI0dzRiM2ZyZzdzeA=="
                aria-label="Instagram"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/sitensight/"
                aria-label="LinkedIn"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal isOpen={isPrivacyPolicyOpen} onClose={closePrivacyPolicy} />
      
      {/* Support Modal */}
      <SupportModal isOpen={isSupportOpen} onClose={closeSupport} />
      
      {/* Fixed Theme Toggle button on the left */}
      <div className="fixed bottom-6 left-6 z-50">
        <ThemeToggle /> 
      </div>

      {/* Scroll to top button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#c3590e] text-white p-3 rounded-full shadow-md hover:bg-[#bd5f23] transition cursor-pointer"
        aria-label="Back to top"
      >
        <FaArrowUp size={16} />
      </button>
    </div>
  );
}
