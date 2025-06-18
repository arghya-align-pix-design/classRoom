// File: @repo/ui/components/SubjectCard.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import './styles.css'; // Make sure this CSS file exists and is scoped properly

interface SubjectCardProps {
  className?:string;
  subjectName: string;
  gradeLevel: string;
  day: string;
  startTime: string; // Format: "HH:mm AM/PM"
  endTime: string;   // Format: "HH:mm AM/PM"
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  subjectName,
  gradeLevel,
  day,
  startTime,
  endTime,
}) => {
  return (
    <div className="subject-card">
      <div className="subject-info">
        <h2 className="subject-title text-lg font-bold">{subjectName}</h2>
        <p className="subject-grade text-sm text-gray-600">Grade: {gradeLevel}</p>
        <div className="mt-2 flex gap-2">
           <Link
                href={`/Dashboard-Teacher/Assignments/${subjectName}`}
                className="view-assignments-link">
            <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded subject-day">
              View Assignments</button></Link>
            <button className="px-3 py-1 text-sm bg-green-600 text-white rounded subject-time">
                <Link
                href={`/Dashboard-Teacher/Submissions`}  ///${encodeURIComponent(subjectName)}
                className="view-assignments-link">
                Check Submissions</Link>
            </button>
        </div>
        
      </div>
      {/* <Link
        href={`/Teacher-Dash/Assignment/${encodeURIComponent(subjectName)}`}
        className="view-assignments-link"
      >
        View Assignments
      </Link> */}
    </div>
  );
};

export default SubjectCard;
