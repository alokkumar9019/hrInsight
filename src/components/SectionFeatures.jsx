"use client";

import FeatureCard2 from "./FeatureCard2";
import { PieChart, Activity, Brain, Target, FileBarChart2 } from "lucide-react";
import { useRef, useEffect } from "react";

export default function SectionFeatures() {
  const features = [
    {
      id: 1,
      icon: <PieChart size={32} className="text-blue-600 dark:text-blue-400" />,
      title: "Dynamic Graphs & Visualizations",
      description: "Interactive, real-time analytics that visually adapt to your every query.",
      badge: "Save 10+ hours weekly",
      href: "/features/dynamic-graphs",
    },
    {
      id: 2,
      icon: <Activity size={32} className="text-green-600 dark:text-green-400" />,
      title: "Executive Dashboards",
      description: "200+ pre-built dashboards giving you a pulse on your entire workforce.",
      badge: "Instant insights",
      href: "/features/executive-dashboard",
    },
    {
      id: 3,
      icon: <Brain size={32} className="text-violet-600 dark:text-violet-400" />,
      title: "AI-Powered Insights",
      description: "Intelligent narratives and actionable suggestions for strategic decision-making.",
      badge: "40% faster decisions",
      href: "/features/ai-powered",
    },
    {
      id: 4,
      icon: <Target size={32} className="text-pink-600 dark:text-pink-400" />,
      title: "Natural Language Queries",
      description: "Get instant answers—just ask in plain language. No manual data crunching required.",
      badge: "Zero learning curve",
      href: "/features/natural-language-query",
    },
    {
      id: 5,
      icon: <FileBarChart2 size={32} className="text-yellow-500 dark:text-yellow-300" />,
      title: "Pre-Built Report Library",
      description: "250+ ready-to-export reports across all HR domains, accessible in seconds.",
      badge: "Ready to go",
      href: "/features/report-library",
    },
  ];

  // Animate cards with fade-up on scroll
  const cardsRef = useRef([]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      cardsRef.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("fade-up-enter");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(32px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .fade-up-enter {
          animation: fadeUp 1s cubic-bezier(0.4, 0.2, 0.2, 1) forwards;
        }
      `}</style>
      <section
        id="features"
        className="relative px-4 sm:px-8 py-24 bg-gradient-to-br from-blue-50/60 via-white/80 to-violet-50/80 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-all duration-700 overflow-x-clip"
      >
        {/* Soft blur/glass behind title */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="w-3/5 h-72 absolute -top-24 left-1/3 blur-3xl opacity-40 bg-gradient-to-br from-[#18ae90] to-blue-400 rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-5 drop-shadow-xl"
            style={{ animation: "fadeUp 1s cubic-bezier(0.4,0,0.2,1)", animationDelay: "0.1s", opacity: 1 }}
          >
            Key Features at a Glance
          </h2>
          <p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-2 font-medium drop-shadow"
            style={{ animation: "fadeUp 1.2s cubic-bezier(0.4,0,0.2,1)", animationDelay: "0.2s", opacity: 1 }}
          >
            Unlock powerful capabilities to transform how you work with HR data and drive strategy.
          </p>
        </div>
        {/* Responsive feature grid with glass effect */}
        <div className="relative z-20 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto items-stretch">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              ref={el => cardsRef.current[i] = el}
              className="opacity-0 transform translate-y-4 scale-95 transition-all duration-700 [@media(hover:hover)]:hover:scale-105"
              style={{
                animationDelay: `${0.15 + i * 0.12}s`,
                background: "rgba(255,255,255,0.7)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.05)",
                borderRadius: "1.5rem",
                backdropFilter: "blur(8px)",
              }}
            >
              <FeatureCard2 {...feature} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
