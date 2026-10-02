import React, { useContext, useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import ThemeSwitch from "../pages/ThemeSwitch";
import { ThemeContext } from "../context/ToggleContext";

const sections = ["about", "education", "skill", "project", "certificate", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { darkMode, handleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItem = (label, id) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`transition-all bg-transparent ${
        activeSection === id
          ? "text-blue-600 font-semibold"
          : "hover:text-blue-600"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-animate {
          animation: slideDown 0.3s ease-out forwards;
        }
        .logo-animate {
          opacity: 0;
          animation: slideInLeft 0.4s ease-out 0.2s forwards;
        }
        .menu-animate {
          opacity: 0;
          animation: fadeIn 0.4s ease-out 0.3s forwards;
        }
        .right-animate {
          opacity: 0;
          animation: slideInRight 0.4s ease-out 0.35s forwards;
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        className={`nav-animate fixed top-0 w-full h-16 z-50 flex items-center justify-between px-4 md:px-20 shadow-sm
        ${darkMode ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}`}
      >
        {/* Logo */}
        <h2 className="logo-animate text-lg font-bold">
          <span className="border rounded bg-indigo-600 mr-2 text-center text-[1rem] py-1 px-2 border-indigo-600 text-white">AA //</span>
         abhishek.dev
        </h2>

        {/* Desktop Menu */}
        <div className="menu-animate hidden gap-8 text-[16px]">
          {navItem("About", "about")}
          {navItem("Education", "education")}
          {navItem("Skills", "skill")}
          {navItem("Projects", "project")}
          {navItem("Certificates", "certificate")}
          {navItem("Contact", "contact")}
        </div>

        {/* Right Side */}
        <div className="right-animate flex items-center gap-3">
          <ThemeSwitch onClick={handleTheme} />
          <button aria-label="Open navigation menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <RiMenu3Line size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
          className={`fixed top-0 right-0 h-full w-[min(380px,85vw)] z-50 shadow-lg transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        ${darkMode ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}`}
      >
        <div className="flex justify-end p-5">
          <RiCloseLine size={30} onClick={() => setOpen(false)} />
        </div>

        <div className="flex flex-col items-center gap-8 mt-10 text-lg">
          {navItem("About", "about")}
          {navItem("Education", "education")}
          {navItem("Skills", "skill")}
          {navItem("Projects", "project")}
          {navItem("Certificates", "certificate")}
          {navItem("Contact", "contact")}
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </>
  );
};

export default Navbar;
