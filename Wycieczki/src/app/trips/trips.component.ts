import { Component } from '@angular/core';
import { TripsService } from '../trips.service';
import { Trip } from '../tripClass';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  counter: number = 0;
  tripList: Trip[] = [];

  constructor(private service: TripsService) {

    this.service.getTrips().subscribe(trips => {
      this.tripList = trips;

      for (let trip of this.tripList) {
        trip.counter = 0;
      }
    });
  }

  updateCounter(n: number) {
    this.counter += n;
  }

  addTrip(newTrip: Trip) {
    this.service.addTrip(newTrip);
  }

  removeTrip(trip: Trip) {
    this.service.removeTrip(trip);
  }
}
