import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { UploaderComponent } from './uploader/uploader.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    UploaderComponent,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
