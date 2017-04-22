import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { SessionService } from './session.service';
import { UsuarioEstadoComponent } from './usuario-estado/usuario-estado.component';
import { ListaEntradasComponent } from './lista-entradas/lista-entradas.component';
import { EntradaComponent } from './entrada/entrada.component';
import { EditarEntradaComponent } from './editar-entrada/editar-entrada.component';
import { EntradaService } from './entrada.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    NavegacionComponent,
    UsuarioEstadoComponent,
    ListaEntradasComponent,
    EntradaComponent,
    EditarEntradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: 'editar-entrada/:id',
        component: EditarEntradaComponent
      },
      {
        path: 'entrada/:id',
        component: EntradaComponent
      },
      {
        path: 'entradas',
        component: ListaEntradasComponent
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    SessionService,
    EntradaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
