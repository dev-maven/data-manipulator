import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromPlatformActions from './platform.actions';
import { exhaustMap, map } from 'rxjs/operators';

import { PlatformService } from './platform.service';

@Injectable()
export class PlatformEffects {
  constructor(
    private actions$: Actions,
    private platformService: PlatformService,
  ) {}

  getPlatform$ = createEffect(() =>
  this.actions$.pipe(
        ofType(fromPlatformActions.getPlatform),
        exhaustMap(action =>
          this.platformService
            .getPlatform(action.id)
            .pipe(map(platform => fromPlatformActions.getPlatformComplete({platform})),
      ))));

      getPlatforms$ = createEffect(() =>
      this.actions$.pipe(
            ofType(fromPlatformActions.getPlatforms),
            exhaustMap(() =>
              this.platformService
                .getPlatforms()
                .pipe(map(platformSummary => fromPlatformActions.getPlatformsComplete({platformSummary})),
          ))));

}
