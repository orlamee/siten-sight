import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const communityItems = [
  {
    title: "Topic-Based Rooms",
    description: "Join active conversations across various construction themes.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Mentorship Matching",
    description: "Connect with industry pros for guidance and support.",
    icon: UserGroupIcon,
  },
  {
    title: "Events & Webinars",
    description: "Get updates on construction events/workshops.",
    icon: CalendarDaysIcon,
  },
  {
    title: "Moderated & Safe",
    description:
      "Clear community guidelines to keep conversations respectful and productive.",
    icon: ShieldCheckIcon,
  },
];

export default function Community() {
  return (
    <section className="container mx-auto px-6 md:px-10 py-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3 relative aspect-square">
          <Image
            src="/images/cf.png"
            alt="Community Forum"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">Community Forum</h2>
          {communityItems.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-lg mb-4 shadow-sm transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-[#d17432]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-[13px] font-[500]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
