import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PersonInfo } from '../../models/PersonInfo';
import { PiplirService } from '../../services/piplir.service';
import { MatDialog } from '@angular/material/dialog';
import { WorkerInfoDialog } from '../worker-info-dialog/worker-info-dialog.component';

@Component({
  selector: 'app-worker-table',
  templateUrl: './all-workers-table.component.html',
  styleUrls: ['./all-workers-table.component.css']
})
export class AllWorkersTableComponent implements OnInit {
  people: Map<number, PersonInfo> = new Map<number, PersonInfo>();
  isLoading: boolean = false;

  constructor(public piplirService: PiplirService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getWorkers();
  }


  private getWorkers(): void {
    this.isLoading = true;
    this.piplirService.getPeople(10).subscribe(people => {
      this.people = people;
      this.isLoading = false;
    });
  }
}
