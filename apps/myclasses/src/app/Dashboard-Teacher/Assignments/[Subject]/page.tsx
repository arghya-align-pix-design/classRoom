'use client';

import React from 'react';
import { useParams } from 'next/navigation';

const SubjectAssignmentPage = () => {
  const params = useParams();
  const subject = params.Subject as string;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assignments for {subject}</h1>
      <p className="text-gray-600">This page displays all assignments for the selected subject.</p>
      <div className="mt-6 p-4 border rounded shadow-sm">
        <p className="text-center italic text-gray-400">List of assignments for {subject} will appear here.</p>
      </div>
    </div>
  );
};

export default SubjectAssignmentPage;



// // File: app/Teacher-Dash/Assignment/[subject]/page.tsx

// 'use client';

// import React from 'react';
// import { useParams } from 'next/navigation';

// interface Assignment {
//   id: string;
//   title: string;
//   dueDate: string;
//   publishedAt: string;
//   description: string;
// }

// const mockAssignments: Assignment[] = [
//   {
//     id: '1',
//     title: 'Essay on World War II',
//     dueDate: '2025-06-20',
//     publishedAt: '2025-06-17',
//     description: 'Write a 1000-word essay on the causes and consequences of World War II.',
//   },
//   {
//     id: '2',
//     title: 'History Quiz - Chapter 4',
//     dueDate: '2025-06-22',
//     publishedAt: '2025-06-18',
//     description: 'Complete the quiz covering chapter 4: Industrial Revolution.',
//   },
// ];

// const SubjectPage: React.FC = () => {
//   const params = useParams();
//   const subject = decodeURIComponent(params.subject as string);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Assignments for {subject}</h1>
//       <div className="space-y-4">
//         {mockAssignments.map((assignment) => (
//           <div key={assignment.id} className="p-4 rounded-lg border shadow-sm">
//             <h2 className="text-lg font-semibold">{assignment.title}</h2>
//             <p className="text-sm text-gray-500">Published: {assignment.publishedAt}</p>
//             <p className="text-sm text-red-600">Due: {assignment.dueDate}</p>
//             <p className="mt-2">{assignment.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubjectPage;
