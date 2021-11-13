import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
@Component({
  selector: 'app-clientes-forms',
  templateUrl: './clientes-forms.component.html',
  styleUrls: ['./clientes-forms.component.css']
})
export class ClientesFormsComponent implements OnInit {

  cliente:Cliente;
  constructor(private service: ClientesService) {
    this.cliente = new Cliente();
  }
    

  ngOnInit(): void {
  }
onSubmit(){
  this.service.salvar(this.cliente)
  .subscribe(response =>{
    console.log(response);
  })
}
}

