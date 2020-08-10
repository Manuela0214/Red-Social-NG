import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';
import {AdminAuthenticatedGuard} from './guards/admin-authenticated.guard';


const routes: Routes = [
  
  {
    path:'home',
    component: DefaultComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/home'
  },
  {
    path:'security',
    loadChildren:() => import('./modules/security/security.module').then(m => m.SecurityModule)
  },
  {
    path:'parameters',
    loadChildren:() => import('./modules/parameters/parameters.module').then(m => m.ParametersModule),
    canActivate:[AdminAuthenticatedGuard]
  },
  {
    path:'usuario',
    loadChildren:() => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule)
  },
  /** this must be the last one (la ultima ruta) */
  //si no existe la ruta que coloquemos, nos manda al /home 
  {
    path:'**',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }