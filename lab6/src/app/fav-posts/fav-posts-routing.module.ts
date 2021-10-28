import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavPostsPage } from './fav-posts.page';

const routes: Routes = [
  {
    path: '',
    component: FavPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavPostsPageRoutingModule {}
