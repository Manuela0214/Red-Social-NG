import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { VideojuegoService } from 'src/app/services/parameters/videojuego.service';
import { Router } from '@angular/router';
import { VideojuegoModel } from 'src/app/models/parameters/videojuego.model';


declare const showMessage : any;


@Component({
  selector: 'app-videojuego-creation',
  templateUrl: './videojuego-creation.component.html',  
  styleUrls: ['./videojuego-creation.component.css']
})
export class VideojuegoCreationComponent implements OnInit {

  fgValidator: FormGroup;

  nombreMinLength = FormsConfig.PARAM_NOMBRE_MIN_LENGTH;
  codigoMinLength = FormsConfig.PARAM_CODIGO_MIN_LENGTH;

  constructor(private fb:FormBuilder,
    private service: VideojuegoService,
    private router: Router ) { } 

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){  
    this.fgValidator = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(this.nombreMinLength)]],
      categoriaId:['',[Validators.minLength(this.codigoMinLength)]]
     
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
          console.log(`${model.categoriaId} no se pudo crear`);
          
        }
      );
    }  
  }

  
  

  getCategoriaData(): VideojuegoModel {
    let model = new VideojuegoModel();
    model.categoriaId=this.fgv.categoriaId.value;
    model.nombre=this.fgv.nombre.value;
    return model;
  }

  get fgv(){
    return this.fgValidator.controls;
  }
}



