import { Component, OnInit } from '@angular/core';
import { OfertaModel } from 'src/app/models/parameters/oferta.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { Router, ActivatedRoute } from '@angular/router';
import { OfertaService } from 'src/app/services/parameters/oferta.service';

declare const showMessage: any;

@Component({
  selector: 'app-oferta-edition',
  templateUrl: './oferta-edition.component.html',
  styleUrls: ['./oferta-edition.component.css']
})
export class OfertaEditionComponent implements OnInit {

  fgValidator: FormGroup;
  descripcionMinLength = FormsConfig.DESCRIPCION_OFERTA_MIN_LENGTH;
  EnlaceMinLength = FormsConfig.ENLACE_TIENDA_MIN_LENGTH;
  id: String;

  constructor(
    private fb: FormBuilder,
    private service: OfertaService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.FormBuilding();
    this.getDataOfRecord();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      id: ['', [Validators.required]],
      descripcion:['',[Validators.minLength(this.descripcionMinLength)]],
      enlaceTienda:['',[Validators.required,Validators.minLength(this.EnlaceMinLength)]],
      videojuegoId:['',[Validators.minLength(4)]]    
    });
  }

  getDataOfRecord() {
    console.log(this.id);
    if (this.id) {
      this.service.getRecordById(this.id).subscribe(
        data => {
          console.log(data);
          this.fgv.id.setValue(data.id);
          this.fgv.descripcion.setValue(data.descripcion);
          this.fgv.enlaceTienda.setValue(data.enlaceTienda);
          this.fgv.videojuegoId.setValue(data.videojuegoId);
        },
        error => {
          showMessage("Registro no encontrado");
          this.router.navigate(['/parameters/oferta-list']);
        }
      );
    } else {
      this.router.navigate(["/parameters/oferta-list"]);
    }
  }

  EditRecordFn() {
    if (this.fgValidator.invalid) {
      showMessage("Formulario invalido");
    } else {
      let model = this.getCustomerData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage("Registro guardado exitosamente");
          this.router.navigate(['/parameters/oferta-list']);
        },
        error => {
          showMessage("Error modificando");
        }
      );
    }
  }

  getCustomerData(): OfertaModel {
    let model = new OfertaModel();
    model.id = this.fgv.id.value;
    model.descripcion = this.fgv.descripcion.value;
    model.enlaceTienda = this.fgv.enlaceTienda.value;
    model.videojuegoId = this.fgv.videojuegoId.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}