import { IsString } from "class-validator";

export interface User {
  id: number;
  name: string;
  password: string;
  age: number;
  phoneNumber: string;
}

export default User;
