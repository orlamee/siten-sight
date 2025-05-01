import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CommunityItems = [
  {
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    icon: AcademicCapIcon,
  },
  {
    title: "Dolor sit amet",
    description: "Consectetur adipisicing elit, sed do eiusmod tempor",
    icon: AcademicCapIcon,
  },
  {
    title: "Adipisicing elit",
    description: "Ut enim ad minim veniam, quis nostrud exercitation",
    icon: AcademicCapIcon,
  },
];

export default function Community() {
  return (
    <section className="container mx-auto px-6 md:px-10 mt-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3 relative aspect-square">
          <Image
            src="/images/cf.png"
            alt="Hero"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">Community Forum</h2>
          {CommunityItems.map((item, index) => (
            <div
              key={index}
              className="p-3 border border-gray-400 rounded-lg mb-4 shadow-md"
            >
              <div className="flex flex-row items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                  <p className="text-xs">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
