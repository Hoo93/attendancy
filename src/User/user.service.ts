import { Inject, Service } from "typedi";
import { UserRepository } from "./uesr.repository";

@Service()
export class UserService {
  @Inject()
  private readonly userRepository: UserRepository;
}
