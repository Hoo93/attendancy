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

  describe('validationPassword 테스트', () => {
    const name = "박상후";
    const password = "pwd";
    const age = 30;
    const phoneNumber = "010-8098-1398";
    const email = "sksk8922@gmail.com";

    it("패스워드는 6글자 이상이어야 합니다." , () => {
      let shortPassword = 'short'
      let createUserDto = new CreateUserDto(name,shortPassword,age,phoneNumber,email)
      expect(createUserDto.validationPassword()).toBe(false)
    })
  })
});
