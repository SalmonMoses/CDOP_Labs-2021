import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PersonInfo } from '../../models/PersonInfo';

@Component({
  selector: 'app-worker-info-dialog',
  templateUrl: './worker-info-dialog.component.html',
  styleUrls: ['./worker-info-dialog.component.css']
})
export class WorkerInfoDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<WorkerInfoDialog>, @Inject(MAT_DIALOG_DATA) public data: { id: number, person: PersonInfo }) {
  }

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
