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
import { getPlatforms, getUser, getUsers, selectUsers, User } from 'src/app/store';


@Injectable()
export class UsersResolver implements Resolve<boolean> {
  users$?: Observable<User[]>;

  constructor(private store: Store<any>, router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = route.params.id;
    switch (route.routeConfig?.path) {
      case '':
      this.users$ = this.store.pipe(select(selectUsers));
      this.users$.pipe(take(2)).subscribe(users => {
        if (users.length < 1) {
      this.store.dispatch(getUsers());
        }
      });

      break;
      case ':id/detail':
        this.store.dispatch(getUser({id: +(id as string)}));
        this.store.dispatch(getPlatforms());
        break;
    }
    return true;
  }
}
