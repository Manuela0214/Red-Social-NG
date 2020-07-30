import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(private fb:FormBuilder ) { } 

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      primer_nombre:['',[Validators.required,Validators.minLength(3)]],
      segundo_nombre:['',[Validators.minLength(3)]],
      primer_apellido:['',[Validators.required,Validators.minLength(3)]],
      segundo_apellido:['',[Validators.minLength(3)]],
      celular:['',[Validators.required,Validators.minLength(14)]],
      email:['',[Validators.required,Validators.email]],
      pais:['',[Validators.required,Validators.minLength(3)]],
      ciudad:['',[Validators.required,Validators.minLength(3)]],
      fecha_nacimiento:['',[Validators.required]],
      genero:['',[Validators.minLength(1),Validators.maxLength(1)]],
      intereses:['',[Validators.required,Validators.minLength(4)]]
    });
  }

  UsuarioRegisterFn(){
    if(this.fgValidator.invalid){
      alert("Formulario invalido");
      return false;
    }
    alert("Registrando...");
    return false;
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}
