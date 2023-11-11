import { Router } from "express";
import { Database } from "../dbms/\bdatabase";

const userRouter = Router();

userRouter.get("/", (req: Express.Request, res: Express.Response) => {
  console.log("Hello World");
});

userRouter.get("/showDB", async (req: Express.Request, res: Express.Response) => {
  const conn = await Database.getConnection();
  const [row] = await conn.query("SHOW DATABASES;");
  console.log(row);
});

export default userRouter;
