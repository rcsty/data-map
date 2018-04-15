import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './shared/data.service';
import { MapperService } from './shared/mapper.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [DataService, MapperService]
})
export class DataModule { }
