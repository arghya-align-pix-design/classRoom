"use client";

import { useRouter } from "next/navigation";
//import {ParentDiv} from "@repo/ui/Parent";
import { useState } from "react";
//import "./../../globals.css";

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
            //TAKE OUT THE TOKEN AND STORE LOCALLY
            if (data.token && data.user) {
            localStorage.setItem('token', data.token);
            console.log(data.token);
            localStorage.setItem('userData',JSON.stringify(data.user));
            console.log("user id received:", data.user.id);
            console.log("user name received",data.user.name);
            }
            
            // first data locally saved then Role-based redirect
            if (data.user.role === "STUDENT") {
                localStorage.setItem('studentId', data.user.id);
                localStorage.setItem('studentName', data.user.name);
                router.push("/Dashboard-Student");

            } else if (data.user.role === "TEACHER") {
                localStorage.setItem('teacherId', data.user.id);
                localStorage.setItem('teacherName',data.user.name);
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
    <div className="min-h-screen flex items-center justify-center bg-blue-900 p-4">
      <div className="bg-blue-400 p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

            <input
                type="text"
                placeholder="Email or Phone"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full p-2 border rounded"
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
            />

            {error && <p className="text-black font-bold text-sm">{error}</p>}
            
            <button
                onClick={handleLogin}
                disabled={!identifier || !password}
                className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
            >
                Login
            </button>
        </div>
    </div>
   );
}
