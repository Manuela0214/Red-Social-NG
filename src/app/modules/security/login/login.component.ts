import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/forms-config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroModel } from 'src/app/models/registro.model';
import { SecurityService } from '../../../services/security.service';
import MD5 from '../../../../../node_modules/crypto-js/md5';
//import MD5 from 'crypto-js';

declare const showMessage: any;
declare const initSidenav: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      nombre_usuario: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    });
  }

  /**
   * Method to validate credentials of a user
   */
  LoginUsuarioFn() {
    if (this.fgValidator.invalid) {
      showMessage("El formulario ingresado es invalido");
    } else {
      //showMessage("Registering...");
      let model = this.getLoginData();
      console.log(model);
      this.service.UsuarioLogin(model).subscribe(
        data => {
          this.service.saveSessionData(data);
          showMessage("Bienvenido a su cuenta");
          this.router.navigate(['/home']);
        },
        error => {
          showMessage("Usuaro o contraseña invalida");
        }
      );
    }
  }

  /**
   * Get user data in a model
   */
  getLoginData(): RegistroModel {
    let model = new RegistroModel();
    model.nombre_usuario = this.fgv.nombre_usuario.value;
    model.contrasena = MD5(this.fgv.contrasena.value).toString();
    return model;
  }


  get fgv() {
    return this.fgValidator.controls;
  }

}