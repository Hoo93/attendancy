import {Database} from "./database";

export interface RepositoryInterface<T> {
  create(data: T): Promise<T>;
  findOneById(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  delete(id: number): Promise<boolean>;
  update(id: number, data: Partial<T>): Promise<boolean>;
}

abstract class Repository<T> {
  async executeQuery(query: string) {
    const conn = await Database.getConnection();
    try {
      const [result] = await conn.query(query);
      return result;
    } catch (error) {
      console.error("Query Execution Error", error);
      throw new Error("Query Execution Error");
    } finally {
      conn.release();
    }
  }

  async create(data: any): Promise<T> {
    throw new Error("create method not implemented");
  }

  async findAll(): Promise<T[]> {
    throw new Error("findAll method not implemented");
  }

  async findOneById(id: number): Promise<T | null> {
    throw new Error("findOneById method not implemented");
  }

  async update(id: number, data: Partial<T>): Promise<number> {
    throw new Error("update method not implemented");
  }

  async delete(id: number): Promise<number> {
    throw new Error("delete method not implemented");
  }
}

export default Repository;
