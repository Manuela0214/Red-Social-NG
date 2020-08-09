import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/parameters/categoria.service';
import { Router } from '@angular/router';
import { FormsConfig } from 'src/app/config/forms-config';
import { CategoriaModel } from 'src/app/models/parameters/categoria.model';

declare const showMessage: any;
@Component({
  selector: 'app-categoria-creation',
  templateUrl: './categoria-creation.component.html',
  styleUrls: ['./categoria-creation.component.css']
})
export class CategoriaCreationComponent implements OnInit {

  fgValidator: FormGroup;
  nameMinLength = FormsConfig.PARAM_NAME_MIN_LENGTH;
  codeMinLength = FormsConfig.PARAM_CODE_MIN_LENGTH;
  constructor(private fb:FormBuilder,
    private service: CategoriaService,
    private router: Router ) { } 

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      codigo:['',[Validators.required,Validators.minLength(this.codeMinLength)]],
      nombre:['',[Validators.required,Validators.minLength(this.nameMinLength)]],
    });
  }

  saveNewRecordFn(){
    if(this.fgValidator.invalid){
      showMessage("Formulario invalido.");
    }else{
      let model=this.getUsuarioData();
      console.log(model);
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage("Registro almacenado correctamente.");
          this.router.navigate(['/parameters/categoria-list']);
        },error => {
          console.log(error);
          showMessage("Error guardando.");
        }
      );
    }  
  }

  getUsuarioData(): CategoriaModel {
    let model = new CategoriaModel();
    model.codigo=this.fgv.codigo.value;
    model.nombre=this.fgv.nombre.value;
    return model;
  }

  get fgv(){
    return this.fgValidator.controls;
  }
}



