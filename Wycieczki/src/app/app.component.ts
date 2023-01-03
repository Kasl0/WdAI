import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
