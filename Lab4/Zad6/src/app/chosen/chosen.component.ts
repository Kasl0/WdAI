import { Component} from '@angular/core';
import { ChosenTopicService } from '../chosen-topic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chosen',
  templateUrl: './chosen.component.html',
  styleUrls: ['./chosen.component.css']
})
export class ChosenComponent {
  title:string = "";
  description:string = "";
  
  subscription1:Subscription;
  subscription2:Subscription;

  constructor(private service: ChosenTopicService) {
    this.subscription1 = this.service.title.subscribe(title => this.title = title);
    this.subscription2 = this.service.description.subscribe(description => this.description = description);
  }
  
  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
