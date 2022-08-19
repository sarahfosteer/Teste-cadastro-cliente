import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';


const routes: Routes = [
  {path: "novo-cliente", component: NovoClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
