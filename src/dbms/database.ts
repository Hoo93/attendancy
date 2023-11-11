import mysql, { Pool, PoolOptions } from "mysql2/promise";
import { Dbconfig } from "./database.option";
import { PoolConnection } from "mysql2/typings/mysql/lib/PoolConnection";

class Database {
  private static pool: Pool;

  static initialize(config: Dbconfig) {
    Database.pool = mysql.createPool(config);
  }

  static async getConnection(): Promise<mysql.PoolConnection> {
    //  this.pool.getConnection();
    return await Database.pool.getConnection();
  }
}
