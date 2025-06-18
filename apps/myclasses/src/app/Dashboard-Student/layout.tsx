// app/layout.tsx
import Link from "next/link";
import "./styles.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    //   <body className="font-sans bg-gray-800">
    <div>
        <nav className="bg-gray-500 shadow flex justify-around py-4 sticky top-0 z-50">
          <Link href="/Dashboard-Student" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/Dashboard-Student/Assignments" className="hover:text-blue-600">Assignments</Link>
          <Link href="/Dashboard-Student/calendar" className="hover:text-blue-600">Calendar</Link>
          <Link href="/Dashboard-Student/profile" className="hover:text-blue-600">Profile</Link>
          <Link href="/Dashboard-Student/classes" className="hover:text-blue-600">Classes</Link>
        </nav>
        <main className="p-4">{children}</main>
        </div>
    //   </body>
    // </html>
  );
}
