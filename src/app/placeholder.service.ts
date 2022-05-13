import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './posts/user';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private _data_url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this._http.get<User[]>(this._data_url);
  }
}
