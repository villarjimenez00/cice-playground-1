import { TodoRepository } from '../domain/todo-repository'
import { TodoHttpRepository } from './todo-http-repository'

export class TodoRepositoryFactory {
  static get(): TodoRepository {
    return new TodoHttpRepository()
  }
}
