import { Injectable } from '@angular/core';
import { Trip } from './tripClass';
import data from './tripList.json';

@Injectable({
  providedIn: 'root'
})
export class LoadTripsService {

  constructor() { }

  getTrips() {
    let trips: Trip[] = [];

    for (let i = 0; i < data.trips.length; i++) {

      let newTrip: Trip = new Trip(
        data.trips[i].name,
        data.trips[i].country,
        data.trips[i].start,
        data.trips[i].end,
        Number(data.trips[i].price),
        data.trips[i].currency,
        Number(data.trips[i].max),
        data.trips[i].description,
        data.trips[i].link);

      trips.push(newTrip);
    }

    return trips;
  }
}
