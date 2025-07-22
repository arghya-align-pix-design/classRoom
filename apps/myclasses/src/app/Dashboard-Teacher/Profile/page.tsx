// File: app/Student-Dash/UploadAssignment/page.tsx

'use client';

import React from 'react';

const UploadAssignmentPage = () => {
  return (//min-w-12/12
    <div className="p-6 max-h-screen max-w-screen   bg-[rgba(240,240,240,0.75)] backdrop-blur-md rounded-xl shadow-md w-full   ">
      <h1 className="text-2xl font-bold mb-4">Upload Profile Documents</h1>
      <p className="text-gray-600">Teachers can upload their personal Documents from this page.</p>
      <div className="mt-6 p-4 border rounded shadow-sm">
        <p className="text-center italic text-gray-400">Document upload form will go here.</p>
      </div>
    </div>
  );
};

export default UploadAssignmentPage;
