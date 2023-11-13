import { Inject, Service } from "typedi";
import { UserRepository } from "./uesr.repository";

@Service()
export class UserService {
  constructor(
    @Inject()
    private userRepository: UserRepository
  ) {}
}
