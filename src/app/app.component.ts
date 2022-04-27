import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ToDo List';
  targetDate = new Date(2022,3,28).toLocaleDateString();
  getDate() {return new Date().toLocaleDateString();}
  getTime() {return new Date().toLocaleTimeString();}
}
