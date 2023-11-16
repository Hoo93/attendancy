import CreateUserDto from "../src/Auth/dto/create-user.dto";

describe("CreateUserDto 테스트", () => {
  it("생성자를 통해 Dto 생성", () => {
    const createUserDto = new CreateUserDto("test", "pwd", 30, "010-8098-1398", "skks8922@gmail.com");
    expect(createUserDto.name).toBe("test");
  });
});
