// File: app/Student-Dash/UploadAssignment/page.tsx

'use client';

import React from 'react';

const SubmissionsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Uploaded Submitted Documents</h1>
      <p className="text-gray-600">Students can upload their Assignment submissions show up here.</p>
      <div className="mt-6 p-4 border rounded shadow-sm">
        <p className="text-center italic text-gray-400">Uploaded submissions will show up here.</p>
      </div>
    </div>
  );
};

export default SubmissionsPage;
