/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://sheetdb.io/api/v1/u3wf8lpw273lk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              name: formData.name,
              email: formData.email,
              date: new Date().toISOString(),
            },
          ],
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setIsModalOpen(false);
          setFormData({ name: "", email: "" });
        }, 3000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-6 md:px-10 mt-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <div className="flex-1 basis-full md:basis-1/2 text-center md:text-left">
            <h3 className="capitalize text-2xl md:text-[35px] leading-[30px] md:leading-[50px] font-bold mb-4 md:mb-6">
              Where Curious Minds{" "}
              <span className="text-[#d17432]">Learn, Build, and Connect</span>
            </h3>
            <p className="text-[12px] md:text-[12px] font-[500] leading-[24px] md:leading-[30px]">
            Built for students, professionals, and DIY users in construction. Learn real-world skills, explore interactive lessons, and connect with a vibrant community anytime, anywhere.
            </p>
            <div className="mt-6 md:mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#d17432] text-white px-6 py-4 rounded-[36px] text-sm font-medium hover:bg-[#6b615b] transition-all cursor-pointer"
              >
               Join Waitlist
              </button>
            </div>
          </div>
          <div className="flex-1 basis-full md:basis-1/2">
            <div className="relative w-full h-0 pb-[100%]">
              <Image
                src="/images/home.png"
                alt="Hero"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            {!isSubmitted ? (
              <>
                <h3 className="text-xl font-bold text-black mb-4">
                  Get Early Access
                </h3>
                <p className="mb-4 text-xs text-black">
                  Enter your details to join the waitlist.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-xs font-medium text-black"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-xs font-medium text-black"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-[36px] hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-[#d17432] rounded-[36px] hover:bg-[#6b615b] flex items-center justify-center"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <h3 className="text-xl font-bold mb-2 text-[#d17432]">
                  Thank You!
                </h3>
                <p>
                  We've received your information. You'll hear from us soon!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
