import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideojuegoImagesService } from '../../../../services/parameters/videojuego-images.service';
import { VideojuegoImageModel } from 'src/app/models/parameters/videojuego-image.model';
import { Subscription } from 'rxjs';

declare const showMessage: any;
declare const showRemoveConfirmationWindow : any;


@Component({
  selector: 'app-videojuego-images',
  templateUrl: './videojuego-images.component.html',
  styleUrls: ['./videojuego-images.component.css']
})
export class VideojuegoImagesComponent implements OnInit {

  fgValidator: FormGroup;
  videojuegoId: String;
  videojuegoImagenesList : VideojuegoImageModel[];
  idToRemove : String;



  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private servicioJuego: VideojuegoImagesService) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.videojuegoId = this.route.snapshot.params["id"]
    this.fgv.videojuegoId.setValue(this.videojuegoId)
    this.gettAllImagesByVideojuegoId();
  }

  gettAllImagesByVideojuegoId(){
    this.servicioJuego.getRecordByVideojuegoId(this.videojuegoId).subscribe(
      data=>{
        this.videojuegoImagenesList = data;
      },
      err=>{
        showMessage("Error al cargar las imagenes actuales del videojuego")
      }
    )
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      path: ['', [Validators.required]],
      order: ['', [Validators.required, Validators.minLength(1)]],
      videojuegoId: ['', [Validators.required]]

    });
  }

  UploadImageFn() {
    if (this.fgValidator.invalid) {
      showMessage("Formulario Invalido")
    } else {


      const formData = new FormData();
      formData.append('file', this.fgv.path.value);
      //llamado al servicio
      console.log(formData,this.fgv.order.value,this.fgv.videojuegoId.value );
      
      this.servicioJuego.UploadVideojuegoImage(formData,this.fgv.order.value,this.fgv.videojuegoId.value).subscribe(
        data=>{
          this.fgv.path.setValue(data.filename);
          
      showMessage("se creó la imagen correctamente")
      
      this.gettAllImagesByVideojuegoId();

        },error=>{
          
      showMessage("error al actualizar")
        }
        
      );
    }
  }


  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fgv.path.setValue(file);
    }
  }

  get fgv() {
    return this.fgValidator.controls;
  }

  RemoveImage(){
    this.servicioJuego.DeleteRecord(this.idToRemove).subscribe(
      data=>{
        this.gettAllImagesByVideojuegoId();
      },
      err =>{
        showMessage("No se pudo borrar la imagen me neño")
      }
    )
  }


  RemoveConfirmation(id){
    this.idToRemove = id;
    showRemoveConfirmationWindow()
  }

}
