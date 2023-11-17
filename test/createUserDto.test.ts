import CreateUserDto from "../src/Auth/dto/create-user.dto";

describe("CreateUserDto 테스트", () => {
  it("생성자를 통해 Dto 생성", () => {
    const createUserDto = new CreateUserDto("test", "pwd", 30, "010-8098-1398", "skks8922@gmail.com");
    expect(createUserDto.name).toBe("test");
  });

  describe("validationName 테스트", () => {
    const name = "박상후";
    const password = "pwd";
    const age = 30;
    const phoneNumber = "010-8098-1398";
    const email = "sksk8922@gmail.com";

    it("한글,영어,숫자로 이루어진 name은 true를 반환한다.", () => {
      let username = '박상후'
      const createUserDto = new CreateUserDto(username, password, age, phoneNumber, email);
      expect(createUserDto.validationName()).toBe(true);
    });

    it("한글,영어,숫자로 이루어지지 않은 이름은 false를 반환한다.", () => {
      let username = '박상후 !'
      const createUserDto = new CreateUserDto(username, password, age, phoneNumber, email);
      expect(createUserDto.validationName()).toBe(false);
    });

    it.each([
      ['John123', true],
      ['한글이름', true],
      ['special!@#', false],
      ['   ', false],
      ['', false],
    ])('이름이 %s 인 경우 %p 반환', (name, expected) => {
      const createUserDto = new CreateUserDto(name, password, age, phoneNumber, email);
      const result = createUserDto.validationName();
      expect(result).toBe(expected)
    });
  });

  describe('validatePasswordLength 테스트' , () => {
    const name = "박상후";
    const password = "pwd";
    const age = 30;
    const phoneNumber = "010-8098-1398";
    const email = "sksk8922@gmail.com";

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
    const name = "박상후";
    const password = "pwd";
    const age = 30;
    const phoneNumber = "010-8098-1398";
    const email = "sksk8922@gmail.com";

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
      expect(password).toBe(expected)
    })
  })
});
