import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly status: boolean;
  @ApiProperty()
  readonly description: string;
}

export class UpdateTodoDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly status: boolean;
  @ApiProperty()
  readonly description: string;
}
