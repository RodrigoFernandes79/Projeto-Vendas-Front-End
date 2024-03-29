import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
clientes:Cliente[]=[];
clienteSelecionado:Cliente;
mensagemSucesso: string;
mensagemErro: string;

  constructor(private service: ClientesService, private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(resposta=> this.clientes=resposta)
  }
novoCadastro(){
  this.router.navigate(['/clientes-forms'])
}
preparaDelecao(cliente: Cliente){
this.clienteSelecionado = cliente;
}
deletarCliente(){
  this.service.deletarById(this.clienteSelecionado)
  .subscribe(resposta => {
    this.mensagemSucesso = "Cliente deletado com Sucesso!",
    this.ngOnInit();
},
  error => this.mensagemErro = "Não foi possível deletar este Cliente.Erro!" 
  )


}
}
