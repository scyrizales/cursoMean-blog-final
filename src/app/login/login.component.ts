import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './../session.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  errors: String[] = [];
  constructor(private sessionSvc: SessionService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.errors = [];
    if (this.email && this.password) {
      this.sessionSvc.login({ email: this.email, password: this.password })
        .subscribe(usuario => {
          this.router.navigate(['/inicio']);
        });
    } else {
      this.errors.push('Ingrese usuario y password')
    }
  }

}
