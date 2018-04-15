import { Injectable, OnDestroy } from '@angular/core';
import { Polygon } from './polygon';

@Injectable()
export class GMapService implements OnDestroy {

  map: google.maps.Map;

  private polygonCollection: Polygon[];
  private openedInfoWindow: google.maps.InfoWindow;

  constructor() {
    this.polygonCollection = [];
  }

  public initialize(map: google.maps.Map) {
    this.map = map;
  }

  public addPolygon(polygon: Polygon, infoWindow?: string) {
    polygon.getGPolygon().setMap(this.map);
    if(polygon.content) {
      polygon.onClick(event => this.openInfoWindow(event.latLng, polygon.content));
    }
    this.polygonCollection.push(polygon);
  }

  private openInfoWindow(position: google.maps.LatLng, text: string) {
    if(this.openedInfoWindow) {
      this.openedInfoWindow.close();
    } 
    this.openedInfoWindow = new google.maps.InfoWindow({
      content: text,
      position: position
    })
    this.openedInfoWindow.open(this.map);
  }

  ngOnDestroy() {
    this.polygonCollection.forEach(polygon => {
      polygon.destroy();
    });
  }

}
