import { Component, OnInit } from '@angular/core';
import { Baile } from '../lista-generos/Variables';

@Component({
  selector: 'app-lista-generos',
  templateUrl: './lista-generos.component.html',
  styleUrls: ['./lista-generos.component.scss']
})

export class ListaGenerosComponent implements OnInit {

  anio: number;

  constructor() {

    this.anio = new Date().getFullYear();

  }

  general: Baile[] = [

    {
      titulo: 'dasdasdada',
      genero: 'Tango',
      anio: 2020,
      plataforma: 'adadasda',
      image: 'assets/img/tango.jpg',
      disponible: true,
      gusta: 0.9,
      stock: 1,
      quantity: 0,

    },

    {
      titulo: 'adadadad',
      genero: 'Salsa',
      anio: 2017,
      plataforma: 'adadasd',
      image: 'assets/img/salsa.jpg',
      disponible: true,
      gusta: 0.9,
      stock: 1,
      quantity: 0,

    },

    {
      titulo: 'sdadasdad',
      genero: 'Folklore',
      anio: 2022,
      plataforma: 'asdadad',
      image: 'assets/img/folklore.jpg',
      disponible: false,
      gusta: 0.9,
      stock: 1,
      quantity: 0,

    },

    {
      titulo: 'sdasdasda',
      genero: 'Flamenco',
      anio: 2022,
      plataforma: 'asdasdadsa',
      image: 'assets/img/flamenco.jpg',
      disponible: false,
      gusta: 0.9,
      stock: 1,
      quantity: 0,

    },

    {
      titulo: 'sadadasd',
      genero: 'Otro',
      anio: 2022,
      plataforma: 'asdasdad',
      image: 'assets/img/gm-1.jpg',
      disponible: false,
      gusta: 0.9,
      stock: 1,
      quantity: 5,

    }
  ];

  upQuantity(lista: Baile): void {
    if (lista.quantity < lista.stock) {
      lista.quantity++;
    }
  }
  downQuantity(lista: Baile): void {
    if (lista.quantity > 0) {
      lista.quantity--;
    }
  }

  ngOnInit(): void {
  }

}