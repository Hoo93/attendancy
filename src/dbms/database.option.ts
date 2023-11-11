import { PoolOptions } from "mysql2";

export interface Dbconfig extends PoolOptions {
  host: string;
  user: string;
  password: string;
  database: string;
}

export const dbconfig = {
  host: "localhost",
  user: "root",
  password: "test",
  database: "attendance_express",
};
