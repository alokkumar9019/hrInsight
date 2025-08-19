"use client";
import Image from "next/image";
import {
  Users,
  Lightbulb,
  Rocket,
  Plug,
  CheckCircle,
  HandHeart,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

const highlights = [
  {
    icon: <HandHeart size={36} className="text-[#16a085] drop-shadow" />,
    title: "Empower Your Workforce, Unlock Your People’s Potential",
    desc: "When you empower your people, great things happen. Preddix gives your HR team the tools to create a culture of success, unlocking potential and driving your business forward.",
    image: "/workforce.png",
    bg: "from-[#f8fcfa] via-[#f4faf7] to-white",
    dir: "left",
  },
  {
    icon: <Lightbulb size={36} className="text-[#e49e00] drop-shadow" />,
    title: "Smarter, Not Harder",
    desc: "Imagine no more endless spreadsheets or clunky reports. Preddix delivers intuitive, real-time insights with a click: dynamic graphs, tailored recommendations, and everything you need—right in one platform.",
    image: "/work-smarter.png",
    bg: "from-[#f6fbff] via-[#e6f5fa] to-white",
    dir: "right",
  },
  {
    icon: <Users size={36} className="text-[#19b395] drop-shadow" />,
    title: "Designed for Those Who Want to See Impact",
    desc: "From hiring managers to HR leaders, Preddix is built for everyone. Get results faster with tools that turn complex data into meaningful stories—no data science required.",
    image: "/complex.jpg",
    bg: "from-[#f8fcfa] via-[#eafcf6] to-white",
    dir: "left",
  },
  {
    icon: <CheckCircle size={36} className="text-[#19b395] drop-shadow" />,
    title: "From Insights to Action",
    desc: "Don't just look at numbers—act on them. Preddix highlights what’s happening, then guides your next steps with suggestions to optimize, retain, and outperform. Stay steps ahead.",
    image: "/insight-to-action.jpg",
    bg: "from-[#f8fcfa] via-[#eafcf6] to-white",
    dir: "right",
  },
  {
    icon: <Plug size={36} className="text-[#14a8a6] drop-shadow" />,
    title: "Seamless Integration, Zero Hassle",
    desc: "Switching HR platforms? Don't worry. Preddix integrates effortlessly with the tools you already use—Oracle, Workday, and more. All your data, one powerful experience.",
    image: "/seamless-integration.jpg",
    bg: "from-[#eefcf9] via-[#e2f7f6] to-white",
    dir: "left",
  },
  {
    icon: <Rocket size={36} className="text-[#1dd1a1] drop-shadow" />,
    title: "Fast, Fun, and Future-Ready",
    desc: "Say goodbye to frustrating workflows. Preddix is your HR partner—ready to adapt and grow as you do. With Preddix, you’re not just keeping up, you’re shaping the future.",
    image: "/ai-generated.png",
    bg: "from-[#f8fcfa] via-[#f3fafb] to-white",
    dir: "right",
  },
];

export default function WhyPreddix() {
  const roiSectionRef = useRef(null);
  const [roiAnimate, setRoiAnimate] = useState(false);

  useEffect(() => {
    if (!roiSectionRef.current) return;
    const observer = new window.IntersectionObserver(
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

  return (
    <section className="bg-white dark:bg-gray-900 pt-10 min-h-screen px-0 relative transition-colors duration-500">
      {/* Header */}
      <header className="max-w-3xl mx-auto mb-10 px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#19b193] mb-4 tracking-tight">
          Why Preddix?
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-normal">
          Not just HR analytics—your catalyst for unlocking potential, driving
          results, and shaping the future of work.
        </p>
      </header>

      <section className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto px-2">
        {highlights.map(({ icon, title, desc, image, bg }, idx) => (
          <div
            key={title}
            className={`flex md:flex-row flex-col items-center gap-6 rounded-2xl shadow-xl bg-gradient-to-br ${bg}
        dark:from-[#193035]/95 dark:via-[#2c3d3b]/90 dark:to-[#232c27]/90
        border border-[#e8faf5] dark:border-[#184b41]
        py-8 px-6 hover:shadow-2xl cursor-default transition-shadow duration-500`}
            style={{
              flex: "1 1 calc(50% - 1.5rem)",
            }}
          >
            <div className="md:w-1/2 w-full relative flex justify-center">
              <div className="relative w-full h-[180px] md:h-[235px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl shadow-lg ring-4 ring-[#16a08536]"
                  priority={idx === 0}
                />
              </div>
            </div>

            <div className="md:w-1/2 w-full flex flex-col items-start gap-3">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e6faf5] dark:bg-[#173333] shadow-md">
                {icon}
              </span>
              <h2 className="text-2xl font-bold text-[#19b193]">{title}</h2>
              <p className="text-gray-800 dark:text-gray-200">{desc}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
