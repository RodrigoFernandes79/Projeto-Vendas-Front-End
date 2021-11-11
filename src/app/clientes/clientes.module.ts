import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormsComponent } from './clientes-forms/clientes-forms.component';



@NgModule({
  declarations: [ClientesFormsComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ], exports: [ClientesFormsComponent]
})

export class ClientesModule { }
