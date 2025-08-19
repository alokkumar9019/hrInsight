"use client";

import { useState } from "react";

export default function FeatureCard({ icon, title, description, color = "#a259ec", badge, href }) {
  const [isHovered, setIsHovered] = useState(false);

  // Simple helper to lighten hex colors by percent
  function lightenColor(hex, percent) {
    let num = parseInt(hex.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = ((num >> 8) & 0x00ff) + amt,
      B = (num & 0x0000ff) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  }

  return (
    <>
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 ${color}66;
          }
          70% {
            box-shadow: 0 0 12px 8px ${color}44;
          }
          100% {
            box-shadow: 0 0 0 0 transparent;
          }
        }

        .card {
          border-radius: 1.25rem; /* rounded-2xl */
          background: var(--card-bg);
          border: 1.5px solid var(--border-color);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.35s ease;
          cursor: pointer;
          position: relative;
          padding: 1.5rem 1.5rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          will-change: transform, box-shadow;
          outline-offset: 3px;
        }

        .card:focus-visible {
          outline: 3px solid ${color};
          outline-offset: 4px;
        }

        .card:hover {
          transform: translateY(-12px) scale(1.05);
          border-color: var(--color);
          box-shadow: 0 20px 30px -10px var(--color), 0 0 20px 4px var(--glow-color);
          z-index: 10;
        }

        .icon-wrapper {
          background-color: var(--icon-bg);
          color: var(--color);
          border-radius: 0.75rem; /* rounded-xl */
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          filter: drop-shadow(0 0 4px var(--color));
          animation: pulseGlow 3s ease-in-out infinite;
          transition: transform 0.4s ease;
          will-change: transform;
        }

        .card:hover .icon-wrapper {
  transform: scale(1.15);
  animation-play-state: paused;
  filter: drop-shadow(0 0 8px var(--color));
}


        .badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--badge-bg);
          color: var(--badge-text);
          padding: 0.25rem 0.6rem;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 0.5rem;
          box-shadow: 0 0 8px var(--badge-glow);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          user-select: none;
          pointer-events: none;
          transition: background-color 0.3s ease;
        }

        .card:hover .badge {
          background-color: var(--color);
          color: white;
          box-shadow: 0 0 10px var(--color);
        }

        .title {
          font-size: 1.125rem; /* text-lg */
          font-weight: 700;
          color: var(--text-title);
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .description {
          font-size: 1rem; /* base */
          color: var(--text-desc);
          line-height: 1.5;
          transition: color 0.3s ease;
          flex-grow: 1;
        }

        .link {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color);
          text-decoration: none;
          align-self: flex-start;
          transition: color 0.3s ease, transform 0.3s ease;
          position: relative;
          padding-right: 1rem;
        }

        .link::after {
          content: "→";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: transform 0.3s ease;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .link:hover,
        .link:focus {
          color: var(--color-hover);
          transform: translateX(6px);
        }

        .link:hover::after,
        .link:focus::after {
          transform: translateY(-50%) translateX(6px);
        }

        /* Color variables */
        :root {
          --color: ${color};
          --glow-color: ${color}55;
          --color-hover: ${lightenColor(color, 20)};
          --icon-bg: ${color}22;
          --border-color: ${color}55;
          --badge-bg: #f3f4f6;
          --badge-text: #374151;
          --badge-glow: #d1d5db;
          --card-bg: white;
          --text-title: #111827;
          --text-desc: #4b5563;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --card-bg: #1f2937;
            --text-title: #f9fafb;
            --text-desc: #d1d5db;
            --badge-bg: #374151;
            --badge-text: #d1d5db;
            --badge-glow: #4b5563;
            --border-color: ${color}66;
          }
        }
      `}</style>

      <div
        className="card"
        tabIndex={0}
        role="group"
        aria-labelledby={`feature-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          "--color": color,
          "--glow-color": color + "55",
          "--color-hover": lightenColor(color, 20),
          "--icon-bg": color + "22",
          "--border-color": color + "55",
        }}
      >
        <div className="icon-wrapper" aria-hidden="true">
          {icon}
        </div>

        {badge && <span className="badge">{badge}</span>}

        <h3 id={`feature-title-${title.replace(/\s+/g, "-").toLowerCase()}`} className="title">
          {title}
        </h3>

        <p className="description">{description}</p>

        {href && (
          <a
            href={href}
            className="link"
            tabIndex={0}
            aria-label={`Learn more about ${title}`}
          >
            Learn more
          </a>
        )}
      </div>
    </>
  );
}
