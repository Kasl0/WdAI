import { Component } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  counter: number = 0;

  updateCounter(n: number) {
    this.counter += n;
  }
}
