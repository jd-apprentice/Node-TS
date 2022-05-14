import dotenv from "dotenv";
import { Config } from "../models/interfaces/types";
dotenv.config();

const { DB_PORT, DB_HOST, BASE_URL, JWT_SECRET } = process.env;

const enviromentConfig: Config = {
  app: {
    port: DB_PORT,
    url: BASE_URL,
  },
  db: {
    mongoURL: DB_HOST,
  },
  jwt: {
    secret: JWT_SECRET,
  },
};

export default enviromentConfig;
