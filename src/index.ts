import app from "./server";
import { run } from "./database";
import dotenv from "dotenv";
import config from "./config/index";
dotenv.config();
run();
app.listen(config.app.port || 3000, (): void => {
  console.log(`Server is running on port ${config.app.port}`);
});
