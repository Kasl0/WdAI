import { Injectable } from '@angular/core';
import data from './topics.json';

@Injectable({
  providedIn: 'root'
})
export class LoadTopicsService {

  constructor() { }

  getTopics() {
    return data.topics;
  }
}
