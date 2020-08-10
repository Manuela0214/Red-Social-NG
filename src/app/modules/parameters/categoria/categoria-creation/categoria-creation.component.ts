import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormsConfig } from 'src/app/config/forms-config';
import { CategoriaService } from 'src/app/services/parameters/categoria.service';
import { Router } from '@angular/router';
import { CategoriaModel } from 'src/app/models/parameters/categoria.model';


declare const showMessage : any;


@Component({
  selector: 'app-categoria-creation',
  templateUrl: './categoria-creation.component.html',
  styleUrls: ['./categoria-creation.component.css']
})
export class CategoriaCreationComponent implements OnInit {

  fgValidator: FormGroup;

  nombreMinLength = FormsConfig.PARAM_NOMBRE_MIN_LENGTH;
  codigoMinLength = FormsConfig.PARAM_CODIGO_MIN_LENGTH;

  constructor(private fb:FormBuilder,
    private service: CategoriaService,
    private router: Router ) { } 

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){  
    this.fgValidator = this.fb.group({
      codigo:['',[Validators.minLength(this.codigoMinLength)]],
      nombre:['',[Validators.required,Validators.minLength(this.nombreMinLength)]]
     
    });
  }

  saveNewRecordFn(){
    if(this.fgValidator.invalid){
      showMessage("Formulario invalido");
    }else{
      console.log("Registrando...");
      let model=this.getCategoriaData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage("Dato insertado exitosamente");
          this.router.navigate(['/parameters/categoria-list']);
        },
        error => {
          showMessage("Error a la creacion de la categoria");
          console.log(`${model.codigo} no se pudo crear`);
          
        }
      );
    }  
  }

  
  

  getCategoriaData(): CategoriaModel {
    let model = new CategoriaModel();
    model.codigo=this.fgv.codigo.value;
    model.nombre=this.fgv.nombre.value;
    return model;
  }

  get fgv(){
    return this.fgValidator.controls;
  }
}



