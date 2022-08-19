import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Guid } from 'guid-typescript';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  clientes: Cliente[];
  formulario:any;

  constructor() { }

  ngOnInit() {
    this.tabela();
    this.formulario = new FormGroup({
    id: new FormControl(''),
    cpf: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    nomeFantasia: new FormControl(),
    cep: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    fone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    });
  }

  get cpf(){
    return this.formulario.get('cpf')
  }

  salvar(): void{
    this.formulario.value.id = Guid.create().toString();
    const cliente: Cliente = this.formulario.value;
    this.clientes.push(cliente);
    localStorage.setItem('local', JSON.stringify(this.clientes));
    this.formulario.reset();
}

  tabela(): void {
    if(localStorage.getItem('local')){
      this.clientes = JSON.parse(localStorage.getItem('local'));
    }else{
      this.clientes = [];
    }
  }

}
