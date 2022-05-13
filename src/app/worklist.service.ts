import { Injectable } from '@angular/core';
import { Task } from './task';
import { ITEMS } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {

  constructor() { }

  getWroklist(): Task[]{
    return ITEMS;
  }
}
