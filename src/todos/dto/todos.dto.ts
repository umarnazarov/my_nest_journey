export class CreateTodoDto {
  readonly title: string;
  readonly status: boolean;
  readonly description: string;
}

export class UpdateTodoDto {
  readonly title: string;
  readonly status: boolean;
  readonly description: string;
}
