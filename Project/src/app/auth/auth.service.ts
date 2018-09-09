import * as firebase from 'firebase';

export class AuthService {
    token: string;

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
                alert('User is logged in!');
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