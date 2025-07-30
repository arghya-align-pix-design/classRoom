"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [role, setRole] = useState("teacher");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");

  const calculateAge = (dateString: string) => {
    const birthDate = new Date(dateString);
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setAge(`${years} years, ${months} months, ${days} days`);
  };

  const handleSubmit = async () => {
    const payload = {
      name,
      dob: new Date(dob).toISOString(),
      phone1,
      phone2,
      email,
      password,
      role,
      qualification: role === "teacher" ? qualification : undefined,
      bio: role === "teacher" ? bio : undefined,
      experience: role === "teacher" ? parseInt(experience) : undefined,
      gradeLevel: role === "student" ? gradeLevel : undefined,
    };

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Signup successful!");
      router.push("/Getting-Started/Login");
    } else {
      const error = await res.json();
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-blue-200 space-y-6">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-2">Sign Up</h2>

      {/* Role Selector */}
      <div className="flex justify-center gap-6 text-sm font-medium text-gray-800">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="role"
            value="teacher"
            checked={role === "teacher"}
            onChange={() => setRole("teacher")}
          />
          Teacher
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="role"
            value="student"
            checked={role === "student"}
            onChange={() => setRole("student")}
          />
          Student
        </label>
      </div>

      {/* Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
      />

      {/* DOB and Age */}
      <div className="flex flex-col gap-2">
        <input
          type="date"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
            calculateAge(e.target.value);
          }}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        {age && <p className="text-sm text-gray-600">Age: {age}</p>}
      </div>

      {/* Contact Info */}
      <input
        type="tel"
        value={phone1}
        onChange={(e) => setPhone1(e.target.value)}
        placeholder="Primary Phone"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <input
        type="tel"
        value={phone2}
        onChange={(e) => setPhone2(e.target.value)}
        placeholder="Secondary Phone"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />

      {/* Email & Password */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />

      {/* Conditional Fields */}
      {role === "teacher" && (
        <>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            placeholder="Qualification"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Bio (Optional)"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Years of Experience"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </>
      )}

      {role === "student" && (
        <input
          type="text"
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
          placeholder="Grade/Class (e.g., Class 10)"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold disabled:opacity-50"
        disabled={!name || !dob || !phone1 || !phone2 || !email || !password}
      >
        Sign Up
      </button>
    </div>
  );
}
