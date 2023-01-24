import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/common/entities/profile.entity';
import { User } from 'src/common/entities/user.entity';
import { IProfile } from 'src/common/types/profile';
import { Repository } from 'typeorm';
import { UserUpdateDto } from './dto';
import { ProfileDto } from './dto/profile.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  createNewUser(userDto: UserDto) {
    const newUser = this.userRepository.create({
      ...userDto,
      createdAt: new Date(),
    });
    console.log(newUser);

    return this.userRepository.save(newUser);
  }

  getAllUsers() {
    return this.userRepository.find();
  }

  updateUser(userUpdateDetail: UserUpdateDto, id: any) {
    return this.userRepository.update({ id }, { ...userUpdateDetail });
  }

  deleteUser(id: any) {
    return this.userRepository.delete({ id });
  }

  async createUserProfile(profileInfo: IProfile, id: any) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new HttpException(
        'User not found. Cannot create Profle',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newProfile = this.profileRepository.create(profileInfo);
    console.log('new ', newProfile);

    const savedProfile = await this.profileRepository.save(newProfile);

    console.log(savedProfile);

    user.profile = savedProfile;
    return this.userRepository.save(user);
  }
}
