import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '../../../node_modules/@ngrx/store';
import 'rxjs/add/operator/switchMap';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    return this.store.select('auth')
      .pipe(
        take(1)
      )
      .pipe(
        switchMap((authState: fromAuth.State) => {
          const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
          return next.handle(copiedReq);
        }));
    )
  }
}
