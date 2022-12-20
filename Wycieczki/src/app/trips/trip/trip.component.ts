import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from 'src/app/trips.service';
import { Trip } from 'src/app/tripClass';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {

  name: string = "";

  tripList: Trip[] = [];

  constructor(private route: ActivatedRoute, service: TripsService) {
    this.route.params.subscribe(name => this.name = name['id']);
    service.getTrips().subscribe(trips => {
      this.tripList = trips;

      for (let trip of this.tripList) {
        trip.counter = 0;
      }
    });
  }

  reserve(trip: Trip):void {
    trip.counter++;
  }

  resign(trip: Trip):void {
    trip.counter--;
  }

  getRemaining(trip: Trip):string {
    return String(trip.available - trip.counter);
  }

}
