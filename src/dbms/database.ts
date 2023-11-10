import mysql, { Pool, PoolOptions } from "mysql2/promise";

class Database {
  private pool: Pool;

  static initialize(config: Dbconfig) {
    this.pool = mysql.createPool(config);
  }
}
