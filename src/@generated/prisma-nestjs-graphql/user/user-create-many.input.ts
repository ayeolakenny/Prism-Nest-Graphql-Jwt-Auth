import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    @Validator.IsNotEmpty()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    @Validator.IsNotEmpty()
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsPhoneNumber()
    mobileNumber!: string;

    @Field(() => Boolean, {nullable:true})
    confirmed?: boolean;

    @Field(() => String, {nullable:false})
    password!: string;
}
