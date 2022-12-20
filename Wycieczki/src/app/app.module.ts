import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { GalleryComponent } from './trips/gallery/gallery.component';
import { FormComponent } from './trips/form/form.component';
import { BasketComponent } from './trips/basket/basket.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './trips/history/history.component';
import { TripComponent } from './trips/trip/trip.component';

const firebaseConfig = {
  apiKey: "AIzaSyB6DKPN-YOc4JAV8wBflHATJNlubc29eQ8",
  authDomain: "wycieczki-ebaf6.firebaseapp.com",
  databaseURL: "https://wycieczki-ebaf6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wycieczki-ebaf6",
  storageBucket: "wycieczki-ebaf6.appspot.com",
  messagingSenderId: "1090743979826",
  appId: "1:1090743979826:web:a52acdcb8f31cc2845512b"
};

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    GalleryComponent,
    FormComponent,
    BasketComponent,
    PageNotFoundComponent,
    HomeComponent,
    HistoryComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, 'Wycieczki'),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
