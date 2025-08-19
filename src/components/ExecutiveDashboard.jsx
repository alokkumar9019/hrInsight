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

export default function ExecutiveDashboard() {
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

  // Data for benefits and ROI sections:
  const benefits = [
    {
      img: "/decision-making.jpg",
      alt: "Bar Chart",
      title: "Accelerated Decision-Making",
      desc: "Gain instant clarity on workforce health, enabling rapid, data-driven responses to evolving business needs.",
    },
    {
      img: "/men-with-laptop.jpg",
      alt: "Pie Chart",
      title: "Proactive Strategic Planning",
      desc: "Identify potential challenges and opportunities early (e.g., anticipating high turnover periods) allowing for proactive policy adjustments and workforce planning.",
    },
    {
      img: "/bar-chart.jpg",
      alt: "Line Chart",
      title: "Enhanced Oversight & Accountability",
      desc: "Keep a pulse on critical HR processes like performance reviews, ensuring compliance and timely completion across departments.",
    },
    {
      img: "/pie-chart.jpg",
      alt: "Table illustration",
      title: "Improved Stakeholder Communication",
      desc: "Easily share clear, compelling workforce data with executive teams, board members, and other stakeholders, fostering trust and aligning strategic goals.",
    },
    {
      img: "/statistic.jpg",
      alt: "Dashboard",
      title: "Time Savings",
      desc: "Eliminate the need for manually compiling data from disparate sources, freeing up valuable time for strategic analysis and leadership.",
    },
  ];

  const roiBenefits = [
    {
      icon: "🕵️‍♂️",
      title: "Reduced Attrition Costs",
      desc: "Lower recruitment and training costs by swiftly tackling retention trends.",
    },
    {
      icon: "👷",
      title: "Optimized Workforce Efficiency",
      desc: "Real-time FTE/resource allocation prevents over/understaffing and boosts productivity.",
    },
    {
      icon: "🛡️",
      title: "Faster Compliance & Risk Mitigation",
      desc: "Proactive HR monitoring cuts compliance risk and keeps tasks on track.",
    },
    {
      icon: "🚀",
      title: "Strategic Alignment & Growth",
      desc: "Empower executives with analytics for planning and business growth.",
    },
    {
      icon: "🤝",
      title: "Increased HR Efficiency",
      desc: "Reduce manual HR reporting, freeing teams for high-value initiatives.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen px-0 relative overflow-visible">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0);}
          50% {transform: translateY(-12px);}
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
        .roi-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .roi-card:hover {
          box-shadow: 0 0 15px 3px rgba(5,150,105,0.5);
          transform: translateX(6px);
          background-color: rgba(5,150,105,0.05);
          animation: pulseGlow 1.4s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 6px 1px rgba(22,160,133,0.3);}
          100% { box-shadow: 0 0 18px 6px rgba(22,160,133,0.9);}
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
      `}</style>

      {/* HERO Section */}
      <div className="w-full min-h-[260px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-0 py-12 gap-10 lg:gap-0 max-w-7xl mx-auto relative overflow-visible z-10">
        <span className="floating-circle w-36 h-36 top-8 left-10 hidden lg:block" style={{ animationDelay: "0s" }} />
        <span className="floating-circle w-24 h-24 bottom-16 right-20 hidden lg:block" style={{ animationDelay: "3s" }} />

        <div className="lg:w-1/2 w-full flex flex-col items-start justify-center text-center lg:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#19b395] mb-6 leading-tight drop-shadow-md hover-underline cursor-default">
            Strategic HR at Your Fingertips: Intuitive Dashboards, Instant Insights.
          </h1>
          <p className="text-gray-900 dark:text-gray-100 text-lg md:text-xl leading-relaxed tracking-wide max-w-xl">
            For HR leaders and executives, time is of the essence. Our Executive Dashboards provide a powerful, real-time visual summary of your key workforce metrics, instantly delivering the critical insights you need to monitor performance, identify trends, and make informed strategic decisions at a glance.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center relative z-10">
          <div className="relative w-full max-w-2xl h-[340px] md:h-[420px] rounded-xl shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-700 ease-in-out cursor-pointer animate-float"
            style={{ animationDuration: "5s" }}>
            <Image
              src="/dashboard2.png"
              alt="Dynamic graph dashboard illustration"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl filter saturate-110 contrast-100"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* DETAILED INFO Section */}
      <section className="max-w-5xl mx-auto my-16 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#19b395] text-center mb-10 hover-underline cursor-default">
          Detailed Information about the Feature
        </h2>
        <div className="flex flex-col md:flex-row items-center mb-14 gap-7 md:gap-12 rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-6 md:p-10 hover:shadow-2xl cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-left">
            <div className="w-[240px] h-[170px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <img src="/comprehensive-summary.jpg" alt="Comprehensive Visual Summary" className="h-full w-full mx-auto rounded-xl shadow-lg object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-right">
            <div className="flex items-center mb-3"><Clock size={26} className="text-[#19b395] mr-2" />
              <span className="font-semibold text-xl text-gray-800 dark:text-white">
                Comprehensive Visual Summary
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Get a holistic view of your organization's human capital. Each dashboard is a curated collection of key performance indicators (KPIs) and critical HR metrics presented in easy-to-understand charts and graphs.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-14 gap-7 md:gap-12 md:flex-row-reverse rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-6 md:p-10 hover:shadow-2xl cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-right">
            <div className="w-[240px] h-[170px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <img src="/real-time-data.jpg" alt="Real-time Data Refresh" className="h-full w-auto mx-auto rounded-xl shadow-lg object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-left">
            <div className="flex items-center mb-3"><Filter size={26} className="text-[#19b395] mr-2" />
              <span className="font-semibold text-xl text-gray-800 dark:text-white">
                Real-time Data Refresh
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Data is always up-to-date, reflecting the most current state of your workforce. This ensures decisions are based on accurate, live information, not outdated reports.
            </p>
          </div>
        </div>

        {/* Metrics glance panel */}
        <div className="relative flex flex-col md:flex-row items-center mb-16 gap-10 md:gap-16 rounded-3xl shadow-2xl bg-gradient-to-br from-[#e9f7f6] via-[#f4faf7] to-[#fafffd] dark:from-[#11201c] dark:via-[#183c31] dark:to-[#1b3132] border border-[#22d3aa] dark:border-[#145749] p-9 md:p-12 overflow-hidden hover:shadow-xl cursor-default fadein-from-right">
          <div className="md:w-1/2 w-full flex items-center justify-center relative">
            <svg viewBox="0 0 260 200" className="w-[280px] h-[200px] rounded-xl" fill="none" aria-label="Workforce metrics illustration" role="img">
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
                Key Workforce Metrics at a Glance
              </span>
            </div>
            <div className="bg-white/70 dark:bg-[#17433b]/70 rounded-xl shadow px-6 py-5 mt-2">
              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
                <li className="flex items-start gap-3 group">
                  <Users size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <b className="text-gray-800 dark:text-white">Performance Document Status:</b>
                    <span className="ml-1 text-gray-700 dark:text-gray-200">
                      Monitor performance review progress and spot bottlenecks (e.g., "Most performance documents are in progress... needs monitoring to ensure timely closure").
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <DollarSign size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <b className="text-gray-800 dark:text-white">Termination & Retention Rates:</b>
                    <span className="ml-1 text-gray-700 dark:text-gray-200">
                      Understand when attrition spikes, the percentage retained, and correlate with business events to act early.
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <ListChecks size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <b className="text-gray-800 dark:text-white">Diversity & Inclusion Metrics:</b>
                    <span className="ml-1 text-gray-700 dark:text-gray-200">
                      Track D&I progress with instant demographic charts.
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Clock size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <b className="text-gray-800 dark:text-white">Recruitment Funnel Health:</b>
                    <span className="ml-1 text-gray-700 dark:text-gray-200">
                      See applicant flow, time-to-hire, and source effectiveness at a glance.
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <AlertCircle size={19} className="mt-1 text-[#14b8a6] group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    <b className="text-gray-800 dark:text-white">And More:</b>
                    <span className="ml-1 text-gray-700 dark:text-gray-200">
                      Access a wide range of dashboards covering talent, compensation, L&D, compliance and more.
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-7 md:gap-12 md:flex-row-reverse rounded-2xl shadow-xl bg-gradient-to-br from-[#f8fcfa] via-[#f4faf7] to-white dark:from-[#1a2a25] dark:via-[#183a33] dark:to-[#232c27] border border-[#e8faf5] dark:border-[#25554d] p-6 md:p-10 hover:shadow-2xl duration-300 cursor-default">
          <div className="md:w-1/2 w-full flex justify-center fadein-from-right">
            <div className="w-[240px] h-[170px] flex items-center justify-center bg-[#e4f9f3] dark:bg-[#122722] rounded-xl shadow-lg">
              <img src="/200-prebuilt-dash.jpg" alt="200+ Pre-Built Dashboards" className="h-full w-auto mx-auto rounded-xl shadow-lg object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 w-full fadein-from-left">
            <div className="flex items-center mb-3"><CheckCircle size={26} className="text-[#19b395] mr-2" />
              <span className="font-semibold text-xl text-gray-800 dark:text-white">
                200+ Pre-Built Dashboards
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Access an extensive library of ready-to-use dashboards for every major HR domain—built on industry best practices, with no custom development required.
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
              <img src={img} alt={alt} width={80} height={60} className="mb-4 object-contain" />
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
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
