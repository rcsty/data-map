export class Polygon {

  coordinates: {
    lat: number;
    lng: number;
  }[];
  color: string;
  content: string;

  private gPolygon: google.maps.Polygon;
  private clickListener: google.maps.MapsEventListener;

  constructor(coords: { lat: number; lng: number; }[], color: string, content?: string) {
    this.coordinates = coords;
    this.color = color;
    this.content = content;
  }

  getGPolygon(): google.maps.Polygon {
    if (!this.gPolygon) {
      this.gPolygon = new google.maps.Polygon({
        paths: this.coordinates,
        strokeColor: this.color,
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: this.color,
        fillOpacity: 0.35
      });
    }
    return this.gPolygon;
  }

  onClick(callback: (event: google.maps.PolyMouseEvent) => void) {
    if (this.clickListener) {
      this.clickListener.remove();
    }
    this.clickListener = this.getGPolygon().addListener('click', callback);
  }

  destroy() {
    if (this.clickListener) {
      this.clickListener.remove();
    }
    if (this.gPolygon) {
      this.getGPolygon().unbindAll();
    }
    this.gPolygon = null;
  }
}
