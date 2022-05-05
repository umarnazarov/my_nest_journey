import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schema/todo.schema';
import { ITodo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>
  ) {}

  async getAll(): Promise<ITodo[]> {
    return await this.todoModel.find({});
  }
  async findOne(id: string): Promise<ITodo> {
    return await this.todoModel.findOne({ _id: id });
  }
  async create(createTodo: Record<string, any>): Promise<ITodo> {
    const newTodo = new this.todoModel(createTodo);
    return await newTodo.save();
  }
  async delete(id: string): Promise<ITodo> {
    return await this.todoModel.findByIdAndDelete(id);
  }
  async update(id: string, item: ITodo): Promise<ITodo> {
    return await this.todoModel.findByIdAndUpdate(id, item, { new: true });
  }
}
