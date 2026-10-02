import React, { useContext, useEffect, useRef } from "react";
// import ProjectCard from "../card/PortfolioCard";
import { ThemeContext } from "../context/ToggleContext";
import {project} from "../config/json"
import PortfolioCard from "../card/PortfolioCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
   const { darkMode } = useContext(ThemeContext);
   const sectionRef = useRef(null);
   const titleRef = useRef(null);
   const cardsRef = useRef(null);

   useEffect(() => {
     const ctx = gsap.context(() => {
       // Title animation
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

       // Cards stagger animation
       gsap.fromTo(
         cardsRef.current.children,
         { y: 50, opacity: 0 },
         {
           y: 0,
           opacity: 1,
           duration: 0.6,
           stagger: 0.15,
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
    
    <div ref={sectionRef} className={` min-h-screen w-full transition-colors duration-300 ${ darkMode ? "bg-[#1A1A2E] text-white" : "bg-white text-black" }`}>
      <h1 ref={titleRef} className="text-center pt-24 md:text-6xl text-[2.7rem] font-extrabold text-purple-600">
        PROJECTS
      </h1>
       <p
        className={`text-center mt-8 text-[18px] font-sans mx-4
          ${darkMode ? "text-gray-300" : "text-gray-600"}
        `}
      >
        Practical projects built to apply skills, solve real-world problems, and demonstrate hands-on experience.
      </p>
      <div ref={cardsRef} className="max-w-7xl mx-auto px-6 py-16 grid gap-14 md:grid-cols-2 lg:grid-cols-3">
       {
        project.projects.map((items ,ind)=>{
          return(
            <div key={ind}>
            <PortfolioCard item={items}/>
            </div>
          )
        })
       }
      </div>
    </div>
  );
};

export default Project;
