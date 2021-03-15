import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../interfaces/posts'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://5b27755162e42b0014915662.mockapi.io/api/v1/posts';
  constructor( private http: HttpClient ) { }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url);
  }
}
