import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { getPlatforms, getPlatform, Platform, selectPlatforms } from 'src/app/store';


@Injectable()
export class PlatformsResolver implements Resolve<boolean> {
  platforms$?: Observable<any>;

  constructor(private store: Store<any>, router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = route.params.id;
    switch (route.routeConfig?.path) {
      case '':
        this.platforms$ = this.store.pipe(select(selectPlatforms));
        this.platforms$.pipe(take(2)).subscribe(platforms => {
          if (!platforms?.platforms) {
        this.store.dispatch(getPlatforms());
          }
        });
        break;
      case ':id/detail':
        this.store.dispatch(getPlatform({id: +(id as string)}));
        break;
    }
    return true;
  }
}
