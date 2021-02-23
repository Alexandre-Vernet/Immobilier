import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  properties: {
    id: number;
    name: string;
    address: string;
    price: number;
    owner: string;
    description: string;
  }[] = [
    {
      id: 0,
      name: 'efef',
      address: '36 rue du petit soleil',
      price: 220000,
      owner: 'Alex',
      description:
        'Appartement avec balcon, vue sur la mer, quartier calme et agréable',
    },
    {
      id: 1,
      name: 'Soleil au clair de lune',
      address: '146 avenue des 3 glands',
      price: 123000,
      owner: 'Bob RAZOWSKI',
      description: 'Petit appartement en résidence avec piscine',
    },
    {
      id: 2,
      name: 'T2 centre toulouse',
      address: '56 avenue François Verdier',
      price: 400000,
      owner: 'Alex',
      description: 'Appartement plein coeur de toulouse, métro B à proximité',
    },
    {
      id: 3,
      name: 'Studio entièrement meublé',
      address: '17 avenue St Perdu',
      price: 220000,
      owner: 'Jean DUJARDIN',
      description: 'Studio éloigné de la ville',
    },
    {
      id: 4,
      name: 'Studio pas cher meublé',
      address: '136 rue de la Paix',
      price: 450000,
      owner: 'Jean DUJARDIN',
      description: 'Appartement bruyant, chiant, cher',
    },
    {
      id: 5,
      name: 'Villa luxueuse',
      address: '136 rue de la Paix',
      price: 450000,
      owner: 'Jean DUJARDIN',
      description: 'Appartement bruyant, chiant, cher',
    },
  ];

  constructor() {}
}
