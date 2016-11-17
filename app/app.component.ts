import { Component } from '@angular/core';
export class Station {
  id: number;
  name: string;
}
const STATIONS: Station[] = [
  { id: 11, name: 'WAMU-FM' },
  { id: 12, name: 'WBUR-FM' },
  { id: 13, name: 'KACU-FM' }

];
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>NPRStations</h2>
    <div id="pgecnt">
      <div id="left">
        <ul class="stations">
          <li *ngFor="let station of stations"
            [class.selected]="station === selectedStation"
            (click)="onSelect(station)">
            <span class="badge">{{station.id}}</span> {{station.name}}
          </li>
        </ul>
      </div>
      <div id='right'>
        <div *ngIf="selectedStation">
          <h2>{{selectedStation.name}} details</h2>
          <div><label>id: </label>{{selectedStation.id}}</div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="selectedStation.name" placeholder="name"/>
          </div>
        </div>
      </div>
  </div>
  `,
  styles: [`
    #pgecnt{width:600px;}
    #right {float:right;}
    #left {float:left;}
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .stations {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .stations li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .stations li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .stations li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .stations .text {
      position: relative;
      top: -3px;
    }
    .stations .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'NPRStations';
  stations = STATIONS;
  selectedStation: Station;

  onSelect(station: Station): void {
    this.selectedStation = station;
  }
  
}