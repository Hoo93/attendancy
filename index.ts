import { App } from "./app";
import { dbconfig } from "./src/dbms/database.option";

const port = 8000;
const app = new App(port, dbconfig);
