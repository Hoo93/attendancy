import {
  INVALID_EMAIL_ERROR_MESSAGE,
  INVALID_NAME_ERROR_MESSAGE,
  INVALID_NAME_LENGTH_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE,
  INVALID_PASSWORD_LENGTH_ERROR_MESSAGE,
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '../const'
import User from '../../User/user'

export class CreateUserDto {
  public readonly password: string
  public readonly name: string
  public readonly phoneNumber: string
  public readonly age: number | null
  public readonly email: string | null

  constructor(
    password: string,
    name: string,
    phoneNumber: string,
    age?: number,
    email?: string
  ) {
    this.password = password
    this.name = name
    this.phoneNumber = phoneNumber
    this.age = age ?? null
    this.email = email ?? null
  }

  public toEntity(): User {
    const user = new User(
      this.password,
      this.name,
      this.phoneNumber,
      this.age,
      this.email
    )
    return user
  }

  public validate(): void {
    if (!this.validateNameLength()) {
      throw new Error(INVALID_NAME_LENGTH_ERROR_MESSAGE)
    }
    if (!this.validateName()) {
      throw new Error(INVALID_NAME_ERROR_MESSAGE)
    }
    if (!this.validatePasswordLength()) {
      throw new Error(INVALID_PASSWORD_LENGTH_ERROR_MESSAGE)
    }
    if (!this.validatePassword()) {
      throw new Error(INVALID_PASSWORD_ERROR_MESSAGE)
    }
    if (!this.validateEmail()) {
      throw new Error(INVALID_EMAIL_ERROR_MESSAGE)
    }
  }

  validateName(): Boolean {
    return /^[가-힣a-zA-Z0-9]+$/.test(this.name)
  }

  validateNameLength(): Boolean {
    const nameLength = this.name.length
    return nameLength >= MIN_NAME_LENGTH && nameLength <= MAX_NAME_LENGTH
  }

  validatePassword(): Boolean {
    return /^(?=.*?[a-zA-Z])(?=.*?\d)(?=.*?[!@#$%^&*]).{6,13}$/.test(
      this.password
    )
  }

  validatePasswordLength(): Boolean {
    const passwordLength = this.password.length
    return (
      passwordLength >= MIN_PASSWORD_LENGTH &&
      passwordLength <= MAX_PASSWORD_LENGTH
    )
  }

  validateEmail(): Boolean {
    if (!this.email) {
      return true
    }
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this.email)
  }

  validatePhoneNumber(): Boolean {
    if (!this.phoneNumber) {
      return true
    }
    return /^01[01]{1}-\d{3,4}-\d{4}$/.test(this.phoneNumber)
  }
}

export default CreateUserDto
