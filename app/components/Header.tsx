"use client";
import { useContext } from "react";
import ThemeContext from "@/contexts/theme/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const className = `${
    darkMode ? "bg-black text-white" : "bg-white text-black"
  }`;

  return (
    <header className={`${className} h-20 flex items-center px-5 border-b`}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </header>
  );
};

export default Header;
