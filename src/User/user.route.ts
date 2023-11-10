import { Router } from "express";

const router = Router();

router.get("/", (req: Express.Request, res: Express.Response) => {
  console.log("Hello World");
});
