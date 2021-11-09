import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {
  private postsCache: Post[] = [];

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    if (this.postsCache.length > 0) {
      return of(this.postsCache);
    } else {
      return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts').pipe(
        tap(posts => this.postsCache = posts),
        map(posts => this.postsCache)
      );
    }
  }
}
