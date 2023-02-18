import { Component } from '@angular/core';
import { ToDo } from './models/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo List';
  todolist: ToDo[] = [];
  todoToEdit?: ToDo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .getToDoList()
      .subscribe((result: ToDo[]) => (this.todolist = result));
  }

  updateToDoList(todos: ToDo[]) {
    this.todolist = todos;
  }

  initNewToDo() {
    this.todoToEdit = new ToDo();
  }

  editToDo(todo: ToDo) {
    this.todoToEdit = todo;
  }
}
