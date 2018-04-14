export class Polygon {

  coordinates: {
    lat: number;
    lng: number;
  }[];
  color: string;

  private gPolygon: google.maps.Polygon;

  constructor(coords: { lat: number; lng: number; }[], color: string) {
    this.coordinates = coords;
    this.color = color;
  }

  getGPolygon(): google.maps.Polygon {
    if (!this.gPolygon) {
      this.gPolygon = new google.maps.Polygon({
        paths: this.coordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
    }
    return this.gPolygon;
  }
}
