import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GMapService } from './shared/g-map.service';
import { Polygon } from './shared/polygon';

@Component({
  selector: 'app-g-maps',
  templateUrl: './g-maps.component.html',
  styleUrls: ['./g-maps.component.scss']
})
export class GMapsComponent implements OnInit {

  @ViewChild('gmap') gMapElement: ElementRef;

  constructor(private gMapService: GMapService) { }

  ngOnInit() {
    this.gMapService.initialize(new google.maps.Map(this.gMapElement.nativeElement, {
      center: new google.maps.LatLng(43.6006866, 1.4390260), // Toulouse, France
      zoom: 12.5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }));
    this.gMapService.addPolygon(new Polygon([
      {lat: 43.590, lng: 1.439},
      {lat: 43.600, lng: 1.449},
      {lat: 43.610, lng: 1.429}
    ], '#FF0000'));
  }

}
