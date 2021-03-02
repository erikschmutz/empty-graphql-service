import { User } from '@models/User';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUserInput implements Partial<User> {
  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  firstName!: string;

  @Field(() => String, { nullable: true })
  lastName!: string;
}
