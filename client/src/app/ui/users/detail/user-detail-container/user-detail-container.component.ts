import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Platform, selectPlatformLoading, selectPlatforms, selectUser, selectUserLoading, User } from 'src/app/store';

@Component({
  selector: 'app-user-detail-container',
  templateUrl: './user-detail-container.component.html',
  styleUrls: ['./user-detail-container.component.scss'],
})
export class UserDetailContainerComponent implements OnInit {
user$?: Observable<User>;
platforms$?: Observable<Platform[]>;
userLoading$?: Observable<boolean>;
platformLoading$?: Observable<boolean>;


  constructor(protected store: Store<any>) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(selectUser));
    this.platforms$ = this.store.pipe(select(selectPlatforms));
    this.userLoading$ = this.store.pipe(select(selectUserLoading));
    this.platformLoading$ = this.store.pipe(select(selectPlatformLoading));


  }

}
