import { CreateUserDto } from "../../Auth/dto/create-user.dto";

export interface UpdateUserDto extends Partial<CreateUserDto> {}
