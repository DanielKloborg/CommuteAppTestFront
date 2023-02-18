import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private url = `https://localhost:7284/api/ToDo`;

  public createToDoList(todo: ToDo): Observable<ToDo[]> {
    return this.http.post<ToDo[]>(this.url, todo);
  }

  public getToDoList(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.url);
  }

  public updateToDoList(todo: ToDo): Observable<ToDo[]> {
    return this.http.put<ToDo[]>(this.url, todo);
  }

  public deleteToDoList(todo: ToDo): Observable<ToDo[]> {
    return this.http.delete<ToDo[]>(this.url + `/${todo.id}`);
    }
}
