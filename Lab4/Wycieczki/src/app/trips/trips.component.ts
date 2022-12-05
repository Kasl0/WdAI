import { Component } from '@angular/core';
import { LoadTripsService } from '../load-trips.service';
import { Trip } from '../tripClass';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  counter: number = 0;
  tripList: Trip[];

  constructor(service: LoadTripsService) {
    this.tripList = service.getTrips();
  }

  updateCounter(n: number) {
    this.counter += n;
  }

  addTrip(newTrip: Trip) {
    this.tripList.push(newTrip);
  }
}
