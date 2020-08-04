import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient, HttpHeaders}  from '@angular/common/http';
import { ServiceConfig } from '../config/service-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  entity = 'usuarios';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Method to call customer POST in backend
   * @param usuario customer data to save
   */
  UsuarioRegistering(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}`, usuario, {
      headers: new HttpHeaders({})
    });
  }

}
