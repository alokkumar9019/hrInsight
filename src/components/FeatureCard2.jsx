import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeatureCard2({ icon, title, description, badge, href }) {
  return (
    <Link href={href} className="group" aria-label={`Learn more about ${title}`}>
      <div
        className={`
          relative flex flex-col w-full max-w-[320px] min-h-[370px] h-full
          bg-gradient-to-br from-white via-[#f2f4fd] to-[#e0f7f3] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
          border border-transparent hover:border-[#19b395]
          rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
          cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#19b395]
        `}
      >
        

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md mb-8 mx-auto bg-[#c8f4eb] dark:bg-[#165e50] text-[#19b395] dark:text-[#67e4c8] text-3xl transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Title and Description */}
        <div className="flex flex-col flex-1 items-center">
          <h3 className="text-lg md:text-xl font-bold text-[#19b395] dark:text-[#67e4c8] mb-2 leading-tight group-hover:text-[#167867] transition-colors duration-300 text-center">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-8 text-center">
            {description}
          </p>
        </div>

        {/* "Learn more" CTA */}
        <span className="flex items-center justify-center mt-auto gap-1 text-base font-semibold text-[#19b395] group-hover:underline group-hover:text-[#167867] transition-colors duration-300">
          Learn more
          <ArrowRight size={18} />
        </span>
      </div>
    </Link>
  );
}
