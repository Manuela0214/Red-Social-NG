import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy } from '@angular/common';
//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import{LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import{UnauthenticatedGuard} from '../../guards/unauthenticated.guard';
import{AuthenticatedGuard} from '../../guards/authenticated.guard';




const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate:[UnauthenticatedGuard]
  },
  {
    path:'logout',
    component:LogoutComponent,
    canActivate:[AuthenticatedGuard]
  },
  {
    path:'reset',
    component: PasswordResetComponent,
    canActivate:[UnauthenticatedGuard]
  },
  {
    path:'change-password',
    component: ChangePasswordComponent,
    canActivate:[AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
