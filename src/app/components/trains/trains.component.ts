import { Component, OnInit } from '@angular/core';
import {TrainService} from '../../services/train.service';
import {Train} from '../../interfaces/train';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  trains: Train[] = [];
  selectedTrain: Train;
  isNewTrain: boolean;

  constructor(private trainService: TrainService) {}

  getTrains(): void {
    this.trainService.getTrains()
      .subscribe(trains => this.trains = trains);
  }

  ngOnInit(): void {
    this.getTrains();
  }

  onSelect(train: Train): void {
    this.selectedTrain = train;
  }

  displayNewTrainForm(): void {
    this.isNewTrain = true;
  }

  mySubmitValueChange(event) {
    this.isNewTrain = event.value;
    this.getTrains();
  }

}
