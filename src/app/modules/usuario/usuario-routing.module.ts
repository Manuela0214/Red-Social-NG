import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';

const routes: Routes = [
  {
    path:'register',
    component: RegistroComponent,
    canActivate:[UnauthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
