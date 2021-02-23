import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  property: {
    id: number;
    name: string;
    address: string;
    price: number;
    owner: string;
  }[] = [
    {
      id: 0,
      name: 'petite villa sur la plage',
      address: '36 rue du petit soleil',
      price: 220000,
      owner: 'Jean DUJARDIN',
    },
    {
      id: 1,
      name: 'Soleil au clair de lune',
      address: '146 avenue des 3 glands',
      price: 123000,
      owner: 'Bob RAZOWSKI',
    },
    {
      id: 2,
      name: 'T2 centre toulouse',
      address: '56 avenue François Verdier',
      price: 400000,
      owner: 'Moi',
    },
    {
      id: 3,
      name: 'Studio meublé',
      address: '17 avenue St Perdu',
      price: 220000,
      owner: 'Jean DUJARDIN',
    },
  ];

  constructor() {}
}
