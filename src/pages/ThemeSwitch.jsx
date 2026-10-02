import {  useContext} from "react";
import { ThemeContext } from "../context/ToggleContext";


const ThemeSwitch = () => {
  // const [checked, setChecked] = useState(false);  
   const {darkMode, handleTheme} = useContext(ThemeContext)
  //  console.log(darkMode);
   


 

  return (
    
    <>
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes tilt {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          75% { transform: rotate(8deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>

      {/* Switch */}
      <label className="
        relative inline-block cursor-pointer
        w-9 h-5           /* mobile */
        sm:w-11 sm:h-6    /* desktop */
      ">
        {/* Input */}
        <input
          type="checkbox"
          checked={darkMode}
          className="sr-only peer"
          onChange={handleTheme}
          
        />

        {/* Background */}
        <span className="
          absolute inset-0 rounded-full
          bg-black transition-all duration-300
          peer-checked:bg-black
        " />

        {/* Knob */}
        <span className="
          absolute left-0.5 top-0.5 z-20
          bg-gray-200 rounded-full transition-all duration-300
          h-4 w-4           /* mobile */
          sm:h-5 sm:w-5     /* desktop */
          peer-checked:translate-x-4
          sm:peer-checked:translate-x-5
        " />

        {/* Sun */}
        <span className="
          absolute z-10
          right-0.75 top-0.75
          sm:right-1 sm:top-1
        ">
          <svg
            viewBox="0 0 24 24"
            className="w-3 h-3 sm:w-4 sm:h-4"
            style={{ animation: "rotate 15s linear infinite" }}
            fill="#ffd43b"
          >
            <circle cx="12" cy="12" r="5" />
          </svg>
        </span>

        {/* Moon */}
        <span className="
          absolute z-10
          left-0.75 top-0.75
          sm:left-1 sm:top-1
        ">
          <svg
            viewBox="0 0 384 512"
            className="w-3 h-3 sm:w-4 sm:h-4 fill-black"
            style={{ animation: "tilt 5s linear infinite" }}
          >
            <path d="M223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224" />
          </svg>
        </span>
      </label>
    </>
  );
};

export default ThemeSwitch;
