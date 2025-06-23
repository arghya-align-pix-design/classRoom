'use client';

import React, { useState } from 'react';

interface Props {
  onClose: () => void;
  apiUrl: string;
}

export default function CreateClassModal({ onClose, apiUrl }: Props) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [code, setCode] = useState('');

  const generateCode = (name: string) => {
    const cleaned = name.trim().toLowerCase().replace(/\s+/g, '');
    const prefix = cleaned.slice(0, 4);
    const randomDigits = Math.floor(100 + Math.random() * 900);
    return `${prefix}-${randomDigits}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const subjectCode = generateCode(name);
    setCode(subjectCode);

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, grade, code: subjectCode }),
    });

    if (res.ok) {
      onClose();
    } else {
      alert('Something went wrong!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
        <h2 className="text-xl font-semibold mb-4 text-center">Create New Class</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Subject Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Grade</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </div>
          <div>
        <label className="block mb-1 font-medium">Subject Code</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded bg-gray-100"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          
        />
      </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Create
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
