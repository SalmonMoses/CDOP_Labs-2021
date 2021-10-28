import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../services/typicode/post';
import { FavoritePostsService } from '../services/favorite-posts/favorite-posts.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
})
export class PostTableComponent implements OnInit {
  @Input() posts: Post[] = [];

  constructor(public favoritePosts: FavoritePostsService) { }

  ngOnInit() {}

}
