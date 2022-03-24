import { UserCreateInput } from '@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: UserCreateInput) {
    return await this.userService.register(input);
  }

  @Auth()
  @Query(() => User)
  async find(@Args('input') usernameOrPhoneNumber: string) {
    return await this.userService.findByUsernameOrPhoneNumber(
      usernameOrPhoneNumber,
    );
  }
}
