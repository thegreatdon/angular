import { Injectable } from '@angular/core';
import { Station } from './station';
import { STATIONS } from './mock-stations';
@Injectable()
export class StationService {
  getStations(): Promise<Station[]> {
    return Promise.resolve(STATIONS);
  }

getStationsSlowly(): Promise<Station[]> {
  return new Promise<Station[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getStations());
}

}