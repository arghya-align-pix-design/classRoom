// SubjectButton.tsx
import React from "react";
import "./styles.css";

interface SubjectButtonProps {
  subjectName: string;
  hasPendingAssignment: boolean;
  hasSubmitted: boolean;
  onClick?: () => void;
  className?: string;
}

export default function SubjectButton({
  subjectName,
  hasPendingAssignment,
  hasSubmitted,
  className,
  onClick,
}: SubjectButtonProps) {
  const showRedDot = hasPendingAssignment && !hasSubmitted;

  return (
    <button
      onClick={onClick}
      className={` ${className}`}>
      {subjectName}
      {showRedDot && (
        <span className="absolute top-2 right-2 w-3 h-3 bg-red-600 rounded-full animate-pulse" />
      )}
    </button>
  );
}
