import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ImageZoomModule} from '../../node_modules/angular2-image-zoom';
import { AppComponent }  from './app.component';
const window: any = {};
@NgModule({
  imports:      [ BrowserModule,ImageZoomModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
