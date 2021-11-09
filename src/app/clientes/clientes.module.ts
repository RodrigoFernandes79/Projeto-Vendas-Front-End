import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormsComponent } from './clientes-forms/clientes-forms.component';


@NgModule({
  declarations: [ClientesFormsComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ], exports: [ClientesFormsComponent]
})

export class ClientesModule { }
