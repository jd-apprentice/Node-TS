import mongoose from "mongoose";
import config from "./config/index";

export async function run(): Promise<typeof mongoose | void> {
  await mongoose
    .connect(config.db.mongoURL!)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
}
