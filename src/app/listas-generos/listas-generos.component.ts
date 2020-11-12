import { Component, OnInit } from '@angular/core';
import { Baile } from './variables';

@Component({
  selector: 'app-listas-generos',
  templateUrl: './listas-generos.component.html',
  styleUrls: ['./listas-generos.component.scss']
})
export class ListasGenerosComponent implements OnInit {

  anio: number;

  constructor() {

    this.anio = new Date().getFullYear();

  }


  series: Baile[] = [
    {
      titulo: 'Stranger Things',
      genero: 'Drama, Misterio, Ciencia Ficcion',
      anio: 2016,
      plataforma: 'Netflix',
      image: 'assets/img/str-1.jpg',
      disponible: 'si ',

    },
    {
      titulo: 'Ozark',
      genero: 'Drama, Suspenso',
      anio: 2017,
      plataforma: 'Netflix',
      image: 'assets/img/oz-1.jpg',
      disponible: 'si',

    },
    {
      titulo: 'Game of Thrones',
      genero: 'Aventura, Drama',
      anio: 2022,
      plataforma: 'Hbo',
      image: 'assets/img/gm-1.jpg',
      disponible: 'si',

    }
  ];

  ngOnInit(): void {
  }

}