import {
  INVALID_EMAIL_ERROR_MESSAGE,
  INVALID_NAME_ERROR_MESSAGE,
  INVALID_NAME_LENGTH_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE,
  INVALID_PASSWORD_LENGTH_ERROR_MESSAGE,
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH
} from "../const";

export class CreateUserDto {

  public readonly id: string;
  public readonly password: string;
  public readonly name: string;
  public readonly age: number | null;
  public readonly phoneNumber: string | null;
  public readonly email: string | null;

  constructor(id: string, password: string, name: string, age: number | null, phoneNumber: string, email: string) {
    this.id = id;
    this.password = password;
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  validateName():Boolean {
    return /^[가-힣a-zA-Z0-9]+$/.test(this.name);
  }
  validateNameLength():Boolean {
    const nameLength = this.name.length
    return nameLength >= MIN_NAME_LENGTH && nameLength <= MAX_NAME_LENGTH
  }

  validatePassword():Boolean {
    return /^(?=.*?[a-zA-Z])(?=.*?\d)(?=.*?[!@#$%^&*]).{6,13}$/.test(this.password);
  }

  validatePasswordLength():Boolean {
    const passwordLength = this.password.length
    return passwordLength >= MIN_PASSWORD_LENGTH && passwordLength <= MAX_PASSWORD_LENGTH
  }

  validateEmail():Boolean {
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this.email)
  }

  validatePhoneNumber(): Boolean {
    return /^$/?.test(this.phoneNumber)
  }

  validate(): void {
    if (!this.validateNameLength()) {
      throw new Error(INVALID_NAME_LENGTH_ERROR_MESSAGE);
    }
    if (!this.validateName()) {
      throw new Error(INVALID_NAME_ERROR_MESSAGE);
    }
    if (!this.validatePasswordLength()) {
      throw new Error(INVALID_PASSWORD_LENGTH_ERROR_MESSAGE);
    }
    if (!this.validatePassword()) {
      throw new Error(INVALID_PASSWORD_ERROR_MESSAGE);
    }
    if (!this.validateEmail()) {
      throw new Error(INVALID_EMAIL_ERROR_MESSAGE);
    }
  }
}

export default CreateUserDto;

