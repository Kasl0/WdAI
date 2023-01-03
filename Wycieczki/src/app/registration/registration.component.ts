import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  modelForm : FormGroup;
  msg: string = "";

  constructor(private formBuilder : FormBuilder, private afAuth: AngularFireAuth, private router: Router, private service: UsersService) {

    this.modelForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  onSubmit(form: FormGroup) {
    this.createNewUser(form.value.username, form.value.email, form.value.password);
  }

  createNewUser(username: string, email: string, password: string) {

    this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {

      this.updateUsernameAndRole(username);
      this.router.navigate(['/home']);
    
    }).catch(error => {

      var errorCode = error.code;

      switch(errorCode) {
        case 'auth/email-already-in-use': {
          this.msg = "There already exists an account with the given email address";
          break;
        }
        case 'auth/invalid-email': {
          this.msg = "Email address is not valid";
          break;
        }
        case 'auth/weak-password': {
          this.msg = "The password is too weak";
          break;
        }
        default: {
          this.msg = "An error occurred during registration";
          break;
        }
      }
      
    });

  }

  updateUsernameAndRole(username: string) {
    this.afAuth.currentUser.then(user => {
      if (user) {
        this.service.updateUser(user.uid, "id", user.uid);
        this.service.updateUser(user.uid, "username", username);
        this.service.updateUser(user.uid, "role", "client");
        this.service.updateUser(user.uid, "isBanned", false);
      }
    });
  }
}
