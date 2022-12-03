import { Component} from '@angular/core';
import { LoadTopicsService } from '../load-topics.service';
import { ChosenTopicService } from '../chosen-topic.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  topics;
  service;

  constructor(service: ChosenTopicService) {
    this.service = service;

    let service2 = new LoadTopicsService();
    this.topics = service2.getTopics();
  }

  chooseTopic(event:any) {
    this.service.changeTitle(event.target.title);
    this.service.changeDescription(event.target.value);
  }

}
