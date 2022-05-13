import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../tasks';
import { Task } from '../task';
import { WorklistService } from '../worklist.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //taskList = ITEMS;
  taskList: Task[] = [];
  constructor(private _workService: WorklistService) { }

  ngOnInit(): void {
    this.taskList = this._workService.getWroklist();
  }

  onClick(item: Task) {
    if(item.isComplete)
      item.isComplete = false;
    else
      item.isComplete = true;
  }

}
