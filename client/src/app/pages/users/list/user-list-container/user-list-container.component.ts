import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserLoading, selectUsers, User } from 'src/app/store';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css'],

})
export class UserListContainerComponent implements OnInit {
  users$?: Observable<User[]>;
  userLoading$?: Observable<boolean>;

  constructor(protected store: Store<any>) { }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectUsers));
    this.userLoading$ = this.store.pipe(select(selectUserLoading));
  }

}
