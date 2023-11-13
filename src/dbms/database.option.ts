import { PoolOptions } from "mysql2";

export interface Dbconfig extends PoolOptions {
  host: string;
  user: string;
  password: string;
  database: string;
}

export const dbconfig: Dbconfig = {
  host: "localhost",
  user: "root",
  password: "test",
  database: "attendance_express",
  connectionLimit: 5,
  idleTimeout: 60000,
};
