"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto px-6 md:px-10 mt-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          {/* Text Content */}
          <div className="flex-1 basis-full md:basis-1/2 text-center md:text-left">
            <h3 className="capitalize text-2xl md:text-[35px] leading-[30px] md:leading-[50px] font-bold mb-4 md:mb-6">
              Where Curious Minds{" "}
              <span className="text-[#c3590e]">Learn, Build, and Connect</span>
            </h3>
            <p className="text-sm font-[500] md:text-[14px]">
              Built for students, professionals, and DIY enthusiasts in construction.
              Learn real-world skills, explore interactive lessons, and connect
              with a vibrant community anytime, anywhere.
            </p>
            <p className="text-sm font-[600] text-[#c3590e] mt-3">
              Available on iOS & Android
            </p>
            <div className="mt-6 md:mt-10">
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                <a
                  href="https://apps.apple.com/us/app/sitensight/id6746155576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sitensight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/images/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Image Container - Fixed for mobile */}
          <div className="flex-1 basis-full md:basis-1/2 w-full">
            <div className="relative w-full h-[300px] md:h-auto md:aspect-square">
              <Image
                src="/images/homee.png"
                alt="Hero"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
