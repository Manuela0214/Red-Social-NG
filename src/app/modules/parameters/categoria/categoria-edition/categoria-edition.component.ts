import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { CategoriaService } from 'src/app/services/parameters/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaModel } from 'src/app/models/parameters/categoria.model';


declare const showMessage : any;

@Component({
  selector: 'app-categoria-edition',
  templateUrl: './categoria-edition.component.html',
  styleUrls: ['./categoria-edition.component.css']
})
export class CategoriaEditionComponent implements OnInit {

  fgValidator: FormGroup;
  nombreMinLength = FormsConfig.PARAM_NOMBRE_MIN_LENGTH;
  codigoMinLength = FormsConfig.PARAM_CODIGO_MIN_LENGTH;
  id: String;
  
  constructor(private fb:FormBuilder,
    private service: CategoriaService,
    private router: Router,
    private route: ActivatedRoute ) {
      this.id = this.route.snapshot.params["id"];
      console.log('id a editar= '+ this.id);
      
  
  } 

  ngOnInit(): void {
    this.FormBuilding();
    this.getDataOfRecord();
  }

  FormBuilding(){  
    this.fgValidator = this.fb.group({
      id:['',[Validators.required]],
      codigo:['',[Validators.required,Validators.minLength(this.codigoMinLength)]],
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
          
          this.fgv.codigo.setValue(data.codigo);
          
          this.fgv.nombre.setValue(data.nombre);
        },
        error  =>{
          showMessage("Record not found");
          
          this.router.navigate(['/parameters/categoria-list']);
        }
      );
    }
    else{
      this.router.navigate(["parameters/categoria-list"]);
      

    }
  };

  EditRecordFn(){
    if(this.fgValidator.invalid){
      showMessage("Formulario invalido");
    }else{
      console.log("Registrando...");
      let model=this.getCategoriaData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage("Dato modificado exitosamente");
          this.router.navigate(['/parameters/categoria-list']);
        },
        error => {
          showMessage("Error a la modigicacion de la categoria");
          console.log(`${model.codigo} no se pudo crear`);
          
        }
      );
    }  
  }

  getCategoriaData(): CategoriaModel {
    let model = new CategoriaModel();
    model.id=this.fgv.id.value;
    model.codigo=this.fgv.codigo.value;
    model.nombre=this.fgv.nombre.value;
    return model;
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}
