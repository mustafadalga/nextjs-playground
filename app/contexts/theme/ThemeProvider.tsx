"use client";
import { ReactNode, useState } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false);


    return (
        <ThemeContext.Provider
            value={{darkMode,setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
};
