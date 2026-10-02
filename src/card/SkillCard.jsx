import React, { useContext } from "react";
import { ThemeContext } from "../context/ToggleContext";

const SkillCard = ({ title, skill }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`
        ${darkMode ? "bg-[#272746] text-white" : "bg-white text-black"}
        rounded-xl shadow-lg hover:shadow-xl p-3
        w-full sm:w-[45%] mx-3 sm:mx-0
        transform transition duration-500
        hover:scale-105 hover:-translate-y-2
      `}
    >
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-red-700 to-purple-500 text-transparent bg-clip-text">
        {title}
        <div className="mt-1 h-0.5 bg-gradient-to-r from-red-700 to-purple-500"></div>
      </h3>

      <div className="flex gap-3 flex-wrap mt-6">
        {skill.map((data) => (
          <div
            key={data.name}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-full
              ${
                darkMode
                  ? "bg-[#23234a] border-zinc-600 text-gray-200 hover:bg-[#2d2d5c]"
                  : "bg-white border-gray-300 text-gray-800 hover:bg-gray-100"
              }
              border transition
            `}
          >
            <img
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              src={data.logo}
              alt={data.name}
            />
            <span className="text-sm sm:text-base">
              {data.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
