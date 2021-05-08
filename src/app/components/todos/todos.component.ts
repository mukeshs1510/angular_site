import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      content: 'First todo',
      isCompleted: false
    },
    {
      content: 'second todo',
      isCompleted: true
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
      isCompleted: false
    });
    this.inputTodo = "";
  }

}
