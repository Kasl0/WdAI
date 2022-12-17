import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { GalleryComponent } from './trips/gallery/gallery.component';
import { FormComponent } from './trips/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    GalleryComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
