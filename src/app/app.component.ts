import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Component({
  selector: 'life-goal',
  template: `<div class="col">
    <p class="life-container" *ngFor="let goal of goals; let i=index"  (click)= "removeItem(i)"> 
      {{ goal }}
    </p>
  </div> `
})

export class AppComponent {
  title = 'app';
}


export class LifeGoalsComponent  {
  goals = [];
  constructor() {
    this.goals = ['Watch El Clasico at the Bernabeu', 'Do Nothing for a year', 'Play Comptne DUntre to perfection']
  }
}

