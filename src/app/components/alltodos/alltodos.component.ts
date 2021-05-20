import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-alltodos',
  templateUrl: './alltodos.component.html',
  styleUrls: ['./alltodos.component.scss']
})
export class AlltodosComponent implements OnInit {

  todos: Todo[];

  inputTodo: string = "";
  inputTodoDesc: string = "";
  inputTodoDate: string = "";
  isCompleted: boolean = false;

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getAllTodos().subscribe(res => {
      this.todos = res
    });
  }

}
