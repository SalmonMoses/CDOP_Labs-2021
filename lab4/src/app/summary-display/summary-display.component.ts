import { Component, Input, OnInit } from '@angular/core';
import { NumberEntry } from '../../models/NumberEntry';

@Component({
  selector: 'app-summary-display',
  templateUrl: './summary-display.component.html',
  styleUrls: ['./summary-display.component.css']
})
export class SummaryDisplayComponent {
  @Input() numberArray: NumberEntry[] = [];

  constructor() {
  }

  get maxNumber(): number {
    if (this.numberArray.length < 1) return 0;
    let max = this.numberArray[0].value;
    for (let i = 1; i < this.numberArray.length; ++i) {
      if (this.numberArray[i].value > max) {
        max = this.numberArray[i].value;
      }
    }
    return max;
  }

  get minNumber(): number {
    if (this.numberArray.length < 1) return 0;
    let min = this.numberArray[0].value;
    for (let i = 1; i < this.numberArray.length; ++i) {
      if (this.numberArray[i].value < min) {
        min = this.numberArray[i].value;
      }
    }
    return min;
  }

  get arithmeticMean(): number {
    return (this.minNumber + this.maxNumber) / 2;
  }

  get geometricMean(): number {
    return Math.sqrt(this.minNumber * this.maxNumber);
  }
}
