import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDto, UserUpdateDto } from './dto';
import { ProfileDto } from './dto/profile.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  createNewUser(@Body() userDto: UserDto) {
    return this.userService.createNewUser(userDto);
  }

  @Patch(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() userUpdateDto: UserUpdateDto,
  ) {
    return await this.userService.updateUser(userUpdateDto, id);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: any) {
    return await this.userService.deleteUser(id);
  }

  @Post(':id/profiles')
  createUserProfile(
    @Body() profileDto: ProfileDto,
    @Param('id', ParseIntPipe) id: any,
  ) {
    return this.userService.createUserProfile(profileDto, id);
  }
}
