import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './components/app.component';
import { TrainsComponent } from './components/trains/trains.component';
import {TrainService} from './services/train.service';
import { NewTrainFormComponent } from './components/new-train-form/new-train-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TrainsComponent,
    NewTrainFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
