import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasGenerosComponent } from './listas-generos/listas-generos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListasGenerosComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
