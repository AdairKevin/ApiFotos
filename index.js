import app from "./app.js";
import { PORT } from "./config.js";
import { connectToDB } from "./utils/mongoose.js";

// database/connectToDB.js
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

async function main() {
  await connectToDB();

  app.listen(PORT);
  console.log("Project is running!", PORT);
}

main();
