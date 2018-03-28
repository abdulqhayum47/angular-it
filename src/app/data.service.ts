import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';



@Injectable()
export class DataService {
  
  private goals = new BehaviorSubject<any>(['Watch El Clasico at the Bernabeu', 'Do Nothing for a year', 'Play Comptne DUntre to perfection']);
  goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal) {
  	this.goals.next(goal);
  }

}
