import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  id: string

  constructor() { }

  setId(data) {
    this.id = data;
  }

  getId() {
    return this.id;
  }

}
