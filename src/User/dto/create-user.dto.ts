import { IsNumber, IsString } from "class-validator";
import User from "../user";

export interface CreateUserDto extends Omit<User, "id"> {}
