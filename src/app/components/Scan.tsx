import {
  QrCodeIcon,
  CameraIcon,
  BuildingLibraryIcon,
  CubeIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ScanFeature() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:order-2 lg:w-1/2">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/images/scan.png"
                alt="SiteLens mobile app scanning interface"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-orange-100 rounded-full opacity-30 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:order-1 lg:w-1/2">
            <div className="max-w-2xl">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium shadow-sm mb-5 border border-gray-200">
                <QrCodeIcon className="h-5 w-5 text-orange-500 mr-2" />
                SiteLens Technology
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Learn Through Your Lens
              </h2>

              <p className="text-sm font-[500] mb-10">
                Turn your phone into a smart scanner. SiteLens instantly
                identifies tools, buildings, or materials—and unlocks specs,
                safety tips, and learning content in real time.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-50 p-3 rounded-lg flex-shrink-0">
                    <CameraIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5">Scan Tools</h3>
                    <p className="text-[13px] font-[500]">
                      Identify, categorize, and learn how to use jobsite tools.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-50 p-3 rounded-lg flex-shrink-0">
                    <BuildingLibraryIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5">Scan Buildings</h3>
                    <p className="text-[13px] font-[500]">
                      Discover architecture styles, typical methods, and
                      historical facts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-50 p-3 rounded-lg flex-shrink-0">
                    <CubeIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5">Scan Materials</h3>
                    <p className="text-[13px] font-[500]">
                      Get specs, safety data, and installation guides on the
                      spot.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-50 p-3 rounded-lg flex-shrink-0">
                    <BoltIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5">Instant Insights</h3>
                    <p className="text-[13px] font-[500]">
                      Pop-up definitions, related tutorials, and compliance
                      info—right when you need it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3.5 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                  <QrCodeIcon className="h-5 w-5 mr-2" />
                  Download SiteLens App
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
