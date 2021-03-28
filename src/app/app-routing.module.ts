import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedInGuard } from './shared/guards/is-logged-in/is-logged-in.guard';
import { IsNotLoggedInGuard } from './shared/guards/is-not-logged-in/is-not-logged-in.guard';

 
const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./logged-in-area/logged-in-area.module').then(m => m.LoggedInAreaModule),
    canActivate: [IsLoggedInGuard] 
  }, {
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [IsNotLoggedInGuard] 
  }, { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [IsNotLoggedInGuard]
  }, { 
    path: 'recoverypass', 
    loadChildren: () => import('./recovery-pass/recovery-pass.module').then(m => m.RecoveryPassModule),
    canActivate: [IsNotLoggedInGuard]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
