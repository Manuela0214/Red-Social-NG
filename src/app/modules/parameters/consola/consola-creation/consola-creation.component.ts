import { Component, OnInit } from '@angular/core';
import { ConsolaModel } from 'src/app/models/parameters/consola.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { Router } from '@angular/router';
import { ConsolaService } from 'src/app/services/parameters/consola.service';


declare const showMessage:any;

@Component({
  selector: 'app-consola-creation',
  templateUrl: './consola-creation.component.html',
  styleUrls: ['./consola-creation.component.css']
})
export class ConsolaCreationComponent implements OnInit {

  fgValidator: FormGroup;
  nombreMinLength = FormsConfig.PARAM_NOMBRE_MIN_LENGTH;
  codigoMinLength = FormsConfig.PARAM_CODIGO_MIN_LENGTH;
  
  
  constructor(private fb:FormBuilder,
    private service: ConsolaService,
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
      let model=this.getConsolaData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage("Dato insertado exitosamente");
          this.router.navigate(['/parameters/consola-list']);
        },
        error => {
          showMessage("Error a la crearcion de la consola");
          console.log(`${model.codigo} no se pudo crear`);
          
        }
      );
    }  
  }

  getConsolaData(): ConsolaModel {
    let model = new ConsolaModel();
    model.codigo=this.fgv.codigo.value;
    model.nombre=this.fgv.nombre.value;
    return model;
  }

  get fgv(){
    return this.fgValidator.controls;
  }


}
