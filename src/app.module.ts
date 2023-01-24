import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from './common/entities/user.entity';
import { Profile } from './common/entities/profile.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '324422116Umar!',
        database: 'asos',
        entities: [
            // __dirname + '/../**/*.entity{.ts,.js}',
            User,
            Profile
        ],
        synchronize: false,
        migrations: ['dist/src/migrations/*.js']
      }),
    UsersModule
  ],
})
export class AppModule {}
