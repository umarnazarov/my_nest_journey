export interface IProfile {
  firstName: string;
  lastName: string;
  age: number;
  gender: UserGender.FEMALE | UserGender.MALE;
}

export enum UserGender {
  'MALE' = 'male',
  'FEMALE' = 'female',
}