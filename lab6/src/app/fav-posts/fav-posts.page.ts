import { Component, OnInit } from '@angular/core';
import { FavoritePostsService } from '../services/favorite-posts/favorite-posts.service';
import { Post } from '../services/typicode/post';

@Component({
  selector: 'app-fav-posts',
  templateUrl: './fav-posts.page.html',
  styleUrls: ['./fav-posts.page.scss'],
})
export class FavPostsPage implements OnInit {
  public posts: Post[] = [];
  public tableMode = false;

  constructor(public favoriteService: FavoritePostsService) {
  }

  ngOnInit() {
    this.favoriteService.favoritePosts$.subscribe(posts => this.posts = posts);
  }

}
