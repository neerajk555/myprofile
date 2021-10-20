import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { MyinterestComponent } from './myinterest/myinterest.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ContactmeComponent,
    MyinterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
