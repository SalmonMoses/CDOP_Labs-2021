import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ViewToggleComponent } from './view-toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewToggleComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [ViewToggleComponent]
})
export class ViewToggleModule {}
