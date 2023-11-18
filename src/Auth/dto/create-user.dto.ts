
export class CreateUserDto {

  private MIN_PASSWORD_LENGTH = 6
  private MAX_PASSWORD_LENGTH = 12
  private MIN_NAME_LENGTH = 3
  private MAX_NAME_LENGTH = 8

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

  validateName():Boolean {
    return /^[가-힣a-zA-Z0-9]+$/.test(this.name);
  }
  validateNameLength():Boolean {
    const nameLength = this.name.length
    return nameLength >= this.MIN_NAME_LENGTH && nameLength <= this.MAX_NAME_LENGTH
  }

  validatePassword():Boolean {
    return /^(?=.*?[a-zA-Z])(?=.*?\d)(?=.*?[!@#$%^&*]).{6,13}$/.test(this.password);
  }

  validatePasswordLength():Boolean {
    const passwordLength = this.password.length
    return passwordLength >= this.MIN_PASSWORD_LENGTH && passwordLength <= this.MAX_PASSWORD_LENGTH
  }

  validateEmail() {
    return
  }
}

export default CreateUserDto;
