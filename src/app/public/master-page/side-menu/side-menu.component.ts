import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isLogged: Boolean = false;
  rol: number = 2;
  subscription: Subscription;
  puesSi : String = "";
  usuario : UsuarioModel;
  id_Usuario:String;

  constructor(private service: SecurityService) { }

  ngOnInit(): void {
    this.subscription = this.service.getRegistroData().subscribe(
      data => {
        this.rol =data.rol;
        this.isLogged = data.isLogged;
        this.puesSi = data.nombre_usuario;
        
      });
  }

}
