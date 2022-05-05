import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { ITodo } from './interfaces/todo.interface';
import { CreateTodoDto, UpdateTodoDto } from './dto/todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  getAll(): Promise<ITodo[]> {
    return this.todosService.getAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<ITodo> {
    return this.todosService.findOne(id);
  }
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<ITodo> {
    return this.todosService.create(createTodoDto);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<ITodo> {
    return this.todosService.delete(id);
  }
  @Put(':id')
  update(
    @Body() updateTodoDto: UpdateTodoDto,
    @Param('id') id
  ): Promise<ITodo> {
    return this.todosService.update(id, updateTodoDto);
  }
}
