import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireService: AngularFirestore) { }


  create_new_todo(Todos) {
      return this.fireService.collection('todos').add(Todos);
  }

}
