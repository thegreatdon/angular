    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule }   from '@angular/forms';

    import { AppComponent }  from './app.component';
    import { StationDetailComponent } from './station-detail.component';
    import { StationsComponent }     from './stations.component';
    import { StationService }         from './station.service';
    @NgModule({
      imports: [
      BrowserModule,
      FormsModule
      ],
      declarations: [
        AppComponent,
        StationDetailComponent,
        StationsComponent
      ],
      providers: [
        StationService
      ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }