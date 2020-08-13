import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { SecurityService } from '../security.service';
import { ServiceConfig } from 'src/app/config/service-config';
import {VideojuegoImageModel} from '../../models/parameters/videojuego-image.model';
import {UploadImageModel} from '../../models/parameters/upload-image.model';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoImagesService {
  entity='image';
  token :String =''
  filter:String ='?filter={"include":[{"relation":"videojuego"}]}' ;
  
    constructor(private http: HttpClient, private securityService:SecurityService) {
      this.token=this.securityService.getToken();
     }
  
  
     /**
      * get all records
      */
    getAllRecords():Observable<VideojuegoImageModel[]>{
      return this.http.get<VideojuegoImageModel[]>(`${ServiceConfig.BASE_URL}${this.entity}/${this.filter}`);
    }
  
    /**
     * coge por id
     * @param id 
     */
    getRecordById(id:String):Observable<VideojuegoImageModel>{
      return this.http.get<VideojuegoImageModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
    }
  
  
    /**
     * Add new record to category collection
     * @param record record data
     */
    UploadVideojuegoImage(formData: FormData,order: number, videojuegoId:String):Observable<UploadImageModel>{
      
     return this.http.post<UploadImageModel>(`${ServiceConfig.BASE_URL}videojuegoImagen?videojuegoId=${videojuegoId}&order=${order}`, formData, {
      headers: new HttpHeaders({
        Authorization : `Bearer ${this.token}`

      })
    });
  }
}
