import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../Property.service';

@Component({
  selector: 'app-Property',
  templateUrl: './Property.component.html',
  styleUrls: ['./Property.component.scss'],
})
export class PropertyComponent implements OnInit {
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
      owner: 'Jean DUJARDIN',
      description:
        'Appartement avec balcon, vue sur la mer, quartier calme et agréable',
    },
    {
      id: 1,
      name: 'Soleil au clair de lune',
      address: '146 avenue des 3 glands',
      price: 123000,
      owner: 'Bob RAZOWSKI',
      description:
        'Appartement avec balcon, vue sur la mer, quartier calme et agréable',
    },
    {
      id: 2,
      name: 'T2 centre toulouse',
      address: '56 avenue François Verdier',
      price: 400000,
      owner: 'Moi',
      description:
        'Appartement avec balcon, vue sur la mer, quartier calme et agréable',
    },
    {
      id: 3,
      name: 'Studio meublé',
      address: '17 avenue St Perdu',
      price: 220000,
      owner: 'Jean DUJARDIN',
      description:
        'Appartement avec balcon, vue sur la mer, quartier calme et agréable',
    },
  ];

  constructor(private propertyService: PropertyService) {
    // this.properties = this.propertyService;
  }

  ngOnInit() {}
}
