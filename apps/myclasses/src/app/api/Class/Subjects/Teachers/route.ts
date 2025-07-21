import { NextResponse } from 'next/server';
import prisma from '../../../../../../lib/prisma'; // or wherever your prisma instance is
import { verifyToken } from '../../../../auth/jwt';

export async function GET(req: Request) {

  // const { searchParams } = new URL(req.url);
  // const teacherId = searchParams.get('teacherId');
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

    const classes = await prisma.subject.findMany({
      where: {
        createdById: teacherId,
      },
      select: {
        id: true,
        name: true,
        grade:true,
        // createdAt: true,
      },
    });

    if (classes.length > 0) {
      return NextResponse.json({ hasPreviousClasses: true, classes });
    } else {
      return NextResponse.json({ hasPreviousClasses: false });
    }
  } catch (err) {
    console.error('Error checking teacher classes:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
