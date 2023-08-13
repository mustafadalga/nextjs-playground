"use client";
import { useContext } from "react";
import ThemeContext from "@/contexts/theme/ThemeContext";

interface Props {
  title: string;
  description: string;
}

const Card = ({ title, description }:Props) => {
  const { darkMode } = useContext(ThemeContext);
  console.log(darkMode)
  const className = `${
    darkMode ? "bg-black text-white" : "bg-white text-black"
  }`;

  return (
    <div
      className={`p-6 rounded shadow-lg rounded-lg ${className}`}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
