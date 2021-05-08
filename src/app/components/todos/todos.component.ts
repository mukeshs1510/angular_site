import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo: string = "";
  inputTodoDesc: string = "";
  inputTodoDate: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      content: '',
      isCompleted: false,
      desc: '',
      date: ''
    }]
  }

  toggleDone (id) {
    this.todos.map((v, i) => {
      if(i == id) v.isCompleted = !v.isCompleted;
      return v;
    })
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      isCompleted: false,
      desc: this.inputTodoDesc,
      date: this.inputTodoDate
    });
    this.inputTodo = "";
  }

}
