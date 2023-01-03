import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  persistence: string = "";

  constructor(private service: UsersService) {
    this.service.getPersistence().subscribe(value => {
      this.persistence = String(value);
    });
  }

  setPersistence() {
    this.service.setPersistence(this.persistence);
  }
}
