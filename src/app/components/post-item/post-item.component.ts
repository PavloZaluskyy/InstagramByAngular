import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comments } from 'src/app/shared/interfaces/comments';
import { CommentsService } from 'src/app/shared/services/comments.service';
import { Posts } from '../../shared/interfaces/posts'

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Posts;
  @Output() idDelete = new EventEmitter<number>();


  comments: Comments[] = [];
  isLikeActive: boolean = false;
  visibleComments: boolean = false;
  isLoad: boolean = false;
  constructor(
    private commentsService: CommentsService
  ) { }


  likes(elem:any):void {
    !this.isLikeActive ? elem.likes++ : elem.likes--
    this.isLikeActive = !this.isLikeActive;
    elem.isisLikeActive = this.isLikeActive;
  }

  deletePost(increased:any){
    this.idDelete.emit(increased);
  }

  public toggleAllComments(): void {
    this.visibleComments = !this.visibleComments;
  }

  ngOnInit(): void {
    this.commentsService.getComments(this.post.id)
      .subscribe(data => { 
        this.isLoad = true;
        this.comments = data; console.log(this.comments);
    })
  }

}
