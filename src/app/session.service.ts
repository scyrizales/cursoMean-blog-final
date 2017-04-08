import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SessionService {

  constructor(private http: Http) { }

  registrar(usuario: any) {
    return this.http.post('/api/session/registrar', usuario)
      .map(res => res.json());
  }

}
