import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsConfig} from '../../../config/forms-config';
declare const showMessage:any;
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
  generoMaxLength = FormsConfig.GENERO_MAX_LENGTH;
  constructor(private fb:FormBuilder ) { } 

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      primer_nombre:['',[Validators.required,Validators.minLength(this.namesMinLength)]],
      segundo_nombre:['',[Validators.minLength(this.namesMinLength)]],
      primer_apellido:['',[Validators.required,Validators.minLength(this.namesMinLength)]],
      segundo_apellido:['',[Validators.minLength(this.namesMinLength)]],
      celular:['',[Validators.required,Validators.minLength(this.celphoneMinLength)]],
      email:['',[Validators.required,Validators.email]],
      pais:['',[Validators.required,Validators.minLength(this.placesMinLength)]],
      ciudad:['',[Validators.required,Validators.minLength(this.placesMinLength)]],
      fecha_nacimiento:['',[Validators.required]],
      genero:['',[Validators.minLength(1),Validators.maxLength(this.generoMaxLength)]],
      intereses:['',[Validators.required,Validators.minLength(this.interesesMinLength)]]
    });
  }

  UsuarioRegisterFn(){
    if(this.fgValidator.invalid){
      showMessage("Formulario invalido");
    }else{
    showMessage("Registrando...");
    }  
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}
