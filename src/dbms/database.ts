import mysql, { Pool, PoolOptions } from "mysql2/promise";
import { Dbconfig } from "./database.option";
import { PoolConnection } from "mysql2/typings/mysql/lib/PoolConnection";

export class Database {
  private static pool: Pool;

  static initialize(config: Dbconfig) {
    try {
      Database.pool = mysql.createPool(config);
    } catch {
      console.error("DATABASE CONNECTION ERROR", 500);
      throw new Error("DATABASE CONNECTION ERROR");
    }
  }

  static async getConnection(): Promise<mysql.PoolConnection> {
    return await Database.pool.getConnection();
  }
}
