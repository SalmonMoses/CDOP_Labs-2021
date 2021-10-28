import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-toggle',
  templateUrl: './view-toggle.component.html',
  styleUrls: ['./view-toggle.component.scss'],
})
export class ViewToggleComponent {
  @Input() tableMode!: boolean;
  @Output() tableModeChange = new EventEmitter<boolean>();

  constructor() {
  }

  setMode(mode: boolean) {
    // this.tableMode = mode;
    this.tableModeChange.emit(mode);
  }

}
