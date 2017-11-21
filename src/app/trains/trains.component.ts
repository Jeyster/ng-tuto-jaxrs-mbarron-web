import { Component, OnInit } from '@angular/core';
import {TrainService} from '../train.service';
import {Train} from '../train';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  trains: Train[] = [];

  constructor(private trainService: TrainService) {}

  getTrains(): void {
    this.trainService.getTrains()
      .subscribe(trains => this.trains = trains);
  }

  ngOnInit(): void {
    this.getTrains();
  }
}
