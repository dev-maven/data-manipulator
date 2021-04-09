import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  User,
  Platform,
  selectUser,
  selectPlatforms,
  selectAppLoading,
} from 'src/app/core/store';

@Component({
  selector: 'app-user-detail-container',
  templateUrl: './user-detail-container.component.html',
  styleUrls: ['./user-detail-container.component.scss'],
})
export class UserDetailContainerComponent implements OnInit {
  user$?: Observable<User>;
  platforms$?: Observable<Platform[]>;
  appLoading$?: Observable<boolean>;

  constructor(protected store: Store<any>) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(selectUser));
    this.platforms$ = this.store.pipe(select(selectPlatforms));
    this.appLoading$ = this.store.pipe(select(selectAppLoading));
  }
}
