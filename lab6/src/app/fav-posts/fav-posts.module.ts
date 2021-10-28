import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavPostsPageRoutingModule } from './fav-posts-routing.module';

import { FavPostsPage } from './fav-posts.page';
import { PostTableModule } from '../post-table/post-table.module';
import { FavoritePostsModule } from '../services/favorite-posts/favorite-posts.module';
import { PostCardModule } from '../post-card/post-card.module';
import { AppModule } from '../app.module';
import { ViewToggleModule } from '../view-toggle/view-toggle.module';
import { PostListModule } from '../post-list/post-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavPostsPageRoutingModule,
    PostTableModule,
    FavoritePostsModule,
    PostCardModule,
    ViewToggleModule,
    PostListModule,
  ],
  declarations: [FavPostsPage]
})
export class FavPostsPageModule {
}
