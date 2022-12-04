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
    this.summaryCount.emit(1);
  }

  resign(trip: Trip):void {
    trip.counter--;
    this.summaryCount.emit(-1);
  }

  getRemaining(trip: Trip):string {
    return String(trip.max - trip.counter);
  }

  remove(trip: Trip):void {
    for (let i=0 ; i < this.trips.length ; i++) {
      if (this.trips[i] == trip) {

        this.summaryCount.emit(-trip.counter);
        this.trips.splice(i, 1);
        this.updateMinMax();
        break;
        
      }
    }
  }

}
