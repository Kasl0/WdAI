import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  @Input() counter: number = 0;
  @Input() sum: number = 0;
}
