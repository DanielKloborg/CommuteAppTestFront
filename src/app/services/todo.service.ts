import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public getToDoList(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(`https://localhost:7284/api/ToDo`);
  }
}
