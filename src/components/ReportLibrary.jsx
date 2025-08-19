"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  BarChart3,
  ListChecks,
  Clock,
  Filter,
  Users,
  DollarSign,
  AlertCircle,
} from "lucide-react";

export default function ReportLibrary() {
  // Intersection Observer trigger for fade-in animations
  const roiSectionRef = useRef(null);
  const [roiAnimate, setRoiAnimate] = useState(false);

  useEffect(() => {
    if (!roiSectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRoiAnimate(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(roiSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Data for ROI benefit cards (icons as strings for emoji)
  const roiBenefits = [
    {
      icon: "📉",
      title: "Reduced Labor Costs",
      desc: "Significant reduction in hours dedicated to report development and maintenance across HR and IT departments.",
    },
    {
      icon: "👷",
      title: "Accelerated Decision-Making",
      desc: "Faster access to key data translates into quicker, more effective responses to workforce challenges.",
    },
    {
      icon: "🛡️",
      title: "Improved Compliance & Risk Management",
      desc: "Standardized reports ensure consistent data for audits and compliance checks, minimizing potential penalties and risks.",
    },
    {
      icon: "🚀",
      title: "Enhanced Strategic Planning",
      desc: "Reliable, consistent data from pre-built reports lays the foundation for workforce planning and budgeting.",
    },
    {
      icon: "✂️",
      title: "Lower Training Overhead",
      desc: "Minimal training required as users simply browse and select instead of building reports from scratch.",
    },
  ];

  const benefitCards = [
    {
      img: "/time-saving.jpg",
      alt: "Bar Chart",
      title: "Massive Time Savings",
      desc: "Eliminate hundreds of hours annually spent designing, testing, and troubleshooting custom reports. Access needed reports instantly.",
    },
    {
      img: "/men-with-laptop.jpg",
      alt: "Pie Chart",
      title: "Immediate Insight",
      desc: "Get critical data at your fingertips without delay to enable faster analysis and response times.",
    },
    {
      img: "/bar-chart.jpg",
      alt: "Line Chart",
      title: "Guaranteed Accuracy & Reliability",
      desc: "Rely on rigorously tested, expertly designed reports to ensure your data is accurate and standardized.",
    },
    {
      img: "/pie-chart.jpg",
      alt: "Table illustration",
      title: "Empowered Users",
      desc: "Non-technical HR team members can easily access sophisticated reports, reducing reliance on technical teams.",
    },
    {
      img: "/graphs.jpg",
      alt: "Dashboard",
      title: "Best Practice Reporting",
      desc: "Benefit from reports based on industry best practices for the most relevant HR metrics.",
    },
    {
      img: "/target.jpg",
      alt: "Focus on Action",
      title: "Focus on Action, Not Preparation",
      desc: "Shift your team's energy from report creation to strategic analysis and actionable initiatives.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen px-0">
      {/* Global style for fade animations */}
      <style jsx>{`
        @keyframes fadein-slideX {
          0% {
            opacity: 0;
            transform: translateX(var(--slide-from));
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .fadein-from-left {
          --slide-from: -48px;
          animation: fadein-slideX 1s cubic-bezier(0.41, 0.21, 0.19, 0.98) forwards;
        }
        .fadein-from-right {
          --slide-from: 48px;
          animation: fadein-slideX 1s cubic-bezier(0.41, 0.21, 0.19, 0.98) forwards;
        }
        .benefit-card:hover {
          box-shadow: 0 10px 25px rgba(5, 150, 105, 0.25);
          transform: translateY(-6px);
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
        .roi-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .roi-card:hover {
          box-shadow: 0 0 15px 3px rgba(5, 150, 105, 0.5);
          transform: translateX(6px);
          background-color: rgba(5, 150, 105, 0.05);
          animation: pulseGlow 1.4s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 6px 1px rgba(22, 160, 133, 0.3);
          }
          100% {
            box-shadow: 0 0 18px 6px rgba(22, 160, 133, 0.9);
          }
        }
      `}</style>

      {/* HERO */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-16 gap-10 lg:gap-0">
        {/* Text */}
        <div className="lg:w-1/2 w-full flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#19b395] mb-6 leading-tight">
            Ready-to-Use Reports: Get the Data You Need, Without Building from Scratch.
          </h1>
          <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed max-w-lg">
            Stop wasting precious time building reports from the ground up. Our extensive Pre-Built Report Library offers an unparalleled collection of over 250 meticulously designed reports, covering every critical HR domain. Simply browse, select, and export the insights you need, whenever you need them.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full flex justify-center relative rounded-xl shadow-2xl overflow-hidden hover:scale-[1.05] transition-transform duration-700 ease-in-out cursor-pointer">
          <Image
            src="/ready-to-use-report.jpg"
            alt="Dynamic graph dashboard illustration"
            width={520}
            height={320}
            style={{ objectFit: "cover" }}
            className="rounded-xl"
            priority
          />
        </div>
      </div>

      {/* Detailed Info Section */}
      <section className="max-w-5xl mx-auto my-20 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#19b395] text-center mb-14">
          Detailed Information about the Feature
        </h2>

        {/* 1. Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-10 rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-8 hover:shadow-2xl transition-shadow duration-500 cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-left">
            <div className="w-[260px] h-[180px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <Image
                src="/200-prebuilt-dash.jpg"
                alt="Real-time Responsiveness"
                width={240}
                height={170}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-right">
            <div className="flex items-center mb-4">
              <Clock size={28} className="text-[#19b395] mr-3" />
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Extensive Collection
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md leading-relaxed">
              Access a growing library of more than 250 pre-configured reports, designed by HR experts to cover the most common and critical reporting needs.
            </p>
          </div>
        </div>

        {/* 2. Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-10 md:flex-row-reverse rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-8 hover:shadow-2xl transition-shadow duration-500 cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-right">
            <div className="w-[260px] h-[180px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <Image
                src="/intutive-search.jpg"
                alt="Interactive Filtering"
                width={240}
                height={170}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-left">
            <div className="flex items-center mb-4">
              <Filter size={28} className="text-[#19b395] mr-3" />
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Intuitive Browse
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md leading-relaxed">
              Easily navigate the library with clear categories, search functionalities, and descriptive titles.
            </p>
          </div>
        </div>

        {/* 3. Image Left, Text Right - Broad Coverage */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-10 rounded-3xl shadow-2xl bg-gradient-to-br from-[#e9f7f6] via-[#f4faf7] to-[#fafffd] dark:from-[#11201c] dark:via-[#183c31] dark:to-[#1b3132] border border-[#22d3aa] dark:border-[#145749] p-8 hover:shadow-2xl transition-shadow duration-500 cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-left">
            {/* Placeholder area for image */}
            <div className="w-[260px] h-[180px] flex items-center justify-center bg-[#d1f6ec] dark:bg-[#134935] rounded-xl shadow-lg text-[#19b395] font-semibold text-lg">
              <Image
                src="/hr-domain-coverage.jpg"
                alt="Broad HR domain"
                width={240}
                height={170}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-right">
            <div className="flex items-center mb-6 gap-3">
              <BarChart3 size={28} className="text-[#19b395]" />
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Broad HR Domain Coverage
              </h3>
            </div>
            <ul className="list-disc ml-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg max-w-md">
              <li className="flex items-start gap-2">
                <Users size={20} className="text-[#19b395] mt-1" />
                <span>
                  <b>Absence Management:</b> Track leave types, patterns, and compliance.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign size={20} className="text-[#19b395] mt-1" />
                <span>
                  <b>Career & Succession:</b> Monitor career paths, internal mobility, and readiness.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ListChecks size={20} className="text-[#19b395] mt-1" />
                <span>
                  <b>Performance Management:</b> Analyze ratings, document status, and review cycles.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={20} className="text-[#19b395] mt-1" />
                <span>
                  <b>Compensation & Benefits:</b> Review salary structures, benefits utilization, and pay equity.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={20} className="text-[#19b395] mt-1" />
                <span>
                  <b>Recruitment & Onboarding:</b> Assess hiring trends and new hire performance.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={20} className="text-[#19b395] mt-1" />
                <span>
                  <b>Diversity & Inclusion:</b> Monitor demographic trends and initiatives.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Text Left, Image Right - Clear Descriptions */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-10 md:flex-row-reverse rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-8 hover:shadow-2xl transition-shadow duration-500 cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-right">
            <div className="w-[260px] h-[180px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <Image
                src="/clear-description.jpg"
                alt="User-Friendly Interface"
                width={240}
                height={170}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-left">
            <div className="flex items-center mb-4">
              <CheckCircle size={28} className="text-[#19b395] mr-3" />
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Clear Descriptions
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md leading-relaxed">
              Hover over any report title to instantly view a brief, concise description, telling you exactly what the report covers and its key insights. This ensures you select the right report every time.
            </p>
          </div>
        </div>

        {/* 5. Image Left, Text Right - One Click Access */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-10 rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-8 hover:shadow-2xl transition-shadow duration-500 cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-left">
            <div className="w-[260px] h-[180px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <Image
                src="/files-type.jpg"
                alt="Report Export"
                width={240}
                height={170}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-right">
            <div className="flex items-center mb-4">
              <Clock size={28} className="text-[#19b395] mr-3" />
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                One-Click Access & Export
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md leading-relaxed">
              Once you've found the report you need, view its data and immediately export it in multiple formats (PDF, CSV, Excel) for presentations, further analysis, or record-keeping.
            </p>
          </div>
        </div>

        {/* 6. Text Left, Image Right - Standardization */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 md:flex-row-reverse rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-8 hover:shadow-2xl transition-shadow duration-500 cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-right">
            <div className="w-[260px] h-[180px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <Image
                src="/standard-and-consistant.jpg"
                alt="Standardization and Consistency"
                width={240}
                height={170}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-left">
            <div className="flex items-center mb-4">
              <CheckCircle size={28} className="text-[#19b395] mr-3" />
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Standardization & Consistency
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md leading-relaxed">
              Ensures that all users access and report data consistently, fostering a single source of truth and reliable metrics across the organization.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#19b395] text-center mb-12">
          How Dynamic Graphs Benefit You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {benefitCards.map(({ img, alt, title, desc }, i) => (
            <div
              key={i}
              className="benefit-card bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
              tabIndex={0}
              role="button"
              aria-pressed="false"
            >
              <Image src={img} alt={alt} width={80} height={60} className="mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Section */}
      <section
        className="max-w-5xl mx-auto px-6 py-20"
        ref={roiSectionRef}
        aria-label="Return on Investment Benefits"
      >
        <h2 className="text-3xl font-bold text-[#18ae91] flex items-center justify-center gap-3 mb-12">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e6faf5] dark:bg-[#165e50]">
            <DollarSign size={30} className="text-[#18ae91]" />
          </span>
          ROI (Return on Investment)
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {roiBenefits.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className={`roi-card w-64 flex flex-col items-center rounded-xl shadow-md p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center`}
              // Simple fade-in animation when roiAnimate is true
              style={{
  animation: roiAnimate
    ? `fadein-slideX 0.8s ease forwards ${i * 0.15}s`
    : "none",
  opacity: roiAnimate ? 1 : 0,
  transform: roiAnimate ? "translateX(0)" : i % 2 === 0 ? "translateX(-48px)" : "translateX(48px)",
}}

              tabIndex={0}
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
