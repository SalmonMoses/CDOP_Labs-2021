import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PersonInfo } from '../../models/PersonInfo';
import { MatDialog } from '@angular/material/dialog';
import { WorkerInfoDialog } from '../worker-info-dialog/worker-info-dialog.component';
import { FavoriteService } from '../../services/favorite.service';

interface TableRow {
  id: number,
  person: PersonInfo
}

@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.css']
})
export class WorkersTableComponent implements OnInit {

  @Input() workers: Map<number, PersonInfo> = new Map<number, PersonInfo>();
  data: TableRow[] = [];
  displayedColumns: string[] = ['id', 'name', 'education', 'salary', 'favorite', 'details'];

  constructor(public favoriteService: FavoriteService, private dialog: MatDialog) {
  }

  openDialog(row: TableRow): void {
    this.dialog.open(WorkerInfoDialog, {
      data: row
    });
  }

  addToFavorite(row: TableRow) {
    this.favoriteService.add(row.id, row.person);
  }

  removeFromFavorite(row: TableRow) {
    this.favoriteService.remove(row.id);
  }

  public ngOnInit(): void {
    this.data = Array.from(this.workers.entries()).map(entry => ({
      id: entry[0],
      person: entry[1]
    }));
  }
}
