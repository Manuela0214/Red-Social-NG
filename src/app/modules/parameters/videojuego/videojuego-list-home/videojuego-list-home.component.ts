import { Component, OnInit } from '@angular/core';
import { VideojuegoImageModel } from 'src/app/models/parameters/videojuego-image.model';
import { VideojuegoModel } from 'src/app/models/parameters/videojuego.model';
import { VideojuegoService } from 'src/app/services/parameters/videojuego.service';

@Component({
  selector: 'app-videojuego-list-home',
  templateUrl: './videojuego-list-home.component.html',
  styleUrls: ['./videojuego-list-home.component.css']
})
export class VideojuegoListHomeComponent implements OnInit {

  videojuegoList:VideojuegoModel[];

  constructor(private service: VideojuegoService) { }

  ngOnInit(): void {
    this.getAllVideojuegos();
  }


  getAllVideojuegos(){
    this.service.getAllRecords().subscribe(
      data=>{
        this.videojuegoList=data;
      },
      err=>{

      }
    )
  }

}
