import { PrismaClient } from "@prisma/client";

// PrismaClient를 전역으로 저장하여 개발 환경에서 여러 번 생성되지 않도록 처리
let db;

if (process.env.NODE_ENV === "production") {
    db = new PrismaClient(); // 프로덕션에서는 단일 클라이언트 생성
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
    }
    db = global.prisma; // 개발 환경에서는 global 객체를 사용
}

export default db;
