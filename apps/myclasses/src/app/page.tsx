"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-[radial-gradient(circle,_white,_#38bdf8)]">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">Welcome to YourClassroom!</h1>
      <p className="text-lg max-w-xl mb-6 text-gray-700 ">
        This app lets you join classes, add your own plans, and maintain a handy self biodata which can be used for official documentation anywhere.
      </p>
      <Button className={"text-black  hover:decoration-2 hover:font-black underline-offset-3  "}
      // shadow={"dark:shadow-amber-600"}
      onClick={() => router.push("/Getting-Started")}><a>LETS GET STARTED</a></Button>

      {/* <div className="inline-block p-[4px] rounded-2xl bg-yellow-400 transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:animate-throb">
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-black text-white font-bold rounded-xl transition-all duration-500 ease-in-out hover:animate-throb">
            BUTTON COMPONENT
          </button>
        </div>   */}
    </main>
  );
}
