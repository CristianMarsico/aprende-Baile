import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Baile } from './lista-generos/Variables';

@Injectable({
  providedIn: 'root'
})


export class ServicioCarrito {

  constructor() { }

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

  private _favoriteList: Baile[] = [];

  favoriteList: BehaviorSubject<Baile[]> = new BehaviorSubject([]);


  agregarfavorito(lista: Baile) {

    let item: Baile = this._favoriteList.find(x => x.titulo == lista.titulo);
    if (!item) {
      this._favoriteList.push({ ...lista });
    }
    console.log(this._favoriteList.length);
    this.favoriteList.next(this._favoriteList); //equivalente al emitt de eventos

  }
  getBaile(idx: string) {
    return this.general[idx];
  }
} 