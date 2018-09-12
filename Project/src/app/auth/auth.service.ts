import * as firebase from 'firebase';
import { Router } from '../../../node_modules/@angular/router';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    alert('User has been registered!');
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        );
                }
            )
            .catch(
                (error) => alert(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    );
            }
        )
        .catch(
            (error) => alert(error)
        );
    }

    logout() {
        firebase.auth().signOut()
            .then(
                (response) => {
                    this.router.navigate(['/']);
                }
            );
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        //alert('this.token: ' + this.token != null);
        return this.token != null;
    }
}