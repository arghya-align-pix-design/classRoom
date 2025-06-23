import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma'; // Adjust path if different

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, code, grade } = body;

    if (!name || !code || !grade) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const existing = await prisma.subject.findUnique({
      where: { code },
    });

    if (existing) {
      return NextResponse.json(
        { message: 'Subject code already exists' },
        { status: 409 }
      );
    }

    const newSubject = await prisma.subject.create({
      data: {
        name,
        code,
        grade,
      },
    });

    return NextResponse.json(newSubject, { status: 201 });
  } catch (err) {
    console.error('Error creating subject:', err);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
