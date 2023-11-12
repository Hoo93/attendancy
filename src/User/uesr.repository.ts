import { Service } from "typedi";
import Repository from "../dbms/respository.interface";
import RepositoryInterface from "../dbms/respository.interface";
import User from "./user";

@Service()
export class UserRepository extends Repository<User> {}
