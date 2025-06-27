'use client';

import React, { useState, useEffect } from 'react';
import SubjectCard from '@repo/ui/TeacherSubBtn'; // Existing card component
import CreateClassModal from '@repo/ui/createClassModal'; // We’ll make this next


interface Subject {
  id: string;
  name: string;
  grade: string;
  code: string;
}

export default function Dashboard() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [teacherId, setTeacherId] = useState<string | null>(null);
  const [teacherName, setTeacherName] = useState('');
  const [token, setToken] = useState<string | null>(null);

  

  const fetchSubjects = async (token:string) => {

    //sending request to backend for sending back the subjects
    const res = await fetch('/api/Class/Subjects/Teachers',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); // You'll create this route
    
    const data = await res.json();
    setSubjects(data.classes || []);
  };

  useEffect(() => {
    //FETCHING TOKEN FROM LOCAL STORAGE
    const Stoken = localStorage.getItem('token');

    const data=localStorage.getItem('userData');
    const parsedUser = data ? JSON.parse(data) : null;
    const teacherId=localStorage.getItem("teacherId");
    const teacherName=parsedUser?.name ?? '';
    console.log(teacherId,"  ", teacherName);

    if(Stoken)
      setToken(Stoken);

    if(teacherId)
    setTeacherId(teacherId);

    if(teacherName)
      setTeacherName(teacherName);

    if(token)
    fetchSubjects(token);
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Good Morning, SIRE 👋</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subjectId={subject.id}
            subjectName={subject.name}
            gradeLevel={subject.grade}
            className="shadow-md"
          />
        ))}

        {/* Add Button Card */}
        <div
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-xl h-32 cursor-pointer hover:border-blue-500 transition-all text-gray-500 hover:text-blue-600"
        >
          <span className="text-4xl font-light">+</span>
        </div>
      </div>

      {/* Modal */}
      {showModal && token && (
        <CreateClassModal
          onClose={() => {
            setShowModal(false);
            fetchSubjects(token); // Refresh list
          }}
          apiUrl="/api/Class/createclass"
          teacherId={teacherId as string} 
          teacherName={teacherName}
        />
      )}
    </div>
  );
}
