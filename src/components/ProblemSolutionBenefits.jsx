export default function ProblemSolutionBenefits({ problem, solution, benefit }) {
  return (
    <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:border-purple-500 hover:bg-purple-50/10">
      <div className="flex flex-col items-center space-y-8 ">

        {/* Problem */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-red-600 font-semibold text-xl">
            ⚠️ Problem
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{problem}</p>
        </div>

        {/* Vertical Line */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>

        {/* Solution */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-xl">
            💡 Solution
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{solution}</p>
        </div>

        {/* Vertical Line */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>

        {/* Benefit */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-xl">
            ✅ Benefit
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{benefit}</p>
        </div>

      </div>
    </div>
  );
}
