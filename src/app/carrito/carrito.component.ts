import { Component, Input, OnInit} from '@angular/core';
import { ServicioCarrito } from '../servicios-carrito';
import { Baile } from '../lista-generos/Variables';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  favoriteList: Baile[];

  constructor(private cart:ServicioCarrito) {
      cart.favoriteList.subscribe(c => this.favoriteList = c);

  }


  ngOnInit(): void {
  }

}
