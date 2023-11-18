
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

  validateEmail():Boolean {
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this.email)
  }

  validate(): void {
    if (!this.validateNameLength()) {
      throw Error(`사용자 이름은 ${MIN_NAME_LENGTH} 이상 ${MAX_NAME_LENGTH} 이어야 합니다`)
    }
    if (!this.validateName()) {
      throw Error ('사용자 이름은 한글,영어,숫자만 사용 가능합니다.')
    }
    if (!this.validatePasswordLength()) {
      throw new Error(`비밀번호 길이는 ${MIN_PASSWORD_LENGTH} 이상 ${MAX_PASSWORD_LENGTH} 이어야 합니다`);
    }
    if (!this.validatePassword()) {
      throw new Error('비밀번호는 영어,숫자,특수기호를 1개 이상 포함해야 합니다.');
    }
    if (!this.validateEmail()) {
      throw new Error('이메일 주소가 유효하지 않습니다.');
    }
    return
  }
}

export default CreateUserDto;
export const MIN_PASSWORD_LENGTH = 3
export const MAX_PASSWORD_LENGTH = 12
export const MIN_NAME_LENGTH = 3
export const MAX_NAME_LENGTH = 8

