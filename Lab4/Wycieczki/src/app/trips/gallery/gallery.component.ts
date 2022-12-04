import { Component, EventEmitter, Output } from '@angular/core';
import { LoadTripsService } from '../../load-trips.service';
import { Trip } from '../../tripClass';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  trips: Trip[];
  minPrice: number = Number.MAX_SAFE_INTEGER;
  maxPrice: number = 0;

  @Output() summaryCount: EventEmitter<number> = new EventEmitter<number>();

  constructor(service: LoadTripsService) {
    this.trips = service.getTrips();

    for (let trip of this.trips) {
      this.minPrice = Math.min(this.minPrice, trip.price);
      this.maxPrice = Math.max(this.maxPrice, trip.price);
    }
  }

  reserve(trip: Trip, event: any):void {
    trip.counter++;
    this.summaryCount.emit(1);
  }

  resign(trip: Trip, event: any):void {
    trip.counter--;
    this.summaryCount.emit(-1);
  }

  getRemaining(trip: Trip):string {
    return String(trip.max - trip.counter);
  }

}
