import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  MangeProfileComponent } from './manage-profile/manage-profile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {path:'manageprofile',component:MangeProfileComponent},
  {path:'profile',component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
