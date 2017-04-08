import { Component, OnInit } from '@angular/core';
import { SessionService } from './../session.service';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: any = {};
  usuario: any;
  errors: String[] = [];

  constructor(private sessionSvc: SessionService) { }

  ngOnInit() {
  }

  registrar() {
    this.errors = [];
    if (!this.nuevoUsuario.nombre) {
      this.errors.push('Ingrese Usuario');
    }
    if (!this.nuevoUsuario.email) {
      this.errors.push('Ingrese Email');
    }
    if (this.nuevoUsuario.email !== this.nuevoUsuario.cemail) {
      this.errors.push('Emails no concuerdan');
    }
    if (!this.nuevoUsuario.password) {
      this.errors.push('Ingrese Password');
    }
    if (this.nuevoUsuario.password !== this.nuevoUsuario.cpassword) {
      this.errors.push('Passwords no concuerdan');
    }
    if (this.errors.length === 0) {
      this.sessionSvc.registrar(this.nuevoUsuario)
        .subscribe(usuario => {
          this.usuario = usuario
        });
    }
  }

}
