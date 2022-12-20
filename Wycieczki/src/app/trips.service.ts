import { Injectable } from '@angular/core';
import { Trip } from './tripClass';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private db: AngularFireDatabase) { }

  getTrips() {
    return this.db.list<Trip>('/trips').valueChanges();
  }

  addTrip(trip: Trip) {
    this.db.list<Trip>('/trips').push(trip);
  }

  removeTrip(trip: Trip) {

    this.db.list<any>('/trips').snapshotChanges().subscribe(items => {
      items.forEach(item => {
        if (item.payload.val().name === trip.name) {
          this.db.list('/trips').remove(String(item.key));
        }
      });
    });
  }

  editTrip(trip: Trip, data: string) {

    this.db.list<any>('/trips').snapshotChanges().subscribe(items => {
      items.forEach(item => {
        if (item.payload.val().name === trip.name) {
          this.db.list('/trips').update(String(item.key), data );
        }
      });
    });
  }
}
