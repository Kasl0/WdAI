import { Component, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Trip } from '../../tripClass';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  @Input() trips: Trip[] = [];
  
  @Output() updateBasket: EventEmitter<{trip: Trip, quantity: number}> = new EventEmitter<{trip: Trip, quantity: number}>();
  @Output() removeTrip: EventEmitter<Trip> = new EventEmitter<Trip>();

  minPrice: number = Number.MAX_SAFE_INTEGER;
  maxPrice: number = 0;

  user: any;
  role: string = "guest";

  constructor(private service: UsersService) {

    this.service.getAuthState().subscribe(user => {

      this.user = user;

      if (user) {
        this.service.getUserRole(this.user.uid).subscribe(role => {
          this.role = String(role);
        });
      } 
      else {
        this.role = "guest";
      }

    });

  }

  ngOnChanges() {
    this.updateMinMax();
  }

  updateMinMax():void {
    this.minPrice = Number.MAX_SAFE_INTEGER;
    this.maxPrice = 0;

    for (let trip of this.trips) {
      this.minPrice = Math.min(this.minPrice, trip.price);
      this.maxPrice = Math.max(this.maxPrice, trip.price);
    }
  }

  reserve(trip: Trip):void {
    trip.counter++;
    this.updateBasket.emit({trip: trip, quantity: 1});
  }

  resign(trip: Trip):void {
    trip.counter--;
    this.updateBasket.emit({trip: trip, quantity: -1});
  }

  getRemaining(trip: Trip):string {
    return String(trip.available - trip.counter);
  }

  remove(trip: Trip):void {
    this.updateBasket.emit({trip: trip, quantity: -trip.counter});
    this.removeTrip.emit(trip);
    this.updateMinMax();  
  }
  
}
