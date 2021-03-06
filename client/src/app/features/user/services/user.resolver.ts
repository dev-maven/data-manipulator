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
  getPlatforms,
  getUser,
  getUsers,
  Platform,
  selectPlatforms,
  selectUsers,
  User,
} from 'src/app/core/store';

@Injectable()
export class UserResolver implements Resolve<boolean> {
  users$?: Observable<User[]>;
  platforms$?: Observable<Platform[]>;

  constructor(private store: Store<any>, router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = route.params.id;
    switch (route.routeConfig?.path) {
      case 'view':
        this.users$ = this.store.pipe(select(selectUsers));
        this.users$.pipe(take(2)).subscribe((users) => {
          if (users.length < 1) {
            this.store.dispatch(getUsers());
          }
        });
        this.platforms$ = this.store.pipe(select(selectPlatforms));
        this.platforms$.pipe(take(2)).subscribe((platforms) => {
          if (!platforms) {
            this.store.dispatch(getPlatforms());
          }
        });
        break;
      case ':id/detail':
        this.store.dispatch(getUser({ id: +(id as string) }));
        this.platforms$ = this.store.pipe(select(selectPlatforms));
        this.platforms$.pipe(take(2)).subscribe((platforms) => {
          if (!platforms) {
            this.store.dispatch(getPlatforms());
          }
        });
        break;
    }
    return true;
  }
}
