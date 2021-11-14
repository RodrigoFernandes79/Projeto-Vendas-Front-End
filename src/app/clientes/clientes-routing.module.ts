import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesFormsComponent } from './clientes-forms/clientes-forms.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
const routes: Routes = [
  {path:'clientes-forms' , component: ClientesFormsComponent},
  {path:'clientes-lista', component: ClientesListaComponent},
  {path:'clientes-forms/:id' , component: ClientesFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
