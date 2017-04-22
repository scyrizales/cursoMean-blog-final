import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Entrada } from './entrada';

@Injectable()
export class EntradaService {

  constructor(private http: Http) { }

  listar(id: string = null) {
    return this.http.get('/api/entrada' + (id ? `/${id}` : ''))
      .map(res => res.json())
      .map(ent => {
        if (id) {
          return new Entrada(ent);
        } else {
          return ent.map(e => new Entrada(e))
        }
      });
  }

  guardar(entrada: Entrada) {
    if (entrada.id) {
      return this.http.put(`api/entrada/${entrada.id}`, entrada)
        .map(res => res.json())
        .map(e => new Entrada(e));
    } else {
      return this.http.post('/api/entrada', entrada)
        .map(res => res.json())
        .map(e => new Entrada(e));
    }
  }

}
