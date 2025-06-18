'use client'

import React from "react";
import SubjectButton from "@repo/ui/src/subjectbttn"; // adjust path if needed

export default function Dashboard() {
  const subjects = [
    { subjectName: "Math", hasPendingAssignment: true, hasSubmitted: false },
    { subjectName: "Science", hasPendingAssignment: false, hasSubmitted: false },
    { subjectName: "English", hasPendingAssignment: true, hasSubmitted: true },
    { subjectName: "History", hasPendingAssignment: false, hasSubmitted: false },
    { subjectName: "Geography", hasPendingAssignment: true, hasSubmitted: false },
    { subjectName: "Computer", hasPendingAssignment: false, hasSubmitted: true },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Good Morning, Student 👋</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects.map((subj, index) => (
          <SubjectButton
            key={index}
            subjectName={subj.subjectName}
            hasPendingAssignment={subj.hasPendingAssignment}
            hasSubmitted={subj.hasSubmitted}
            className={"relative w-40 h-20 bg-pink-600 shadow rounded-md text-center font-semibold text-lg hover:shadow-lg transition"}
          />
        ))}
      </div>
    </div>
  );
}
