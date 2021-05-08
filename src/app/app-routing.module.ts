import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlltodosComponent } from './components/alltodos/alltodos.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'alltodos', component: AlltodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
