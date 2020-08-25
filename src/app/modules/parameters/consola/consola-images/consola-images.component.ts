import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {ConsolaImagesService} from '../../../../services/parameters/consola-images.service';
declare const showMessage: any;

@Component({
  selector: 'app-consola-images',
  templateUrl: './consola-images.component.html',
  styleUrls: ['./consola-images.component.css']
})
export class ConsolaImagesComponent implements OnInit {
  fgValidator:FormGroup;
  consolaId: String;

  constructor(private fb:FormBuilder,
    private route: ActivatedRoute,
    private service: ConsolaImagesService) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.consolaId = this.route.snapshot.params["id"];
    this.fgv.consolaId.setValue(this.consolaId);
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      path: ['', [Validators.required]],
      order: ['', [Validators.required]],
      videojuegoId: ['', [Validators.required]]

    });
  }
  UploadImageFn(){
    if (this.fgValidator.invalid){
      showMessage("Formulario invalido");
    }else{
    const formData = new FormData();
    formData.append('file',this.fgv.path.value);
    formData.append('order',this.fgv.order.value);
    formData.append('order',this.fgv.videojuegoId.value);
    this.service.UploadConsolaImage(formData,this.fgv.order.value,this.fgv.consolaId.value).subscribe(
      data=>{
        this.fgv.path.setValue(data.filename);
        showMessage("Formulario melo");
      },
      err=>{
        showMessage("Formulario invalido");
      }
      

    );
    }// llama al servicio
  }
  onFileSelect(event){
    if (event.target.files.length > 0){
      const file = event.target.files[0];
      this.fgv.path.setValue(file);
    }
  }

  get fgv (){
    return this.fgValidator.controls;
  }
  
}
