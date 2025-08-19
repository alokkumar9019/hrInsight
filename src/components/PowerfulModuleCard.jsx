"use client";
import { useRouter } from "next/navigation";

// Helper to convert hex to rgba with alpha
function hexToRgba(hex, alpha) {
  let r = 0,
    g = 0,
    b = 0;
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function PowerfulModuleCard({ icon, title, description, color, link }) {

  return (
    <div
      className="
        group
        relative
        flex flex-col items-start gap-5
        p-7
        rounded-2xl
        cursor-pointer
        bg-white dark:bg-gray-900
        border
        border-gray-200 dark:border-gray-700
        shadow-sm
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:-translate-y-3
        hover:border-purple-500
        hover:bg-purple-50/20 dark:hover:bg-purple-600/20
        overflow-visible
      "
      style={{
        borderColor: hexToRgba(color, 0.3),
      }}
      role="button"
      tabIndex={0}
    >
      {/* Icon badge with glowing gradient */}
      <div
        className="p-5 rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 transform group-hover:scale-110"
        style={{
          background: `radial-gradient(circle at center, ${hexToRgba(color, 0.25)}, transparent 70%)`,
          color: color,
          boxShadow: `0 0 12px 3px ${hexToRgba(color, 0.35)}`,
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="text-left w-full">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
