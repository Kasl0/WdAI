import { Component } from '@angular/core';

@Component({
  selector: 'app-actor-component',
  templateUrl: './actor-component.component.html',
  styleUrls: ['./actor-component.component.css']
})
export class ActorComponentComponent {
  submitted:boolean = false;

  firstname: string = "";
  surname: string = "";
  title: string = "";

  constructor() {
  }
  
  onSubmit(event: any):void {
    this.firstname = event.target.firstname.value;
    this.surname = event.target.surname.value;
    this.title = event.target.title.value;
    this.submitted = true;
  }
}
