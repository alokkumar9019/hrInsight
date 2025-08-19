"use client";

import FeatureCard from "./FeatureCard";
import { Shield, Zap, Globe } from "lucide-react";

export default function Section2() {
  return (
    <section className="relative px-6 py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-700 select-none">
      <div className="pointer-events-none absolute inset-0 z-0">
          <div className="w-3/5 h-72 absolute -top-24 left-1/3 blur-3xl opacity-40 bg-gradient-to-br from-[#18ae90] to-blue-400 rounded-full" />
        </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-4 drop-shadow-md"
          style={{ animation: "fadeInUp 0.8s ease forwards" }}
        >
          Transform Your HR with Real-Time Insights and Smart Analytics
        </h2>

        {/* Subtitle */}
        <p
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-l md:text-l leading-relaxed drop-shadow-sm"
          style={{ animation: "fadeInUp 1s ease forwards", animationDelay: "0.2s" }}
        >
          Our platform simplifies complex HR reporting, allowing leaders to make real-time decisions with ease. Experience the power of dynamic graphs, self-service reporting, and AI-driven recommendations that boost efficiency and provide actionable insights.
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center font-bold text-xl mb-20">
          Learn More About Features →
      </div>

      {/* Feature Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        <FeatureCard
          icon={<Zap className="w-8 h-8" />}
          title="Lightning Fast"
          description="Generate complex reports in seconds, not hours. Our optimized engine processes millions of data points instantly."
          color="#8b5cf6"
        />
        <FeatureCard
          icon={<Shield className="w-8 h-8" />}
          title="Enterprise Security"
          description="Bank-level security with SOC 2 compliance, end-to-end encryption, and role-based access controls."
          color="#3b82f6"
        />
        <FeatureCard
          icon={<Globe className="w-8 h-8" />}
          title="Global Scale"
          description="Support for multi-location, multi-currency operations with localized compliance and reporting."
          color="#10b981"
        />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
}
