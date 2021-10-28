import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../typicode/post';
import { Storage } from '@ionic/storage-angular';
import { FavoritePostsModule } from './favorite-posts.module';

@Injectable({
  providedIn: 'root'
})
export class FavoritePostsService {
  public favoritePosts$ = new BehaviorSubject<Post[]>([]);
  private favoritePosts: Post[] = [];
  private storage: Storage | null = null;

  constructor(storage: Storage) {
    this.init(storage);
  }

  public isFavorite(postToFind: Post) {
    for (const post of this.favoritePosts) {
      if (post.id === postToFind.id) {
        return true;
      }
    }
    return false;
  }

  public async addFavorite(post: Post) {
    if (!this.isFavorite(post)) {
      this.favoritePosts.push(post);
      await this.storage?.set('favorites', this.favoritePosts);
      this.favoritePosts$.next(this.favoritePosts);
    }
  }

  public async removeFavorite(post: Post) {
    this.favoritePosts = this.favoritePosts.filter(p => p.id !== post.id);
    await this.storage?.set('favorites', this.favoritePosts);
    this.favoritePosts$.next(this.favoritePosts);
  }

  private async init(storage: Storage) {
    this.storage = await storage.create();
    const favorites = await this.storage.get('favorites');
    if(favorites) {
      this.favoritePosts = favorites as Post[];
      this.favoritePosts$.next(this.favoritePosts)
    }
  }
}
