import { Component } from '@angular/core';
import { TripsService } from '../trips.service';
import { Trip } from '../tripClass';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  counter: number = 0;
  sum: number = 0;
  tripList: Trip[] = [];

  user: any;
  role: string = "guest";

  constructor(private service: TripsService, private service2: UsersService) {

    this.service2.getAuthState().subscribe(user => {

      this.user = user;

      if (user) {
        this.service2.getUserRole(this.user.uid).subscribe(role => {
          this.role = String(role);
        });
      } 
      else {
        this.role = "guest";
      }

    });

    this.service.getTrips().subscribe(trips => {
      this.tripList = trips;

      for (let trip of this.tripList) {
        trip.counter = 0;
      }
    });

  }

  

  updateBasket(data: {trip: Trip, quantity: number}) {
    this.counter += data.quantity;
    this.sum += data.trip.price;
  }

  removeTrip(trip: Trip) {
    this.service.removeTrip(trip);
  }
}
