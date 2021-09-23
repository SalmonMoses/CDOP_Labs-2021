import { Component, OnInit } from '@angular/core';
import { NumberEntry } from '../../models/NumberEntry';

@Component({
  selector: 'app-array-input',
  templateUrl: './array-input.component.html',
  styleUrls: ['./array-input.component.css']
})
export class ArrayInputComponent {

  numbers: NumberEntry[] = [];

  constructor() {
  }

  addNumber() {
    this.numbers.push({ value: 0 });
  }

  deleteNumber(index: number) {
    if (index >= 0 && index < this.numbers.length) {
      this.numbers.splice(index, 1);
    }
  }

}
