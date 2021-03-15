import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Posts } from '../../shared/interfaces/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Posts[]; 
  isLoad: boolean = false; 

  constructor(
    private postsService: PostsService
  ) { }

  deletePost(increased:any){
    this.posts = this.posts.filter(post => post.id !== increased)
  }

  ngOnInit(): void {
      setTimeout(()=>{
        this.postsService.getPosts()
        .subscribe(data => {
          this.isLoad = true;
          this.posts = data;
        })
      }, 500)
    }

}
