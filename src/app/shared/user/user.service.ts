import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '@core/service/error-handler.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  constructor(
    private ngFireAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private errroHandler: ErrorHandlerService
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // Login in with email/password
  signIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  // Register user with email/password
  registerUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }
  // Email verification when new user register
  sendVerificationMail() {
    return this.ngFireAuth.currentUser.then( user => {
      user.sendEmailVerification();
    });
    // .sendEmailVerification();
  }
  // Recover password
  passwordRecover(passwordResetEmail) {
    return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error);
    });
  }

  // Sign in with Gmail
  googleAuth() {
    // return this.authLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  authLogin(provider) {
    return this.ngFireAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
      this.setUserData(result.user);
    }).catch((error) => {
      this.errroHandler.genericError(error);
      // window.alert(error);
    });
  }
  // Store user in localStorage
  setUserData(user) {
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    localStorage.setItem('user', JSON.stringify(userData));
  }
  // Sign-out
  signOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}
