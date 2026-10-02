import React, { useContext } from "react";
import { ThemeContext } from "../context/ToggleContext";
import { RiGithubFill, RiExternalLinkLine } from "@remixicon/react";


const  PortfolioCard = (item) => {
  const { darkMode } = useContext(ThemeContext); 


  return (
    <div
      className={`text-card-foreground flex flex-col gap-2 rounded-xl border h-135 overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${
        darkMode ? "bg-[#272746] text-white" : "bg-white text-black" 
      } `}
    >
      <div className="relative h-55 overflow-hidden cursor-pointer">
        
        {/* IMAGE */}
      
          <img
            src={item.item.image}
            alt="E-Commerce Platform"

            className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-300 "
            
          />
      

        
      </div>

      {/* PART 2 */}
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-3">{item.item.title}</h3>

        <p className="opacity-70 mb-4 flex-1 text-sm leading-relaxed">
          {item.item.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
        {
          item.item.techStack.map((data , ind)=>{
            
            return(
             <span className="text-xm px-3 py-1 rounded-full dark:bg-blue-900/30 text-blue-600" key={ind}>
            {data}
          </span>
            )
          })
        }
          
        </div>

        <div className="flex justify-between">
          <a
            href={item.item.links.github}
            target="_blank"
            className="flex items-center justify-center gap-1 py-2 px-3 rounded-md shadow-lg border hover:bg-blue-700 hover:text-white"
          >
            <RiGithubFill />
            Github
          </a>

          <a
            className="inline-flex items-center justify-center py-2 px-3 gap-1 bg-blue-600 hover:bg-blue-700 shadow-lg text-white rounded-md"
            href={item.item.links.live}
          >
            <RiExternalLinkLine />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
