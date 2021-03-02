import { User } from '@models/User';
import Types from '@utils/Types';
import { inject, injectable } from 'inversify';
import { Arg, Mutation } from 'type-graphql';
import { CreateUserInput } from './UserDTO';
import { UserService } from './UserService';

@injectable()
export class UserController {
  constructor(@inject(Types.UserService) private userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Arg('user') initialValues: CreateUserInput): Promise<User> {
    return this.userService.createUser(initialValues);
  }
}
