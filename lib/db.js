import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

let db;

if (!globalForPrisma.db) {
    globalForPrisma.db = new PrismaClient(); // Prisma 클라이언트 생성
}

db = globalForPrisma.db;

export default db; // 기본 내보내기
