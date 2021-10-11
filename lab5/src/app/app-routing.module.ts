import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllWorkersTableComponent } from './components/all-workers-table/all-workers-table.component';
import { FavoriteWorkersTableComponent } from './components/favorite-workers-table/favorite-workers-table.component';

const routes = [
  { path: '', redirectTo: '/workers', pathMatch: 'full' },
  { path: 'workers', component: AllWorkersTableComponent },
  { path: 'favorite', component: FavoriteWorkersTableComponent }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
