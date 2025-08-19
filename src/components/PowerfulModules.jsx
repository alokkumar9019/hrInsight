import React from "react";
import {
  ChartColumnIncreasing,
  BadgeDollarSign,
  Clock,
  Users,
  UserPlus,
  UserMinus,
} from "lucide-react";
import PowerfulModuleCard from "./PowerfulModuleCard";

export default function PowerfulModules() {
  return (
    <section
      id="modules"
      className="w-full scroll-mt-27 text-center px-0 py-24 md:py-32 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black rounded-none shadow-none transition-colors duration-500"
    >
      
      {/* Heading */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900 dark:text-white tracking-tight">
        Explore Our Powerful Modules
      </h2>

      {/* Subtitle */}
      <p className="max-w-2xl mx-auto text-l text-gray-600 dark:text-gray-300 mb-14 font-medium">
        Comprehensive HR analytics across all key areas of your organization.
        Click on each module to explore detailed features and capabilities.
      </p>
      </div>
      {/* PowerfulModuleCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {[
          {
            icon: <Users className="w-8 h-8" />,
            title: "Headcount",
            description: "Track workforce size and distribution across departments and locations",
            color: "#8b5cf6",
            link: "/headcount",
          },
          {
            icon: <BadgeDollarSign className="w-8 h-8" />,
            title: "Compensation",
            description: "Analyze salary trends, compensation gaps, and budget allocation",
            color: "#3b82f6",
            link: "/compensation",
          },
          {
            icon: <ChartColumnIncreasing className="w-8 h-8" />,
            title: "FTE Analysis",
            description: "Monitor full-time equivalent metrics and resource planning",
            color: "#10b981",
            link: "/fte-analysis",
          },
          {
            icon: <Clock className="w-8 h-8" />,
            title: "Absenteeism",
            description: "Track attendance patterns and identify absence trends",
            color: "#e58b16",
            link: "/absenteeism",
          },
          {
            icon: <UserPlus className="w-8 h-8" />,
            title: "Hiring",
            description: "Monitor recruitment metrics and hiring pipeline efficiency",
            color: "#6366f1",
            link: "/hiring",
          },
          {
            icon: <UserMinus className="w-8 h-8" />,
            title: "Turnover",
            description: "Analyze retention rates and identify departure patterns",
            color: "#ef4444",
            link: "/turnover",
          },
        ].map((module, idx) => (
          <PowerfulModuleCard
            key={module.title}
            icon={
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-white dark:bg-gray-800 mb-5 mx-auto transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${module.color}1A` }} // subtle colored background
              >
                {React.cloneElement(module.icon, { color: module.color })}
              </span>
            }
            title={module.title}
            description={module.description}
            color={module.color}
            link={module.link}
            cardClassName="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl border-0 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            titleClassName="text-xl font-semibold mb-2 tracking-wide text-gray-900 dark:text-white"
            descriptionClassName="text-gray-600 dark:text-gray-300"
          />
        ))}
      </div>
    </section>
  );
}
