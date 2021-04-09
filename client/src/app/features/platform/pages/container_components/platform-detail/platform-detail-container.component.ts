import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Platform,
  selectPlatform,
  selectAppLoading,
  selectPlatformUsers,
  User,
} from 'src/app/core/store';

@Component({
  selector: 'app-platform-detail-container',
  templateUrl: './platform-detail-container.component.html',
  styleUrls: ['./platform-detail-container.component.scss'],
})
export class PlatformDetailContainerComponent implements OnInit {
  platform$?: Observable<Platform>;
  appLoading$?: Observable<boolean>;
  platformUsers$?: Observable<any>;

  constructor(protected store: Store<any>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.platform$ = this.store.pipe(select(selectPlatform));
    if (id) {
      this.platformUsers$ = this.store.pipe(select(selectPlatformUsers(+id)));
    }
    this.appLoading$ = this.store.pipe(select(selectAppLoading));
  }
}
