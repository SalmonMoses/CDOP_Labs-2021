import { Component, OnInit } from '@angular/core';
import { TypicodeService } from '../services/typicode/typicode.service';
import { Post, PostDb } from '../services/typicode/post';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  public loading = false;
  public posts: Post[];
  public tableMode = false;

  constructor(private typicode: TypicodeService, public toastController: ToastController) {
  }

  ngOnInit() {
    this.loading = true;
    this.typicode.getPosts().pipe(
      catchError(err => {
        this.presentErrorToast(err);
        this.loading = false;
        return this.posts;
      })
    ).subscribe(posts => {
      this.loading = false;
      this.posts = posts as Post[];
    });
  }

  private async presentErrorToast(err: any) {
    const toast = await this.toastController.create({
      message: 'Failed to fetch posts',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

}
