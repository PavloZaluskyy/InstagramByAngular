import { Input, Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/shared/interfaces/comments';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment: Comments;
  @Input() index: number;
  @Input() visibleComments: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
