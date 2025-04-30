'use client';

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <p className="text-xs mb-10 max-w-xl mx-auto">
            SitenSight is a modern application built for students,
            professionals, and industry guests in the construction and education
            space.
          </p>

          <hr className="border-[#d17432] my-6" />

          <div className="flex justify-between items-center mt-10 flex-col md:flex-row gap-4">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} SitenSight. All rights reserved.
            </p>
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
                href="#"
                aria-label="Instagram"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fixed Theme Toggle button on the left */}
      <div className="fixed bottom-6 left-6 z-50">
        <ThemeToggle /> 
      </div>

      {/* Scroll to top button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#d17432] text-white p-3 rounded-full shadow-md hover:bg-[#bd5f23] transition cursor-pointer"
        aria-label="Back to top"
      >
        <FaArrowUp size={16} />
      </button>
    </div>
  );
}
