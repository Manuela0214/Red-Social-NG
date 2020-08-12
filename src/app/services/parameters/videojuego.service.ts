import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { SecurityService } from '../security.service';
import {VideojuegoModel} from '../../models/parameters/videojuego.model';



@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  entity='videojuego';
  token :String =''
  filter:String ='?filter={"include":[{"relation":"categoria"}]}' ;
  
    constructor(private http: HttpClient, private securityService:SecurityService) {
      this.token=this.securityService.getToken();
     }
  
  
     /**
      * get all records
      */
    getAllRecords():Observable<VideojuegoModel[]>{
      return this.http.get<VideojuegoModel[]>(`${ServiceConfig.BASE_URL}${this.entity}/${this.filter}`);
    }
  
    /**
     * coge por id
     * @param id 
     */
    getRecordById(id:String):Observable<VideojuegoModel>{
      return this.http.get<VideojuegoModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
    }
  
  
    /**
     * Add new record to category collection
     * @param record record data
     */
    saveNewRecord(record: VideojuegoModel):Observable<VideojuegoModel>{
      
      return this.http.post<VideojuegoModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
  
        })
      });
    }
  
    EditRecord(record: VideojuegoModel):Observable<VideojuegoModel>{
      return this.http.put<VideojuegoModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
        headers: new HttpHeaders({
          Authorization : `Bearer ${this.token}`
  
        })
      });
    }
  
    DeleteRecord(recordId: String):Observable<any>{
      return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
        headers: new HttpHeaders({
          Authorization : `Bearer ${this.token}`
  
        })
      });
    }
}
