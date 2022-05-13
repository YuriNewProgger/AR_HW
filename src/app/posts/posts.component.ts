import { PlaceholderService } from './../placeholder.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userList: User[] = [];
  
  constructor(private _postsService: PlaceholderService) { }

  ngOnInit(): void {
    this._postsService.getUsers().subscribe(data => this.userList = data);
  }


}
