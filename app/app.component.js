"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Station = (function () {
    function Station() {
    }
    return Station;
}());
exports.Station = Station;
var STATIONS = [
    { id: 11, name: 'WAMU-FM' },
    { id: 12, name: 'WBUR-FM' },
    { id: 13, name: 'KACU-FM' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'NPRStations';
        this.stations = STATIONS;
    }
    AppComponent.prototype.onSelect = function (station) {
        this.selectedStation = station;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>NPRStations</h2>\n    <div id=\"pgecnt\">\n      <div id=\"left\">\n        <ul class=\"stations\">\n          <li *ngFor=\"let station of stations\"\n            [class.selected]=\"station === selectedStation\"\n            (click)=\"onSelect(station)\">\n            <span class=\"badge\">{{station.id}}</span> {{station.name}}\n          </li>\n        </ul>\n      </div>\n      <div id='right'>\n        <div *ngIf=\"selectedStation\">\n          <h2>{{selectedStation.name}} details</h2>\n          <div><label>id: </label>{{selectedStation.id}}</div>\n          <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"selectedStation.name\" placeholder=\"name\"/>\n          </div>\n        </div>\n      </div>\n  </div>\n  ",
            styles: ["\n    #pgecnt{width:600px;}\n    #right {float:right;}\n    #left {float:left;}\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .stations {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .stations li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .stations li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .stations li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .stations .text {\n      position: relative;\n      top: -3px;\n    }\n    .stations .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map