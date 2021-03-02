import { CreateUserInput } from 'src/controllers/users/UserDTO';
import { Field, ObjectType } from 'type-graphql';
import { Entity } from 'typeorm';
import { Base } from './Base';

@Entity()
@ObjectType()
export class User extends Base<CreateUserInput> {
  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  fromInput(dto: CreateUserInput) {
    this.email = dto.email;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
    return this;
  }
}
