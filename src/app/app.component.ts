import { Component } from '@angular/core';
import { Task } from './task';
import {ITEMS} from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ToDo List';
  targetDate = new Date(2022,3,28);
  //taskList = ITEMS;
  getDate() {return new Date().toLocaleDateString();}
  getTime() {return new Date().toLocaleTimeString();}

  // onClick(item: Task) {
  //   if(item.isComplete)
  //     item.isComplete = false;
  //   else
  //     item.isComplete = true;
  // }
}

