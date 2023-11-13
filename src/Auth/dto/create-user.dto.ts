import { IsNumber, IsString } from "class-validator";
import User from "../../User/user";

export interface CreateUserDto extends Omit<User, "id"> {}
