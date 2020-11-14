import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioCarrito } from '../servicios-carrito';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.scss']
})
export class VerMasComponent {

  lista: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _serieService: ServicioCarrito) { 
   
    this.activatedRoute.params.subscribe( params =>{   
      this.lista = this._serieService.getBaile(params ['id']);
      return console.log(this.lista);
    })
  }
}
