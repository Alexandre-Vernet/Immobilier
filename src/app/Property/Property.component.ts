import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../Property.service';

@Component({
  selector: 'app-Property',
  templateUrl: './Property.component.html',
  styleUrls: ['./Property.component.scss'],
})
export class PropertyComponent implements OnInit {
  properties: any = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.properties = this.propertyService.properties;
  }
}
