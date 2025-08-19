"use client"
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // On load: check localStorage or system preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setEnabled(true);
    } else {
      document.documentElement.classList.remove("dark");
      setEnabled(false);
    }
  }, []);

  const toggle = () => {
    if (enabled) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setEnabled(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setEnabled(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="ml-4 px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded-full transition"
    >
      {enabled ? "🌙" : "☀️"}
    </button>
  );
}
