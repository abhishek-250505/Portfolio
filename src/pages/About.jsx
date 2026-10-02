import React, { useContext } from "react";
import Hero from "../component/Hero";
import { ThemeContext } from "../context/ToggleContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main
      className={`min-h-screen w-full transition-colors duration-300 
        ${darkMode ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}
      `}
    >
      <Hero  />
    </main>
  );
};

export default About;
