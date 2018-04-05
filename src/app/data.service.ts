import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { NgModule } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/Rx';

export class ActivityItem {
  constructor(public name: string,
              public count: string,
              public price: string,
              public src: string,
              public id: string) {
  }
}

@Injectable()


export class DataService {



  apiRoot: string = "assets/users.json";
  ActivityItem = [];
  results: ActivityItem[];
  loading: boolean;
  
  private goals = new BehaviorSubject<any>(['Watch El Clasico at the Bernabeu', 'Do Nothing for a year', 'Play Comptne DUntre to perfection']);

  private cart = new BehaviorSubject<any>([]);

  goal = this.goals.asObservable();
  
  cartItem = this.cart.asObservable();

  constructor(private http: Http) {
  	this.results = [];
  	this.loading = false;
   }

  changeGoal(goal) {
  	this.goals.next(goal);
  }

   changeCart(cartItem) {
  	this.cart.next(cartItem);
  }


GetUserData() {

	let promise = new Promise((resolve, reject) => {
    let url = `${this.apiRoot}`;
  	this.http.get(url)
    .toPromise()
       .then(
        res => { // Success
        this.results = res.json();
        this.ActivityItem = this.results;
        return    this.ActivityItem;
        },
        msg => { // Error
        reject(msg);
        }
        );
     });
  return promise;
}

}





