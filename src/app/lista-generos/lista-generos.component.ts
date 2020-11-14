import { Component, OnInit } from '@angular/core';
import { Baile } from '../lista-generos/Variables';
import { Router } from '@angular/router';
import { ServicioCarrito } from '../servicios-carrito';

@Component({
  selector: 'app-lista-generos',
  templateUrl: './lista-generos.component.html',
  styleUrls: ['./lista-generos.component.scss']
})

export class ListaGenerosComponent implements OnInit {

  anio: number;

  constructor(private cart: ServicioCarrito, private router: Router) {

    this.anio = new Date().getFullYear();

  }

  general: Baile[] = [

    {
      titulo: 'dasdasdada',
      genero: 'Tango',
      anio: 2020,
      descripcion: 'jajajjajajajajjajajajjajaajjajajaajaja',
      image: 'assets/img/tango.jpg',
      disponible: true,
      gusta: 0.9,
      dia: 12,
      profesor: 'Ricardo',
      carga: '8 hs. semanales'
    },

    {
      titulo: 'adadadad',
      genero: 'Salsa',
      anio: 2020,
      descripcion: 'adadasd',
      image: 'assets/img/salsa.jpg',
      disponible: true,
      gusta: 0.9,
      dia: 12,
      profesor: 'Ricardo',
      carga: '10 hs. semanales'
    },

    {
      titulo: 'sdadasdad',
      genero: 'Folklore',
      anio: 2022,
      descripcion: 'asdadad',
      image: 'assets/img/folklore.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      profesor: 'Ricardo',
      carga: '6 hs semanales'
    },

    {
      titulo: 'sdasdasda',
      genero: 'Flamenco',
      anio: 2020,
      descripcion: 'asdasdadsa',
      image: 'assets/img/flamenco.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      profesor: 'Ricardo',
      carga: '10 hs. semanales'
    },

    {
      titulo: 'sadadasd',
      genero: 'Clasico',
      anio: 2020,
      descripcion: 'asdasdad',
      image: 'assets/img/clasico.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      profesor: 'Ricardo',
      carga: '6 hs semanales'
    }
  ];

  ngOnInit(): void {
  }


  agregarFavorito(general): void {
    this.cart.agregarfavorito(general);
  }

  verBaile(idx: number) {
    this.router.navigate(['/general', idx]);
  }

}