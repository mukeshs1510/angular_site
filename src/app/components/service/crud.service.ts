import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Todo } from 'src/app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  todos: Todo;

  constructor(public fireService: AngularFirestore) { }

  create_new_todo(Todos) {
    console.log("running")
      return this.fireService.collection('todos').add(Todos);
  }

  getAllTodos() {
    return this.fireService.collection("todos").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data }; 
      }))
    );
  }

}
