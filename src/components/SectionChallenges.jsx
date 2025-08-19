"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function SectionChallenges() {
  const challenges = [
    {
      id: 1,
      problem: "Complex and time-consuming reporting",
      solution: "Dynamic graphs and self-service reporting that update instantly.",
      benefit: "Instant updates save time and eliminate manual reporting.",
    },
    {
      id: 2,
      problem: "Lack of real-time insights",
      solution: "Real-time dashboards and workforce metrics visualizations.",
      benefit: "Keeps HR updated with timely decisions.",
    },
    {
      id: 3,
      problem: "Data overload and complexity",
      solution: "Pre-built interactive dashboards summarizing key data.",
      benefit: "Makes complex data clear, actionable, and easy to analyze.",
    },
    {
      id: 4,
      problem: "Inefficient tracking of performance and retention",
      solution:
        "Executive dashboards showing performance review statuses and retention trends.",
      benefit: "Identifies trends and helps HR take proactive retention actions.",
    },
    {
      id: 5,
      problem: "Difficulty creating custom reports",
      solution: "Easy drag-and-drop custom report builder.",
      benefit: "Reduces the need for technical skills, saving time.",
    },
    {
      id: 6,
      problem: "Unclear insights and recommendations",
      solution: "Detailed AI-powered insights with workforce optimization tips.",
      benefit: "Supports better decision making with clear recommendations.",
    },
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const total = challenges.length;

  const prev = () => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setCenterIndex((prev) => (prev + 1) % total);
  };

  // Get card by offset relative to centerIndex
  const getCard = (offset) => {
    return challenges[(centerIndex + offset + total) % total];
  };

  return (
    <section
      id="solutions"
      className="relative px-6 py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black select-none"
      aria-label="HR Challenges and Solutions Carousel"
    >
      
    <div className="pointer-events-none absolute inset-0 z-0">
          <div className="w-3/5 h-72 absolute -top-24 left-1/3 blur-3xl opacity-20 bg-gradient-to-br from-[#18ae90] to-blue-400 rounded-full" />
        </div>
      {/* Title */}
      <div className="text-center max-w-4xl mx-auto mb-20 px-4">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
          HR Challenges? We Have the Solution.
        </h2>
        <p className="text-l md:text-l text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Every challenge in HR meets its match with our platform — dynamic,
          intelligent solutions that transform obstacles into advantages.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-center px-4">
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous challenge"
          className="absolute left-0 md:left-10 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-purple-100 dark:bg-purple-900 shadow-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 z-40"
          title="Previous"
        >
          <ChevronLeft className="w-8 h-8 text-purple-700 dark:text-purple-300" />
        </button>

        {/* Cards Container */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="flex justify-center items-center gap-8 overflow-visible"
          style={{ minWidth: "fit-content" }}
        >
          {[getCard(-1), getCard(0), getCard(1)].map((item, idx) => {
            // Compute positional styles & accessibility props
            const isCenter = idx === 1;
            const scale = isCenter ? 1 : 0.85;
            const opacity = isCenter ? 1 : 0.5;
            const zIndex = isCenter ? 30 : 10;
            const translateX = idx === 0 ? "-20%" : idx === 2 ? "20%" : "0";

            return (
              <article
                key={item.id}
                className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-purple-200 dark:border-purple-700 p-8 flex flex-col space-y-6 transition-all duration-700 ease-in-out transform cursor-default"
                style={{
                  transform: `translateX(${translateX}) scale(${scale})`,
                  opacity,
                  zIndex,
                  boxShadow: isCenter
                    ? "0 20px 30px rgba(136, 51, 255, 0.35)"
                    : "none",
                  width: "320px",
                  willChange: "transform, opacity",
                }}
                aria-current={isCenter ? "true" : "false"}
                tabIndex={isCenter ? 0 : -1}
                aria-label={`Challenge: ${item.problem}. Solution and benefit details included.`}
              >
                <section className="space-y-4 text-center">
                  {/* Problem */}
                  <div>
                    <span className="inline-flex items-center justify-center gap-2 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400 font-semibold text-xs uppercase rounded-full px-4 py-2 select-none shadow-sm">
                      <span role="img" aria-hidden="true">
                        ⚠️
                      </span>{" "}
                      Problem
                    </span>
                    <p className="mt-3 font-semibold text-lg text-gray-900 dark:text-gray-100">
                      {item.problem}
                    </p>
                  </div>

                  {/* Arrow Down */}
                  <div
                    className="text-purple-400 text-3xl select-none"
                    aria-hidden="true"
                  >
                    ↓
                  </div>

                  {/* Solution */}
                  <div>
                    <span className="inline-flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 font-semibold text-xs uppercase rounded-full px-4 py-2 select-none shadow-sm">
                      <span role="img" aria-hidden="true">
                        💡
                      </span>{" "}
                      Solution
                    </span>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">{item.solution}</p>
                  </div>

                  {/* Arrow Down */}
                  <div
                    className="text-purple-400 text-3xl select-none"
                    aria-hidden="true"
                  >
                    ↓
                  </div>

                  {/* Benefit */}
                  <div>
                    <span className="inline-flex items-center justify-center gap-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 font-semibold text-xs uppercase rounded-full px-4 py-2 select-none shadow-sm">
                      <span role="img" aria-hidden="true">
                        ✅
                      </span>{" "}
                      Benefit
                    </span>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">{item.benefit}</p>
                  </div>
                </section>
              </article>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next challenge"
          className="absolute right-0 md:right-10 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-purple-100 dark:bg-purple-900 shadow-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 z-40"
          title="Next"
        >
          <ChevronRight className="w-8 h-8 text-purple-700 dark:text-purple-300" />
        </button>
      </div>
    </section>
  );
}
