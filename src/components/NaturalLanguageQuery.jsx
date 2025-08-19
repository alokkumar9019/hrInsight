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

export default function NaturalLanguageQuery() {
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

  // Feature points data
  const featurePoints = [
    {
      img: "/Untitled-design.png",
      icon: <Clock size={26} className="text-[#19b395] mr-2" />,
      title: "Intuitive Questioning",
      desc:
        'Forget complex SQL queries or navigating intricate menus. Simply type your question in everyday language (e.g., "Which year had the highest number of hires?" or "Are there any departments overpaying or underpaying related to others?").',
      layout: "left",
    },
    {
      img: "/real-time-data.jpg",
      icon: <Filter size={26} className="text-[#19b395] mr-2" />,
      title: "Persona-Based Curation",
      desc:
        "The system understands different user roles. Each user persona, such as a Hiring Manager or an HR Analyst, is presented with a curated list of relevant, real-world operational questions tailored to their specific goals and responsibilities. This guides users to impactful insights.",
      layout: "right",
    },
    {
      img: "/instant-visual.jpg",
      icon: <BarChart3 size={26} className="text-[#19b395] mr-2" />,
      title: "Instant Visual Responses",
      desc:
        "Visual answers are provided immediately to natural language queries, making data interpretation accessible to everyone.",
      layout: "left",
    },
    {
      img: "/200-prebuilt-dash.jpg",
      icon: <CheckCircle size={26} className="text-[#19b395] mr-2" />,
      title: "Real-World Operational Relevance",
      desc:
        "The suggested questions and the system's understanding are built around the practical, day-to-day challenges and informational needs of HR professionals, ensuring answers are always actionable.",
      layout: "right",
    },
    {
      img: "/democratic-data-access.jpg",
      icon: <Clock size={26} className="text-[#19b395] mr-2" />,
      title: "Democratized Data Access",
      desc:
        "This feature breaks down barriers to data access, making sophisticated analytics available to non-technical users across the organization, fostering a truly data-driven culture.",
      layout: "left",
    },
  ];

  // Benefit cards data
  const benefitCards = [
    {
      img: "/graph.jpg",
      alt: "Ease of Use",
      title: "Unprecedented Ease of Use",
      desc: "Eliminates the learning curve associated with traditional reporting tools, making data accessible to everyone.",
    },
    {
      img: "/men-with-laptop.jpg",
      alt: "Accelerated Insight",
      title: "Accelerated Insight Discovery",
      desc: "Get answers instantly, enabling faster reaction to emerging trends or critical issues.",
    },
    {
      img: "/bar-chart.jpg",
      alt: "Reduced IT Dependency",
      title: "Reduced Dependency on IT",
      desc: "Empower your HR team to self-serve their data needs, freeing up IT resources for other strategic initiatives.",
    },
    {
      img: "/pie-chart.jpg",
      alt: "Improved Decision Making",
      title: "Enhanced Decision-Making Speed",
      desc: "Direct access to answers means decisions can be made on the spot, rather than waiting for reports or analyses.",
    },
    {
      img: "/analytics-plan-strategy-insight-concept.jpg",
      alt: "User Adoption",
      title: "Improved User Adoption",
      desc: "The intuitive nature encourages broader engagement with HR data, fostering a more data-literate workforce.",
    },
    {
      img: "/statistic.jpg",
      alt: "Empowered Managers",
      title: "Empowered Front-Line Managers",
      desc: "Give managers the power to quickly get insights on their teams without needing HR's constant intervention.",
    },
  ];

  // ROI cards data
  const roiBenefits = [
    {
      icon: "⏰",
      title: "Significant Time Savings",
      desc: "Reduce countless hours spent by HR and IT teams on fulfilling ad-hoc reporting requests and training users on complex systems.",
    },
    {
      icon: "👷",
      title: "Increased Productivity",
      desc: "Empower employees across departments to quickly find their own answers, accelerating workflows and reducing bottlenecks.",
    },
    {
      icon: "⚡",
      title: "Faster Problem Resolution",
      desc: "Rapidly identify and address workforce issues by getting immediate answers to specific questions, preventing costly escalations.",
    },
    {
      icon: "🚀",
      title: "Improved Data Utilization",
      desc: "Ease of access encourages more frequent and diverse queries, leading to better utilization of HR data and new insights.",
    },
    {
      icon: "💲",
      title: "Reduced Training Costs",
      desc: "Minimal training required for users to leverage this intuitive feature, leading to lower onboarding expenses.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen px-0 relative overflow-visible">
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }
        @keyframes slideInX {
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
          animation: slideInX 1s cubic-bezier(0.41, 0.21, 0.19, 0.98) forwards;
        }
        .fadein-from-right {
          --slide-from: 48px;
          animation: slideInX 1s cubic-bezier(0.41, 0.21, 0.19, 0.98) forwards;
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
        .icon-container:hover svg,
        .metric-list li:hover svg {
          transform: scale(1.18);
          stroke: #119c89 !important;
          transition: stroke 0.28s, transform 0.25s;
        }
        .benefit-card:hover {
          box-shadow: 0 10px 22px rgba(25, 179, 149, 0.15);
          transform: translateY(-7px) scale(1.022);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .roi-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .roi-card:hover {
          box-shadow: 0 0 15px 3px rgba(25, 179, 149, 0.4);
          transform: translateX(6px);
          background-color: rgba(25, 179, 149, 0.05);
          animation: pulseGlow 1.4s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 6px 1px rgba(17, 156, 137, 0.3);
          }
          100% {
            box-shadow: 0 0 18px 6px rgba(17, 156, 137, 0.9);
          }
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
      <div className="w-full min-h-[260px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-0 py-12 gap-10 lg:gap-0 max-w-7xl mx-auto relative overflow-visible z-10">
        {/* Floating circles */}
        <span
          className="floating-circle w-36 h-36 top-8 left-10 hidden lg:block"
          style={{ animationDelay: "0s" }}
        />
        <span
          className="floating-circle w-24 h-24 bottom-16 right-20 hidden lg:block"
          style={{ animationDelay: "3s" }}
        />

        {/* Text */}
        <div className="lg:w-1/2 w-full flex flex-col items-start justify-center text-center lg:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#19b395] mb-6 leading-tight drop-shadow-md hover-underline cursor-default">
            Talk to Your Data: Get Instant Answers, No Code Required.
          </h1>
          <p className="text-gray-900 dark:text-gray-100 text-lg md:text-xl leading-relaxed tracking-wide max-w-xl">
            Imagine getting precise HR insights simply by asking a question, just like you would a colleague. Our Natural Language Query feature transforms complex data into accessible answers, empowering every user—from hiring managers to HR analysts—to find the information they need, exactly when they need it, in plain English.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full flex justify-center relative z-10">
          <div
            className="relative w-full max-w-2xl h-[340px] md:h-[420px] rounded-xl shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-700 ease-in-out cursor-pointer animate-float"
            style={{ animationDuration: "5s" }}
          >
            <Image
              src="/translator-dictionary-language-interpreter.jpg"
              alt="Natural Language Query Illustration"
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
        <h2 className="text-3xl font-bold text-[#19b395] text-center mb-10 hover-underline cursor-default">
          Detailed Information about the Feature
        </h2>

        {featurePoints.map((point, idx) => {
          const imgSection = point.img ? (
            <div className="w-[240px] h-[170px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <img
                src={point.img}
                alt={point.title}
                className="h-full w-full mx-auto rounded-xl shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-[240px] h-[170px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <span className="text-[#19b395] font-semibold">[Upload Image Here]</span>
            </div>
          );

          const left = (
            <div className="md:w-1/2 w-full flex justify-center fadein-from-left">
              {imgSection}
            </div>
          );
          const right = (
            <div className="md:w-1/2 w-full fadein-from-right">
              <div className="flex items-center mb-3 cursor-default">
                {point.icon}
                <span className="font-semibold text-xl text-gray-800 dark:text-white">{point.title}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base">{point.desc}</p>
            </div>
          );

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center mb-14 gap-7 md:gap-12 rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-6 md:p-10 hover:shadow-2xl transition-shadow duration-500 cursor-default ${
                point.layout === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {left}
              {right}
            </div>
          );
        })}
      </section>

      {/* BENEFITS Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-[#19b395] text-center mb-10 hover-underline cursor-default">
          Benefits of the Feature
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {benefitCards.map(({ img, alt, title, desc }, idx) => (
            <div
              key={idx}
              className="benefit-card bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition duration-400 ease-in-out"
              tabIndex={0}
              role="button"
              aria-pressed="false"
            >
              <img src={img} alt={alt} width={70} height={70} className="mb-4 object-contain" />
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Section */}
      <section
        className="max-w-5xl mx-auto px-6 py-16"
        ref={roiSectionRef}
        aria-label="Return on Investment Benefits"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-[#18ae91] flex items-center gap-3 mb-8 hover-underline cursor-default">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e6faf5] dark:bg-[#165e50]">
              <DollarSign size={30} className="text-[#18ae91]" />
            </span>
            ROI (Return on Investment)
          </h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 w-full max-w-4xl">
            {roiBenefits.map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className={`roi-card w-60 flex flex-col items-center rounded-xl shadow-md p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center`}
                style={{
                  animation: roiAnimate
                    ? `slideInX 0.8s cubic-bezier(0.41,0.21,0.19,0.98) forwards ${i * 0.15}s`
                    : "none",
                  opacity: roiAnimate ? 1 : 0,
                  transform: roiAnimate ? "translateX(0)" : i % 2 === 0 ? "translateX(-48px)" : "translateX(48px)",
                }}
                tabIndex={0}
              >
                <div className="text-4xl mb-2 text-[#61646b]">{icon}</div>
                <div className="font-semibold text-black mb-1">{title}</div>
                <div className="text-[#61646b] text-sm">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
