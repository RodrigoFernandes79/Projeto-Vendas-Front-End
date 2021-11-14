

import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientesService } from 'src/app/clientes.service';

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
  id: number;

  constructor(
    private service: ClientesService,
    private router:Router,
    private activatedRoute: ActivatedRoute
      ) {
    this.cliente = new Cliente();

  }
    

  ngOnInit(): void {
    let params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service.getClientesById(this.id)
      .subscribe(
        response=> this.cliente = response,
        errorResponse=> this.cliente= new Cliente()
      )

    }
    
  }
  voltarParaLista(){
    this.router.navigate(['/clientes-lista']);
  }


onSubmit(){
  if(this.id){

    this.service
    .atualizar(this.cliente)
    .subscribe(response=>{
      this.success =true;
    this.errors=null;
    }, errorResponse =>{
      this.errors = ['Erro ao atualizar o cliente!']
    })

  }else{
  this.service.salvar(this.cliente)
  .subscribe(response =>{
    this.success =true;
    this.errors=null;
    this.cliente=response;
  },errorResponse =>{
    this.errors = errorResponse.error;
    this.success=false;
    console.log(errorResponse.error); 
   
    
  })
}
}
}
