import React, { useContext } from "react";
import { ThemeContext } from "../context/ToggleContext";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiTwitterXLine,
} from "@remixicon/react";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItem = (label, id) => (
    <button
      onClick={() => scrollToSection(id)}
      className="hover:text-blue-600 transition bg-transparent text-sm"
    >
      {label}
    </button>
  );

  const socials = [
    { icon: RiGithubFill, link: "https://github.com/abhishek-250505" },
    { icon: RiLinkedinBoxFill, link: "https://www.linkedin.com/in/abhishek-anand-906bb7341" },
    { icon: RiMailLine, link: "mailto:abhishek.664128@gmail.com" },
    { icon: RiTwitterXLine, link: "https://twitter.com/yourusername" },
  ];

  return (
    <footer
      className={`w-full ${
        darkMode ? "bg-[#1A1A2E] text-white" : "bg-white text-black"
      }`}
    >
      {/* Top Border */}
      <div
        className={`border-t ${
          darkMode ? "border-zinc-600" : "border-zinc-200"
        }`}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3 text-center md:text-left ">
          
          {/* About */}
          <div>
            <h2 className="font-bold text-xl mb-3 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abhishek Anand
            </h2>
            <p className="opacity-70 text-sm leading-relaxed">
              Software Engineer with a passion for creating innovative,
              scalable, and high-performance solutions.
            </p>
          </div>

          {/* Links */}
          <div className="md:ml-30">
            <h2 className="font-semibold mb-4">Links</h2>
            <ul className="space-y-2">
              <li>{navItem("About", "about")}</li>
              <li>{navItem("Education", "education")}</li>
              <li>{navItem("Skills", "skill")}</li>
              <li>{navItem("Projects", "project")}</li>
              <li>{navItem("Certificates", "certificate")}</li>
              <li>{navItem("Contact", "contact")}</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:ml-30">
            <h2 className="font-semibold mb-4">Connect</h2>
            <div className="flex justify-center md:justify-start gap-4">
              {socials.map(({ icon:Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  className={`p-2 rounded-md transition ${
                    darkMode
                      ? "bg-white text-black hover:bg-gray-300"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`border-t ${
          darkMode ? "border-zinc-600" : "border-zinc-200"
        }`}
      >
        <p className="text-center text-sm opacity-70 py-4 px-4">
           © {new Date().getFullYear()} Abhishek Anand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
