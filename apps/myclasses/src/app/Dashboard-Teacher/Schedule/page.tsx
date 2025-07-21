// "use client";
// import { useState } from "react";

// export default function SetupRoutine() {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
//       {!showForm ? (
//         <div className="text-center bg-white p-6 rounded-2xl shadow-xl">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//             Let’s get started setting up your routine, sir 👨‍🏫
//           </h1>
//           <button
//             onClick={() => setShowForm(true)}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl transition"
//           >
//             Set it now
//           </button>
//         </div>
//       ) : (
//         <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
//           <h2 className="text-xl font-semibold mb-6 text-gray-700">
//             Routine Setup
//           </h2>
//           <form className="space-y-6">
//             <div>
//               <label className="block text-gray-600 mb-2">
//                 How many working days in a week?
//               </label>
//               <input
//                 type="number"
//                 min="1"
//                 max="7"
//                 placeholder="e.g. 6"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-600 mb-2">
//                 How many periods per day?
//               </label>
//               <input
//                 type="number"
//                 min="1"
//                 max="12"
//                 placeholder="e.g. 8"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition font-semibold"
//             >
//               Generate Routine Grid
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useState } from "react";

export default function SetupRoutine() {
  const [showForm, setShowForm] = useState(false);
  const [routineGrid, setRoutineGrid] = useState(false);
  const [days, setDays] = useState(6);
  const [periods, setPeriods] = useState(8);
  const [startTimes, setStartTimes] = useState(Array(8).fill(""));

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    
    e.preventDefault();
    setRoutineGrid(true);
  };

  const handleStartTimeChange = (index :number, value:string) => {
    const updated = [...startTimes];
    updated[index] = value;
    setStartTimes(updated);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      {!showForm && !routineGrid && (
        <div className="text-center bg-white p-6 rounded-2xl shadow-xl">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Let’s get started setting up your routine, sir 👨‍🏫
          </h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl transition"
          >
            Set it now
          </button>
        </div>
      )}

      {showForm && !routineGrid && (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            Routine Setup
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-600 mb-2">
                How many working days in a week?
              </label>
              <input
                type="number"
                min="1"
                max="7"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">
                How many periods per day?
              </label>
              <input
                type="number"
                min="1"
                max="12"
                value={periods}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setPeriods(val);
                  setStartTimes(Array(val).fill(""));
                }}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold"
            >
              Generate Routine Grid
            </button>
          </form>
        </div>
      )}

      {routineGrid && (
        <div className="overflow-x-auto w-full mt-6">
          <table className="table-auto border border-gray-400 w-full text-sm text-center bg-white">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2 bg-gray-200">Day / Period</th>
                {Array.from({ length: periods }).map((_, i) => (
                  <th key={i} className="border border-gray-400 px-4 py-2">
                    <div className="flex flex-col">
                      <span>Period {i + 1}</span>
                      <input
                        type="time"
                        value={startTimes[i]}
                        onChange={(e) => handleStartTimeChange(i, e.target.value)}
                        className="mt-1 px-2 py-1 border border-gray-300 rounded"
                      />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weekdays.slice(0, days).map((day, i) => (
                <tr key={i}>
                  <td className="border border-gray-400 px-4 py-2 font-medium bg-gray-100">{day}</td>
                  {Array.from({ length: periods }).map((_, j) => (
                    <td key={j} className="border border-gray-400 px-2 py-2">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full mb-1 px-2 py-1 border rounded text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Grade"
                        className="w-full px-2 py-1 border rounded text-xs"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
