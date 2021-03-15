import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  err:boolean = false
  comment:string ='';
  @Output() newComment = new EventEmitter<string>();

  constructor() { }
  send(){
    if(this.comment.trim()){
      this.newComment.emit(this.comment);
      this.err = false;
    }else{
      this.err = true;
    }
    this.comment='';
  }
  ngOnInit(): void {
  }

}
