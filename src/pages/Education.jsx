import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ToggleContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const { darkMode } = useContext(ThemeContext);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(
        cardsRef.current.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className={`w-full min-h-screen pb-24 transition-colors duration-300
        ${darkMode ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}
      `}
    >
      <h1 ref={titleRef} className="text-center pt-24 mb-20 text-[2.6rem] md:text-6xl font-extrabold text-purple-600">
        Education
      </h1>

      <div ref={cardsRef} className="relative max-w-6xl mx-auto px-4">
        {/* Center line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-red-500/70 to-blue-500/40 -translate-x-1/2" />

        {/* LEFT CARD */}
        <div className="mb-16 md:flex md:justify-start">
          <div className="md:w-[46%] md:pr-12 relative">
            <div
              className={`relative p-6 rounded-lg border shadow-lg
                ${darkMode
                  ? "bg-[#202040] border-purple-500/30"
                  : "bg-gray-50 border-gray-200"}
              `}
            >
              {/* Arrow */}
              <span className="hidden md:block absolute top-6 -right-3 w-0 h-0 
                border-t-10 border-b-10 border-l-12
                border-t-transparent border-b-transparent
                border-l-purple-500/70"
              />

              <span className={`text-sm opacity-70 font-medium mb-3 ${darkMode?" text-green-400 " :"text-green-600"}` }>2023 – 2027</span>
              <h2 className="text-xl md:text-2xl font-semibold mt-2">
                Bachelor of Technology (CSE)
              </h2>
              <p className={` font-medium mb-3 ${darkMode?" text-blue-400 " :"text-blue-600" }` }>Sagar Institute of Research & Technology</p>
              <p className="mt-3 text-sm opacity-70 leading-relaxed">
                Focused on core CS subjects like DSA, OS, DBMS, and Software Engineering.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className=" md:flex md:justify-end">
          <div className="md:w-[46%] md:pl-12 relative">
            <div
              className={`relative p-6 rounded-lg border shadow-lg
                ${darkMode
                  ? "bg-[#202040] border-blue-500/30"
                  : "bg-gray-50 border-gray-200"}
              `}
            >
              {/* Arrow */}
              <span className="hidden md:block absolute top-6 -left-3 w-0 h-0 
                border-t-10 border-b-10 border-r-12
                border-t-transparent border-b-transparent
                border-r-blue-500/70"
              />

              <span className={`text-sm opacity-70 font-medium mb-3 ${darkMode?" text-green-400 " :"text-green-600"}` }>2020 – 2022</span>
              <h2 className="text-xl md:text-2xl font-semibold mt-2">
                Higher Secondary (Class XII)
              </h2>
              <p className={` font-medium mb-3 ${darkMode?" text-blue-400 " :"text-blue-600" }` }>Guru Kripa Academy</p>
              <p className="mt-3 text-sm opacity-70 leading-relaxed">
                Studied Mathematics and Science with strong fundamentals.
              </p>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
};

export default Education;
