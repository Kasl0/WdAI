import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.getPersistence().subscribe(value => {
      this.afAuth.setPersistence(String(value));
    });
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  getUserRole(userid: string) {
    return this.db.object(`roles/${userid}/role`).valueChanges();
  }

  addUserRole(userid: string, role: string) {
    this.db.list('roles').update(userid, {"role": role});
  }

  logout() {
    this.afAuth.signOut();
  }

  getPersistence() {
    return this.db.object(`settings/persistence/value`).valueChanges();
  }

  setPersistence(value: string) {
    this.db.list('settings').update("persistence", {"value": value});
    this.afAuth.setPersistence(value);
  }
}
