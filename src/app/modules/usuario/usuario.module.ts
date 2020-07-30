import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
