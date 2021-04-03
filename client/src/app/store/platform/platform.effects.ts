import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromPlatformActions from './platform.actions';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { PlatformService } from './platform.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class PlatformEffects {
  constructor(
    private actions$: Actions,
    private platformService: PlatformService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  getPlatform$ = createEffect(() =>
  this.actions$.pipe(
        ofType(fromPlatformActions.getPlatform),
        exhaustMap(action =>
          this.platformService
            .getPlatform(action.id)
            .pipe(map(platform => fromPlatformActions.getPlatformComplete({platform})),
            catchError (error => of(fromPlatformActions.platformError(error))
        )
      ))));

      getPlatforms$ = createEffect(() =>
      this.actions$.pipe(
            ofType(fromPlatformActions.getPlatforms),
            exhaustMap(action =>
              this.platformService
                .getPlatforms()
                .pipe(map(platforms => fromPlatformActions.getPlatformsComplete({platforms})),
                catchError (error => of(fromPlatformActions.platformError(error))
            )
          ))));

      platformError$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fromPlatformActions.platformError),
        tap(_ => {
        this.snackBar
        .open('Error loading platforms, please try again', '×', { panelClass: ['warn'], verticalPosition: 'top', duration: 3000 });
        }))
      );
}
