import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GMapService } from './shared/g-map.service';

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
      center: new google.maps.LatLng(43.6006866, 1.439026), // Toulouse, France
      zoom: 12.5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }));
  }

}
