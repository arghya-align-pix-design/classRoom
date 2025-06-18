import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcrypt"; 
import { Role } from "../../generated/prisma";

//const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      dob,
      phone1,
      phone2,
      email,
      password,
      role,
      qualification,
      bio,
      experience,
      gradeLevel,
    } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Validate that role is either "teacher" or "student"
    if (role !== "teacher" && role !== "student") {
      return NextResponse.json({ message: "Invalid role" }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        name,
        dob,
        phone1,
        phone2,
        email,
        password: hashedPassword,
        role: role=== "teacher" ? Role.TEACHER : Role.STUDENT,
        qualification: role === "teacher" ? qualification : undefined,
        bio:role === "teacher" ? bio : undefined,
        experience: role === "teacher" ? Number(experience) : undefined,
        gradeLevel: role === "student" ? gradeLevel : undefined,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ message: "Signup failed" }, { status: 500 });
  }
}
