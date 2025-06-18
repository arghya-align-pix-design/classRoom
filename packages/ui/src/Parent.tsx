import "./styles.css";
interface ParentDivProps {
  children: React.ReactNode;
  variant?: "form" | "modal" | "default";
  className?: string;
}

export const ParentDiv = ({ children, variant = "form", className = "" }: ParentDivProps) => {
  const variantStyles = {
    form: "w-[60%] h-[80%] bg-yellow-600",
    modal: "w-[40%] h-[100%] bg-white rounded-lg p-10",
    default: "w-[100%] h-[100%] bg-red-800",
  };

  return (
    <div className={`  ${variantStyles[variant]} ${className} bg-red-200`}>
      {children}
    </div>
  );
};
