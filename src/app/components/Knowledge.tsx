import {
  BookOpenIcon,
  LightBulbIcon,
  FilmIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const knowledgeItems = [
  {
    title: "Construction Dictionary",
    description:
      "Clear definitions for technical terms and field-specific jargon.",
    icon: BookOpenIcon,
  },
  {
    title: "Real-World Lessons Learned",
    description:
      "Insights and case studies drawn from actual field experience.",
    icon: LightBulbIcon,
  },
  {
    title: "Tutorials from Pros",
    description: "Step-by-step guides and expert walkthroughs you can trust.",
    icon: FilmIcon,
  },
  {
    title: "Curated Content",
    description:
      "Discover industry-specific tips and insights curated to help construction professionals tackle real-world challenges with practical strategies and tools.",
    icon: DocumentTextIcon,
  },
];

export default function Knowledge() {
  return (
    <section className="container mx-auto px-6 md:px-10 py-16">
      <div className="text-center mb-16">
        <span className="text-[#d17432] font-semibold tracking-wide">
          Knowledge Sharing
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          Knowledge That Builds More Than Skills
        </h2>
        <div className="w-24 h-1 bg-[#d17432] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {knowledgeItems.map((item, index) => (
          <div
            key={index}
            className="group p-7 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex flex-col">
              <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition">
                <item.icon className="h-6 w-6 text-[#d17432]" />
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-[13px] font-[500]">{item.description}</p>
              <a
                href="#"
                className="mt-6 text-[#d17432] font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"
              >
                Learn more
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
    </section>
  );
}
