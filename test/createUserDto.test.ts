import CreateUserDto from "../src/Auth/dto/create-user.dto";

describe("CreateUserDto 테스트", () => {
  it("생성자를 통해 Dto 생성", () => {
    const createUserDto = new CreateUserDto("test", "pwd", 30, "010-8098-1398", "skks8922@gmail.com");
    expect(createUserDto.name).toBe("test");
  });

  describe("validationName 테스트", () => {
    it("한글,영어,숫자로 이루어진 name은 true를 반환한다.", () => {
      const name = "박상후";
      const password = "pwd";
      const age = 30;
      const phoneNumber = "010-8098-1398";
      const email = "sksk8922@gmail.com";
      const createUserDto = new CreateUserDto(name, password, age, phoneNumber, email);

      expect(createUserDto.validationName()).toBe(true);
    });
  });
});
