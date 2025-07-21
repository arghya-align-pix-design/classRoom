'use client'

import React from "react";
import SubjectCard from "@repo/ui/TeacherSubBtn"; // adjust path if needed

export default function Dashboard() {
  const subjects = [
     {
    id: "subj-1",
    name: "English",
    period: 2,
    dayOfWeek: "Monday",
    grade: "10",
    startTime: "2025-06-17T10:00:00.000Z",
    endTime: "2025-06-17T10:45:00.000Z",
  },
  {
    id: "subj-2",
    name: "Mathematics",
    period: 3,
    dayOfWeek: "Monday",
    grade: "10",
    startTime: "2025-06-17T11:00:00.000Z",
    endTime: "2025-06-17T11:45:00.000Z",
  },
  {
    id: "subj-3",
    name: "History",
    period: 1,
    dayOfWeek: "Tuesday",
    grade: "9",
    startTime: "2025-06-18T09:00:00.000Z",
    endTime: "2025-06-18T09:45:00.000Z",
  },
  {
    id: "subj-4",
    name: "Science",
    period: 4,
    dayOfWeek: "Wednesday",
    grade: "8",
    startTime: "2025-06-19T12:00:00.000Z",
    endTime: "2025-06-19T12:45:00.000Z",
  },
  {
    id: "subj-5",
    name: "Geography",
    period: 5,
    dayOfWeek: "Thursday",
    grade: "9",
    startTime: "2025-06-20T13:00:00.000Z",
    endTime: "2025-06-20T13:45:00.000Z",
  },
   
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white via-gray-100 to-white text-black">

      <h1 className="text-2xl font-bold mb-6">Good Morning, SIRE 👋</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

        {subjects.map((subject) => (
          <div key={subject.id} className="border-b py-4">
            <p className="text-sm text-orange-800">
      🕒      {new Date(subject.startTime).toLocaleTimeString()} – {new Date(subject.endTime).toLocaleTimeString()}
            </p>
            <SubjectCard className=""
              subjectName={subject.name}
              gradeLevel={subject.grade}
              day={subject.dayOfWeek}
              startTime={subject.startTime}
              endTime={subject.endTime}
            />
            {/* <h2 className="text-lg font-bold">{subject.name}</h2>
            {/* <p className="text-sm text-gray-600">
              🎓 Grade: {subject.grade || "N/A"} | 📍 Period {subject.period} – {subject.dayOfWeek}
            </p> */}
            {/* <div className="mt-2 flex gap-2">
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">View Assignments</button>
              <button className="px-3 py-1 text-sm bg-green-600 text-white rounded">Check Submissions</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
