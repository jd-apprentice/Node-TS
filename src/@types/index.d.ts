export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      DB_HOST: string;
      TOKEN: string;
      BASE_URL: string;
      JWT_SECRET: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
