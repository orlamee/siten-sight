import {
  QrCodeIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ScanFeature() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:order-2 lg:w-1/2">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/images/scan.png"
                alt="Mobile app scanning construction materials"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-blue-200 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-indigo-200 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
          <div className="lg:order-1 lg:w-1/2">
            <div className="max-w-lg">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-4">
                <QrCodeIcon className="h-5 w-5 mr-2" />
                Scan Feature
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Scan to Learn <span className="text-[#d17432]">On-Site</span>
              </h2>

              <p className="text-md font-[500] mb-8">
                Use our mobile app to scan materials, tools, and equipment for
                instant access to tutorials, safety guidelines, and installation
                tips—right when you need them most.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-[#d17432]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Instant Knowledge</h4>
                    <p className="text-[13px] font-[500]">
                      Point your camera at construction elements to pull up
                      relevant guides
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <ArrowPathIcon className="h-6 w-6 text-[#d17432]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Continuous Updates</h4>
                    <p className="text-[13px] font-[500]">
                      Our database grows with new materials and techniques
                      weekly
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-[#d17432] text-white rounded-lg font-medium hover:bg-[#6b615b] transition flex items-center justify-center shadow-md">
                  <QrCodeIcon className="h-5 w-5 mr-2" />
                  Try Scan Feature
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
