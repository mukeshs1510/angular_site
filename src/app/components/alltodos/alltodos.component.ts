import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/models/Todo';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
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

  constructor(public crudService: CrudService, private firestore: AngularFirestore
    , private toaster: ToastrService, private sharedService: SharedserviceService) { }

  ngOnInit(): void {
    this.crudService.getAllTodos().subscribe(res => {
      this.todos = res
    });
  }

  toggleDone (id) {
    this.todos.map((v, i) => {
      if(i == id) v.isCompleted = !v.isCompleted;
      return v;
    })
  }

  editTodo(id: string) {
    
    this.sharedService.setId(id);
  }

  onDelete(id: string) {
    if(confirm("Are you sure to delete the todo?")) {
        this.firestore.doc("todos/"+id).delete();
        this.toaster.warning("Deleted successfully","Todos");
    }
  }

}
