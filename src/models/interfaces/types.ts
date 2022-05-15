import { Callback, SaveOptions } from "mongoose";

export type Config = {
  app: {
    port: typeof process.env.DB_PORT;
    url: typeof process.env.BASE_URL;
  };
  db: {
    mongoURL: typeof process.env.DB_HOST;
  };
  jwt: {
    secret: typeof process.env.TOKEN;
  };
};

export interface IUser {
  [x: string]: any;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
}
