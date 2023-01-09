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
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { boolean } from 'webidl-conversions';

@ApiTags('todo')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns all todos',
    type: [CreateTodoDto],
  })
  getAll(): Promise<ITodo[]> {
    return this.todosService.getAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of specific todo',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns todo by id',
    type: [CreateTodoDto],
  })
  findOne(@Param('id') id): Promise<ITodo> {
    return this.todosService.findOne(id);
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Returns created todo',
    type: [CreateTodoDto],
  })
  @ApiBody({ type: CreateTodoDto })
  create(@Body() createTodoDto: CreateTodoDto): Promise<ITodo> {
    return this.todosService.create(createTodoDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of specific todo',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns boolean',
    type: boolean,
  })
  @ApiResponse({
    status: 404,
    description: 'Returns error 404',
  })
  delete(@Param('id') id): Promise<ITodo> {
    return this.todosService.delete(id);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of specific todo',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @ApiResponse({
    status: 200,
    description: 'Updates todo by id',
    type: [UpdateTodoDto],
  })
  @ApiBody({ type: UpdateTodoDto })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of specific todo',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  update(
    @Body() updateTodoDto: UpdateTodoDto,
    @Param('id') id,
  ): Promise<ITodo> {
    return this.todosService.update(id, updateTodoDto);
  }
}
