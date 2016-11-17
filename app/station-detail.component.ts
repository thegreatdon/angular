import { Component, Input } from '@angular/core';
@Component({
  selector: 'my-station-detail',
   template: `
    <div *ngIf="station">
      <h2>{{station.name}} details</h2>
      <div><label>id: </label>{{station.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="station.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class StationDetailComponent {
  @Input()
  station: Station;
}