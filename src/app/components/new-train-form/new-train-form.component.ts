import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Train} from '../../interfaces/train';
import {TrainService} from '../../services/train.service';
import {TrainsComponent} from '../trains/trains.component';

@Component({
  selector: 'app-new-train-form',
  templateUrl: './new-train-form.component.html',
  styleUrls: ['./new-train-form.component.css']
})
export class NewTrainFormComponent implements OnInit {
  newTrain: Train;
  @Input() notSubmitted: boolean;
  @Output() eventEmitter: EventEmitter<Train> = new EventEmitter();
  @Output() submitChange = new EventEmitter();


  constructor(public service: TrainService, public trainComponent: TrainsComponent) { }

  ngOnInit() {
    this.newTrain =  {
      villeDepart: '',
      villeArrivee: '',
      heureDepart: 0
    };
  }

  onSubmit() {
    this.notSubmitted = false;
    this.submitChange.emit({value: this.notSubmitted});
    this.service.createTrain(this.newTrain)
      .subscribe(response => this.eventEmitter.emit(this.newTrain));
  }
}
