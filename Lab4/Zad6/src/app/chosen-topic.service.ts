import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChosenTopicService {
  private messageSource = new BehaviorSubject("");
  title = this.messageSource.asObservable();

  private messageSource2 = new BehaviorSubject("");
  description = this.messageSource2.asObservable();

  constructor() { }

  changeTitle(newTitle: string) {
    this.messageSource.next(newTitle)
  }
  changeDescription(newDescription: string) {
    this.messageSource2.next(newDescription)
  }
}
