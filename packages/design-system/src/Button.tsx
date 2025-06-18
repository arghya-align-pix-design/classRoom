"use client";
import "./styles.css";
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  // appName: string;
}

export const Button = ({ onClick,children}: ButtonProps) => {
  return (
    <button
     className="bg-blue-600 text-gray-800 px-5 py-2 rounded-2xl hover:bg-blue-700 transition
     border-[5px] border-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
