import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TrainsComponent } from './trains/trains.component';
import {TrainService} from './train.service';

@NgModule({
  declarations: [
    AppComponent,
    TrainsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
