import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { SecurityService } from '../security.service';
import {ConsolaModel} from '../../models/parameters/consola.model';



@Injectable({
  providedIn: 'root'
})
export class ConsolaService {
  entity='consola';
  token :String =''
  
    constructor(private http: HttpClient, private securityService:SecurityService) {
      this.token=this.securityService.getToken();
     }
  
  
     /**
      * get all records
      */
    getAllRecords():Observable<ConsolaModel[]>{
      return this.http.get<ConsolaModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
    }
  
    /**
     * coge por id
     * @param id 
     */
    getRecordById(id:String):Observable<ConsolaModel>{
      return this.http.get<ConsolaModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
    }
  
  
    /**
     * Add new record to category collection
     * @param record record data
     */
    saveNewRecord(record: ConsolaModel):Observable<ConsolaModel>{
      
      return this.http.post<ConsolaModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
  
        })
      });
    }
  
    EditRecord(record: ConsolaModel):Observable<ConsolaModel>{
      return this.http.put<ConsolaModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
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
