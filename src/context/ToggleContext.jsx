import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ToggleContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('toggle');
    return saved==="true";
  });
  

  const handleTheme = () => {
   setDarkMode((prev)=>{
    let newValue = !prev;
    localStorage.setItem('toggle',newValue)
    return newValue;
   })
  };
  

  return (
    <ThemeContext.Provider value={{darkMode , handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ToggleContext;
