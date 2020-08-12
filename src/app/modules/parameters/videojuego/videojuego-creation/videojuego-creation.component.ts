import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { VideojuegoService } from 'src/app/services/parameters/videojuego.service';
import { Router } from '@angular/router';
import { VideojuegoModel } from 'src/app/models/parameters/videojuego.model';
import { CategoriaService } from 'src/app/services/parameters/categoria.service';
import { CategoriaModel } from 'src/app/models/parameters/categoria.model';


declare const showMessage : any;
declare const initSelect:any;



@Component({
  selector: 'app-videojuego-creation',
  templateUrl: './videojuego-creation.component.html',  
  styleUrls: ['./videojuego-creation.component.css']
})
export class VideojuegoCreationComponent implements OnInit {

  fgValidator: FormGroup;

  nombreMinLength = FormsConfig.PARAM_NOMBRE_MIN_LENGTH;
  codigoMinLength = FormsConfig.PARAM_CODIGO_MIN_LENGTH;
  categoriaList : CategoriaModel[];

  constructor(private fb:FormBuilder,
    private service: VideojuegoService,
    private router: Router,
    private categoriaService: CategoriaService ) { } 

  ngOnInit(): void {
    this.fillSelect();
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(this.nombreMinLength)]],
      categoriaId:['',[Validators.required,Validators.minLength(this.codigoMinLength)]],
     
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
          this.router.navigate(['/parameters/videojuego-list']);
        },
        error => {
          showMessage("Error a la creacion de la videojuego");
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

  /**
   * carga las categorias que haya
   */
  fillSelect(){
   this.categoriaService.getAllRecords().subscribe(
     data=>{
      this.categoriaList=data; 
      initSelect();

     },error=>{
      console.error("eror carga de categorias")
     }
   );
  }

  get fgv(){
    return this.fgValidator.controls;
  }
}



