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

export default function DynamicGraphsFeaturePage() {
  const roiSectionRef = useRef(null);
  const [roiAnimate, setRoiAnimate] = useState(false);

  useEffect(() => {
    if (!roiSectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRoiAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(roiSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Benefits grid data
  const benefits = [
    {
      img: "/graph.jpg",
      alt: "Bar Chart",
      title: "Instant Clarity",
      desc: "Get answers to your pressing HR questions in seconds, not hours or days.",
    },
    {
      img: "/men-with-laptop.jpg",
      alt: "Pie Chart",
      title: "Self-Service Empowerment",
      desc: "Take control of your reporting needs—no IT required. Explore data on your own terms.",
    },
    {
      img: "/bar-chart.jpg",
      alt: "Line Chart",
      title: "Deeper Insights",
      desc: "Dynamic filtering and segmentation reveal nuanced trends that static reports often miss.",
    },
    {
      img: "/pie-chart.jpg",
      alt: "Table illustration",
      title: "Proactive Decision-Making",
      desc: "With real-time data, you spot issues and act before they snowball—drive data-forward HR.",
    },
    {
      img: "/statistic.jpg",
      alt: "Dashboard",
      title: "Enhanced Data Storytelling",
      desc: "Visualize data in compelling formats, making HR insights more persuasive for stakeholders.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen px-0 relative overflow-visible">
      <style jsx>{`
        @keyframes float {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(-12px);}
        }
        @keyframes slideInX {
          0% { opacity: 0; transform: translateX(var(--slide-from)); }
          100% { opacity: 1; transform: translateX(0);}
        }
        .fadein-from-left {
          --slide-from: -48px;
          animation: slideInX 1s cubic-bezier(0.41,0.21,0.19,0.98) forwards;
        }
        .fadein-from-right {
          --slide-from: 48px;
          animation: slideInX 1s cubic-bezier(0.41,0.21,0.19,0.98) forwards;
        }
        .hover-underline:hover {
          background-position: 0 100%;
          color: #059669;
        }
        .hover-underline {
          background-image: linear-gradient(to right, #059669 0%, #059669 100%);
          background-repeat: no-repeat;
          background-size: 100% 2px;
          background-position: 0 100%;
          transition: background-position 0.3s, color 0.3s;
        }
        .benefit-card:hover {
          box-shadow: 0 10px 25px rgba(5, 150, 105, 0.25);
          transform: translateY(-6px);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .floating-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          animation: float 6s ease-in-out infinite;
          background: linear-gradient(45deg, #14b8a6, #22c55e);
          filter: blur(6px);
          z-index: 0;
        }
        @keyframes fadein-slideup {
          0%   { opacity: 0; transform: translateY(36px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadein-slideup { animation: fadein-slideup 1.1s cubic-bezier(0.4,0.15,0.2,1) forwards;}
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-100px);}
          100% { opacity: 1; transform: translateX(0);}
        }
        .animate-slide-in-left-on-scroll {
          animation: slideInLeft 1s cubic-bezier(0.4, 0.15, 0.2, 1) forwards;
          animation-delay: 0.25s;
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(100px);}
          100% { opacity: 1; transform: translateX(0);}
        }
        .animate-slide-in-right-on-scroll {
          animation: slideInRight 1s cubic-bezier(0.4, 0.15, 0.2, 1) forwards;
          animation-delay: 0.5s;
        }
      `}</style>

      {/* HERO Section */}
      <div className="w-full min-h-[260px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-0 py-12 gap-10 lg:gap-0 max-w-7xl mx-auto relative overflow-visible z-10">
        <span className="floating-circle w-36 h-36 top-8 left-10 hidden lg:block" style={{ animationDelay: "0s" }} />
        <span className="floating-circle w-24 h-24 bottom-16 right-20 hidden lg:block" style={{ animationDelay: "3s" }} />
        <div className="lg:w-1/2 w-full flex flex-col items-start justify-center text-center lg:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#16a085] mb-6 leading-tight drop-shadow-md hover-underline cursor-default">
            Dynamic Graphs & Visualizations:
            <br />
            Uncover Real-time HR Insights
          </h1>
          <p className="text-gray-900 dark:text-gray-100 text-lg md:text-xl leading-relaxed tracking-wide max-w-xl">
            In today's fast-paced environment, static reports can't keep up. Our Dynamic Graphs feature transforms complex HR data into interactive, real-time insights that adapt instantly to your needs. Empower yourself to explore, filter, and analyze your workforce like never before—right in your browser.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center relative z-10">
          <div className="relative w-full max-w-2xl h-[340px] md:h-[420px] rounded-xl shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-700 ease-in-out cursor-pointer animate-float"
            style={{ animationDuration: "5s" }}>
            <Image
              src="/hr-dashboard.jpg"
              alt="Dynamic graph dashboard illustration"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl filter saturate-110 contrast-110"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* Detailed Info Section */}
      <section className="max-w-5xl mx-auto my-20 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#16a085] text-center mb-14 tracking-wide drop-shadow-sm">
          Detailed Information about the Feature
        </h2>

        {/* Feature Points */}
        <div className="flex flex-col md:flex-row items-center mb-14 gap-7 md:gap-12 rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-6 md:p-10 hover:shadow-2xl transition-shadow duration-500 cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-left">
            <div className="w-[240px] h-[170px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <img
                src="/real-time-data.jpg"
                alt="Real-time Responsiveness"
                className="h-auto w-auto mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-right">
            <div className="flex items-center mb-3">
              <Clock size={26} className="text-[#19b395] mr-2" />
              <span className="font-semibold text-xl text-gray-800 dark:text-white">
                Real-time Responsiveness
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Every graph updates instantly as you apply filters or change parameters.
              There’s no waiting for reports—the insights are always live.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-14 gap-7 md:gap-12 md:flex-row-reverse rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-6 md:p-10 hover:shadow-2xl transition-shadow duration-500 cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-right">
            <div className="w-[240px] h-[170px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <img
                src="/6246276.jpg"
                alt="Interactive Filtering"
                className="h-full w-full mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-left">
            <div className="flex items-center mb-3">
              <Filter size={26} className="text-[#19b395] mr-2" />
              <span className="font-semibold text-xl text-gray-800 dark:text-white">
                Interactive Filtering
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Drill down with multiple filters. Segment your workforce by department, unit, location and more for interactive, instant views.
            </p>
          </div>
        </div>

        {/* Metrics coverage panel */}
        <div className="relative flex flex-col md:flex-row items-center mb-16 gap-10 md:gap-16 rounded-3xl shadow-2xl bg-gradient-to-br from-[#e9f7f6] via-[#f4faf7] to-[#fafffd] dark:from-[#11201c] dark:via-[#183c31] dark:to-[#1b3132] border border-[#22d3aa] dark:border-[#145749] p-9 md:p-12 overflow-hidden hover:shadow-xl transition-shadow duration-500 cursor-default fadein-from-right">
          <div className="md:w-1/2 w-full flex items-center justify-center relative">
            <svg viewBox="0 0 260 200" className="w-[280px] h-[200px] rounded-xl" fill="none" aria-label="Data metrics illustration" role="img">
              <g>
                <rect x="20" y="130" width="40" height="40" rx="8" fill="#a7f3d0" />
                <rect x="70" y="80" width="40" height="90" rx="8" fill="#5eead4" />
                <rect x="120" y="60" width="40" height="110" rx="8" fill="#2dd4bf" />
                <rect x="170" y="30" width="40" height="140" rx="8" fill="#14b8a6" />
                <circle cx="210" cy="60" r="16" fill="#22d3ee" opacity="0.7" />
                <circle cx="40" cy="100" r="10" fill="#a7f3d0" opacity="0.6" />
              </g>
              <g>
                <polyline
                  points="78,90 128,70 178,40"
                  stroke="#0e8074"
                  strokeWidth="3"
                  fill="none"
                  className="animate-metricline"
                />
              </g>
              <style>{`
                .animate-metricline {
                  stroke-dasharray: 100;
                  stroke-dashoffset: 100;
                  animation: animetricline 2s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
                }
                @keyframes animetricline {
                  to { stroke-dashoffset: 0; }
                }
              `}</style>
            </svg>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#e6faf5] dark:bg-[#165e50] inline-flex items-center justify-center w-11 h-11 rounded-full">
                <BarChart3 size={28} className="text-[#19b395]" />
              </span>
              <span className="font-bold text-2xl text-gray-900 dark:text-white tracking-wide">
                Comprehensive Metric Coverage
              </span>
            </div>
            <div className="bg-white/70 dark:bg-[#17433b]/70 rounded-xl shadow px-6 py-5 mt-2">
              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
                <li className="flex items-start gap-3 group">
                  <Users size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <span className="font-semibold text-gray-800 dark:text-white">Headcount:</span>
                    <span className="ml-1">Analyze employee distribution by department, role, or trend.</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <DollarSign size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <span className="font-semibold text-gray-800 dark:text-white">Salary Distribution:</span>
                    <span className="ml-1">See pay equity, salary ranges, outliers and more.</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <ListChecks size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <span className="font-semibold text-gray-800 dark:text-white">FTE:</span>
                    <span className="ml-1">Track workforce allocation and capacity.</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Clock size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <span className="font-semibold text-gray-800 dark:text-white">Absenteeism:</span>
                    <span className="ml-1">Monitor leave and absence patterns in real-time.</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <AlertCircle size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <span className="font-semibold text-gray-800 dark:text-white">High Risk/Turnover:</span>
                    <span className="ml-1">Spot at-risk segments and take action early.</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-7 md:gap-12 md:flex-row-reverse rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-6 md:p-10 hover:shadow-2xl transition">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-right">
            <div className="w-[240px] h-[170px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <img
                src="/ui-ux.jpg"
                alt="User-Friendly Interface"
                className="h-full w-auto mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-left">
            <div className="flex items-center mb-3">
              <CheckCircle size={26} className="text-[#19b395] mr-2" />
              <span className="font-semibold text-xl text-gray-800 dark:text-white">
                User-Friendly Interface
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Built for HR professionals, not data scientists. Drag-and-drop filtering and clear visuals make data exploration effortless and intuitive.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-[#19b395] text-center mb-10 hover-underline cursor-default">
          How Dynamic Graphs Benefit You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map(({ img, alt, title, desc }, idx) => (
            <div
              key={idx}
              className="benefit-card bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl"
              tabIndex={0}
              role="button"
              aria-pressed="false"
            
            >
              <img src={img} alt={alt} width={70} height={60} className="mb-4 object-contain" />
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Section */}
      <section
        className="max-w-4xl mx-auto px-6 py-12 relative"
        ref={roiSectionRef}
      >
        <div
          className={`relative rounded-3xl border border-[#ecfdfa] dark:border-[#184b41]
          bg-gradient-to-br from-[#f6fdfa] via-[#e8faf5] to-[#ffffff]
          dark:bg-gradient-to-br dark:from-[#163e37] dark:via-[#184b41] dark:to-[#232c27]
          shadow-2xl overflow-hidden p-8 transition-shadow duration-700
          ${roiAnimate ? "animate-slide-in-left-on-scroll" : "opacity-0 pointer-events-none"}
          `}
          style={{
            boxShadow:
              "0 6px 32px 0 rgba(25, 179, 149, 0.067), 0 1.5px 4.5px 0 rgba(25, 179, 149, 0.11)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Text */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#19b395] mb-7 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e6faf5] dark:bg-[#165e50] mr-2">
                  <DollarSign size={26} className="text-[#19b395]" />
                </span>
                ROI (Return on Investment)
              </h2>
              <ul className="grid gap-6 pt-2 md:pt-4 pb-2 md:pb-6">
                <li className="flex items-start gap-4">
                  <span className="inline-block mt-1 w-3 h-3 rounded-full bg-[#19b395] opacity-80 shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 text-base leading-relaxed">
                    <b>Saving Time & Resources:</b> Reduce manual reporting and IT dependency, freeing up hundreds of hours annually.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-block mt-1 w-3 h-3 rounded-full bg-[#19b395] opacity-80 shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 text-base leading-relaxed">
                    <b>Improved Decision Quality:</b> Respond quickly to challenges and optimize workforce planning with real-time data.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-block mt-1 w-3 h-3 rounded-full bg-[#19b395] opacity-80 shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 text-base leading-relaxed">
                    <b>Boosting HR Productivity:</b> Let your HR teams focus on strategy, not manual data prep.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-block mt-1 w-3 h-3 rounded-full bg-[#19b395] opacity-80 shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 text-base leading-relaxed">
                    <b>Better Employee Outcomes:</b> Quickly identify and address issues for higher satisfaction and retention.
                  </span>
                </li>
              </ul>
            </div>
            {/* Right: ROI Infographic */}
            <div
              className={`md:w-1/2 flex justify-end relative w-full md:min-w-[340px] ${roiAnimate ? "animate-slide-in-right-on-scroll" : "opacity-0 pointer-events-none"}`}
              style={{ height: "420px" }}
            >
              <Image
                src="/generated-image.png"
                alt="ROI infographic"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
