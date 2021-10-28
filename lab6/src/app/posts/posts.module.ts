import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsPageRoutingModule } from './posts-routing.module';

import { PostsPage } from './posts.page';
import { TypicodeModule } from '../services/typicode/typicode.module';
import { PostTableModule } from '../post-table/post-table.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { PostCardModule } from '../post-card/post-card.module';
import { AppModule } from '../app.module';
import { ViewToggleModule } from '../view-toggle/view-toggle.module';
import { PostListModule } from '../post-list/post-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule,
    TypicodeModule,
    PostTableModule,
    IonicStorageModule,
    PostCardModule,
    ViewToggleModule,
    PostListModule
  ],
  exports: [],
  declarations: [PostsPage]
})
export class PostsPageModule {}
