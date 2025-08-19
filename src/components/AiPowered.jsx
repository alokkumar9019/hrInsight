"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  BarChart3,
  Clock,
  Filter,
  DollarSign,
  Users,
  UserCheck,
  UserPlus,
  BarChart2,
} from "lucide-react";

export default function AiPowered() {
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

  // Feature points data (for alternated layouts)
  const featurePoints = [
    {
      img: "/pattern-recognition.jpg",
      icon: <Clock size={26} className="text-[#19b395] mr-2" />,
      title: "Automated Pattern Recognition",
      desc: "Our AI algorithms automatically scan vast amounts of HR data to identify significant trends, correlations, and anomalies that might be missed through manual analysis.",
      layout: "left",
    },
    {
      img: "/real-time-data.jpg",
      icon: <Filter size={26} className="text-[#19b395] mr-2" />,
      title: "Intelligent Narrative Generation",
      desc: 'The platform doesn\'t just show you numbers; it generates clear, concise narratives explaining the "why" behind the data. It highlights key patterns and areas of concern (e.g., "Increase in voluntary turnover within Sales for employees with 2-5 years tenure").',
      layout: "right",
    },
    {
      img: "/risk-assessment.jpg",
      icon: <BarChart3 size={26} className="text-[#19b395] mr-2" />,
      title: "Proactive Identification of Risks & Opportunities",
      desc: "The AI can predict potential future challenges, such as skill gaps or rising attrition risks, enabling preemptive action, and highlights opportunities you may not have seen otherwise.",
      layout: "left",
    },
    {
      img: "/targetable-and-actionable.jpg",
      icon: <CheckCircle size={26} className="text-[#19b395] mr-2" />,
      title: "Targeted & Actionable Recommendations",
      desc: 'Goes beyond identifying issues: you get specific, data-backed recommendations (e.g., "Conduct retention interviews with mid-career Sales employees" or "Launch upskilling for Data Science roles").',
      layout: "right",
    },
    {
      img: "/customized-analysis.jpg",
      icon: <Clock size={26} className="text-[#19b395] mr-2" />,
      title: "Customized Analysis on Demand",
      desc: "Select multiple reports for AI-powered, cross-sectional analysis and recommendations across any workforce dimension you choose.",
      layout: "left",
    },
  ];

  // Benefit cards data
  const benefitCards = [
    {
      img: "/graph.jpg",
      alt: "Proactive HR",
      title: "Shift from Reactive to Proactive",
      desc: "Anticipate challenges and opportunities before they materialize, enabling more strategic HR management.",
    },
    {
      img: "/men-with-laptop.jpg",
      alt: "Hidden Insights",
      title: "Uncover Hidden Insights",
      desc: "Reveal valuable patterns and correlations that would be difficult or time-consuming to find manually.",
    },
    {
      img: "/bar-chart.jpg",
      alt: "Decision Quality",
      title: "Improve Decision Quality",
      desc: "Make strategic choices based on intelligent, data-driven recommendations for better outcomes.",
    },
    {
      img: "/pie-chart.jpg",
      alt: "Efficiency",
      title: "Increase Efficiency & Focus",
      desc: "Let AI handle deep analysis so your HR team can focus on strategic work, not number crunching.",
    },
    {
      img: "/predictive-insight.jpg",
      alt: "Competitive Advantage",
      title: "Gain a Competitive Advantage",
      desc: "Use predictive insights to optimize hiring, development, and retention for a true strategic edge.",
    },
    {
      img: "/statistic.jpg",
      alt: "Data-Backed Justification",
      title: "Data-Backed Justification for Initiatives",
      desc: "Use AI insights to build compelling business cases for new programs and HR investments.",
    },
  ];

  // ROI Benefit cards (icon as JSX components)
  const roiBenefits = [
    {
      icon: <UserCheck size={40} className="text-[#19b395]" />,
      title: "Reduced Turnover Costs",
      desc: "Proactively addressing attrition risks identified by AI significantly lowers recruitment, onboarding, and lost productivity costs.",
    },
    {
      icon: <UserPlus size={40} className="text-[#19b395]" />,
      title: "Optimized Talent Acquisition",
      desc: "AI can reveal key factors for successful hires, leading to more efficient recruitment and reduced time-to-hire.",
    },
    {
      icon: <Users size={40} className="text-[#19b395]" />,
      title: "Improved Employee Engagement & Performance",
      desc: "Identifying and addressing issues before they get costly creates a more engaged, productive organization.",
    },
    {
      icon: <BarChart2 size={40} className="text-[#19b395]" />,
      title: "Enhanced Workforce Planning",
      desc: "Predictive insights enable highly accurate, cost-effective capacity and skill planning.",
    },
    {
      icon: <CheckCircle size={40} className="text-[#19b395]" />,
      title: "Minimized Risk & Improved Compliance",
      desc: "Spotting potential compliance risks early means fewer surprises and more peace of mind.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen px-0 relative overflow-visible">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0);}
          50% {transform: translateY(-14px);}
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
          color: #119c89;
        }
        .hover-underline {
          background-image: linear-gradient(to right, #119c89 0%, #119c89 100%);
          background-repeat: no-repeat;
          background-size: 100% 2px;
          background-position: 0 100%;
          transition: background-position 0.3s, color 0.3s;
        }
        .icon-container:hover svg, .metric-list li:hover svg {
          transform: scale(1.18);
          stroke: #119c89 !important;
          transition: stroke 0.28s, transform 0.25s;
        }
        .benefit-card:hover {
          box-shadow: 0 10px 24px rgba(25,179,149,0.17);
          transform: translateY(-7px) scale(1.025);
          transition: all 0.3s ease;
        }
        .roi-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .roi-card:hover {
          box-shadow: 0 0 15px 3px rgba(25,179,149,0.45);
          transform: translateX(6px);
          background-color: rgba(25,179,149,0.06);
          animation: pulseGlow 1.4s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 6px 1px rgba(25,179,149,0.18);}
          100% { box-shadow: 0 0 18px 6px rgba(25,179,149,0.53);}
        }
        .floating-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.13;
          animation: float 6s ease-in-out infinite;
          background: linear-gradient(43deg, #14b8a6, #22c55e 90%);
          filter: blur(7.5px);
          z-index: 0;
        }
      `}</style>

      {/* HERO */}
      <div className="w-full min-h-[260px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-0 py-12 gap-10 lg:gap-0 max-w-7xl mx-auto relative overflow-visible">
        <span className="floating-circle w-36 h-36 top-8 left-10 hidden lg:block" style={{ animationDelay: "0s" }} />
        <span className="floating-circle w-24 h-24 bottom-16 right-20 hidden lg:block" style={{ animationDelay: "3s" }} />

        {/* Text Column */}
        <div className="lg:w-1/2 w-full flex flex-col items-start justify-center text-center lg:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#19b395] mb-6 leading-tight drop-shadow-md hover-underline">
            Go Beyond Data: Intelligent Insights That Drive Strategic Action.
          </h1>
          <p className="text-gray-900 dark:text-gray-100 text-lg md:text-xl leading-relaxed tracking-wide max-w-xl">
            Stop just reporting on the past—shape the future of your workforce. Our AI-Powered Insights & Recommendations analyze your HR data, uncovering hidden patterns, predicting challenges, and delivering clear, actionable advice to optimize your people strategy.
          </p>
        </div>
        {/* Image Column */}
        <div className="lg:w-1/2 w-full flex justify-center relative z-10">
          <div className="relative w-full max-w-2xl h-[340px] md:h-[420px] rounded-xl shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-700 ease-in-out cursor-pointer animate-float"
            style={{ animationDuration: "5s" }}>
            <Image
              src="/go-beyond-data.jpg"
              alt="AI-powered insights dashboard"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl filter saturate-110 contrast-110"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* FEATURE POINTS */}
      <section className="max-w-5xl mx-auto my-16 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#19b395] text-center mb-10 hover-underline">
          Detailed Information about the Feature
        </h2>
        {featurePoints.map((point, idx) => {
          const imgSection = (
            <div className="w-[240px] h-[170px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <img src={point.img} alt={point.title} className="h-full w-full mx-auto rounded-xl shadow-lg object-cover" loading="lazy" />
            </div>
          );
          const left = (
            <div className="md:w-1/2 w-full flex justify-center fadein-from-left">
              {imgSection}
            </div>
          );
          const right = (
            <div className="md:w-1/2 w-full fadein-from-right">
              <div className="flex items-center mb-3">{point.icon}
                <span className="font-semibold text-xl text-gray-800 dark:text-white">{point.title}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base">{point.desc}</p>
            </div>
          );
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center mb-14 gap-7 md:gap-12 rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-6 md:p-10 hover:shadow-2xl transition-shadow duration-500 cursor-default ${point.layout === "right" ? "md:flex-row-reverse" : ""}`}
            >
              {left}
              {right}
            </div>
          );
        })}
      </section>

      {/* BENEFITS Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-[#19b395] text-center mb-10 hover-underline">
          Benefits of the Feature
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {benefitCards.map(({ img, alt, title, desc }, idx) => (
            <div
              key={idx}
              className="benefit-card bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition duration-400 ease-in-out"
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

      {/* ROI SECTION */}
      <section
        className="max-w-5xl mx-auto px-6 py-16"
        ref={roiSectionRef}
        aria-label="Return on Investment Benefits"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-[#18ae91] flex items-center gap-3 mb-8 hover-underline">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e6faf5] dark:bg-[#165e50]">
              <DollarSign size={30} className="text-[#18ae91]" />
            </span>
            ROI (Return on Investment)
          </h2>
          <div className="relative flex justify-center items-center w-full">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 w-full max-w-4xl">
              {roiBenefits.map(({ icon, title, desc }, i) => (
                <div
                  key={i}
                  className="roi-card w-60 flex flex-col items-center rounded-xl shadow-md p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center"
                  style={{
                    animation: roiAnimate
                      ? `slideInX 0.8s cubic-bezier(0.41,0.21,0.19,0.98) forwards ${i * 0.15}s`
                      : "none",
                    opacity: roiAnimate ? 1 : 0,
                    transform: roiAnimate
                      ? "translateX(0)"
                      : i % 2 === 0
                        ? "translateX(-48px)"
                        : "translateX(48px)",
                  }}
                  tabIndex={0}
                >
                  <div className="text-3xl mb-2 text-[#61646b]">{icon}</div>
                  <div className="font-semibold text-black mb-1">{title}</div>
                  <div className="text-[#61646b] text-sm">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
