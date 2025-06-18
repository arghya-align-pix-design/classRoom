import Link from "next/link";
import "./styles.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    //   <body className="font-sans bg-gray-800">
    <div>
        <nav className="bg-gray-500 shadow flex justify-around py-4 sticky top-0 z-50">
          <Link href="/Dashboard-Teacher" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/Dashboard-Teacher/Assignments" className="hover:text-blue-600">Assignments</Link>
          <Link href="/Dashboard-Teacher/Submissions" className="hover:text-blue-600">Submissions</Link>
          <Link href="/Dashboard-Teacher/calendar" className="hover:text-blue-600">Calendar</Link>
          <Link href="/Dashboard-Teacher/Profile" className="hover:text-blue-600">Profile</Link>
        </nav>
        <main className="p-4">{children}</main>
        </div>
    //   </body>
    // </html>
  );
}
