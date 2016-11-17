    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule }   from '@angular/forms';
    import { AppComponent }  from './app.component';
    import { StationDetailComponent } from './station-detail.component';
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        StationDetailComponent
      ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }