import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of as ObservableOf } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
import { Region } from '../../g-maps/shared/region';
import { MapperService } from './mapper.service';

const MOCK_REGIONS: {
  id: number;
  code: string;
  polygon: number[][];
}[] = require('./mocks/regions.json');

@Injectable()
export class DataService {

  private BACKEND_URL = 'http://localhost:5000';

  constructor(private http: HttpClient, private mapperService: MapperService) { }

  getRegions(): Observable<Region[]> {
    return this.http.get(this.BACKEND_URL + '/map')
    .pipe(catchError((err, caught) => ObservableOf(MOCK_REGIONS)))
    .pipe(
      map((data: {
        id: number;
        code: string;
        polygon: number[][];
      }[]) => this.mapperService.mapRegions(data))
    );
  }

}
