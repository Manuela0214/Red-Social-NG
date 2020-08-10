import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormsConfig } from 'src/app/config/forms-config';
import { OfertaService } from 'src/app/services/parameters/oferta.service';
import { Router } from '@angular/router';
import { OfertaModel } from 'src/app/models/parameters/oferta.model';


declare const showMessage : any;


@Component({
  selector: 'app-oferta-creation',
  templateUrl: './oferta-creation.component.html',
  styleUrls: ['./oferta-creation.component.css']
})
export class OfertaCreationComponent implements OnInit {

  fgValidator: FormGroup;

  descripcionMinLength = FormsConfig.DESCRIPCION_OFERTA_MIN_LENGTH;
  EnlaceMinLength = FormsConfig.ENLACE_TIENDA_MIN_LENGTH;

  constructor(private fb:FormBuilder,
    private service: OfertaService,
    private router: Router ) { } 

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){  
    this.fgValidator = this.fb.group({
      descripcion:['',[Validators.minLength(this.descripcionMinLength)]],
      enlaceTienda:['',[Validators.required,Validators.minLength(this.EnlaceMinLength)]],
      videojuegoId:['',[Validators.minLength(4)]]      
    });
  }

  saveNewRecordFn(){
    if(this.fgValidator.invalid){
      showMessage("Formulario invalido");
    }else{
      console.log("Registrando...");
      let model=this.getOfertaData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage("Dato insertado exitosamente");
          this.router.navigate(['/parameters/oferta-list']);
        },
        error => {
          showMessage("Error a la creacion de la oferta");
          console.log(`${model.enlaceTienda} no se pudo crear`);
          
        }
      );
    }  
  }

  
  

  getOfertaData(): OfertaModel {
    let model = new OfertaModel();
    model.descripcion=this.fgv.descripcion.value;
    model.enlaceTienda=this.fgv.enlaceTienda.value;
    model.videojuegoId=this.fgv.videojuegoId.value;
    return model;
  }

  get fgv(){
    return this.fgValidator.controls;
  }
}



