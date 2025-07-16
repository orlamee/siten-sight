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
            <div className="mt-6 md:mt-10">
              <a
                href="https://apps.apple.com/us/app/sitensight/id6746155576"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c3590e] text-white px-6 py-4 rounded-[36px] text-sm font-medium hover:bg-[#6b615b] transition-all cursor-pointer"
              >
                Try Now
              </a>
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
