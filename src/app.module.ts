import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGOURI), TodosModule],
})
export class AppModule {}
