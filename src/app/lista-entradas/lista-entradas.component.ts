import { Component, OnInit } from '@angular/core';
import { Entrada } from '../entrada';
import { EntradaService } from '../entrada.service';

@Component({
  selector: 'app-lista-entradas',
  templateUrl: './lista-entradas.component.html',
  styleUrls: ['./lista-entradas.component.css']
})
export class ListaEntradasComponent implements OnInit {
  entradas: Entrada[] = [];
  constructor(private entradaService: EntradaService) { }

  ngOnInit() {
    this.entradaService.listar()
      .subscribe(entradas => {
        this.entradas = entradas;
      });
  }

}
