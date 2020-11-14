import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Baile } from './lista-generos/Variables';

@Injectable({
  providedIn: 'root'
})


export class ServicioCarrito {

  private _favoriteList: Baile[]= [];

  favoriteList: BehaviorSubject<Baile[]> = new BehaviorSubject([]);

  constructor() { }

  agregarfavorito(lista: Baile) {
    let item:Baile = this._favoriteList.find(x => x.titulo == lista.titulo);
    if (!item){
      this._favoriteList.push({...lista});
    }
   console.log(this._favoriteList.length);
   this.favoriteList.next(this._favoriteList); //equivalente al emitt de eventos
  }
} 