import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaGenerosComponent } from './lista-generos/lista-generos.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { PrincipalComponent } from './principal/principal.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGenerosComponent,
    CarritoComponent,
    PrincipalComponent,
    VerMasComponent
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
