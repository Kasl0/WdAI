import { Component } from '@angular/core';
import { CarInfoService } from './../car-info.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  cars;
  brands: string[] = [];
  brandSelected: string = "";
  models: string[] = [];
  modelSelected: string = "";
  interiorSelected: string = "";
  colors: string[] = [];
  colorSelected: string = "";

  constructor() {
    let service = new CarInfoService();
    this.cars = service.getCars();

    for(var car of this.cars) {
      if (!this.brands.includes(car.brand)) this.brands.push(car.brand);
    }
  }

  brandSelect(event: any):void {
    this.brandSelected = event.target.value;
    this.modelSelected = "";
    this.interiorSelected = "";
    this.models = [];
    this.colorSelected = "";
    this.colors = [];

    for(var car of this.cars) {
      if (car.brand == this.brandSelected) this.models.push(car.model);
    }
  }

  modelSelect(event: any):void {
    this.modelSelected = event.target.value;
    this.colorSelected = "";
    this.colors = [];

    for(var car of this.cars) {
      if (car.model == this.modelSelected) {
        this.interiorSelected = car.interior;

        for(var color of car.colors) {
          this.colors.push(color);
        }
      }
    }
  }

  colorSelect(event: any):void {
    this.colorSelected = event.target.value;
  }
}
