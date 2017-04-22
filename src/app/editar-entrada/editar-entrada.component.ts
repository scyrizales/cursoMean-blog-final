import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntradaService } from '../entrada.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Entrada } from '../entrada';

@Component({
  selector: 'app-editar-entrada',
  templateUrl: './editar-entrada.component.html',
  styleUrls: ['./editar-entrada.component.css']
})
export class EditarEntradaComponent implements OnInit, OnDestroy {
  nuevaEntrada: Entrada = new Entrada();
  sub: any;
  constructor(private entradaService: EntradaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.entradaService.listar(params.id)
        .subscribe(e => {
          this.nuevaEntrada = e;
        })
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  guardar() {
    this.entradaService.guardar(this.nuevaEntrada)
      .subscribe(e => {
        this.router.navigate(['/entrada', e.id]);
      })
  }

}
