"use client";

import { useRouter } from "next/navigation";
//import { Button } from "@repo/ui/button";
import {ParentDiv} from "@repo/ui/Parent";
// import "./../globals.css";
import TeacherSignUpForm from "@repo/ui/TeachForm"

export default function SignUpPage() {
  const router = useRouter();

   return (
    <div className="w-screen h-screen  flex items-start justify-start p-4">
        {/* <div className="items-center justify-center">
            <div className="bg-amber-300 justify-center items-center text-center align-middle" style={{ color:"white", textShadow: "1px 2px 3px black, 0 0 5px blue" }}>
                <h1 className="">Project1</h1>
            </div>
        </div> */}
        {/* <div className="h-screen w-screen "> */}
            <ParentDiv className="" variant="default" >
               <TeacherSignUpForm/>
            </ParentDiv>

        {/* </div> */}
    </div>
   );
}
