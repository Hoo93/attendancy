import { IsNumber, IsString } from "class-validator";
import User from "../../User/user";

export class CreateUserDto {
  private readonly name: string;
  private readonly password: string;
  private readonly age: number;
  private readonly phoneNumber: string;
  private readonly email: string;

  constructor(name: string, password: string, age: number, phoneNumber: string, email: string) {
    this.name = name;
    this.password = password;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

export default CreateUserDto;
