import { WorklistService } from './worklist.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PlaceholderService } from './placeholder.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WorklistService, PlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
