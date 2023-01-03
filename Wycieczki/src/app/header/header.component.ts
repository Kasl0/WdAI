import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Bydgoszcz Travel Agency';
  user = {username: "", role: "guest"};

  constructor(private service: UsersService) {

    this.service.getAuthState().subscribe(user => {

      if (user) {
        this.service.getUser(user.uid).subscribe(userInfo => {
          this.user = userInfo;
        });
      } 
      else {
        this.user = {username: "", role: "guest"};
      }

    });

  }

  logout() {
    this.service.logout();
  }

}
