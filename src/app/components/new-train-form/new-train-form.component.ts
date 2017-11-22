import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Train} from '../../interfaces/train';
import {TrainService} from '../../services/train.service';

@Component({
  selector: 'app-new-train-form',
  templateUrl: './new-train-form.component.html',
  styleUrls: ['./new-train-form.component.css']
})
export class NewTrainFormComponent implements OnInit {
  newTrain: Train;
  submitted = false;
  @Output() eventEmitter: EventEmitter<Train> = new EventEmitter();

  constructor(public service: TrainService){ }

  ngOnInit() {
    this.newTrain =  {
      numTrain: 0,
      villeDepart: '',
      villeArrivee: '',
      heureDepart: 0
    };
  }

  onSubmit() {
    this.submitted = true;
    this.service.createTrain(this.newTrain)
      .subscribe(response => this.eventEmitter.emit(this.newTrain));
  }


}
