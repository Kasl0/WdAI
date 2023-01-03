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

  minPrice: number = Number.MAX_SAFE_INTEGER;
  maxPrice: number = 0;

  user: any;

  constructor(private service: UsersService) {

    this.service.getAuthState().subscribe(user => {

      if (user) {
        this.service.getUser(user.uid).subscribe(userInfo => {
          this.user = userInfo;
        });
      } 
      else {
        this.user = {username: "", role: "guest"};
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
  
}
