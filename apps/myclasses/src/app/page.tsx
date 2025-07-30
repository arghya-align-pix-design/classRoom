"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-white via-cyan-100 to-cyan-300">
      <div className="max-w-2xl text-center p-8 bg-white/70 backdrop-blur-md rounded-xl shadow-xl border border-cyan-200">
        <h1 className="text-5xl font-extrabold text-cyan-600 mb-4 drop-shadow-sm">
          Welcome to YourClassroom!
        </h1>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Join classes, add personal plans, and maintain a handy biodata
          you can use for official documents — all in one place.
        </p>

        <Button
          className="px-6 py-3 text-white font-semibold bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg"
          onClick={() => router.push("/Getting-Started")}
        >
          LET'S GET STARTED
        </Button>
      </div>
    </main>
  );
}
