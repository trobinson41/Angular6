import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '../../../node_modules/@angular/core';

import * as AuthActions from './store/auth.actions';
import { map, switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .pipe(
            map((action: AuthActions.TrySignup) => {
                return action.payload;
            }),
            switchMap((authData: {username: string, password: string}) => {
                return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
            }),
            switchMap(() => {
                return fromPromise(firebase.auth().currentUser.getIdToken());
            }),
            switchMap()
        );

    constructor(private actions$: Actions) {

    }
}