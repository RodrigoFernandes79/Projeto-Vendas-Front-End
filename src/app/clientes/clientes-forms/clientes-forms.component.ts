
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component,  OnInit } from '@angular/core';

import { ClientesService } from 'src/app/clientes.service';
import { callbackify } from 'util';
import { Cliente } from '../cliente';
@Component({
  selector: 'app-clientes-forms',
  templateUrl: './clientes-forms.component.html',
  styleUrls: ['./clientes-forms.component.css']
})
export class ClientesFormsComponent implements OnInit {

  cliente:Cliente;
  success: Boolean =false;
  errors: String[];

  constructor(private service: ClientesService) {
    this.cliente = new Cliente();

  }
    

  ngOnInit(): void {
  }
onSubmit(){
  this.service.salvar(this.cliente)
  .subscribe(response =>{
    this.success =true;
    this.errors=null;
    this.cliente=response;
  },errorResponse =>{
    this.errors = errorResponse.error;
    this.success=false;
    console.log(errorResponse.error); 
    
    
    
  }
  
  )
}
}

