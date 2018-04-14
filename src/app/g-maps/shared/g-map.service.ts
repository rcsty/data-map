import { Injectable } from '@angular/core';
import { Polygon } from './polygon';

@Injectable()
export class GMapService {

  map: google.maps.Map;

  private polygonCollection: Polygon[];

  constructor() {
    this.polygonCollection = [];
  }

  public initialize(map) {
    this.map = map;
  }

  public addPolygon(polygon: Polygon) {
    polygon.getGPolygon().setMap(this.map);
    this.polygonCollection.push(polygon);
  }

}
