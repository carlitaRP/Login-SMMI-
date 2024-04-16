import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { Login2Component } from './login2/login2.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Agrega FormsModule a la lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
