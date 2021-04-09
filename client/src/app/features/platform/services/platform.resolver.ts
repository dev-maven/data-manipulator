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
import {
  Platform,
  selectPlatforms,
  getPlatforms,
  getPlatform,
  User,
  getUsers,
  selectUsers,
} from 'src/app/core/store';

@Injectable()
export class PlatformResolver implements Resolve<boolean> {
  platforms$?: Observable<Platform[]>;
  users$?: Observable<User[]>;

  constructor(private store: Store<any>, router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = route.params.id;
    switch (route.routeConfig?.path) {
      case 'view':
        this.platforms$ = this.store.pipe(select(selectPlatforms));
        this.platforms$.pipe(take(2)).subscribe((platforms) => {
          if (!platforms) {
            this.store.dispatch(getPlatforms());
          }
        });
        break;
      case ':id/detail':
        this.store.dispatch(getPlatform({ id: +(id as string) }));
        this.users$ = this.store.pipe(select(selectUsers));
        this.users$.pipe(take(2)).subscribe((users) => {
          if (users.length < 1) {
            this.store.dispatch(getUsers());
          }
        });
        break;
    }
    return true;
  }
}
