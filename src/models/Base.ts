import { PrimaryGeneratedColumn, CreateDateColumn, Column, UpdateDateColumn, BaseEntity, Entity } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export abstract class Base<CreateDTO> extends BaseEntity {
  //
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  //
  @Field()
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createDateTime!: number;

  //
  @Field()
  @UpdateDateColumn({ nullable: true })
  updatedDateTime!: number;

  @Field()
  @Column({ type: 'boolean', default: true })
  isActive!: boolean;

  abstract fromInput(dto: CreateDTO): this;
}
