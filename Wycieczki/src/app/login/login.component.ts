import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  modelForm : FormGroup;
  msg: string = "";

  constructor(private formBuilder : FormBuilder, private afAuth: AngularFireAuth, private router: Router, private service: UsersService) {

    this.modelForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(form: FormGroup) {
    this.logUser(form.value.email, form.value.password);
  }

  logUser(email: string, password: string) {

    this.afAuth.signInWithEmailAndPassword(email, password).then(() => {

      const sub1 = this.service.getAuthState().subscribe(user => {

        if (user) {
          const sub2 = this.service.checkIfBanned(user.uid).subscribe(isBanned => {
            if (isBanned) {
              this.modelForm.reset();
              this.msg = 'The user corresponding to the given email has been banned';
              sub1.unsubscribe();
              sub2.unsubscribe();
              this.service.logout();
            }
            else {
              this.router.navigate(['/home']);
            }
          });
        }
  
      });

    }).catch(error => {

      var errorCode = error.code;

      switch(errorCode) {
        case 'auth/invalid-email': {
          this.msg = 'Email address is not valid';
          break;
        }
        case 'auth/user-disabled': {
          this.msg = 'The user corresponding to the given email has been disabled';
          break;
        }
        case 'auth/user-not-found': {
          this.msg = 'There is no user corresponding to the given email';
          break;
        }
        case 'auth/wrong-password': {
          this.msg = 'Password is invalid for the given email';
          break;
        }
        default: {
          this.msg = "An error occurred during login";
          break;
        }
      }

    });
  }

}
