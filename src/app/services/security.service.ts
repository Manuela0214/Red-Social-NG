import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistroModel } from '../models/registro.model';
import { ServiceConfig } from '../config/service-config';
import { Observable, BehaviorSubject } from 'rxjs';
import { PasswordResetModel } from '../models/security/password-reset.model';
import { ChangePasswordModel } from '../models/security/change-password.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  registroData = new BehaviorSubject<RegistroModel>(new RegistroModel);
  
  constructor(
    private http: HttpClient
  ) {
    this.verifyCurrentSession();
   }

  verifyCurrentSession(){
    let currentSession = this.getSessionData();
    if(currentSession){
      this.setRegistroData(JSON.parse(currentSession));
    }
  }
  
  /**
   * update registro data
   * @param resgistro 
   */
  setRegistroData(resgistro: RegistroModel){
    this.registroData.next(resgistro);
  }

  /**
   * get registro data status
   */
  getRegistroData(){
    return this.registroData.asObservable();
  }

  /**
   * Method to call customer POST in backend
   * @param registro customer data to save
   */
  UsuarioLogin(registro: RegistroModel): Observable<any> {
    return this.http.post<any>(`${ServiceConfig.BASE_URL}login`, registro, {
      headers: new HttpHeaders({})
    });
  }
  PasswordReset(data: PasswordResetModel): Observable<any> {
    return this.http.post<any>(`${ServiceConfig.BASE_URL}password-reset`, data, {
      headers: new HttpHeaders({})
    });
  }

  ChangePassword(data: ChangePasswordModel): Observable<any> {
    return this.http.post<any>(`${ServiceConfig.BASE_URL}change-password`, data, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.getToken()}`
      })
    });
  }
  /**
   * save session data
   * @param sessionData user data and token
   */
  saveSessionData(sessionData: any): Boolean{
    let currentSession = localStorage.getItem('session');
    if(currentSession){
      return false;
    }else{
      let data: RegistroModel = {
        id: sessionData.data.id,
        usuarioId: sessionData.data.usuarioId,
        nombre_usuario: sessionData.data.nombre_usuario,
        rol:sessionData.data.rol,
        token: sessionData.token,
        isLogged: true
      };
      localStorage.setItem('session',JSON.stringify(data));
      this.setRegistroData(data);
      return true;
    }
  }

  /**
   * return the current session data
   */
  getSessionData(){
    let currentSession = localStorage.getItem('session');
    return currentSession;
  }

  sessionExist():Boolean{
    
    let currentSession = this.getSessionData();
    return (currentSession) ? true:false;
  }
/**
 * verifica si el rol del usuaruio en sesion tiene el rol de parametros
 * @param rolId rol para verificar 
 */
  VerifytRolInSession(rolId):Boolean{
    let currentSession = JSON.parse(this.getSessionData());
    return (currentSession.rol == rolId);
  }






  getToken():String{
    let sessionData = this.getSessionData();
    let currentSession='';
    if(sessionData){
    currentSession = JSON.parse(sessionData).token;
  }
    return currentSession;


  }

  getUserId(): String {
    let currentSession = JSON.parse(this.getSessionData());
    return currentSession.id;
  }

  /**
   * Clear session data
   */
  logout(){
    localStorage.removeItem('session');
    this.setRegistroData(new RegistroModel());
  }
}
