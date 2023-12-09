import {inject} from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthActions } from './actions';
import { AuthService } from './services/auth.service';

export const login$ = createEffect((actions$ = inject(Actions), authService = inject(AuthService)) =>
  actions$.pipe(
    ofType(AuthActions.login),
    exhaustMap(action =>
      authService.login(action.credentials).pipe(
        map(() => AuthActions.loginSuccess()),
        catchError(() => of(AuthActions.loginFailure()))
      )
    )
  ), { functional: true }
);
