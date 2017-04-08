import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  errors: String[] = [];
  constructor() { }

  ngOnInit() {
  }

  login() {
    this.errors = [];
    if (this.email && this.password) {

    } else {
      this.errors.push('Ingrese usuario y password')
    }
  }

}
