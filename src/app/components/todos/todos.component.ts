import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { CrudService } from '../service/crud.service';

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
  errorMessage: string = "";

  constructor(public crudService: CrudService) { }

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
    let Todos = {};
    Todos['title'] = this.inputTodo;
    Todos['desc'] = this.inputTodoDesc;
    Todos['date'] = this.inputTodoDate;

    this.crudService.create_new_todo(Todos).then(res => {
      this.inputTodo = "";
      this.inputTodoDesc = "";
      this.inputTodoDate = "";
      this.errorMessage = "Todos data saved successfully";
      console.log(res);
    }).catch(error => {
      this.errorMessage = "Something went wrong";
      console.log(error);
    });

  }
  
  // addTodo() {
  //   this.todos.push({
  //     content: this.inputTodo,
  //     isCompleted: false,
  //     desc: this.inputTodoDesc,
  //     date: this.inputTodoDate
  //   });
  //   this.inputTodo = "";
  //   this.inputTodoDate = "";
  //   this.inputTodoDesc = "";
  // }

  // 

}
