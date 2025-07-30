"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";
import {ParentDiv} from "@repo/ui/Parent";
import "./../globals.css";

export default function AuthPage() {
  
   const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyan-200 via-sky-100 to-blue-300 px-4">
      <ParentDiv
        className="w-full max-w-lg p-10 flex flex-col items-center justify-center rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-blue-100"
        variant="form"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center drop-shadow">
          Choose an Option
        </h2>
        <div className="flex gap-8 w-full justify-center">
          <Button
            className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={() => router.push("/Getting-Started/Login")}
          >
            Login
          </Button>
          <Button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={() => router.push("/Getting-Started/Signup")}
          >
            Sign Up
          </Button>
        </div>
      </ParentDiv>
    </main>
  );
}