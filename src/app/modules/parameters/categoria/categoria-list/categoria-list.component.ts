import { Component, OnInit } from '@angular/core';
import {CategoriaModel} from '../../../../models/parameters/categoria.model'
import {CategoriaService} from '../../../../services/parameters/categoria.service';
import { config } from 'rxjs';
import { FormsConfig } from 'src/app/config/forms-config';
import {NgxSpinnerService} from 'ngx-spinner';
declare  const showMessage : any;

declare  const showRemoveConfirmationWindow : any;



@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  page: number = 1;
  itemsPageAmount:number = FormsConfig.ITEMS_PER_PAGE;
  recordList : CategoriaModel[];
  constructor(private service : CategoriaService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
   this.fillRecords();

  }

  fillRecords(){
    this.service.getAllRecords().subscribe(
      data=>{
        this.recordList = data;
        console.log(this.recordList);
        setTimeout(() => {
        this.spinner.hide();
        }, 1000);
      },
      err =>{
        showMessage("Problemas con el backend")
      }
    )
  }

  RemoveConfirmation(){
    showRemoveConfirmationWindow()
  }

}
