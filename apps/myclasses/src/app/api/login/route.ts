import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcrypt";
import { signToken } from '../../auth/jwt';

export async function POST(req: NextRequest) {
  try {
    //const body = await req.json();
    //const { email, password } = body;
    const { identifier, password } = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { phone1: identifier },
          { phone2: identifier }
        ]
      }
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);


    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // 🔐 You can set a JWT/cookie here for session management
    const token = signToken({
      id: user.id,
      role: user.role,
      name: user.name
    });
    return NextResponse.json({ message: "Login successful", user, token  }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Login failed" }, { status: 500 });
  }
}
