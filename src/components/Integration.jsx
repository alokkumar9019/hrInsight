"use client";
import { Database, Users, Globe, Zap, Shield, Target } from "lucide-react";
import IntegrationCard from "./IntegrationCard";

export default function Integrations() {
  const platforms = [
    {
      name: "Oracle HCM",
      icon: <Database className="w-7 h-7" />,
      bg: "from-red-100/80 via-red-50/50 to-white dark:from-red-900 dark:to-gray-900",
      iconColor: "text-red-500",
      shadow: "shadow-red-200 dark:shadow-red-900/30"
    },
    {
      name: "Zoho People",
      icon: <Users className="w-7 h-7" />,
      bg: "from-orange-100/80 via-orange-50/50 to-white dark:from-orange-900 dark:to-gray-900",
      iconColor: "text-orange-500",
      shadow: "shadow-orange-200 dark:shadow-orange-900/30"
    },
    {
      name: "Workday",
      icon: <Globe className="w-7 h-7" />,
      bg: "from-blue-100/80 via-blue-50/50 to-white dark:from-blue-900 dark:to-gray-900",
      iconColor: "text-blue-500",
      shadow: "shadow-blue-200 dark:shadow-blue-900/40"
    },
    {
      name: "greytHR",
      icon: <Zap className="w-7 h-7" />,
      bg: "from-green-100/80 via-green-50/50 to-white dark:from-green-900 dark:to-gray-900",
      iconColor: "text-green-500",
      shadow: "shadow-green-200 dark:shadow-green-900/30"
    },
  ];

  return (
    <section
      id="integrations"
      className="scroll-mt-28 px-4 py-20 bg-gradient-to-b from-blue-50/70 to-white dark:from-gray-950 dark:to-black transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900 dark:text-white tracking-tight drop-shadow-sm">
          Seamless Integration with Leading HR Platforms
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12 text-lg">
          Effortlessly connect your tech stack. Instant access, zero migration headaches.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 max-w-6xl mx-auto">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className={`
              rounded-2xl flex flex-col items-center justify-center gap-3 px-5 py-7
              bg-gradient-to-tr ${platform.bg}
              ${platform.shadow}
              backdrop-blur-lg border border-gray-100/70 dark:border-white/10
              hover:-translate-y-2 hover:scale-105 hover:shadow-xl transition group cursor-pointer
            `}
          >
            <span
              className={`
                p-4 rounded-full bg-white/90 dark:bg-gray-950/80 shadow-md transition
                group-hover:shadow-xl group-hover:scale-110
                ${platform.iconColor}
              `}
              aria-hidden="true"
            >
              {platform.icon}
            </span>
            <span className="font-semibold mt-2 text-sm sm:text-base text-gray-800 dark:text-gray-100 tracking-wide">
              {platform.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button
          className="flex items-center gap-2 bg-white/90 dark:bg-gray-900/50 border border-blue-100 dark:border-blue-900 shadow-lg
            text-blue-700 dark:text-blue-200 px-7 py-3 rounded-full font-semibold
            hover:bg-blue-100/90 dark:hover:bg-blue-900/80 hover:scale-105
            backdrop-blur-md transition-all text-base tracking-wide"
        >
          <Database className="w-5 h-5" />
          Connect in minutes, not months
        </button>
      </div>
    </section>
  );
}
