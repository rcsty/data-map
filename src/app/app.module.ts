import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GMapsModule } from './g-maps/g-maps.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
