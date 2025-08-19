"use client";

import PreddixxLogo from "./PreddixxLogo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Users,
  DollarSign,
  Clock,
  UserPlus,
  UserMinus,
  ChartColumn,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Modules", id: "modules" },
    { label: "Why PREDDIX", href: "/why-preddix" },
    { label: "Resources" },
    { label: "Pricing" },
  ];

  const handleNavScroll = async (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (pathname === "/") {
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  useEffect(() => {
    const handleRouteChange = () => setMenuOpen(false);
    router.events?.on("routeChangeComplete", handleRouteChange);
    return () => router.events?.off("routeChangeComplete", handleRouteChange);
  }, [router]);

  return (
    <>
      <style jsx>{`
        .glass-header {
          background: rgba(255, 255, 255, 0.68);
          /* Add a soft glassmorphism effect */
          box-shadow: 0 12px 36px 0 rgba(57, 163, 138, 0.05),
            0 2px 10px 0 rgba(25, 179, 149, 0.07);
          border-bottom: 1.5px solid rgba(27, 50, 44, 0.12);
          backdrop-filter: blur(10px);
        }
        .glass-card {
          box-shadow: 0 9px 34px 0 rgba(25, 179, 149, 0.13),
            0 2px 5px 0 rgba(25, 179, 149, 0.07);
          backdrop-filter: blur(6px);
        }
        .menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(13, 43, 43, 0.44);
          z-index: 49;
          transition: opacity 0.19s cubic-bezier(0.4, 0, 0.2, 1);
          display: ${menuOpen ? "block" : "none"};
          opacity: ${menuOpen ? 1 : 0};
          pointer-events: ${menuOpen ? "auto" : "none"};
        }
        @media (max-width: 900px) {
          .header-bottom-row {
            flex-wrap: wrap;
            gap: 16px;
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>
      {/* Glassy fixed nav bar */}
      <div className="fixed top-0 left-0 w-full glass-header z-[60]">
        <div className="header-gradient-line" />
        <div className="max-w-7xl mx-auto flex items-center ml-auto px-6 py-3 sm:py-4">
          <Link
            href="/"
            className="flex items-center w-40 md:w-56 select-none"
            aria-label="Preddixx"
          >
            <PreddixxLogo />
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-900 dark:text-white ml-auto">
            {navItems.map(({ label, id, href }) => {
              if (label === "Resources") {
                return (
                  <a
                    key={label}
                    href="/PREDDIX-Transforming-Healthcare-Workforce-Management.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link text-base bg-transparent focus:outline-none py-1 px-1 cursor-pointer font-semibold transition"
                    aria-label="Open Resources PDF"
                  >
                    {label}
                  </a>
                );
              }

              if (href) {
                // Link to another page
                return (
                  <Link
                    key={label}
                    href={href}
                    className="nav-link text-base bg-transparent focus:outline-none py-1 px-1 cursor-pointer font-semibold transition"
                    aria-label={`Go to ${label}`}
                  >
                    {label}
                  </Link>
                );
              }

              // Scroll behavior
              return (
                <button
                  key={label}
                  onClick={id ? () => handleNavScroll(id) : undefined}
                  className="nav-link text-base bg-transparent focus:outline-none py-1 px-1 cursor-pointer font-semibold transition"
                  aria-label={id ? `Scroll to ${label}` : label}
                >
                  {label}
                </button>
              );
            })}

            <button
              className="ml-6 bg-gradient-to-r from-[#2cb197] to-[#16a085] hover:from-[#119c89] hover:to-[#0e8074] text-white px-7 py-2.5 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#19b193] font-semibold transition-all duration-200"
              onClick={() => {
                if (pathname === "/") {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.pushState(null, "", "#contact");
                  }
                } else {
                  router.push("/#contact");
                }
              }}
            >
              Request a Demo
            </button>
          </nav>
        </div>
      </div>

      {/* Category row */}
      <nav className="pt-[120px] bg-[#FAFAFA] dark:bg-[#232c27] header-bottom-row flex items-center justify-center flex-wrap gap-6 px-8 py-6 border-t border-b border-[#E0E0E0] dark:border-[#184b41] transition-colors duration-500">
        <Category
          icon={<Users className="w-6 h-6" />}
          label="Headcount"
          bg="bg-[#E0F7FA]"
          text="text-[#006064]"
          hover="hover:bg-[#B2EBF2]"
        />
        <Category
          icon={<DollarSign className="w-6 h-6" />}
          label="Compensation"
          bg="bg-[#FCE4EC]"
          text="text-[#880E4F]"
          hover="hover:bg-[#F8BBD0]"
        />
        <Category
          icon={<ChartColumn className="w-6 h-6" />}
          label="FTE Analysis"
          bg="bg-[#E8F5E9]"
          text="text-[#1B5E20]"
          hover="hover:bg-[#C8E6C9]"
        />
        <Category
          icon={<Clock className="w-6 h-6" />}
          label="Absenteeism"
          bg="bg-[#FFF3E0]"
          text="text-[#E65100]"
          hover="hover:bg-[#FFE0B2]"
        />
        <Category
          icon={<UserPlus className="w-6 h-6" />}
          label="Hiring"
          bg="bg-[#E3F2FD]"
          text="text-[#0D47A1]"
          hover="hover:bg-[#BBDEFB]"
        />
        <Category
          icon={<UserMinus className="w-6 h-6" />}
          label="Turnover"
          bg="bg-[#F3E5F5]"
          text="text-[#4A148C]"
          hover="hover:bg-[#E1BEE7]"
        />
      </nav>
    </>
  );
}

function Category({ icon, label, bg, text, hover }) {
  return (
    <button
      aria-label={label}
      className={`glass-card inline-flex items-center space-x-2 px-5 py-2 rounded-full ${bg} ${hover} transition duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#19b193]`}
    >
      <span className={`w-6 h-6 flex items-center justify-center ${text}`}>
        {icon}
      </span>
      <span className="text-sm font-semibold text-[#1A1F36]">{label}</span>
    </button>
  );
}
