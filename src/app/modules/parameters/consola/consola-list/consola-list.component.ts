import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import {ConsolaModel} from '../../../../models/parameters/consola.model';
import {ConsolaService} from '../../../../services/parameters/consola.service';
declare  const showMessage : any;
declare const closeModal : any;

declare  const showRemoveConfirmationWindow : any;



@Component({
  selector: 'app-consola-list',
  templateUrl: './consola-list.component.html',
  styleUrls: ['./consola-list.component.css']
})
export class ConsolaListComponent implements OnInit {
  page: number = 1;
  itemsPageAmount:number = FormsConfig.ITEMS_PER_PAGE;
  recordList : ConsolaModel[];
  idToRemove : String = '';



  constructor(
    private service : ConsolaService,
     private spinner: NgxSpinnerService,
     private router: Router) { }

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
    );
  }

  RemoveConfirmation(id){
    this.idToRemove = id;
    showRemoveConfirmationWindow()
  }

  RemoveRecord(){
    closeModal('removeConfirmationModal');
    if(this.idToRemove){
    this.service.DeleteRecord(this.idToRemove).subscribe(
      data=>{
        this.idToRemove = '';
      this.fillRecords();
      },
      err =>{
        showMessage("Problemas con el backend")
      }
    );
  }
  }

}
