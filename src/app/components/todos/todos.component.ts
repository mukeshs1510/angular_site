import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/models/Todo';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
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
  isCompleted: boolean = false;

  id: string = "";

  constructor(public crudService: CrudService, private toastr: ToastrService, private sharedService: SharedserviceService) { }

  ngOnInit(): void {
    var id = this.sharedService.getId();
    if(id != null) {
      this.id = id;
      console.log("id: "+id);
    }
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
      this.toastMessage("Submitted successfully","Todo Submit");
    }).catch(error => {
      console.log(error);
    });
  }

  toastMessage(textMessage: string, textTitle: string) {
    this.toastr.success(textMessage, textTitle);
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
