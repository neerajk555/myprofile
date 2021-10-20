import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { MyinterestComponent } from './myinterest/myinterest.component';

const routes: Routes = [
  {path:"aboutme", component:AboutmeComponent},
  {path:"contactme",component:ContactmeComponent},
  {path:"myinterest",component:MyinterestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
