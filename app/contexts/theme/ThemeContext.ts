import { createContext } from "react";

export interface ContextType {
  darkMode: boolean;
  setDarkMode: (status: boolean) => void;
}

const defaultContext: ContextType = {
  darkMode: false,
  setDarkMode: (status: boolean) => {},
};

export default createContext(defaultContext);
