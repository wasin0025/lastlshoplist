import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth) { }

  doFacebookLogin() {
    let provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        console.log(res, 'success');
        // store facebook user information somewhere
        // redirect to user page

      }, err => {
        console.log(err, 'failed');
        // stay on same page
      })
  }

  doFacebookLogout() {
    this.afAuth.auth.signOut();
  }
}

