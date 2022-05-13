import { Injectable } from '@angular/core';
import { Task } from './task';
import { ITEMS } from './tasks';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {

  private _data_url: string = "assets/data/tasks.json";

  constructor(private _http:HttpClient) { }

  // getWroklist(): Task[]{
  //   return ITEMS;
  // }

  getWorklist(): Observable<Task[]>{
    return this._http.get<Task[]>(this._data_url);
  }
}
