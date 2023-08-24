import { Dispatch, SetStateAction, createContext } from "react";

export interface ContextType {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const defaultContext: ContextType = {
  darkMode: false,
  setDarkMode: (status: SetStateAction<boolean>): void => {},
};

export default createContext<ContextType>(defaultContext);