"use client";
import Image from "next/image";

const ProblemCard = ({
  platform,
  icon,
  difficulty,
  title,
  accuracy,
  totalSubmissions,
  link,
}) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 dark:hover:bg-gray-700 bg-white hover:bg-gray-50">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Image
              src={icon}
              alt={`${platform} logo`}
              width={30}
              height={30}
              className="rounded-full"
            />
            <h3 className="text-xl font-semibold">{platform}</h3>
          </div>
          <span
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              difficulty === "Easy"
                ? "bg-green-500 text-white"
                : difficulty === "Medium"
                ? "bg-yellow-500 text-gray-900"
                : "bg-red-500 text-white"
            }`}
          >
            {difficulty}
          </span>
        </div>
        <h4 className="text-lg font-medium mb-2">{title}</h4>
        <div className="flex justify-between items-center mb-4">
          <span>
            Accuracy: {accuracy ? parseFloat(accuracy).toFixed(2) + "%" : "NA"}
          </span>
          <span>Submissions: {totalSubmissions}</span>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Solve Challenge
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProblemCard;
