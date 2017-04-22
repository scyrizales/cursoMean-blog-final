import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntradaService } from '../entrada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrada } from '../entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit, OnDestroy {
  entrada: Entrada = new Entrada();
  sub: any;
  constructor(private entradaService: EntradaService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.entradaService.listar(params['id'])
        .subscribe(e => {
          this.entrada = e;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
