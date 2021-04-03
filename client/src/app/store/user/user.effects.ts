import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import * as fromUserActions from './user.actions';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService,
              public snackBar: MatSnackBar) {}

  getUser$ = createEffect(() =>
this.actions$.pipe(
      ofType(fromUserActions.getUser),
      exhaustMap(action =>
        this.userService
          .getUser(action.id)
          .pipe(map(user => fromUserActions.getUserComplete({user})),
          catchError (error => of(fromUserActions.userError(error))
      )
    ))));

    getUsers$ = createEffect(() =>
    this.actions$.pipe(
          ofType(fromUserActions.getUsers),
          exhaustMap(action =>
            this.userService
              .getUsers()
              .pipe(map(users => fromUserActions.getUsersComplete({users})),
              catchError (error => of(fromUserActions.userError(error))
          )
        ))));

    userError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.userError),
      tap(_ => {
      this.snackBar.open('Error loading users, please try again', '×', { panelClass: ['warn'], verticalPosition: 'top', duration: 3000 });
      }))
    );
}
