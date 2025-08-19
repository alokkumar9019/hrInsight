import React from "react";

const PreddixxLogo = (props) => {
  return (
    <div className="w-full max-w-2xl p-4">
      <svg viewBox="0 0 450 100" role="img" aria-labelledby="logoTitle" {...props}>
        <title id="logoTitle">Preddixx Integrated Bar Graph Logo</title>

        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1ABC9C" />
            <stop offset="100%" stopColor="#16A085" />
          </linearGradient>
        </defs>

        <g transform="translate(25, 0)">
          {/* P */}
          <g>
            <text x="0" y="75" fontSize="70" fontWeight="700" fill="#2C3E50">
              P
            </text>
          </g>

          {/* R */}
          <g transform="translate(55, 0)">
            <text x="0" y="75" fontSize="70" fontWeight="700" fill="#2C3E50">
              R
            </text>
          </g>

          {/* E (bar graph) */}
          <g transform="translate(115, 0)">
            <rect x="0" y="23" width="46" height="16" rx="3" fill="url(#barGradient)" />
            <rect x="0" y="42" width="32" height="16" rx="3" fill="url(#barGradient)" />
            <rect x="0" y="61" width="46" height="16" rx="3" fill="url(#barGradient)" />
          </g>

          {/* Second D (behind) */}
          <g transform="translate(195, 23)">
            <path d="M 0,0 Q 10, 27, 0, 54 H 15 C 50,54 50,0 15,0 H 0 Z" fill="#34495E" />
          </g>

          {/* First D (front) */}
          <g transform="translate(176, 24.5) scale(0.95)">
            <path d="M 0,0 Q 10, 27, 0, 54 H 15 C 45,54 45,0 15,0 H 0 Z" fill="url(#barGradient)" />
          </g>

          {/* I with pie chart */}
          <g transform="translate(250, 0)">
            <rect x="0" y="42" width="16" height="35" rx="3" fill="#2C3E50" />
            <g transform="translate(8, 30)">
              <circle cx="0" cy="0" r="11" fill="#2C3E50" />
              <path d="M 0,0 L 11,0 A 11,11 0 0,0 -5.5,-9.526 Z" fill="url(#barGradient)" />
            </g>
          </g>

          {/* X */}
          <g transform="translate(285, 0)">
            <text x="0" y="75" fontSize="70" fontWeight="700" fill="#2C3E50">
              X
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PreddixxLogo;
