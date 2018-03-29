import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { COMPRAS } from '../mock-compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
 

  compras: Compra[] = COMPRAS;
  compra: Compra = new Compra();

  constructor() { }

  ngOnInit() {
  }

  addCompra(){
   
    let novaCompra = new Compra();
    novaCompra.id = this.compra.id;
    novaCompra.descricao = this.compra.descricao;
    this.compras.push(novaCompra);
  }

}
