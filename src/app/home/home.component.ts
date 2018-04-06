import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {DataService} from '../data.service';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import 'rxjs/Rx';

// export class ActivityItem {
//   constructor(public name: string,
//               public count: string,
//               public price: string,
//               public src: string,
//               public id: string) {
//   }
// }


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

  trigger('goals', [ 
  	transition('* => *',[
  	 query(':enter', style({ opacity: 0 }), {optional: true}),	

  	 query(':enter', stagger('300ms', [
  	 	animate('.6s ease-in', keyframes([
  	 		style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
  	 		style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
  	 		style({opacity: 1, transform: 'translateY(0)', offset: 1}),

  	 		]))

  	 	]), {optional: true}),

  	 query(':leave', stagger('300ms', [
  	 	animate('.6s ease-in', keyframes([
  	 		style({opacity: 1, transform: 'translateY(0)', offset: 0}),
  	 		style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
  	 		style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),

  	 		]))

  	 	]), {optional: true})  	 

  		])
  	]),

  trigger('cartItem', [ 
    transition('* => *',[
     query(':enter', style({ opacity: 0 }), {optional: true}),  

     query(':enter', stagger('300ms', [
       animate('.6s ease-in', keyframes([
         style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
         style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
         style({opacity: 1, transform: 'translateY(0)', offset: 1}),

         ]))

       ]), {optional: true}),

     query(':leave', stagger('300ms', [
       animate('.6s ease-in', keyframes([
         style({opacity: 1, transform: 'translateY(0)', offset: 0}),
         style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
         style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),

         ]))

       ]), {optional: true})     

      ])
    ])

  ]

})



export class HomeComponent implements OnInit {

  itemCount: number;	
  cartCount: number;
  btnText: string = 'Add an Item';
  goalText: string = 'My First Life Goal';
  goals = [];
  cart = [];


  private loading: boolean = false;

  constructor(public _data: DataService) { }

  ngOnInit() {
  	this._data.goal.subscribe(res => this.goals = res);
  	this.itemCount = this.goals.length;

    this._data.cartItem.subscribe(res => this.cart = res);
    this.cartCount = this.cart.length;
    }

  	addItem() {
  		this.goals.push(this.goalText);
  		this.goalText = '';
  		this.itemCount = this.goals.length;
  		this._data.changeGoal(this.goals);
  	}

    addToCart(item) {
      this.cart.push(item);
      this.cartCount = this.cart.length;
      this._data.changeCart(this.cart);
    }

  	removeItem(i) {
  		this.goals.splice(i, 1);
  		this.itemCount = this.goals.length;
  		this._data.changeGoal(this.goals);
    }

  
  doGet() {
    this.loading = true;
    this._data.GetUserData().then(_ => this.loading = false)
    }

}
