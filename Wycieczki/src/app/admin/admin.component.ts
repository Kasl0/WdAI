import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  persistence: string = "";

  users: any;

  constructor(private service: UsersService) {

    this.service.getPersistence().subscribe(value => {
      this.persistence = String(value);
    });

    this.service.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  setPersistence() {
    this.service.setPersistence(this.persistence);
  }

  updateUser(user: any) {
    this.service.updateUser(user.id, "username", user.username);
    this.service.updateUser(user.id, "role", user.role);
    this.service.updateUser(user.id, "isBanned", user.isBanned);
  }
}
