"use client";
import useTheme from "./contexts/theme/useTheme";

interface Props {
  title: string;
  description: string;
}

const Card = ({ title, description }: Props) => {
  const { darkMode } = useTheme();
  const className = darkMode ? 'bg-black text-white' : 'bg-white text black'
  return (
    <div className={`p-6 rounded shadow-lg rounded-lg ${className}`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};


export default Card