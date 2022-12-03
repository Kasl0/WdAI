import { Injectable } from '@angular/core';
import data from './carInfo.json';

@Injectable({
  providedIn: 'root'
})
export class CarInfoService {

  constructor() { }

  getCars() {
    return data.cars;
  }
}
