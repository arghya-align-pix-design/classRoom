// 
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState(""); // email or phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.token && data.user) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user));
      }

      if (data.user.role === "STUDENT") {
        localStorage.setItem("studentId", data.user.id);
        localStorage.setItem("studentName", data.user.name);
        router.push("/Dashboard-Student");
      } else if (data.user.role === "TEACHER") {
        localStorage.setItem("teacherId", data.user.id);
        localStorage.setItem("teacherName", data.user.name);
        setTimeout(() => {
          router.push("/Dashboard-Teacher");
        }, 200);
      }
    } else {
      const data = await res.json();
      setError(data.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md text-white space-y-6">
        <h2 className="text-3xl font-bold text-center">Welcome Back 👋</h2>

        <input
          type="text"
          placeholder="Email or Phone"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/60"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/60"
        />

        {error && <p className="text-red-300 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={!identifier || !password}
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
        >
          Login
        </button>
      </div>
    </div>
  );
}
