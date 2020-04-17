import { TodoRepository } from '../domain/todo-repository'
import { http } from '../../core/http/http'
import { Todo } from '../domain/todo'

export class TodoHttpRepository implements TodoRepository {
  async findAll(): Promise<Todo[]> {
    const response = await http.get<Todo[]>('/todos')
    return response.data
  }
  async create(todo: Todo): Promise<void> {
    return await http.post('/todos', todo)
  }
}
