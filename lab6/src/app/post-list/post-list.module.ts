import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { IonicModule } from '@ionic/angular';
import { PostCardModule } from '../post-card/post-card.module';



@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    IonicModule,
    PostCardModule
  ],
  exports: [PostListComponent]
})
export class PostListModule { }
