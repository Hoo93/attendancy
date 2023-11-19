import CreateUserDto, {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH
} from "../src/Auth/dto/create-user.dto";

describe("CreateUserDto 테스트", () => {
  const name = "박상후";
  const password = "pwd";
  const age = 30;
  const phoneNumber = "010-8098-1398";
  const email = "sksk8922@gmail.com";

  it("생성자를 통해 Dto 생성", () => {
    const createUserDto = new CreateUserDto("test", "pwd", 30, "010-8098-1398", "skks8922@gmail.com");
    expect(createUserDto.name).toBe("test");
  });

  describe("validateNameLength 테스트", () => {

    it("이름이 두 글자 이하인 경우 false 반환" ,()=> {
      const shortName = '상후'
      const createUserDto = new CreateUserDto(shortName, password, age, phoneNumber, email);
      expect(createUserDto.validateNameLength()).toBe(false)
    })

    it("이름이 8글자 초과인 경우 false 반환" ,()=> {
      const longName = '이것은너무긴이름입니다.'
      const createUserDto = new CreateUserDto(longName, password, age, phoneNumber, email);
      expect(createUserDto.validateNameLength()).toBe(false)
    })

    it.each([
        ["적절한이름",true],
        ["짧음",false],
        ["이런이름은너무길지?",false]
    ]) ('이름이 %s인 경우 %p 반환', (name,expected) => {
      const createUserDto = new CreateUserDto(name, password, age, phoneNumber, email);
      expect(createUserDto.validateNameLength()).toBe(expected)
    })
  })

  describe("validateName 테스트", () => {

    it("한글,영어,숫자로 이루어진 name은 true를 반환한다.", () => {
      let username = '박상후'
      const createUserDto = new CreateUserDto(username, password, age, phoneNumber, email);
      expect(createUserDto.validateName()).toBe(true);
    });

    it("한글,영어,숫자로 이루어지지 않은 이름은 false를 반환한다.", () => {
      let username = '박상후 !'
      const createUserDto = new CreateUserDto(username, password, age, phoneNumber, email);
      expect(createUserDto.validateName()).toBe(false);
    });

    it.each([
      ['John123', true],
      ['한글이름', true],
      ['special!@#', false],
      ['   ', false],
      ['', false],
    ])('이름이 %s 인 경우 %p 반환', (name, expected) => {
      const createUserDto = new CreateUserDto(name, password, age, phoneNumber, email);
      const result = createUserDto.validateName();
      expect(result).toBe(expected)
    });
  });

  describe('validatePasswordLength 테스트' , () => {

    it("6글자 미만 패스워드는 false를 반환합니다." , () => {
      let shortPassword = 'short'
      let createUserDto = new CreateUserDto(name,shortPassword,age,phoneNumber,email)
      expect(createUserDto.validatePasswordLength()).toBe(false)
    })

    it("12글자 초과 패스워드는 false를 반환합니다." , () => {
      let longPassword = 'twelve letter'
      let createUserDto = new CreateUserDto(name,longPassword,age,phoneNumber,email)
      expect(createUserDto.validatePasswordLength()).toBe(false)
    })

    it.each([
        ["short", false],
        ["too long password", false],
        ["appropriate", true],
        ["twelveLetter",true],
        ["letter",true]
    ]) ('글자수가 %s인 경우 %p를 반환', (password,expected) => {
      const createUserDto = new CreateUserDto(name,password,age,phoneNumber,email)
      expect(createUserDto.validatePasswordLength()).toBe(expected)
    })
  })

  describe('validatePassword 테스트', () => {
    it("영문,숫자,특수기호를 1개 이상 포함하지 않은 경우 false 반환", () => {
      let englishPassword = 'onlyEnglish'
      let createUserDto = new CreateUserDto(name,englishPassword,age,phoneNumber,email)
      expect(createUserDto.validatePassword()).toBe(false)
    })

    it("영문,숫자,특수기호를 1개 이상 포함한 경우 true 반환.", () => {
      let properPassword = 'proper123!'
      let createUserDto = new CreateUserDto(name,properPassword,age,phoneNumber,email)
      expect(createUserDto.validatePassword()).toBe(true)
    })

    it.each([
        ['한글비밀번호',false],
        ['onlyEnglish',false],
        ['한글비밀번호와123',false],
        ['english123',false],
        ['engAnd123##',true],
    ]) ('패스워드가 %s인 경우 %p 반환', (password,expected) => {
      const createUserDto = new CreateUserDto(name,password,age,phoneNumber,email)
      expect(createUserDto.validatePassword()).toBe(expected)
    })
  })

  describe("validateEmail 메소드 테스트", () => {
    it.each([
        ["sksk8922@gmail.com",true],
        ["thisIsFalse",false],
        ["sksk8922gmail.com",false],
        ["sksk8922@gmail",false],
        ["sksk8922@gmail.com2",false],
        ["hyphen-@naver.com",true]
    ]) ("이메일이 %s인 경우 %p 반환" , (email,expected) => {
      const createUserDto = new CreateUserDto(name,password,age,phoneNumber,email)
      expect(createUserDto.validateEmail()).toBe(expected)
    })
  })

  describe("validate 메소드 테스트", () => {
    let INVALID_NAME_LENGTH_ERROR_MESSAGE = `사용자 이름은 ${MIN_NAME_LENGTH} 이상 ${MAX_NAME_LENGTH} 이어야 합니다`;
    let INVALID_NAME_ERROR_MESSAGE = `사용자 이름은 한글,영어,숫자만 사용 가능합니다.`;
    let INVALID_PASSWORD_LENGTH_ERROR_MESSAGE = `비밀번호 길이는 ${MIN_PASSWORD_LENGTH} 이상 ${MAX_PASSWORD_LENGTH} 이어야 합니다`
    let INVALID_PASSWORD_ERROR_MESSAGE= '비밀번호는 영어,숫자,특수기호를 1개 이상 포함해야 합니다.'
    let INVALID_EMAIL_ERROR_MESSAGE = '이메일 주소가 유효하지 않습니다.'
    it.each([
      ["이름", 'valid123!@#', 31, '010-8098-1398', 'email@email.com', INVALID_NAME_LENGTH_ERROR_MESSAGE],
      ["이름이 너무 길지 아니한가 !", 'valid123!@#', 31, '010-8098-1398', 'email@email.com', INVALID_NAME_LENGTH_ERROR_MESSAGE],
      ["  !!3이름", 'valid123!@#', 31, '010-8098-1398', 'email@email.com', INVALID_NAME_ERROR_MESSAGE],
      ["적절한이름", 'short', 31, '010-8098-1398', 'email@email.com', INVALID_PASSWORD_LENGTH_ERROR_MESSAGE],
      ["적절한이름", 'thisPasswordIsTooLong', 31, '010-8098-1398', 'email@email.com', INVALID_PASSWORD_LENGTH_ERROR_MESSAGE],
      ["적절한이름", 'notSpecial3', 31, '010-8098-1398', 'email@email.com', INVALID_PASSWORD_ERROR_MESSAGE],
      ["적절한이름", '1proper@3', 31, '010-8098-1398', 'invalidmail', INVALID_EMAIL_ERROR_MESSAGE],
      ["적절한이름", '1proper@3', 31, '010-8098-1398', 'email@email.com', undefined],
    ]) ('유효하지 않은 경우 Error를 발생시킵니다.' , (name,password,age,phoneNumber,email,errorMessage) => {
      const createUserDto = new CreateUserDto(name,password,age,phoneNumber,email)
      if (errorMessage) {
        expect(() => createUserDto.validate()).toThrowError(errorMessage)
      } else {
        expect(() => createUserDto.validate()).not.toThrow()
      }
    })
  })
});
