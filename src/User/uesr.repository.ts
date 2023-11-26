import { Service } from 'typedi'
import Repository from '../dbms/default-repository'
import User from './user'
import createUserDto from '../Auth/dto/create-user.dto'

@Service()
export class UserRepository extends Repository<User> {
  async create(data: createUserDto): Promise<User> {
    return
  }
}
