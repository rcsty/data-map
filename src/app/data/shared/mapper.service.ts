import { Injectable } from '@angular/core';
import { Region } from '../../g-maps/shared/region';
import { Polygon } from '../../g-maps/shared/polygon';

@Injectable()
export class MapperService {

  constructor() { }

  mapRegions(raw: {
    id: number;
    code: string;
    polygon: number[][];
  }[]): Region[] {
    return raw.map(region => {
      const MOCK_SCORE = Math.round(Math.random()*100); // TODO: Remove when mocked data will be fully ready
      return {
        id: region.id,
        code: region.code,
        score: MOCK_SCORE,
        polygon: new Polygon(
          region.polygon.map(coord => { return { lat: coord[0], lng: coord[1] }; }),
          this.setColorFromScore(MOCK_SCORE),
          `${region.code} - Score: ${MOCK_SCORE}/100`
        )
      }
    });
  }

  // TODO: Remove when mocked data will be fully ready
  private setColorFromScore(score: number): string {
    return [
      '#f44336',
      '#ff5722',
      '#ff9800',
      '#cddc39',
      '#4caf50'
    ][Math.floor(score * 5 / 100)];
  }

}
