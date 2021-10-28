import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostTableComponent } from './post-table.component';
import { FavoritePostsModule } from '../services/favorite-posts/favorite-posts.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PostTableComponent],
  exports: [PostTableComponent],
  imports: [
    CommonModule,
    IonicModule,
    FavoritePostsModule
  ]
})
export class PostTableModule {
}
