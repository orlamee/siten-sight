import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto px-6 md:px-10 mt-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <div className="flex-1 basis-full md:basis-1/2 text-center md:text-left">
            <h3 className="capitalize text-2xl md:text-[35px] leading-[30px] md:leading-[50px] font-bold mb-4 md:mb-6">
              Your Hub for Construction{" "}
              <span className="text-[#d17432]">Learning and Collaboration</span>
            </h3>
            <p className="text-[#333] text-[12px] md:text-[12px] font-[500] leading-[24px] md:leading-[30px]">
              SitenSight is a modern application built for students,
              professionals, and industry guests in the construction and
              education space. The app provides access to curated knowledge,
              structured learning modules, a collaborative community forum, and
              progress tracking through personalized profiles.
            </p>
            <div className="mt-6 md:mt-10">

              <a
                href="#"
                className="bg-[#d17432] text-white px-6 py-4 rounded-[36px] text-sm font-medium hover:bg-[#6b615b] transition-all"
              >
               Get Early Access
              </a>
            </div>
          </div>
          <div className="flex-1 basis-full md:basis-1/2">
            <div className="relative w-full h-0 pb-[100%]">
              <Image
                src="/images/hero.svg"
                alt="Hero"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
