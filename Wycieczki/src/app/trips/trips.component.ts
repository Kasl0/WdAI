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

  constructor(private service: TripsService, private service2: UsersService) {

    this.service2.getAuthState().subscribe(user => {

      if (user) {
        this.service2.getUser(user.uid).subscribe(userInfo => {
          this.user = userInfo;
        });
      } 
      else {
        this.user = {username: "", role: "guest"};
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
    if (data.quantity > 0) this.sum += data.trip.price;
    else this.sum -= data.trip.price;
  }
}
