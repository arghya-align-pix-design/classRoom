// lib/jwt.ts
import jwt,{ SignOptions } from 'jsonwebtoken';
import ms from "ms";

const SECRET = process.env.JWT_SECRET || "devsecret";

export function signToken(payload: object, expiresIn: ms.StringValue = "7d") {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, SECRET, options);
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}


// export function getUserIdFromRequest(request: Request): string | null {
//   const authHeader = request.headers.get('authorization');
//   if (!authHeader || !authHeader.startsWith('Bearer ')) return null;

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
//     return decoded.userId; // or `id`, based on your token structure
//   } catch (err) {
//     return null;
//   }
// }
