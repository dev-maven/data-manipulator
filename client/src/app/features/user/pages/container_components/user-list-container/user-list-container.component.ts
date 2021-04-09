import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  User,
  Platform,
  selectUsers,
  selectPlatforms,
  selectAppLoading,
} from 'src/app/core/store';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css'],
})
export class UserListContainerComponent implements OnInit {
  users$?: Observable<User[]>;
  platforms$?: Observable<Platform[]>;
  appLoading$?: Observable<boolean>;

  constructor(protected store: Store<any>) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectUsers));
    this.platforms$ = this.store.pipe(select(selectPlatforms));
    this.appLoading$ = this.store.pipe(select(selectAppLoading));
  }
}
