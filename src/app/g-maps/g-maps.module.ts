import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GMapsComponent } from './g-maps.component';
import { GMapService } from './shared/g-map.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GMapService],
  declarations: [GMapsComponent],
  exports: [GMapsComponent]
})
export class GMapsModule { }
