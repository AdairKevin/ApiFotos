import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function connectToDB() {
  try {
    await prisma.$connect();
    console.log("Connected to PostgreSQL via Prisma");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
}

export { prisma };
