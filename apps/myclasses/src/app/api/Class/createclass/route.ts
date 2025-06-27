import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma'; // Adjust path if different

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, code, grade,createdById } = body; //, createdBy  createdBy,
    console.log(name, grade, createdById);

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
        createdBy: {
          connect: { id: createdById } // ✅ relation done right
        }
        //createdById
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
