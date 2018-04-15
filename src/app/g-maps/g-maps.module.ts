import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GMapsComponent } from './g-maps.component';
import { GMapService } from './shared/g-map.service';
import { HttpClientModule } from '@angular/common/http';
import { DataModule } from '../data/data.module';

@NgModule({
  imports: [
    CommonModule,
    DataModule
  ],
  providers: [GMapService],
  declarations: [GMapsComponent],
  exports: [GMapsComponent]
})
export class GMapsModule { }
