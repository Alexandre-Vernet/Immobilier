import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../Property.service';

@Component({
  selector: 'app-Property',
  templateUrl: './Property.component.html',
  styleUrls: ['./Property.component.scss'],
})
export class PropertyComponent implements OnInit {
  properties: any;
  solde: number = 0;

  name: string = '';
  address: string = '';
  price: number = 0;
  owner: string = '';
  description: string = '';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.properties = this.propertyService.properties;
  }

  getSolde = () => {
    // Find in array where name = person logged and some solde
  };

  addProperty = (
    name: string,
    address: string,
    price: number,
    owner: string,
    description: string
  ) => {
    // Find id for this property
    let id = this.properties.length;

    // Get property
    let property = {
      id: id,
      name: name,
      address: address,
      price: price,
      owner: owner,
      description: description,
    };

    // Add property to array
    this.properties.push(property);

    console.log(property);
  };
}
