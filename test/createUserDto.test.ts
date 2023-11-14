import CreateUserDto from "../src/Auth/dto/create-user.dto";

describe("add function", () => {
  it("CreateUserDto", () => {
    const createUserDto = new CreateUserDto("test", "pwd", 30, "010-8098-1398", "skks8922@gmail.com");
    expect(createUserDto.name).toBe("test");
  });
});
