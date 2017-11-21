import { Injectable } from '@angular/core';
import {Train} from './train';
import {Observable} from 'rxjs/Observable';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TrainService {

  private baseUrl: string = 'http://localhost:8080/tuto-jaxrs-mbarron-web-0.0.1-SNAPSHOT/api/trains';

  constructor(private http: Http) { }

  getTrains(): Observable<Train[]> {
    return this.http.get(`${this.baseUrl}`).map(response => response.json());
  }

}
