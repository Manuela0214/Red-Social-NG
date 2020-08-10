import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import {VideojuegoModel} from '../../../../models/parameters/videojuego.model';
import {VideojuegoService} from '../../../../services/parameters/videojuego.service';
declare  const showMessage : any;
declare const closeModal : any;

declare  const showRemoveConfirmationWindow : any;



@Component({
  selector: 'app-videojuego-list',
  templateUrl: './videojuego-list.component.html',
  styleUrls: ['./videojuego-list.component.css']
})
export class VideojuegoListComponent implements OnInit {
  page: number = 1;
  itemsPageAmount:number = FormsConfig.ITEMS_PER_PAGE;
  recordList : VideojuegoModel[];
  idToRemove : String = '';



  constructor(
    private service : VideojuegoService,
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
