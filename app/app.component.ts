import { Component } from '@angular/core';
export class Station {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{call_letter.name}} details!</h2>
    <div><label>id: </label>{{call_letter.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="call_letter.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
  title = 'NPR Stations';
  call_letter : Station = {
    id: 1,
    name: 'WAMU-FM'
  };
}
