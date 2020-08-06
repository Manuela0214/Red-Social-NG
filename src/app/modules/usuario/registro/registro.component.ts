import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from '../../../config/forms-config';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

declare const showMessage:any;
declare const initSelect:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  fgValidator: FormGroup;
  namesMinLength = FormsConfig.NAMES_MIN_LENGTH;
  placesMinLength = FormsConfig.PLACE_MIN_LENGTH;
  celphoneMinLength = FormsConfig.CELPHONE_MIN_LENGTH;
  interesesMinLength = FormsConfig.INTERESES_MIN_LENGTH;
  generoLength = FormsConfig.GENERO_MAX_LENGTH;
  
  constructor(private fb:FormBuilder,
    private service: UsuarioService,
    private router: Router ) { } 

  ngOnInit(): void {
    this.FormBuilding();
    initSelect();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      primer_nombre:['',[Validators.required,Validators.minLength(this.namesMinLength)]],
      segundo_nombre:['',[Validators.minLength(this.namesMinLength)]],
      primer_apellido:['',[Validators.required,Validators.minLength(this.namesMinLength)]],
      segundo_apellido:['',[Validators.minLength(this.namesMinLength)]],
      celular:['',[Validators.required,Validators.minLength(this.celphoneMinLength), Validators.maxLength(14)]],
      email:['',[Validators.required,Validators.email]],
      pais:['',[Validators.required,Validators.minLength(this.placesMinLength)]],
      ciudad:['',[Validators.required,Validators.minLength(this.placesMinLength)]],
      fecha_nacimiento:['',[Validators.required]],
      genero:[''],
      intereses:['',[Validators.required,Validators.minLength(this.interesesMinLength)]],
      mensajesId:['']
    });
  }

  UsuarioRegisterFn(){
    if(this.fgValidator.invalid){
      showMessage("Formulario invalido");
    }else{
      console.log("Registrando...");
      let model=this.getUsuarioData();
      this.service.UsuarioRegistering(model).subscribe(
        data => {
          showMessage("Registro exitoso, puede encontrar su contraseña en su bandeja de entrada");
          this.router.navigate(['/security/login']);
        },error => {
          showMessage("Error en el registro");
        }
      );
    }  
  }

  getUsuarioData(): UsuarioModel {
    let model = new UsuarioModel();
    model.primer_nombre=this.fgv.primer_nombre.value;
    model.segundo_nombre=this.fgv.segundo_nombre.value;
    model.primer_apellido=this.fgv.primer_apellido.value;
    model.segundo_apellido=this.fgv.segundo_apellido.value;
    model.celular=this.fgv.celular.value;
    model.email=this.fgv.email.value;
    model.pais=this.fgv.pais.value;
    model.ciudad=this.fgv.ciudad.value;
    model.fecha_nacimiento=this.fgv.fecha_nacimiento.value;
    model.genero=this.fgv.genero.value;
    model.intereses=this.fgv.intereses.value;
    model.mensajesId='';
    return model;
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}
