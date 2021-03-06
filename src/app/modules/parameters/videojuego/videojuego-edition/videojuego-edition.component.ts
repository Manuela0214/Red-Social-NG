import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideojuegoService } from 'src/app/services/parameters/videojuego.service';
import { VideojuegoModel } from 'src/app/models/parameters/videojuego.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { CategoriaModel } from 'src/app/models/parameters/categoria.model';
import { CategoriaService } from 'src/app/services/parameters/categoria.service';

declare const showMessage : any;
declare const initSelect:any;


@Component({
  selector: 'app-videojuego-edition',
  templateUrl: './videojuego-edition.component.html',
  styleUrls: ['./videojuego-edition.component.css']
})
export class VideojuegoEditionComponent implements OnInit {

  fgValidator: FormGroup;
  nombreMinLength = FormsConfig.PARAM_NOMBRE_MIN_LENGTH;
  codigoMinLength = FormsConfig.PARAM_CODIGO_MIN_LENGTH;
  id: String;
  categoriaList : CategoriaModel[];
  
  constructor(private fb:FormBuilder,
    private service: VideojuegoService,
    private router: Router,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute ) {
      this.id = this.route.snapshot.params["id"];
      console.log('id a editar= '+ this.id);
      
  
  } 

  ngOnInit(): void {
    this.fillSelect();
    this.FormBuilding();
    this.getDataOfRecord();
    this.fillFields();
  }

  FormBuilding(){  
    this.fgValidator = this.fb.group({
      id:['',[Validators.required]],
      categoriaId:['',[Validators.required,Validators.minLength(this.codigoMinLength)]],
      nombre:['',[Validators.required,Validators.minLength(this.nombreMinLength)]]
     
    });
  }


  getDataOfRecord(){
    console.log("QUe pasa");
    
    if(this.id ){
      this.service.getRecordById(this.id).subscribe(
        data =>{
          console.log(data);
          this.fgv.id.setValue(data.id);
          this.fgv.categoriaId.setValue(data.categoriaId);
          this.fgv.nombre.setValue(data.nombre);
        },
        error  =>{
          showMessage("Record not found");
          
          this.router.navigate(['/parameters/videojuego-list']);
        }
      );
    }
    else{
      this.router.navigate(["parameters/videojuego-list"]);
      

    }
  };

  EditRecordFn(){
    if(this.fgValidator.invalid){
      showMessage("Formulario invalido");
    }else{
      console.log("Registrando...");
      let model=this.getVideojuegoData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage("Dato modificado exitosamente");
          this.router.navigate(['/parameters/videojuego-list']);
        },
        error => {
          showMessage("Error a la modificacion del videojuego");
          console.log(`${model.categoriaId} no se pudo crear`);
          
        }
      );
    }  
  }

  getVideojuegoData(): VideojuegoModel {
    let model = new VideojuegoModel();
    model.id=this.fgv.id.value;
    model.categoriaId=this.fgv.categoriaId.value;
    model.nombre=this.fgv.nombre.value;
    return model;
  }


  fillFields(){
    this.service.getRecordById(this.id).subscribe(
      data=>{
        this.fgv.id.setValue(data.id);
      },error=>{
        showMessage("record not found")
        this.router.navigate(["/parameters/videojuego-list"]);
      }
    );
  }
  get fgv(){
    return this.fgValidator.controls;
  }

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
 

}
