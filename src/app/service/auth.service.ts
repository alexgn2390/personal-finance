import {Injectable} from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import {isPlatform} from "@ionic/angular";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {Auth} from "@firebase/auth";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: User | null = null

  constructor(public ngFireAuth: AngularFireAuth) {

  }

  async signInWithGoogle() {
    const credential = await this.ngFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    const user = credential.user
    console.log(user)

  }




  registerUser(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      this.ngFireAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          observer.next(user);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  // async registerUser(email: string, password: string): Observable<any> {
  //   if (email && password) {
  //     return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  //   } else {
  //     // Обработка ситуации, когда email или password отсутствуют
  //     throw new Error('Email and password are required.');
  //   }
  // }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }

  async signOut() {
    return await this.ngFireAuth.signOut()
  }

  async getProfile() {
    return await this.ngFireAuth.currentUser
  }
}
