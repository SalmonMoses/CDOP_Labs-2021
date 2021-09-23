import { Component } from '@angular/core';
import { ProductEntry } from './models/ProductEntry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: ProductEntry[] = [];

  addProduct() {
    this.products.push(new ProductEntry());
  }

  get sumPrice(): number {
    if(this.products.length < 1) return 0;
    return this.products.map(entry => entry.price).reduce((acc, val) => acc + val);
  }
}
