import { ArrowRight } from "lucide-react";

export default function DemoRequestForm() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black transition-colors duration-500"
    id="contact">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
        Want to See It in Action?
      </h2>
      <p className="text-center text-l max-w-2xl mb-12 text-gray-600 dark:text-gray-300">
        Schedule a personalized demo and discover how HRInsights Pro can transform your HR operations in just 30 minutes.
      </p>

      {/* Form Card */}
      <form className="w-full max-w-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 flex flex-col gap-4 shadow-lg dark:shadow-2xl transition-colors duration-500">
        {/* First & Last Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2bb096]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2bb096]"
            required
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Work Email"
          className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2bb096]"
          required
        />

        {/* Company */}
        <input
          type="text"
          placeholder="Company Name"
          className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2bb096]"
          required
        />

        {/* Phone */}
        <input
          type="number"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2bb096]"
          required
        />

        {/* CTA Button */}
        <button
          type="submit"
          className="w-full mt-2 bg-[#2c3e50] cursor-pointer dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition"
        >
          Request a Live Demo
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </section>
  );
}
