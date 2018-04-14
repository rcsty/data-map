import { Injectable } from '@angular/core';

@Injectable()
export class GMapService {

  map: google.maps.Map;

  constructor() { }

  public initialize(map) {
    this.map = map;
  }

}
