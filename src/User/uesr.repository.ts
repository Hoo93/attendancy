import { Service } from "typedi";
import Repository from "../dbms/default-repository";
import User from "./user";

@Service()
export class UserRepository extends Repository<User> {}
