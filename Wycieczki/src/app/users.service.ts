import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    this.getPersistence().subscribe(value => {
      this.afAuth.setPersistence(String(value));
    });
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  getUser(userid: string) {
    return this.db.object<any>(`users/${userid}`).valueChanges();
  }

  updateUser(userid: string, property: string, value: any) {
    this.db.list('users').update(userid, {[property]: value});
  }

  checkIfBanned(userid: string) {
    return this.db.object<boolean>(`users/${userid}/isBanned`).valueChanges();
  }

  getAllUsers() {
    return this.db.list<any>('users').valueChanges();
  }

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['/home']);
  }

  getPersistence() {
    return this.db.object(`settings/persistence/value`).valueChanges();
  }

  setPersistence(value: string) {
    this.db.list('settings').update("persistence", {"value": value});
    this.afAuth.setPersistence(value);
  }
}
