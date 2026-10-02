import React, { useContext } from "react";
import { ThemeContext } from "../context/ToggleContext";

const CertificateCard = ({ name, place, date, linkurl, description }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col gap-6 rounded-xl p-6 shadow-lg
        ${darkMode ? "bg-[#272746] text-white" : "bg-white text-black"}
        transform transition duration-500 hover:scale-105 hover:-translate-y-2`}
    >
      {/* top section */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`p-3 rounded-lg ${
            darkMode ? "bg-blue-700/30" : "bg-blue-200"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-6 w-6 ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
            <circle cx="12" cy="8" r="6" />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1 leading-tight">{name}</h3>
          <p
            className={`text-sm ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            {place}
          </p>
        </div>
      </div>

      {/* description */}
      <p className="text-sm opacity-70">{description}</p>

      {/* footer */}
      <div
        className={`flex items-center justify-between pt-3 border-t ${
          darkMode ? "border-zinc-700" : "border-zinc-200"
        }`}
      >
        <span className="text-sm text-green-700 font-semibold">{date}</span>

        <a
          href={linkurl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 px-3 h-8 rounded-md text-sm font-medium transition
            ${
              darkMode
                ? "text-blue-400 hover:bg-blue-900/20"
                : "text-blue-600 hover:bg-blue-50"
            }`}
        >
          View
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
