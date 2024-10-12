import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
/**
 * Initialize the PrismaClient instance. Use the existing global instance if available,
 * otherwise create a new one.
 */
const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = db;
}

export default db;
