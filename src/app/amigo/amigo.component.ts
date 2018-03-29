import { Component, OnInit } from '@angular/core';
import { AMIGOS } from '../domain/mock-amigos';
import { Amigo } from '../domain/amigos';
import { Compra } from '../compra';
import { COMPRAS } from '../mock-compra';

@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.component.html',
  styleUrls: ['./amigo.component.css']
})
export class AmigoComponent implements OnInit {
 


  amigos : Amigo[] = AMIGOS;
  amigo : Amigo = new Amigo();

  constructor() { }

  ngOnInit() {
  }

  addAmigo(){
    //console.log(this.amigo.nome);
    let novoAmigo = new Amigo();
    novoAmigo.id = this.amigo.id;
    novoAmigo.nome = this.amigo.nome;
    novoAmigo.dataNascimento = this.amigo.dataNascimento;
    this.amigos.push(novoAmigo);
  }
}
