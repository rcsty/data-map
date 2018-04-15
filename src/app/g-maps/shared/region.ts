import { Polygon } from './polygon';

export class Region {
  id: number;
  code: string;
  score: number; // Score out of 100
  polygon: Polygon;
}
