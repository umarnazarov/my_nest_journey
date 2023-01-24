import { UserGender } from "src/common/types/profile";

export class ProfileDto {
  firstName: string;
  lastName: string;
  age: number;
  gender: UserGender.FEMALE | UserGender.MALE;
}