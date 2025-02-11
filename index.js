import app from "./app.js";
import { connectToDB } from "./utils/mongoose.js";

async function main() {
  await connectToDB();

  app.listen(3000);
  console.log("Project is running!", 3000);
}

main();
