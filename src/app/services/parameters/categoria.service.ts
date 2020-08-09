import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{CategoriaModel} from '../../models/parameters/categoria.model';
import { ServiceConfig } from 'src/app/config/service-config';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
entity='categoria';
token :String =''

  constructor(private http: HttpClient, private securityService:SecurityService) {
    this.token=this.securityService.getToken();
   }


  getAllRecords():Observable<CategoriaModel[]>{
    return this.http.get<CategoriaModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  getRecordById(id:String):Observable<CategoriaModel>{
    return this.http.get<CategoriaModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
  }


  /**
   * Add new record to category collection
   * @param record record data
   */
  saveNewRecord(record: CategoriaModel):Observable<CategoriaModel>{
    
    return this.http.post<CategoriaModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization' : `Bearer  ${this.token} `

      })
    });
  }

  EditRecord(record: CategoriaModel):Observable<CategoriaModel>{
    return this.http.put<CategoriaModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
      headers: new HttpHeaders({
        Authorization : `Bearer  ${this.token} `

      })
    });
  }

  DeleteRecord(recordId: String):Observable<any>{
    return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization : `Bearer  ${this.token} `

      })
    });
  }
}
