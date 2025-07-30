"use client";

import { useRouter } from "next/navigation";
import { ParentDiv } from "@repo/ui/Parent";
import TeacherSignUpForm from "@repo/ui/TeachForm";

export default function SignUpPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cyan-100 via-blue-100 to-white px-4 py-8">
      <ParentDiv
        className="w-full max-w-2xl p-10 bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-blue-200"
        variant="default"
      >
        <TeacherSignUpForm />
      </ParentDiv>
    </main>
  );
}
