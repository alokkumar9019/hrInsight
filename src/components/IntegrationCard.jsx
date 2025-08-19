export default function IntegrationCard({ name, icon, bg, iconColor }) {
  return (
    <div
      className="
        flex flex-col items-center justify-between
        w-full h-40 p-6
        border border-gray-200 dark:border-gray-700
        rounded-xl
        bg-white dark:bg-gray-800
        shadow-sm hover:shadow-md
        transition hover:-translate-y-1
      "
    >
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-lg ${bg}`}
      >
        <div className={`flex items-center justify-center w-8 h-8 ${iconColor}`}>
          {icon}
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold text-gray-800 dark:text-white">
        {name}
      </p>
    </div>
  );
}
