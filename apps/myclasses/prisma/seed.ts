// import { PrismaClient, Prisma } from '../src/app/generated/prisma';
// import { hash } from 'bcrypt';


// const prisma = new PrismaClient();

// async function main() {

//   // deleting previous entries
//   await prisma.submission.deleteMany({});
//   await prisma.enrollment.deleteMany({});
//   await prisma.assignment.deleteMany({});
//   await prisma.subject.deleteMany({});
//   await prisma.user.deleteMany({});
  
//   console.log("🧹 Cleared user table");

//   const hashed = await hash("demo123", 10);

//   // Create Users
//   const teacher = await prisma.user.create({
//     data: {
//         name: "Alice Teacher",
//         email: "alice@school.com",
//         phone1: "9876543210",
//         password: hashed,
//         role: "TEACHER",
//         qualification: "M.Ed",
//         bio: "Passionate about teaching.",
//         experience: 7,
//         dob: new Date("1985-04-10"),
//     },
//   });

//   const student = await prisma.user.create({
//     data: {
//       name: "Bob Student",
//         email: "bob@student.com",
//         phone1: "9123456780",
//         password: hashed,
//         role: "STUDENT",
//         gradeLevel: "10",
//         dob: new Date("2008-09-15"),
//     },
//   });

//   // Create Subjects
//   const math = await prisma.subject.create({
//     data: {
//       name: 'Mathematics',
//       code: 'MATH101',
//     },
//   });

//   // const science = await prisma.subject.create({
//   //   data: {
//   //     name: 'Science',
//   //     code: 'SCI101',
//   //   },
//   // });

//   // Enroll Student in Math
//   await prisma.enrollment.create({
//     data: {
//       userId: student.id,
//       subjectId: math.id,

//     },
//   });

//   // Create Assignment in Math by Teacher
//   const now = new Date();
//   const startDate = new Date(now);
//   startDate.setDate(startDate.getDate() + 1);
//   const dueDate = new Date(startDate);
//   dueDate.setDate(startDate.getDate() + 5);

//   const assignment = await prisma.assignment.create({
//     data: {
//       title: 'Algebra Basics',
//       content: 'Solve the problems from Chapter 2.',
//       publishedAt: now,
//       startDate,
//       dueDate,
//       teacherId: teacher.id,
//       subjectId: math.id,
//     },
//   });

//   // Create Submission from Student
//   await prisma.submission.create({
//     data: {
//       studentId: student.id,
//       assignmentId: assignment.id,
//       fileUrl: 'https://example.com/submissions/bob-algebra.pdf',
//     },
//   });

//   console.log('🌱 Seeding complete.');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(() => prisma.$disconnect());
