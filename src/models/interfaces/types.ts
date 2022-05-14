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
