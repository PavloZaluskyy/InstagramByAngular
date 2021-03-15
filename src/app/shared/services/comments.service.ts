import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../interfaces/comments'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'https://jsonplaceholder.typicode.com/comments?postId=';

  constructor( private http: HttpClient ) { }

  getComments(postId):Observable<Comments[]>{
    return this.http.get<Comments[]>(this.url+postId);
  }
}
