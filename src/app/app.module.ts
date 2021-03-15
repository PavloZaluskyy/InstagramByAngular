import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPostsComponent,
    PostsListComponent,
    FooterComponent,
    PostItemComponent,
    CommentItemComponent,
    LoaderComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
