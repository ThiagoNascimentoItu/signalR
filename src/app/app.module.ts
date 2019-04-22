import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { RecebeComponent } from './recebe/recebe.component';
import { Recebe2Component } from './recebe2/recebe2.component';
import { Recebe3Component } from './recebe3/recebe3.component';

@NgModule({
   declarations: [
      AppComponent,
      TesteComponent,
      RecebeComponent,
      Recebe2Component,
      Recebe3Component
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
