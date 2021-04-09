import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import * as fromUserActions from './user.actions';

import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.getUser),
      exhaustMap((action) =>
        this.userService
          .getUser(action.id)
          .pipe(map((user) => fromUserActions.getUserComplete({ user })))
      )
    )
  );

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.getUsers),
      exhaustMap(() =>
        this.userService
          .getUsers()
          .pipe(map((users) => fromUserActions.getUsersComplete({ users })))
      )
    )
  );
}
