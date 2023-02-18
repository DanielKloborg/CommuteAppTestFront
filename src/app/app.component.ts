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

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .getToDoList()
      .subscribe((result: ToDo[]) => (this.todolist = result));
  }
}
