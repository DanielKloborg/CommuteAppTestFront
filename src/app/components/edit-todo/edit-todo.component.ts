import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-edit-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent {
  @Input() todo?: ToDo;
  @Output() todosUpdated = new EventEmitter<ToDo[]>();

  constructor(private todoService: TodoService){}

  UpdateToDo(todo: ToDo) {
    this.todoService
      .updateToDoList(todo)
      .subscribe((todos) => this.todosUpdated.emit(todos));
  }

  DeleteToDo(todo: ToDo) {
    this.todoService
      .deleteToDoList(todo)
      .subscribe((todos) => this.todosUpdated.emit(todos));
  }

  CreateToDo(todo: ToDo) {
    this.todoService
      .createToDoList(todo)
      .subscribe((todos) => this.todosUpdated.emit(todos));
  }
}
