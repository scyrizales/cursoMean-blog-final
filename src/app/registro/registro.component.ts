import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './../session.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nuevoUsuario: Usuario = new Usuario();
  errors: String[] = [];

  constructor(private sessionSvc: SessionService, private router: Router) { }

  ngOnInit() {
  }

  registrar(cemail, cpassword) {
    this.errors = [];
    if (!this.nuevoUsuario.nombre) {
      this.errors.push('Ingrese Usuario');
    }
    if (!this.nuevoUsuario.email) {
      this.errors.push('Ingrese Email');
    }
    if (this.nuevoUsuario.email !== cemail) {
      this.errors.push('Emails no concuerdan');
    }
    if (!this.nuevoUsuario.password) {
      this.errors.push('Ingrese Password');
    }
    if (this.nuevoUsuario.password !== cpassword) {
      this.errors.push('Passwords no concuerdan');
    }
    if (this.errors.length === 0) {
      this.sessionSvc.registrar(this.nuevoUsuario)
        .subscribe(usuario => {
          this.router.navigate(['/login']);
        });
    }
  }

}
