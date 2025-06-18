"use client";

import { ReactNode } from "react";
import "./styles.css";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  // appName: string;
}

export const Button2 = ({ onClick,className,children}: ButtonProps) => {
  return (
    <div className="inline-block p-[4px] rounded-2xl bg-yellow-400 transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:animate-throb">
      <button onClick={onClick}
      className={`px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-black text-black font-bold rounded-xl transition-all duration-500 ease-in-out hover:animate-throb cursor-pointer `}>
        {children}
      </button>
    </div>
  );
};
