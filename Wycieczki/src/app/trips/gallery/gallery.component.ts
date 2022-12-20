import { Component, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Trip } from '../../tripClass';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  @Input() trips: Trip[] = [];
  
  @Output() summaryCount: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeTrip: EventEmitter<Trip> = new EventEmitter<Trip>();

  minPrice: number = Number.MAX_SAFE_INTEGER;
  maxPrice: number = 0;

  constructor() {}

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
    this.summaryCount.emit(1);
  }

  resign(trip: Trip):void {
    trip.counter--;
    this.summaryCount.emit(-1);
  }

  getRemaining(trip: Trip):string {
    return String(trip.available - trip.counter);
  }

  remove(trip: Trip):void {
    this.summaryCount.emit(-trip.counter);
    this.removeTrip.emit(trip);
    this.updateMinMax();  
  }
    
  

}
