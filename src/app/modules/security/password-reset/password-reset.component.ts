import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { PasswordResetModel } from '../../../models/security/password-reset.model';

declare const showMessage: any;

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  fgValidator: FormGroup;
  usernameMinLength = FormsConfig.NAMES_MIN_LENGTH;

  constructor(
    private fb: FormBuilder,
    private service: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(this.usernameMinLength)]],
      type: ['', [Validators.required]]
    });
  }

  /**
   * Method to validate credentials of a user
   */
  PasswordResetFn() {
    if (this.fgValidator.invalid) {
      showMessage("Formulario invalido.");
    } else {
      //showMessage("Registering...");
      let model = this.getPasswordData();
      this.service.PasswordReset(model).subscribe(
        data => {
          showMessage("Su contraseña se ha restablecido, revise su celular ó el correo.");
          this.router.navigate(['/home']);
        },
        error => {
          showMessage("Datos invalidos.");
        }
      );
    }
  }

  /**
   * Get user data in a model
   */
  getPasswordData(): PasswordResetModel {
    let model = new PasswordResetModel();
    model.nombre_usuario = this.fgv.username.value;
    model.type = parseInt(this.fgv.type.value);
    return model;
  }


  get fgv() {
    return this.fgValidator.controls;
  }

}