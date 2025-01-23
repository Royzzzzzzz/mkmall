import { PrismaClient } from "@prisma/client";

let db;

if (!global.db) {
    global.db = new PrismaClient(); // Prisma 클라이언트 생성
}

db = global.db;

export default db; // 기본 내보내기
