import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { PersonInfo } from '../../models/PersonInfo';

@Component({
  selector: 'app-favorite-workers-table',
  templateUrl: './favorite-workers-table.component.html',
  styleUrls: ['./favorite-workers-table.component.css']
})
export class FavoriteWorkersTableComponent implements OnInit {

  favoriteWorkers: Map<number, PersonInfo> = new Map<number, PersonInfo>();

  constructor(public favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteWorkers = this.favoriteService.getFavorites();
  }

}
