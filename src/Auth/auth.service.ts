import {Inject, Service} from "typedi";
import {UserRepository} from "../User/uesr.repository";


@Service()
export class AuthService {
    constructor(
        @Inject()
        private userRepository: UserRepository
    ) {
    }

}