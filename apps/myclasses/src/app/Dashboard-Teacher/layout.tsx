// "use client";

// import Link from "next/link";
// import { usePathname } from 'next/navigation';
// //import Link from 'next/link';
// import "./styles.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();

  
//   return (
//     <div >
//         <nav className="bg-blue-300 shadow flex justify-around py-4 sticky top-0 z-50">
//         <Link
//           href="/Dashboard-Teacher"
//           className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher" ? "text-shadow-blue-900 font-semibold" : "text-shadow-blue-900"}`}
//         >
//           Dashboard
//         </Link>
//         <Link
//           href="/Dashboard-Teacher/Assignments"
//           className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher/Assignments" ? "text-shadow-blue-900 font-semibold" : "text-shadow-blue-900"}`}
//         >
//           Assignments
//         </Link>
//         <Link
//           href="/Dashboard-Teacher/Subjects"
//           className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher/Subjects" ? "text-shadow-blue-700 font-semibold" : "text-shadow-blue-900"}`}
//         >
//           Subjects
//         </Link>
//         <Link
//           href="/Dashboard-Teacher/Schedule"
//           className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher/Schedule" ? "text-shadow-blue-900 font-semibold" : "text-blue-900"}`}
//         >
//           Schedule
//         </Link>
//         <Link
//           href="/Dashboard-Teacher/Profile"
//           className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher/Profile" ? "text-shadow-blue-900 font-semibold" : "text-blue-900"}`}
//         >
//           Profile
//         </Link>
//       </nav>
//         <main className="p-4">{children}</main>
//         </div>
//   );
// }
"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import "./styles.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden"
        style={{
        backgroundImage: "url('/DashboardBg.png')", // make sure this filename matches
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // or "contain" or "100% 100%" based on the image style
      }}
    >

      {/* Foreground content layer */}
      <div className="relative z-10">
        <nav className="bg-blue-300 shadow flex justify-around py-4 sticky top-0 z-50">
          <Link
            href="/Dashboard-Teacher"
            className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher" ? "text-shadow-blue-900 font-semibold" : "text-shadow-blue-900"}`}
          >
            Dashboard
          </Link>
          <Link
            href="/Dashboard-Teacher/Assignments"
            className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher/Assignments" ? "text-shadow-blue-900 font-semibold" : "text-shadow-blue-900"}`}
          >
            Assignments
          </Link>
          <Link
            href="/Dashboard-Teacher/Subjects"
            className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher/Subjects" ? "text-shadow-blue-700 font-semibold" : "text-shadow-blue-900"}`}
          >
            Subjects
          </Link>
          <Link
            href="/Dashboard-Teacher/Schedule"
            className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher/Schedule" ? "text-shadow-blue-900 font-semibold" : "text-blue-900"}`}
          >
            Schedule
          </Link>
          <Link
            href="/Dashboard-Teacher/Profile"
            className={`hover:text-blue-900 ${pathname === "/Dashboard-Teacher/Profile" ? "text-shadow-blue-900 font-semibold" : "text-blue-900"}`}
          >
            Profile
          </Link>
        </nav>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
