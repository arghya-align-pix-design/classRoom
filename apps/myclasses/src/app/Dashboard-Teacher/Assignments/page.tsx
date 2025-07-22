// File: app/Teacher-Dash/CreateAssignment/page.tsx

'use client';

import React from 'react';

const CreateAssignmentPage = () => {
  return (
    <div className="p-6 max-h-screen bg-[rgba(240,240,240,0.75)] backdrop-blur-md rounded-xl shadow-md w-full min-w-12/12  max-w-5xl">
      <h1 className="text-2xl font-bold mb-4">Create Assignment</h1>
      <p className="text-gray-900">Teachers can create and publish new assignments from this page.</p>
      <div className="mt-6 p-4 border rounded shadow-sm">
        <p className="text-center italic text-gray-900">Assignment creation form will go here.</p>
      </div>
    </div>
  );
};

export default CreateAssignmentPage;