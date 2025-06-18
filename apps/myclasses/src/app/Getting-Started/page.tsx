"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";
import {ParentDiv} from "@repo/ui/Parent";
import "./../globals.css";

export default function AuthPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 bg-white">
      <ParentDiv className={"bg-[radial-gradient(circle,_#50A7DD,_#11294A)] justify-center align-middle items-center w-[60%] h-[80%] min-h-[300px] flex flex-col "} variant={"form"}>
        <h2 className="text-black text-3xl font-semibold mb-4">Choose an option</h2>
        <div className="flex gap-6 align-middle justify-center  items-center">
          <Button className={"text-gray-900 hover:font-black  "}
            onClick={() => router.push("/Getting-Started/Login")}><h4>Login</h4></Button>
          <Button  className={"text-gray-900 hover:font-black "}
            onClick={() => router.push("/Getting-Started/Signup")}><h4>Sign Up</h4></Button>
      </div>
      </ParentDiv>
    </main>
  );
}
