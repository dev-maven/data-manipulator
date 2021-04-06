import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Platform, selectPlatform, selectAppLoading } from 'src/app/store';

@Component({
  selector: 'app-platform-detail-container',
  templateUrl: './platform-detail-container.component.html',
  styleUrls: ['./platform-detail-container.component.scss']
})
export class PlatformDetailContainerComponent implements OnInit {
platform$?: Observable<Platform>;
appLoading$?: Observable<boolean>;

  constructor(protected store: Store<any>) { }

  ngOnInit(): void {
    this.platform$ = this.store.pipe(select(selectPlatform));
    this.appLoading$ = this.store.pipe(select(selectAppLoading));

  }

}
