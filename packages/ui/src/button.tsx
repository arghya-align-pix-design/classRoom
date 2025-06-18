"use client";
import "./styles.css";
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  shadow?:string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
 }

export const Button = ({ onClick,children,className,shadow,variant = "ghost",
  size = "md",}: ButtonProps) => {

  const baseStyle = "cursor-pointer hover:font-bold transition duration-200";

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: "bg-blue-600 text-red hover:bg-blue-700",
    secondary: "bg-gray-300 text-red hover:bg-gray-400",
    ghost: "bg-transparent text-blue border border-gray-300 hover:bg-gray-100",
  };

  return (
    <div className=" cursor-pointer inline-block p-[4px] rounded-2xl bg-yellow-400 transition-all duration-150 hover:bg-yellow-300 hover:scale-105 hover:animate-throb">
      <button
      className={`  px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-amber-50 text-black  rounded-xl transition-all duration-150 ease-in-out hover:animate-throb hover:text-shadow-black cursor-grab   ${className} ${sizeStyles[size]} ${variantStyles[variant]} `}
      onClick={onClick}
    >
      {children}
    </button>
    </div>
    
  );
};
