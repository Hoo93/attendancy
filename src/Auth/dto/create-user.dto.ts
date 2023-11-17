import { IsNumber, IsString } from "class-validator";
import User from "../../User/user";

export class CreateUserDto {
  public readonly name: string;
  public readonly password: string;
  public readonly age: number;
  public readonly phoneNumber: string;
  public readonly email: string;

  constructor(name: string, password: string, age: number, phoneNumber: string, email: string) {
    this.name = name;
    this.password = password;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  validationName():Boolean {
    return /^[가-힣a-zA-Z0-9]+$/.test(this.name);
  }

  validationPassword() {
    return
  }
}

export default CreateUserDto;
