import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../services/security.service';
import { ServiceConfig } from '../config/service-config';

@Injectable({
  providedIn: 'root'
})
export class NormalUsuarioAuthenticatedGuard implements CanActivate {

  constructor(private secService:SecurityService,
    private router:Router){
     
   }
   
   
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.secService.sessionExist() && this.secService.VerifytRolInSession(ServiceConfig.USUARIO_NORMAL_ROL_ID)){
        return true;
  
      }else{
        
        this.router.navigate(["/home"]);
        return false;
      }
   
    }
  
}
