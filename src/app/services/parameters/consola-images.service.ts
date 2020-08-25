import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecurityService } from '../security.service';
import {Observable} from 'rxjs';
import {ServiceConfig} from 'src/app/config/service-config';
import {ConsolaImageModel} from '../../models/parameters/consola-image.model';
import { UploadImageModel } from 'src/app/models/parameters/upload-image.model';
@Injectable({
  providedIn: 'root'
})
export class ConsolaImagesService {
  entity='image';
  token :String ='?filter={"include":[{"relation":"consola"}]}'
  
    constructor(private http: HttpClient, private securityService:SecurityService) {
      this.token=this.securityService.getToken();
     }
  
  
     /**
      * get all records
      */
    getAllRecords():Observable<ConsolaImageModel[]>{
      return this.http.get<ConsolaImageModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
    }
  
    /**
     * coge por id
     * @param id 
     */
    getRecordById(id:String):Observable<ConsolaImageModel>{
      return this.http.get<ConsolaImageModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
    }
  
  
    /**
     * Add new record to category collection
     * @param record record data
     */
    UploadConsolaImage(formData: FormData,order: number, consolaId:String):Observable<UploadImageModel>{
      return this.http.post<UploadImageModel>(`${ServiceConfig.BASE_URL}videojuegoImagen?videojuegoId=${consolaId}&order=${order}`, formData, {
        headers: new HttpHeaders({
          Authorization : `Bearer ${this.token}`
  
        })
      });
    
    }
}
