'use client';

import React from 'react';
import Link from 'next/link';
import './styles.css'; // Make sure this CSS file exists and is scoped properly

interface SubjectCardProps {
  className?:string;
  subjectId?:string;
  subjectName: string;
  gradeLevel: string;
  day?: string;
  startTime?: string; // Format: "HH:mm AM/PM"
  endTime?: string;   // Format: "HH:mm AM/PM"
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  subjectName,
  gradeLevel,
}) => {
  return (
    <div className="subject-card bg-white shadow-lg rounded-2xl p-6 w-[240px] h-[400px] flex flex-col justify-between">
      <div>
        <h1 className="subject-title text-xl font-bold mb-2 break-words">{subjectName}</h1>
        <p className="subject-grade text-sm text-gray-300 mb-4">Grade: {gradeLevel}</p>
      </div>

      <div className="flex flex-col gap-4">
        <Link href={`/Dashboard-Teacher/Assignments/${subjectName}`}>
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View Assignments
          </button>
        </Link>

        <Link href={`/Dashboard-Teacher/Submissions`}>
          <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Check Submissions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubjectCard;
