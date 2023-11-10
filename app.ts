import express from "express";
import Container, { Service } from "typedi";

export class App {
  private readonly app: express.Application;

  constructor(port: number) {
    this.app = express();
    this.listen(port);
  }

  private listen(port: number) {
    this.app.listen(port, () => {
      console.log("######################################");
      console.log(`##### server is running on ${port} ######`);
      console.log("######################################");
    });
  }
}
