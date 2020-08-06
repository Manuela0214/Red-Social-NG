import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistroModel } from '../models/registro.model';
import { ServiceConfig } from '../config/service-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Method to call customer POST in backend
   * @param registro customer data to save
   */
  UsuarioLogin(registro: RegistroModel): Observable<any> {
    return this.http.post<any>(`${ServiceConfig.BASE_URL}login`, registro, {
      headers: new HttpHeaders({})
    });
  }
}
