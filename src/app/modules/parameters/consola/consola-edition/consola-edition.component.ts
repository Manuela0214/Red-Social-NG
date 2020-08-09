import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsolaService } from 'src/app/services/parameters/consola.service';
import { ConsolaModel } from 'src/app/models/parameters/consola.model';
import { FormsConfig } from 'src/app/config/forms-config';

declare const showMessage : any;

@Component({
  selector: 'app-consola-edition',
  templateUrl: './consola-edition.component.html',
  styleUrls: ['./consola-edition.component.css']
})
export class ConsolaEditionComponent implements OnInit {

  fgValidator: FormGroup;
  nombreMinLength = FormsConfig.PARAM_NOMBRE_MIN_LENGTH;
  codigoMinLength = FormsConfig.PARAM_CODIGO_MIN_LENGTH;
  id: String;
  
  constructor(private fb:FormBuilder,
    private service: ConsolaService,
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
          
          this.router.navigate(['/parameters/consola-list']);
        }
      );
    }
    else{
      this.router.navigate(["parameters/consola-list"]);
      

    }
  };

  EditRecordFn(){
    if(this.fgValidator.invalid){
      showMessage("Formulario invalido");
    }else{
      console.log("Registrando...");
      let model=this.getConsolaData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage(" A VER SI SE ** modifica ESTO");
          this.router.navigate(['/parameters/consola-list']);
        },
        error => {
          showMessage("Error a la modigicacion de la consola");
          console.log(`${model.codigo} no se pudo crear`);
          
        }
      );
    }  
  }

  getConsolaData(): ConsolaModel {
    let model = new ConsolaModel();
    model.id=this.fgv.id.value;
    model.codigo=this.fgv.codigo.value;
    model.nombre=this.fgv.nombre.value;
    return model;
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}
