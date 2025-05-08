import {
  AcademicCapIcon,
  ChartBarIcon,
  WrenchIcon,
  BookOpenIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const learningItems = [
  {
    title: "Structured Courses",
    description: "From beginner to advanced, learn at your own pace.",
    icon: AcademicCapIcon,
  },
  {
    title: "Certifications",
    description: "Earn digital badges and skill verification as you progress.",
    icon: BookOpenIcon,
  },
  {
    title: "Tool Skill Guides",
    description: "Master essential tools and techniques used on real sites.",
    icon: WrenchIcon,
  },
  {
    title: "Progress You Can See",
    description: "Monitor your learning and skill growth over time.",
    icon: ChartBarIcon,
  },
];

export default function Learning() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-[#d17432] font-semibold tracking-wide">
            Learning Modules
          </span>
          <h2 className="text-4xl text-black font-bold mt-2 mb-4">
          AI Recommended Courses That Fit Your Journey
          </h2>
          <div className="w-24 h-1 bg-[#d17432] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="group p-7 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col h-full">
                <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition">
                  <item.icon className="h-6 w-6 text-[#d17432]" />
                </div>
                <h3 className="text-black text-lg font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-[13px] mb-6 text-black font-[500]">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="mt-auto text-[#d17432] font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"
                >
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-[#d17432] text-white rounded-full font-medium hover:bg-[#6b615b] transition flex items-center mx-auto">
            <ClockIcon className="h-5 w-5 mr-2" />
            View All Learning Paths
          </button>
        </div>
      </div>
    </section>
  );
}
