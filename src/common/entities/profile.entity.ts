import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserGender } from '../types/profile';

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  gender: UserGender.FEMALE | UserGender.MALE;
}
