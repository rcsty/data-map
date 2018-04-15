import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data/shared/data.service';
import { GMapService } from './shared/g-map.service';
import { Polygon } from './shared/polygon';
import { Region } from './shared/region';

@Component({
  selector: 'app-g-maps',
  templateUrl: './g-maps.component.html',
  styleUrls: ['./g-maps.component.scss']
})
export class GMapsComponent implements OnInit {

  @ViewChild('gmap') gMapElement: ElementRef;

  regions: Region[];

  constructor(private gMapService: GMapService, private dataService: DataService) { }

  ngOnInit() {
    // Initialize Google Maps
    this.gMapService.initialize(new google.maps.Map(this.gMapElement.nativeElement, {
      center: new google.maps.LatLng(43.6006866, 1.4390260), // Toulouse, France
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }));
    // Load data and display it on the map
    this.dataService.getRegions().subscribe(data => {
      this.regions = data;
      this.regions.forEach(region => this.gMapService.addPolygon(region.polygon, region.code));
    });
  }

  filter(min: number, max: number) {
    min = min || 0;
    max = max || 100;
    this.regions.forEach(region => {
      region.polygon.getGPolygon().setVisible(region.score >= min && region.score <= max);
    });
  }

}
