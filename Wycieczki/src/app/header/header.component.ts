import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Bydgoszcz Travel Agency';
  user: any;
  role: string = "guest";

  constructor(private service: UsersService) {

    this.service.getAuthState().subscribe(user => {

      this.user = user;

      if (user) {
        this.service.getUserRole(this.user.uid).subscribe(role => {
          this.role = String(role);
        });
      } 
      else {
        this.role = "guest";
      }

    });

  }

  logout() {
    this.service.logout();
  }

}
