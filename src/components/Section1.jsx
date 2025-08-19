"use client";

import { useRef, useState } from "react";
import Lottie from "lottie-react";
import bgAnimation from "../lotties/website.json"; // Path to your Lottie file

export default function Section1() {
  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverWatch, setHoverWatch] = useState(false);
  const videoRef = useRef(null);

  const playFullscreenVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
      video.play();
    }
  };

  return (
    <section className="relative w-full min-h-[700px] overflow-hidden">
      {/* Background overlay (optional subtle dark for text contrast) */}
      <div className="absolute inset-0 bg-black/100 z-0" />

      {/* Top Row: Heading/Paragraph on left, Animation on right */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Text Area */}
        <div>
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-tr from-[#19b193] via-[#3fe5d8] to-[#51a2ef] bg-clip-text text-transparent"
            style={{ animation: "fadeInUp 1s ease forwards" }}
          >
            Unlock HR Efficiency with <br className="hidden md:block" />
            AI-Driven Insights & Analytics
          </h1>

          <p
            className="text-white/90 text-lg md:text-xl max-w-xl mb-10"
            style={{ animation: "fadeInUp 1.2s ease forwards" }}
          >
            Transform your HR operations with real-time dashboards,
            intelligent reporting, and actionable insights that drive strategic decision-making.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-6"
            style={{ animation: "fadeInUp 1.4s ease forwards" }}
          >
            <button
              onMouseEnter={() => setHoverDemo(true)}
              onMouseLeave={() => setHoverDemo(false)}
              className={`px-7 py-3 rounded-full font-medium bg-[#18ae90] text-white shadow-lg transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#18ae90aa] ${
                hoverDemo ? "animate-pulseShadow" : ""
              }`}
            >
              Request a Demo →
            </button>

            {/* Watch Demo with black text */}
            <button
              onMouseEnter={() => setHoverWatch(true)}
              onMouseLeave={() => setHoverWatch(false)}
              onClick={playFullscreenVideo}
              className="flex items-center gap-3 px-7 py-3 rounded-full border border-black/60 backdrop-blur-lg text-white transition duration-300 hover:bg-black/10 hover:border-black cursor-pointer"
            >
              <span className="text-xl">▶️</span>
              <span>Watch Demo Video</span>
            </button>
          </div>
        </div>

        {/* Right Lottie Animation */}
        <div className="flex justify-center md:justify-end">
          <Lottie
            animationData={bgAnimation}
            loop
            autoplay
            className="absolute -top-55 -right-70 w-[1000px] h-[1000px] object-contain z-0 pointer-events-none"
             style={{ filter: 'brightness(0.6)' }}
          />
        </div>
      </div>

      {/* Video Below - Centered */}
      <div className="relative z-10 flex justify-center mt-10 px-4">
  <div className="relative bg-white/10 backdrop-blur-2xl p-3 rounded-2xl border border-white/30 shadow-2xl w-full max-w-[1024px] group">
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls
      className="rounded-xl w-full h-[360px] md:h-[480px] xl:h-[550px] object-cover"
    >
      <source src="/preddix.mp4" type="video/mp4" />
    </video>

    {/* Play Overlay */}
    <div
      onClick={playFullscreenVideo}
      className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:opacity-100 opacity-0 transition-opacity duration-300"
    >
      <div className="bg-white/80 hover:bg-white p-4 rounded-full shadow-xl">
        <span className="text-2xl text-black">▶️</span>
      </div>
    </div>
  </div>
</div>

      {/* Scroll Indicator */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseShadow {
          0%, 100% { box-shadow: 0 0 12px #18ae90aa; }
          50% { box-shadow: 0 0 25px #18ae90ee; }
        }
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 50px;
          border: 2px solid white;
          border-radius: 25px;
          opacity: 0.7;
          z-index: 25;
        }
        .scroll-indicator::before {
          content: "";
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          animation: scrollDown 2s infinite;
        }
        @keyframes scrollDown {
          0% { top: 8px; opacity: 1; }
          50% { top: 30px; opacity: 0; }
          100% { top: 8px; opacity: 1; }
        }
      `}</style>
      <div className="scroll-indicator" />
    </section>
  );
}
