import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { GalleryComponent } from './trips/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
