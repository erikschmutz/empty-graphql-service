import { User } from '@models/User';
import { injectable } from 'inversify';
import { CreateUserInput } from './UserDTO';

@injectable()
export class UserService {
  async createUser(input: CreateUserInput): Promise<User> {
    const user = new User().fromInput(input);
    await user.save();
    return user;
  }
}
