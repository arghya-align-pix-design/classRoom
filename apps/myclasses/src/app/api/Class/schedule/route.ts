import { NextResponse } from "next/server";
import prisma from '../../../../../lib/prisma'; 
//import { getServerSession } from "next-auth";
import { verifyToken } from '../../../auth/jwt';

export async function POST(req: Request) {
  
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }

  try {
    
    const decoded = verifyToken(token) as { id: string, role: string };

    if (decoded.role !== 'TEACHER') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const teacherId = decoded.id;

    if (!teacherId) {
    return NextResponse.json({ error: 'Teacher ID is required' }, { status: 400 });
  }
    const body = await req.json();
    const data = body.scheduleEntries;

    if (!Array.isArray(data)) {
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    for (const entry of data) {
      const subject = await prisma.subject.findFirst({
        where: {
          name: entry.subject,
          grade: entry.grade,
          createdById: teacherId,
        },
      });

      if (!subject) continue;

      await prisma.subjectSchedule.create({
        data: {
          dayOfWeek: entry.dayOfWeek,
          period: entry.period,
          startTime: new Date(entry.startTime),
          endTime: new Date(entry.endTime),
          subjectId: subject.id,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[SCHEDULE_CREATE_ERROR]", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}