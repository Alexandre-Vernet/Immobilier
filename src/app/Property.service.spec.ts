/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropertyService } from './Property.service';

describe('Service: Property', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyService]
    });
  });

  it('should ...', inject([PropertyService], (service: PropertyService) => {
    expect(service).toBeTruthy();
  }));
});
