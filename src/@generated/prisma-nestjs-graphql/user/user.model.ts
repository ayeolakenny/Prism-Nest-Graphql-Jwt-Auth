import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    mobileNumber!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    confirmed!: boolean;

    @Field(() => String, {nullable:false})
    password!: string;
}
